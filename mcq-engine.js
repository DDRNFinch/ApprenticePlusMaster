'use strict';

(function(global){
 const VALID_TYPES=new Set(['Knowledge','Behaviour']);
 const VALID_DIFFICULTIES=new Set(['Easy','Standard','EPA','Expert']);
 const VALID_STYLES=new Set(['workplace-scenario','hazard-identification','best-action','most-appropriate-action','sequence','fault-identification','control-selection','information-interpretation','problem-solving','behavioural-judgement']);
 const VALID_STATUSES=new Set(['draft','validated','approved','rejected']);

 function normalise(value){
  return String(value||'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
 }
 function words(value){return normalise(value).split(' ').filter(Boolean)}
 function similarity(a,b){
  const aa=new Set(words(a).filter(x=>x.length>2)),bb=new Set(words(b).filter(x=>x.length>2));
  if(!aa.size||!bb.size)return 0;
  let common=0;aa.forEach(x=>{if(bb.has(x))common++});
  return common/Math.max(aa.size,bb.size);
 }
 function optionLengthSpread(options){
  const counts=options.map(x=>words(x).length);
  return Math.max(...counts)-Math.min(...counts);
 }
 function hasAdjacentRepeatedWords(value){
  const tokens=words(value);
  return tokens.some((token,index)=>index>0&&token===tokens[index-1]);
 }
 function validateQuestion(q,context={}){
  const issues=[];
  if(!q||typeof q!=='object')return {valid:false,issues:['Question must be an object.']};
  if(!q.id)issues.push('Missing question id.');
  if(!q.courseId)issues.push('Missing course id.');
  if(!Number.isInteger(q.assignment)||q.assignment<1)issues.push('Invalid assignment number.');
  if(!/^[KB]/i.test(String(q.ksb||'')))issues.push('Only Knowledge and Behaviour KSBs are permitted.');
  if(!VALID_TYPES.has(q.type))issues.push('Invalid question type.');
  if(!q.concept||normalise(q.concept).length<3)issues.push('Missing assessable concept.');
  if(!VALID_DIFFICULTIES.has(q.difficulty))issues.push('Invalid difficulty.');
  if(!VALID_STYLES.has(q.style))issues.push('Invalid question style.');
  if(!VALID_STATUSES.has(q.status))issues.push('Invalid approval status.');
  if(!q.question||words(q.question).length<4)issues.push('Question stem is too short.');
  if(String(q.question||'').includes(String(q.ksb||'')+' '))issues.push('Question stem exposes the KSB code.');
  if(!Array.isArray(q.options)||q.options.length!==4)issues.push('Exactly four options are required.');
  else{
   const unique=new Set(q.options.map(normalise));
   if(unique.size!==4)issues.push('All four options must be unique.');
   if(q.options.some(x=>words(x).length<1))issues.push('Options must not be empty.');
   if(optionLengthSpread(q.options)>5)issues.push('Option lengths are visibly unbalanced.');
   if(q.options.some(x=>/\b(all of the above|none of the above)\b/i.test(x)))issues.push('All/none options are not permitted.');
   if(q.options.some(hasAdjacentRepeatedWords))issues.push('Repeated padding detected in an option.');
  }
  if(!Number.isInteger(q.correct)||q.correct<0||q.correct>3)issues.push('Correct answer index must be 0–3.');
  if(!q.explanation||words(q.explanation).length<5)issues.push('A concise explanation is required.');
  if(context.allowedKsbs&&!context.allowedKsbs.has(q.ksb))issues.push('Question KSB is outside the assignment scope.');
  return {valid:issues.length===0,issues};
 }
 function validateBank(questions,context={}){
  const issues=[];
  const ids=new Set(),stems=[];
  (questions||[]).forEach((q,index)=>{
   const result=validateQuestion(q,context);
   result.issues.forEach(issue=>issues.push(`Question ${index+1}: ${issue}`));
   if(ids.has(q.id))issues.push(`Question ${index+1}: duplicate id.`);else ids.add(q.id);
   const stem=normalise(q.question);
   if(stems.some(existing=>similarity(existing,stem)>=0.96))issues.push(`Question ${index+1}: duplicate or near-duplicate stem.`);
   stems.push(stem);
  });
  return {valid:issues.length===0,issues,count:(questions||[]).length};
 }
 function shuffle(items){
  const a=[...items];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}
  return a;
 }
 function distribute(items,key){
  const groups=new Map();items.forEach(item=>{const k=key(item);if(!groups.has(k))groups.set(k,[]);groups.get(k).push(item)});
  const output=[];let active=[...groups.values()].map(shuffle);
  while(active.length){const next=[];active.forEach(group=>{if(group.length)output.push(group.shift());if(group.length)next.push(group)});active=next}
  return output;
 }
 function randomiseOptions(question){
  const indexed=question.options.map((text,index)=>({text,isCorrect:index===question.correct}));
  const shuffled=shuffle(indexed);
  return {...question,options:shuffled.map(x=>x.text),correct:shuffled.findIndex(x=>x.isCorrect)};
 }
 function assembleAssessment({questions,count=15,allowedKsbs=[],recentIds=[]}){
  const allowed=new Set(allowedKsbs),recent=new Set(recentIds);
  const approved=(questions||[]).filter(q=>q.status==='approved'&&(!allowed.size||allowed.has(q.ksb)));
  const validation=validateBank(approved,{allowedKsbs:allowed.size?allowed:null});
  if(!validation.valid)throw new Error(`Approved question bank failed validation:\n${validation.issues.join('\n')}`);
  if(approved.length<count)throw new Error(`This assignment needs at least ${count} approved questions; ${approved.length} are available.`);
  const fresh=approved.filter(q=>!recent.has(q.id));
  const source=fresh.length>=count?fresh:approved;
  const byKsb=distribute(source,q=>q.ksb);
  const selected=[],concepts=new Set(),ids=new Set();
  for(const q of byKsb){
   if(selected.length>=count)break;
   const conceptKey=`${q.ksb}|${normalise(q.concept)}`;
   if(ids.has(q.id)||concepts.has(conceptKey))continue;
   selected.push(q);ids.add(q.id);concepts.add(conceptKey);
  }
  if(selected.length<count){
   for(const q of shuffle(source)){
    if(selected.length>=count)break;
    if(ids.has(q.id))continue;
    selected.push(q);ids.add(q.id);
   }
  }
  if(selected.length<count)throw new Error(`Unable to assemble ${count} unique approved questions.`);
  return shuffle(selected).map(randomiseOptions);
 }

 global.MCQEngine=Object.freeze({
  version:'2.0.0-phase3b-approved-brick-bank',
  validateQuestion,
  validateBank,
  assembleAssessment,
  normalise,
  similarity,
  constants:Object.freeze({
   types:[...VALID_TYPES],difficulties:[...VALID_DIFFICULTIES],styles:[...VALID_STYLES],statuses:[...VALID_STATUSES]
  })
 });
})(window);
