'use strict';

/* Apprentice+ offline PDF generator. Evidence stays in the browser; no data is uploaded. */
async function generateEvidencePackPDF({course, assignment, profile, sections}) {
  if(course && course.nvqUnits) return generateNVQEvidencePackPDF({course, assignment, profile, sections});
  const W=1240,H=1754,M=88,TEAL='#073539',GREEN='#48E023',INK='#1A1A1A',MUTED='#5f6f70',PALE='#f2f7f5',WHITE='#ffffff';
  const pages=[];
  const percentageScore=d=>{const max=assignment.ksbs.length*5;if(!max)return 0;const achieved=assignment.ksbs.reduce((sum,[code])=>sum+(+d?.scores?.[code]||0),0);return Math.round((achieved/max)*100)};
  const buildSkillCriteria=summary=>{const text=String(summary||'').replace(/[.]+$/,'').trim(),lower=text.toLowerCase(),action=text.charAt(0).toLowerCase()+text.slice(1);let out=[`Selected the correct tools, equipment and materials needed to ${action}.`,`Used an appropriate sequence and working method to ${action}.`,'Completed the work accurately and in line with the drawing, specification or required tolerance.','Checked the finished work, corrected defects and left it to the required quality standard.'];if(/health|safety|ppe|rpe|lev|safe working/.test(lower))out=['Identified the main hazards and selected the correct PPE, RPE and control measures.','Followed the safe system of work and used tools, equipment and controls correctly.','Applied the relevant safety requirements consistently throughout the activity.','Maintained good housekeeping, protected others and left the work area safe.'];else if(/communicat|team|wellbeing|inclusion|equity|diversity/.test(lower))out=['Identified who needed information, support or involvement before starting the activity.','Used clear, appropriate communication and worked constructively with others.','Shared accurate information using suitable trade terminology and checked understanding.','Responded professionally, supported the team and reflected on how communication could improve.'];else if(/interpret|drawing|specification|digital design/.test(lower))out=['Selected the correct drawing, specification or digital information for the task.','Extracted the relevant dimensions, symbols, notes and construction requirements.','Transferred the information accurately into the practical work or setting-out process.','Cross-checked the completed work against the source information and corrected discrepancies.'];else if(/estimate|select.*material|resource|cutting list|size timber/.test(lower))out=['Identified the materials, quantities and specification required for the task.','Used an appropriate estimating, measuring or selection method.','Calculated or selected resources accurately with suitable allowances for waste and cutting.','Checked the result against the task requirements and justified the final selection.'];else if(/tool|equipment|maintain|sharpen/.test(lower))out=['Selected tools and equipment that were suitable, serviceable and safe for the task.','Set up and used each tool correctly, following manufacturer and workplace guidance.','Controlled the tools accurately to achieve the required dimensions and finish.','Checked, cleaned, maintained and stored the tools correctly after use.'];else if(/set out|measure|level|laser|mark out/.test(lower))out=['Selected suitable measuring, marking and setting-out equipment.','Established accurate datum points, lines, levels, centres or profiles in the correct sequence.','Checked all dimensions, angles, levels and tolerances throughout the work.','Verified the completed setting out against the drawing or specification before work continued.'];else if(/construct|build|install|fit|form|produce|apply|mix|repair|cut|splice|scribe/.test(lower))out=['Selected and prepared the correct tools, equipment, materials and work area for this skill.',`Used the correct practical sequence and trade technique to ${action}.`,'Maintained the required measurements, alignment, tolerances and component positioning.','Checked workmanship, finish and compliance with the specification, correcting defects where needed.'];else if(/environment|sustainab|recycl|waste/.test(lower))out=['Identified the environmental controls and resource requirements before starting.','Used materials efficiently and followed the correct reuse, recycling and disposal procedures.','Segregated resources correctly and prevented contamination or avoidable waste.','Left the area compliant, tidy and with environmental impacts minimised.'];return out};
  const skillCriteria=()=>assignment.ksbs.filter(([c])=>String(c).toUpperCase().startsWith('S')).map(([code,summary])=>({code,summary,criteria:buildSkillCriteria(summary)}));
  const practicalPercentageScore=d=>{const skills=skillCriteria(),keys=skills.flatMap(s=>s.criteria.map((_,i)=>`${s.code}::${i+1}`));const hasNew=keys.some(k=>d?.scores?.[k]);if(!hasNew){const achieved=skills.reduce((sum,s)=>sum+(+d?.scores?.[s.code]||0),0);return skills.length?Math.round((achieved/(skills.length*5))*100):0}const achieved=keys.reduce((sum,k)=>sum+(+d?.scores?.[k]||0),0);return keys.length?Math.round((achieved/(keys.length*5))*100):0};
  const gradeForPercentage=p=>p>=90?'Distinction':p>=80?'Merit':p>=70?'Pass':'Fail';
  const resultText=d=>{const pct=percentageScore(d);return `${pct}% — ${gradeForPercentage(pct)}`};
  const practicalResultText=d=>{const pct=practicalPercentageScore(d);return `${pct}% — ${gradeForPercentage(pct)}`};
  const clean=v=>String(v??'').replace(/[\u2010-\u2015]/g,'-').replace(/[\u2018\u2019]/g,"'").replace(/[\u201c\u201d]/g,'"');
  const newPage=(title,version,status='Submitted - Locked')=>{
    const c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');
    x.fillStyle=WHITE;x.fillRect(0,0,W,H);x.fillStyle=GREEN;x.fillRect(0,0,W,16);
    x.fillStyle=TEAL;x.fillRect(M,54,W-2*M,150);x.fillStyle=WHITE;x.font='700 24px Arial';x.fillText('APPRENTICE+ EVIDENCE PORTFOLIO',M+30,92);
    x.font='700 38px Arial';fitText(x,clean(title),M+30,148,W-2*M-60,38);
    x.font='600 21px Arial';x.fillText(`${String(version).startsWith('Attempt')?version:`Version ${version}`}  |  ${status}`,M+30,184);
    pages.push({canvas:c,ctx:x});return {c,x,y:242};
  };
  function fitText(x,text,px,py,max,fontSize){let s=fontSize;x.font=`700 ${s}px Arial`;while(x.measureText(text).width>max&&s>16){s--;x.font=`700 ${s}px Arial`}x.fillText(text,px,py)}
  function line(x,y,w= W-2*M){x.fillStyle=GREEN;x.fillRect(M,y,w,4)}
  function label(x,t,px,py){x.fillStyle=MUTED;x.font='700 17px Arial';x.fillText(clean(t).toUpperCase(),px,py)}
  function value(x,t,px,py,size=22,bold=false){x.fillStyle=INK;x.font=`${bold?700:400} ${size}px Arial`;x.fillText(clean(t||'-'),px,py)}
  function wrap(x,text,maxWidth,font='400 22px Arial'){x.font=font;const paras=clean(text||'-').split(/\n/),out=[];for(const p of paras){const words=p.split(/\s+/);let l='';for(const w of words){const test=l?`${l} ${w}`:w;if(x.measureText(test).width>maxWidth&&l){out.push(l);l=w}else l=test}out.push(l||' ')}return out}
  function sectionHeading(x,t,y){x.fillStyle=TEAL;x.font='700 25px Arial';x.fillText(clean(t),M,y);line(x,y+14);return y+52}
  function meta(p,version,date,type){const {x}=p;let y=p.y;x.fillStyle=PALE;x.fillRect(M,y,W-2*M,132);label(x,'Learner',M+24,y+31);value(x,profile.fullName,M+24,y+62,21,true);label(x,'Date submitted',M+560,y+31);value(x,date||'-',M+560,y+62,21,true);label(x,'Evidence type',M+24,y+96);value(x,type,M+190,y+96,19,true);label(x,'Status',M+560,y+96);value(x,'Submitted - Locked',M+650,y+96,19,true);p.y=y+168;return p}
  function signature(x,data,y,title='Signature') {label(x,title,M,y);x.strokeStyle='#b8c4c1';x.lineWidth=2;x.strokeRect(M,y+18,420,122);if(data){try{x.drawImage(data._img||data,M+12,y+28,396,98)}catch{}}return y+162}
  async function loadImage(src){if(!src)return null;return new Promise(r=>{const i=new Image();i.onload=()=>r(i);i.onerror=()=>r(null);i.src=src})}
  function footerAll(){const total=pages.length;pages.forEach((p,i)=>{const x=p.ctx;x.fillStyle=TEAL;x.fillRect(0,H-62,W,62);x.fillStyle=WHITE;x.font='600 17px Arial';x.fillText('Apprentice+ | Your Course, Your Way',M,H-25);x.textAlign='right';x.fillText(`Page ${i+1} of ${total}`,W-M,H-25);x.textAlign='left'})}

  function drawCompactParagraph(x,text,px,py,maxWidth,maxHeight){
    const sizes=[20,19,18,17,16,15,14];
    for(const size of sizes){
      const lineH=Math.round(size*1.42),lines=wrap(x,text,maxWidth,`400 ${size}px Arial`);
      if(lines.length*lineH<=maxHeight){
        x.font=`400 ${size}px Arial`;x.fillStyle=INK;
        lines.forEach((l,i)=>x.fillText(l,px,py+i*lineH));
        return py+lines.length*lineH;
      }
    }
    const size=14,lineH=20,lines=wrap(x,text,maxWidth,`400 ${size}px Arial`),maxLines=Math.max(1,Math.floor(maxHeight/lineH));
    const shown=lines.slice(0,maxLines);
    if(lines.length>maxLines&&shown.length){shown[shown.length-1]=shown[shown.length-1].replace(/[.,;:]?$/,'...')}
    x.font=`400 ${size}px Arial`;x.fillStyle=INK;shown.forEach((l,i)=>x.fillText(l,px,py+i*lineH));
    return py+shown.length*lineH;
  }
  function compactScoreRows(p,d,startY,veryCompact=false){
    const x=p.x;let y=startY,headerH=veryCompact?28:40,headerStep=veryCompact?32:46,rowH=veryCompact?25:38,rowStep=veryCompact?28:42,headerFont=veryCompact?13:17,summaryFont=veryCompact?12:16,criterionFont=veryCompact?10:14,scoreFont=veryCompact?12:16,gap=veryCompact?3:8;
    skillCriteria().forEach(skill=>{
      x.fillStyle=TEAL;x.fillRect(M,y-headerH+8,W-2*M,headerH);x.fillStyle=WHITE;x.font=`700 ${headerFont}px Arial`;x.fillText(skill.code,M+12,y);x.font=`700 ${summaryFont}px Arial`;fitText(x,clean(skill.summary),M+78,y,W-2*M-92,summaryFont);y+=headerStep;
      skill.criteria.forEach((criterion,i)=>{x.fillStyle=PALE;x.fillRect(M,y-rowH+8,W-2*M,rowH);x.fillStyle=INK;x.font=`400 ${criterionFont}px Arial`;fitText(x,clean(`${i+1}. ${criterion}`),M+12,y,W-2*M-112,criterionFont);x.textAlign='right';x.font=`700 ${scoreFont}px Arial`;x.fillText(`${d.scores?.[`${skill.code}::${i+1}`]||'-'} / 5`,W-M-12,y);x.textAlign='left';y+=rowStep});y+=gap;
    });
    return y;
  }

  function addTextPages(title,version,date,type,heading,text,extraDraw){let p=meta(newPage(title,version),version,date,type);let x=p.x,y=sectionHeading(x,heading,p.y);if(extraDraw){y=extraDraw(p,y)||y}const lines=wrap(x,text,W-2*M,'400 22px Arial');x.font='400 22px Arial';x.fillStyle=INK;for(const l of lines){if(y>H-145){p=meta(newPage(`${title} - Continued`,version),version,date,type);x=p.x;y=sectionHeading(x,`${heading} (continued)`,p.y);x.font='400 22px Arial';x.fillStyle=INK}x.fillText(l,M,y);y+=32}return {p,x,y}}

  async function addOutcomePhotoPages(d,title,version,date,type,selectedOnly=false){
    const photos=d?.outcomePhotos||{};
    const outcomes=assignment.ksbs.filter(([code])=>photos[code]?.data&&(!selectedOnly||+d.scores?.[code]===5));
    for(let i=0;i<outcomes.length;i+=4){
      const batch=outcomes.slice(i,i+4),p=meta(newPage(`${title} - ${course.nvqUnits?'Learning Outcome':'KSB'} Photos`,version),version,date,type);const x=p.x;let y=sectionHeading(x,course.nvqUnits?'Learning Outcome Photographs':'KSB Photographs',p.y);const gapX=22,gapY=32,cellW=(W-2*M-gapX)/2,cellH=cellW*9/16;
      for(let j=0;j<batch.length;j++){const [code,text]=batch[j],col=j%2,row=Math.floor(j/2),px=M+col*(cellW+gapX),py=y+row*(cellH+gapY+54),img=await loadImage(photos[code].data);x.fillStyle=PALE;x.fillRect(px,py,cellW,cellH);if(img){const scale=Math.max(cellW/img.width,cellH/img.height),iw=img.width*scale,ih=img.height*scale;x.save();x.beginPath();x.rect(px,py,cellW,cellH);x.clip();x.drawImage(img,px+(cellW-iw)/2,py+(cellH-ih)/2,iw,ih);x.restore()}x.fillStyle=TEAL;x.font='700 17px Arial';x.fillText(clean(code),px,py+cellH+24);x.fillStyle=INK;x.font='400 13px Arial';const caption=wrap(x,text,cellW,'400 13px Arial').slice(0,2);caption.forEach((line,k)=>x.fillText(line,px,py+cellH+43+k*16));}
    }
  }

  // Cover page
  {
    const p=newPage(`Assignment ${assignment.n}: ${assignment.title}`,'Evidence Pack','Complete portfolio');const x=p.x;
    x.fillStyle=PALE;x.fillRect(M,p.y,W-2*M,370);let y=p.y+52;
    [['Course',course.name],['Standard',course.standard],['Course version',course.version],['Level',course.level],['Learner',profile.fullName],['Employer',profile.employer],['Mentor / assessor',profile.mentor]].forEach(([a,b])=>{label(x,a,M+28,y);value(x,b,M+330,y,23,true);y+=43});
    y=sectionHeading(x,'KSB Mapping',p.y+430);assignment.ksbs.forEach(([code,summary])=>{x.fillStyle=TEAL;x.fillRect(M,y-23,82,34);x.fillStyle=WHITE;x.font='700 19px Arial';x.fillText(code,M+19,y);x.fillStyle=INK;x.font='400 21px Arial';x.fillText(clean(summary),M+104,y);y+=48});
    const latestPractical=(sections.practical||[]).at(-1),latestWitness=(sections.witness||[]).at(-1),latestSupport=(sections.supporting||[]).at(-1);y+=12;x.fillStyle=PALE;x.fillRect(M,y,W-2*M,112);label(x,'Latest practical result',M+22,y+34);value(x,latestPractical?practicalResultText(latestPractical):'Not submitted',M+300,y+34,20,true);label(x,'Latest witness testimony',M+22,y+78);value(x,latestWitness?'Submitted':(latestSupport&&latestSupport.tab!=='files'?resultText(latestSupport):(latestSupport?'Supporting evidence submitted':'Not submitted')),M+390,y+78,20,true);y+=142;
    const sig=await loadImage(profile.signature);signature(x,sig,y+18,'Learner profile signature');
  }

  const scoreRows=(p,d,startY)=>{const x=p.x;let y=startY;assignment.ksbs.forEach(([code,summary])=>{if(y>H-230){p=meta(newPage(`${p.title||'Assessment'} - Scores Continued`,d._version),d._version,d.date,'Assessment');y=sectionHeading(p.x,'KSB Scores (continued)',p.y)}x=p.x;x.fillStyle=PALE;x.fillRect(M,y-29,W-2*M,45);x.fillStyle=TEAL;x.font='700 19px Arial';x.fillText(code,M+16,y);x.fillStyle=INK;x.font='400 18px Arial';x.fillText(clean(summary),M+105,y);x.textAlign='right';x.font='700 20px Arial';x.fillText(`${d.scores?.[code]||'-'} / 5`,W-M-18,y);x.textAlign='left';y+=52});return {p,y}};

  // Practical - every saved version, exactly one A4 page per version
  for(let i=0;i<(sections.practical||[]).length;i++){
    const d=sections.practical[i],v=i+1;d._version=v;
    const p=meta(newPage('Practical Assessment',`Attempt ${v}`),`Attempt ${v}`,d.date,'Practical Assessment');const x=p.x;let y=sectionHeading(x,'Assessment Details',p.y);
    label(x,'Tutor / assessor',M,y);value(x,d.tutor,M+240,y,18,true);y+=36;
    label(x,'Activity assessed',M,y);y=drawCompactParagraph(x,d.activity,M+240,y,W-2*M-245,44)+8;
    y=sectionHeading(x,'Finished Product Evidence',y);
    const practicalImgs=[];for(const ph of d.photos||[])practicalImgs.push(await loadImage(ph.data));
    const gap=14,cellW=(W-2*M-gap*2)/3,cellH=cellW*9/16;
    for(let j=0;j<3;j++){const px=M+j*(cellW+gap),img=practicalImgs[j];x.fillStyle=PALE;x.fillRect(px,y,cellW,cellH);if(img){const scale=Math.max(cellW/img.width,cellH/img.height),iw=img.width*scale,ih=img.height*scale;x.save();x.beginPath();x.rect(px,y,cellW,cellH);x.clip();x.drawImage(img,px+(cellW-iw)/2,y+(cellH-ih)/2,iw,ih);x.restore()}x.fillStyle=TEAL;x.font='700 12px Arial';x.fillText(`Photo ${j+1}`,px+8,y+cellH-8)}
    y+=cellH+34;y=sectionHeading(x,'Skill-specific Practical Marks',y);y=compactScoreRows(p,d,y,true);
    y+=2;label(x,'Overall result',M,y);value(x,practicalResultText(d),M+220,y,18,true);y+=34;
    const sigTop=H-225;
    const sig=await loadImage(d.signature);signature(x,sig,sigTop,'Tutor / assessor signature');
    {const fp=meta(newPage('Practical Assessment Feedback',`Attempt ${v}`),`Attempt ${v}`,d.date,'Practical Assessment');const fx=fp.x;let fy=sectionHeading(fx,'Assessment Summary',fp.y);fy=drawCompactParagraph(fx,d.feedbackSummary||d.feedback||'No assessment summary recorded.',M,fy,W-2*M,260)+22;fy=sectionHeading(fx,'Areas for Improvement',fy);fy=drawCompactParagraph(fx,d.feedbackDevelopment||'No areas for improvement recorded.',M,fy,W-2*M,260)+22;fy=sectionHeading(fx,'Additional Assessment Comments',fy);drawCompactParagraph(fx,d.feedback||'No additional comments recorded.',M,fy,W-2*M,Math.max(120,H-fy-120));}
    if(course.nvqUnits)await addOutcomePhotoPages(d,'Assessor Observation',`Attempt ${v}`,d.date,'Assessor Observation',true);
  }

  // Photos - exactly six landscape photos on one page per version
  for(let i=0;i<(sections.photos||[]).length;i++){
    const d=sections.photos[i],v=i+1,imgs=[];for(const ph of (d.photos||[]).slice(0,6))imgs.push(await loadImage(ph.data));
    const p=meta(newPage('Photographic Evidence',v),v,d.date,'Photographic Evidence');const x=p.x;let y=sectionHeading(x,`6 Landscape Photos`,p.y);const gapX=22,gapY=18,cellW=(W-2*M-gapX)/2,cellH=cellW*9/16;
    for(let j=0;j<6;j++){const col=j%2,row=Math.floor(j/2),px=M+col*(cellW+gapX),py=y+row*(cellH+gapY),img=imgs[j];x.fillStyle=PALE;x.fillRect(px,py,cellW,cellH);if(img){const scale=Math.max(cellW/img.width,cellH/img.height),iw=img.width*scale,ih=img.height*scale;x.save();x.beginPath();x.rect(px,py,cellW,cellH);x.clip();x.drawImage(img,px+(cellW-iw)/2,py+(cellH-ih)/2,iw,ih);x.restore()}x.fillStyle=TEAL;x.font='700 13px Arial';x.fillText(`Photo ${j+1}`,px+8,py+cellH-8)}
    y+=3*(cellH+gapY)+8;const sig=await loadImage(d.signature);signature(x,sig,Math.min(y,H-225),'Learner signature');
  }

  // Statements
  for(let i=0;i<(sections.statement||[]).length;i++){
    const d=sections.statement[i],v=i+1;const r=addTextPages('Learner Statement',v,d.date,'Learner Statement','Statement',d.text);let {p,x,y}=r;const sig=await loadImage(d.signature);if(y>H-300){p=meta(newPage('Learner Statement - Signature',v),v,d.date,'Learner Statement');signature(p.x,sig,p.y,'Learner signature')}else signature(x,sig,y+35,'Learner signature');await addOutcomePhotoPages(d,'Learner Statement',v,d.date,'Learner Statement');
  }

  // Witness testimony - separate NVQ evidence section
  for(let i=0;i<(sections.witness||[]).length;i++){
    const d=sections.witness[i],v=i+1;
    const p=meta(newPage('Witness Testimony',`Attempt ${v}`),`Attempt ${v}`,d.date,d.type||'Witness Testimony');const x=p.x;let y=sectionHeading(x,'Witness Details',p.y);
    [['Evidence source',d.type||'Witness testimony'],['Name',d.personName],['Role',d.role],['Organisation',d.organisation]].forEach(([a,b])=>{label(x,a,M,y);value(x,b,M+250,y,18,true);y+=36});
    y=sectionHeading(x,'Activity Witnessed',y+4);y=drawCompactParagraph(x,d.activity,M,y,W-2*M,60)+10;
    y=sectionHeading(x,'Learning Outcomes Witnessed',y);y=compactScoreRows(p,d,y);
    y+=12;y=sectionHeading(x,'Witness Testimony',y);const sigTop=H-300;
    drawCompactParagraph(x,d.feedback,M,y,W-2*M,Math.max(80,sigTop-y-20));
    const sig=await loadImage(d.signature);signature(x,sig,sigTop,`${d.type||'Witness'} signature`);
    {const fp=meta(newPage('Witness Testimony Feedback',`Attempt ${v}`),`Attempt ${v}`,d.date,d.type||'Witness Testimony');const fx=fp.x;let fy=sectionHeading(fx,'Assessment Summary',fp.y);fy=drawCompactParagraph(fx,d.feedbackSummary||d.feedback||'No assessment summary recorded.',M,fy,W-2*M,290)+24;fy=sectionHeading(fx,'Areas for Improvement',fy);fy=drawCompactParagraph(fx,d.feedbackDevelopment||'No areas for improvement recorded.',M,fy,W-2*M,290)+24;fy=sectionHeading(fx,'Additional Witness / Employer Comments',fy);drawCompactParagraph(fx,d.feedback||'No additional comments recorded.',M,fy,W-2*M,Math.max(120,H-fy-120));}
    if(course.nvqUnits)await addOutcomePhotoPages(d,d.type||'Witness Testimony',`Attempt ${v}`,d.date,d.type||'Witness Testimony',true);
  }

  // Professional discussion - recordings are listed in the PDF and included in the ZIP package
  for(let i=0;i<(sections.discussion||[]).length;i++){
    const d=sections.discussion[i],v=i+1,recordings=d.recordings||{},notes=d.notes||{};
    const lines=(assignment.ksbs||[]).map(([code,summary])=>{
      const rec=recordings[code],note=String(notes[code]||'').trim();
      return `${code} — ${summary}\nRecording: ${rec?`Included (${rec.duration||'duration unavailable'}, recorded ${rec.date||d.date||''})`:'Not recorded'}${note?`\nNotes: ${note}`:''}`;
    }).join('\n\n');
    const intro=`Discussion lead: ${d.assessor||''}\nActivity / subject: ${d.activity||''}\n\n${lines}`;
    let r=addTextPages('Professional Discussion',`Attempt ${v}`,d.date,'Professional Discussion','Learning Outcome Recordings',intro),{p,x,y}=r;
    const sig=await loadImage(d.signature);if(y>H-300){p=meta(newPage('Professional Discussion - Signature',v),v,d.date,'Professional Discussion');signature(p.x,sig,p.y,'Assessor / discussion lead signature')}else signature(x,sig,y+35,'Assessor / discussion lead signature');
  }

  // Video evidence index - list every attached video title together on one page.
  {
    const videoTitles=[];
    for(const f of sections.walkthrough||[])videoTitles.push(ksbMediaFileName(f));
    for(const d of sections.supporting||[])for(const f of d.files||[])if((f.type||'').startsWith('video/'))videoTitles.push(f.evidenceName||f.name||'Untitled video');
    if(videoTitles.length){
      const p=meta(newPage('Video Evidence Files','Attached media'),'Attached media','Video Evidence Index');const x=p.x;let y=sectionHeading(x,'Attached video files',p.y);
      x.fillStyle=MUTED;x.font='400 17px Arial';x.fillText('The playable files below are included in the downloaded evidence package.',M,y);y+=42;
      const available=H-y-145,lineH=Math.max(24,Math.min(38,Math.floor(available/Math.max(1,videoTitles.length))));
      const fontSize=Math.max(13,Math.min(19,lineH-7));
      videoTitles.forEach((name,i)=>{x.fillStyle=i%2?WHITE:PALE;x.fillRect(M,y-24,W-2*M,lineH);x.fillStyle=TEAL;x.font=`700 ${fontSize}px Arial`;x.fillText(`${i+1}.`,M+14,y);x.fillStyle=INK;x.font=`600 ${fontSize}px Arial`;fitText(x,clean(name),M+58,y,W-2*M-78,fontSize);y+=lineH});
    }
  }

  // Supporting evidence
  for(let i=0;i<(sections.supporting||[]).length;i++){
    const d=sections.supporting[i],v=i+1;
    if(d.tab==='files'){
      const files=d.files||[],images=files.filter(f=>(f.type||'').startsWith('image/')),videos=files.filter(f=>(f.type||'').startsWith('video/')),other=files.filter(f=>!(f.type||'').startsWith('image/')&&!(f.type||'').startsWith('video/'));
      for(let n=0;n<images.length;n++){
        const f=images[n],img=await loadImage(f.data),p=meta(newPage('Supporting Evidence - Image',v),v,d.date,'Supporting Image');const x=p.x;let y=sectionHeading(x,`Image ${n+1} of ${images.length}`,p.y);
        label(x,'File name',M,y);value(x,f.evidenceName||f.name,M+180,y,19,true);y+=44;
        x.fillStyle=PALE;x.fillRect(M,y,W-2*M,H-y-160);
        if(img){const maxW=W-2*M-28,maxH=H-y-190,scale=Math.min(maxW/img.width,maxH/img.height);const iw=img.width*scale,ih=img.height*scale;x.drawImage(img,M+(maxW-iw)/2+14,y+(maxH-ih)/2+14,iw,ih)}
      }
      // Video files are listed together on the single Video Evidence Files page above.
      if(other.length){const text=other.map((f,n)=>`${n+1}. ${f.evidenceName||f.name}\n   Type: ${f.type||'Unknown'} | Size: ${f.size?Math.round(f.size/1024)+' KB':'Unknown'}`).join('\n\n');addTextPages('Supporting Evidence - Documents',v,d.date,'Supporting Documents','Uploaded Files',text)}
      if(!files.length)addTextPages('Supporting Evidence - Documents',v,d.date,'Supporting Evidence','Uploaded Files','No supporting files listed');
    }else{
      // Witness / employer statement - exactly one A4 page per version
      const p=meta(newPage('Supporting Evidence - Statement',`Attempt ${v}`),`Attempt ${v}`,d.date,d.type||'Witness / Employer Statement');const x=p.x;let y=sectionHeading(x,'Contributor Details',p.y);
      [['Evidence source',d.type],['Name',d.personName],['Role',d.role],['Organisation',d.organisation]].forEach(([a,b])=>{label(x,a,M,y);value(x,b,M+250,y,18,true);y+=36});
      y=sectionHeading(x,'Activity Details',y+4);y=drawCompactParagraph(x,d.activity,M,y,W-2*M,52)+10;
      y=sectionHeading(x,'KSB Scores',y);y=compactScoreRows(p,d,y);
      y+=4;label(x,'Overall result',M,y);value(x,resultText(d),M+240,y,21,true);const sigTop=H-320;
      const sig=await loadImage(d.signature);signature(x,sig,sigTop,`${d.type||'Contributor'} signature`);
      {const fp=meta(newPage('Witness / Employer Feedback',`Attempt ${v}`),`Attempt ${v}`,d.date,d.type||'Witness / Employer Statement');const fx=fp.x;let fy=sectionHeading(fx,'Assessment Summary',fp.y);fy=drawCompactParagraph(fx,d.feedbackSummary||d.feedback||'No assessment summary recorded.',M,fy,W-2*M,290)+24;fy=sectionHeading(fx,'Areas for Improvement',fy);fy=drawCompactParagraph(fx,d.feedbackDevelopment||'No areas for improvement recorded.',M,fy,W-2*M,290)+24;fy=sectionHeading(fx,'Additional Comments',fy);drawCompactParagraph(fx,d.feedback||'No additional comments recorded.',M,fy,W-2*M,Math.max(120,H-fy-120));}
      if(course.nvqUnits)await addOutcomePhotoPages(d,d.type||'Witness Testimony',`Attempt ${v}`,d.date,d.type||'Witness Testimony',true);
    }
  }

  footerAll();
  const jpegPages=pages.map(p=>dataUrlBytes(p.canvas.toDataURL('image/jpeg',0.90)));
  const pdf=makeImagePDF(jpegPages,W,H);
  const safe=clean(profile.fullName).replace(/[^a-z0-9]+/gi,'-').replace(/^-|-$/g,'');
  const pdfName=`${safe||'Learner'}-Assignment-${assignment.n}-Evidence-Pack.pdf`;
  const videos=[];for(const version of sections.supporting||[]){const codes=selectedKsbCodesForMedia(assignment,version);for(const f of version.files||[])if((f.type||'').startsWith('video/')&&f.data)videos.push({...f,ksbCodes:codes})}
  const walkthroughVideos=(sections.walkthrough||[]).filter(f=>f?.data);
  const audios=[];for(let vi=0;vi<(sections.discussion||[]).length;vi++){const version=sections.discussion[vi];for(const [code,rec] of Object.entries(version.recordings||{}))if(rec?.data)audios.push({code,rec,attempt:vi+1})}
  if(videos.length||walkthroughVideos.length||audios.length){
    const entries=[{name:pdfName,data:pdf}],used=new Set();
    videos.forEach((f,i)=>{const original=String(f.name||''),dot=original.lastIndexOf('.'),ext=dot>0?original.slice(dot):'.mp4',prefix=(f.ksbCodes||[]).join('-'),base=safeZipName(`${prefix?prefix+' - ':''}${(f.evidenceName||`Supporting video ${i+1}`).trim()}`);let name=uniqueMediaName(base,ext,used);entries.push({name:`Supporting Videos/${name}`,data:dataUrlBytes(f.data)})});
    walkthroughVideos.forEach(f=>{const ext=mediaExtension(f.type,f.name,'video'),base=safeZipName(`${f.code} - ${f.summary||'Video evidence'}`),name=uniqueMediaName(base,ext,used);entries.push({name:`KSB Video Evidence/${name}`,data:dataUrlBytes(f.data)})});
    audios.forEach(({code,rec,attempt},i)=>{const ext=mediaExtension(rec.type,'','audio'),base=safeZipName(`${code} - Professional Discussion - Attempt ${attempt}`),name=uniqueMediaName(base,ext,used);entries.push({name:`KSB Voice Notes/${name}`,data:dataUrlBytes(rec.data)})});
    await downloadBlob(makeZipBlob(entries),'application/zip',`${safe||'Learner'}-Assignment-${assignment.n}-Complete-Evidence-Package.zip`);
  }else await downloadBlob(pdf,'application/pdf',pdfName);
}

function selectedKsbCodesForMedia(assignment,version){
  const available=new Set((assignment?.ksbs||[]).map(([code])=>String(code)));
  return Object.entries(version?.scores||{}).filter(([code,score])=>available.has(String(code))&&Number(score)>0).map(([code])=>String(code));
}
function mediaExtension(type,name,kind='video'){
  const original=String(name||''),dot=original.lastIndexOf('.');if(dot>0&&dot>original.length-8)return original.slice(dot);
  const mime=String(type||'').toLowerCase();if(mime.includes('mp4'))return kind==='audio'?'.m4a':'.mp4';if(mime.includes('ogg'))return '.ogg';if(mime.includes('mpeg'))return '.mp3';if(mime.includes('wav'))return '.wav';return '.webm';
}
function uniqueMediaName(base,ext,used){let name=`${base}${ext}`,n=2;while(used.has(name.toLowerCase()))name=`${base} (${n++})${ext}`;used.add(name.toLowerCase());return name}
function ksbMediaFileName(f){return `${safeZipName(`${f.code||'KSB'} - ${f.summary||'Video evidence'}`)}${mediaExtension(f.type,f.name,'video')}`}

/* NVQ-only portfolio PDF. This branch is intentionally isolated so the original
   Bricklaying, Site Carpentry, Architectural Joiner and Property Maintenance
   PDF layouts and grading logic remain unchanged. */
async function generateNVQEvidencePackPDF({course, assignment, profile, sections}) {
  const W=1240,H=1754,M=88,TEAL='#073539',GREEN='#48E023',YELLOW='#F7D75C',GREY='#EEF1F1',INK='#1A1A1A',MUTED='#5f6f70',PALE='#f2f7f5',WHITE='#ffffff';
  const pages=[];
  const clean=v=>String(v??'').replace(/[\u2010-\u2015]/g,'-').replace(/[\u2018\u2019]/g,"'").replace(/[\u201c\u201d]/g,'"');
  const selectedScores=d=>(assignment.ksbs||[]).filter(([code])=>+d?.scores?.[code]===5);
  const selectedStatement=d=>(assignment.ksbs||[]).filter(([code])=>!!d?.outcomePhotos?.[code]?.data);
  const selectedDiscussion=d=>(assignment.ksbs||[]).filter(([code])=>!!d?.recordings?.[code]?.data);
  const evidenceMap={};(assignment.ksbs||[]).forEach(([code])=>evidenceMap[code]=[]);
  const add=(code,type,attempt)=>{if(evidenceMap[code])evidenceMap[code].push({type,attempt})};
  (sections.practical||[]).forEach((d,i)=>selectedScores(d).forEach(([c])=>add(c,'Assessor observation',i+1)));
  (sections.statement||[]).forEach((d,i)=>selectedStatement(d).forEach(([c])=>add(c,'Learner statement',i+1)));
  (sections.discussion||[]).forEach((d,i)=>selectedDiscussion(d).forEach(([c])=>add(c,'Professional discussion',i+1)));
  (sections.witness||[]).forEach((d,i)=>selectedScores(d).forEach(([c])=>add(c,'Witness testimony',i+1)));

  const newPage=(title,subtitle='NVQ Evidence Portfolio')=>{const c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');x.fillStyle=WHITE;x.fillRect(0,0,W,H);x.fillStyle=GREEN;x.fillRect(0,0,W,16);x.fillStyle=TEAL;x.fillRect(M,54,W-2*M,150);x.fillStyle=WHITE;x.font='700 24px Arial';x.fillText('APPRENTICE+ NVQ EVIDENCE PORTFOLIO',M+30,92);x.font='700 38px Arial';fitText(x,clean(title),M+30,148,W-2*M-60,38);x.font='600 20px Arial';x.fillText(clean(subtitle),M+30,184);pages.push({canvas:c,ctx:x});return {c,x,y:242}};
  function fitText(x,text,px,py,max,fontSize){let s=fontSize;x.font=`700 ${s}px Arial`;while(x.measureText(text).width>max&&s>14){s--;x.font=`700 ${s}px Arial`}x.fillText(text,px,py)}
  function label(x,t,px,py){x.fillStyle=MUTED;x.font='700 17px Arial';x.fillText(clean(t).toUpperCase(),px,py)}
  function value(x,t,px,py,size=21,bold=false){x.fillStyle=INK;x.font=`${bold?700:400} ${size}px Arial`;x.fillText(clean(t||'-'),px,py)}
  function wrap(x,text,maxWidth,font='400 21px Arial'){x.font=font;const out=[];for(const p of clean(text||'-').split(/\n/)){const words=p.split(/\s+/);let line='';for(const w of words){const test=line?`${line} ${w}`:w;if(x.measureText(test).width>maxWidth&&line){out.push(line);line=w}else line=test}out.push(line||' ')}return out}
  function sectionHeading(x,t,y){x.fillStyle=TEAL;x.font='700 25px Arial';x.fillText(clean(t),M,y);x.fillStyle=GREEN;x.fillRect(M,y+14,W-2*M,4);return y+52}
  function meta(p,date,type,attempt){const {x}=p;let y=p.y;x.fillStyle=PALE;x.fillRect(M,y,W-2*M,132);label(x,'Learner',M+24,y+31);value(x,profile.fullName,M+24,y+62,21,true);label(x,'Date submitted',M+560,y+31);value(x,date||'-',M+560,y+62,21,true);label(x,'Evidence type',M+24,y+96);value(x,type,M+190,y+96,19,true);label(x,'Attempt',M+560,y+96);value(x,String(attempt),M+650,y+96,19,true);p.y=y+168;return p}
  async function loadImage(src){if(!src)return null;return new Promise(r=>{const i=new Image();i.onload=()=>r(i);i.onerror=()=>r(null);i.src=src})}
  function signature(x,img,y,title){label(x,title,M,y);x.strokeStyle='#b8c4c1';x.lineWidth=2;x.strokeRect(M,y+18,420,122);if(img)try{x.drawImage(img,M+12,y+28,396,98)}catch{}return y+162}
  function paragraph(x,text,y,maxHeight=360){const sizes=[21,20,19,18,17,16,15];for(const size of sizes){const lh=Math.round(size*1.43),lines=wrap(x,text,W-2*M,`400 ${size}px Arial`);if(lines.length*lh<=maxHeight){x.font=`400 ${size}px Arial`;x.fillStyle=INK;lines.forEach((l,i)=>x.fillText(l,M,y+i*lh));return y+lines.length*lh}}const lines=wrap(x,text,W-2*M,'400 15px Arial'),max=Math.floor(maxHeight/22);x.font='400 15px Arial';x.fillStyle=INK;lines.slice(0,max).forEach((l,i)=>x.fillText(l,M,y+i*22));return y+Math.min(lines.length,max)*22}
  function drawOutcomeRows(x,outcomes,y,showCriteria=true){for(const [code,text] of outcomes){if(y>H-160)break;x.fillStyle=PALE;x.fillRect(M,y-28,W-2*M,64);x.fillStyle=TEAL;x.font='700 19px Arial';x.fillText(code,M+16,y);x.fillStyle=INK;x.font='600 17px Arial';fitText(x,clean(text),M+100,y,W-2*M-125,17);if(showCriteria&&assignment.criteria?.[code]){x.fillStyle=MUTED;x.font='400 13px Arial';fitText(x,`Criteria: ${clean(assignment.criteria[code])}`,M+100,y+23,W-2*M-125,13)}y+=76}return y}
  async function photoPages(d,title,attempt,outcomes){const photos=d?.outcomePhotos||{},available=outcomes.filter(([code])=>photos[code]?.data);for(let i=0;i<available.length;i+=4){const batch=available.slice(i,i+4),p=meta(newPage(`${title} - ${course.nvqUnits?'Learning Outcome':'KSB'} Photos`,`${title} | Attempt ${attempt}`),d.date,title,attempt),x=p.x;let y=sectionHeading(x,course.nvqUnits?'Learning Outcome Photographs':'KSB Photographs',p.y),gapX=22,gapY=32,cellW=(W-2*M-gapX)/2,cellH=cellW*9/16;for(let j=0;j<batch.length;j++){const [code,text]=batch[j],col=j%2,row=Math.floor(j/2),px=M+col*(cellW+gapX),py=y+row*(cellH+gapY+54),img=await loadImage(photos[code].data);x.fillStyle=PALE;x.fillRect(px,py,cellW,cellH);if(img){const scale=Math.max(cellW/img.width,cellH/img.height),iw=img.width*scale,ih=img.height*scale;x.save();x.beginPath();x.rect(px,py,cellW,cellH);x.clip();x.drawImage(img,px+(cellW-iw)/2,py+(cellH-ih)/2,iw,ih);x.restore()}x.fillStyle=TEAL;x.font='700 17px Arial';x.fillText(code,px,py+cellH+24);x.fillStyle=INK;x.font='400 13px Arial';wrap(x,text,cellW,'400 13px Arial').slice(0,2).forEach((line,k)=>x.fillText(line,px,py+cellH+43+k*16))}}}

  {const p=newPage(`Evidence Pack ${assignment.n}: ${assignment.title}`,`Unit ${assignment.unit}${assignment.optional?' | Optional unit':''}`),x=p.x;let y=p.y;x.fillStyle=PALE;x.fillRect(M,y,W-2*M,300);y+=46;[['Qualification',course.name],['Unit',assignment.unit],['Learner',profile.fullName],['Employer',profile.employer],['Assessor',profile.mentor]].forEach(([a,b])=>{label(x,a,M+28,y);value(x,b,M+300,y,21,true);y+=46});y=sectionHeading(x,'Learning Outcome Coverage',p.y+350);for(const [code,text] of assignment.ksbs){const count=Math.min(2,evidenceMap[code].length),colour=count>=2?GREEN:count===1?YELLOW:GREY;x.fillStyle=colour;x.fillRect(M,y-28,W-2*M,66);x.fillStyle=TEAL;x.font='700 20px Arial';x.fillText(`${code}  ${count}/2`,M+18,y);x.fillStyle=INK;x.font='600 16px Arial';fitText(x,clean(text),M+150,y,W-2*M-175,16);y+=78}const met=Object.values(evidenceMap).reduce((n,a)=>n+Math.min(2,a.length),0),total=(assignment.ksbs||[]).length*2;x.fillStyle=PALE;x.fillRect(M,y,W-2*M,78);label(x,'Overall evidence coverage',M+24,y+30);value(x,`${met} of ${total} requirements met`,M+330,y+31,22,true)}

  for(let i=0;i<(sections.practical||[]).length;i++){const d=sections.practical[i],attempt=i+1,outcomes=selectedScores(d),p=meta(newPage('Assessor Observation',`Attempt ${attempt}`),d.date,'Assessor Observation',attempt),x=p.x;let y=sectionHeading(x,'Observation Details',p.y);label(x,'Assessor',M,y);value(x,d.tutor,M+230,y,19,true);y+=40;label(x,'Activity observed',M,y);value(x,d.activity,M+230,y,18);y+=54;y=sectionHeading(x,'Learning Outcomes Observed',y);y=drawOutcomeRows(x,outcomes,y);y=sectionHeading(x,'Assessor Observation',y+8);y=paragraph(x,d.feedback||'-',y,Math.max(110,H-y-330));const sig=await loadImage(d.signature);signature(x,sig,Math.min(H-245,y+28),'Assessor signature');{const fp=meta(newPage('Assessor Observation Feedback',`Attempt ${attempt}`),d.date,'Assessor Observation',attempt),fx=fp.x;let fy=sectionHeading(fx,'Assessment Summary',fp.y);fy=paragraph(fx,d.feedbackSummary||d.feedback||'No assessment summary recorded.',fy,300)+24;fy=sectionHeading(fx,'Areas for Improvement',fy);paragraph(fx,d.feedbackDevelopment||'No areas for improvement recorded.',fy,300)}await photoPages(d,'Assessor Observation',attempt,outcomes)}
  for(let i=0;i<(sections.statement||[]).length;i++){const d=sections.statement[i],attempt=i+1,outcomes=selectedStatement(d),p=meta(newPage('Learner Statement',`Attempt ${attempt}`),d.date,'Learner Statement',attempt),x=p.x;let y=sectionHeading(x,'Learning Outcomes Evidenced',p.y);y=drawOutcomeRows(x,outcomes,y);y=sectionHeading(x,'Learner Statement',y+8);y=paragraph(x,d.text,y,Math.max(130,H-y-330));const sig=await loadImage(d.signature);signature(x,sig,Math.min(H-245,y+28),'Learner signature');await photoPages(d,'Learner Statement',attempt,outcomes)}
  for(let i=0;i<(sections.discussion||[]).length;i++){const d=sections.discussion[i],attempt=i+1,outcomes=selectedDiscussion(d),p=meta(newPage('Professional Discussion',`Attempt ${attempt}`),d.date,'Professional Discussion',attempt),x=p.x;let y=sectionHeading(x,'Discussion Details',p.y);label(x,'Discussion lead',M,y);value(x,d.assessor,M+230,y,19,true);y+=40;label(x,'Activity / subject',M,y);value(x,d.activity,M+230,y,18);y+=54;y=sectionHeading(x,'Recorded Learning Outcomes',y);for(const [code,text] of outcomes){if(y>H-350){break}x.fillStyle=PALE;x.fillRect(M,y-28,W-2*M,112);x.fillStyle=TEAL;x.font='700 19px Arial';x.fillText(code,M+16,y);x.fillStyle=INK;x.font='600 16px Arial';fitText(x,clean(text),M+100,y,W-2*M-125,16);const rec=d.recordings?.[code],note=String(d.notes?.[code]||'').trim();x.fillStyle=MUTED;x.font='400 14px Arial';x.fillText(`Recording included in evidence package${rec?.duration?` | ${rec.duration}`:''}`,M+100,y+28);if(note){x.fillStyle=INK;x.font='400 14px Arial';fitText(x,`Notes: ${clean(note)}`,M+100,y+54,W-2*M-125,14)}y+=126}const sig=await loadImage(d.signature);signature(x,sig,Math.min(H-245,y+20),'Assessor / discussion lead signature')}
  for(let i=0;i<(sections.witness||[]).length;i++){const d=sections.witness[i],attempt=i+1,outcomes=selectedScores(d),p=meta(newPage('Witness Testimony',`Attempt ${attempt}`),d.date,'Witness Testimony',attempt),x=p.x;let y=sectionHeading(x,'Witness Details',p.y);[['Name',d.personName],['Role',d.role],['Organisation',d.organisation],['Activity witnessed',d.activity]].forEach(([a,b])=>{label(x,a,M,y);value(x,b,M+230,y,18,true);y+=40});y=sectionHeading(x,'Learning Outcomes Witnessed',y+10);y=drawOutcomeRows(x,outcomes,y);y=sectionHeading(x,'Witness Testimony',y+8);y=paragraph(x,d.feedback,y,Math.max(100,H-y-330));const sig=await loadImage(d.signature);signature(x,sig,Math.min(H-245,y+28),'Witness signature');{const fp=meta(newPage('Witness Testimony Feedback',`Attempt ${attempt}`),d.date,'Witness Testimony',attempt),fx=fp.x;let fy=sectionHeading(fx,'Assessment Summary',fp.y);fy=paragraph(fx,d.feedbackSummary||d.feedback||'No assessment summary recorded.',fy,300)+24;fy=sectionHeading(fx,'Areas for Improvement',fy);paragraph(fx,d.feedbackDevelopment||'No areas for improvement recorded.',fy,300)}await photoPages(d,'Witness Testimony',attempt,outcomes)}

  const total=pages.length;pages.forEach((p,i)=>{const x=p.ctx;x.fillStyle=TEAL;x.fillRect(0,H-62,W,62);x.fillStyle=WHITE;x.font='600 17px Arial';x.fillText('Apprentice+ | NVQ Evidence Portfolio',M,H-25);x.textAlign='right';x.fillText(`Page ${i+1} of ${total}`,W-M,H-25);x.textAlign='left'});
  const jpegPages=pages.map(p=>dataUrlBytes(p.canvas.toDataURL('image/jpeg',0.90))),pdf=makeImagePDF(jpegPages,W,H),safe=clean(profile.fullName).replace(/[^a-z0-9]+/gi,'-').replace(/^-|-$/g,''),unit=String(assignment.unit||assignment.n).replace(/[^a-z0-9-]+/gi,'-'),pdfName=`${safe||'Learner'}-NVQ-Unit-${unit}-Evidence-Pack.pdf`;
  const audios=[];for(let vi=0;vi<(sections.discussion||[]).length;vi++){const version=sections.discussion[vi];for(const [code,rec] of Object.entries(version.recordings||{}))if(rec?.data)audios.push({code,rec,attempt:vi+1})}
  if(audios.length){const entries=[{name:pdfName,data:pdf}],used=new Set();audios.forEach(({code,rec,attempt},i)=>{const mime=String(rec.type||'audio/webm'),ext=mime.includes('mp4')?'.m4a':mime.includes('ogg')?'.ogg':'.webm',base=safeZipName(`Attempt ${attempt} - ${code} Professional Discussion`);let name=`${base}${ext}`;if(used.has(name.toLowerCase()))name=`${base}-${i+1}${ext}`;used.add(name.toLowerCase());entries.push({name:`Professional Discussion Recordings/${name}`,data:dataUrlBytes(rec.data)})});await downloadBlob(makeZipBlob(entries),'application/zip',`${safe||'Learner'}-NVQ-Unit-${unit}-Evidence-Package.zip`)}else await downloadBlob(pdf,'application/pdf',pdfName);
}

async function downloadBlob(bytes,type,name){
  const blob=bytes instanceof Blob?bytes:new Blob([bytes],{type});
  if(!blob.size)throw new Error('Generated download was empty');
  const url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;a.download=name;a.rel='noopener';a.style.display='none';
  document.body.appendChild(a);
  // Give mobile browsers one frame to register the object URL and anchor.
  await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
  a.click();
  setTimeout(()=>{a.remove();URL.revokeObjectURL(url)},30000);
  return {name,size:blob.size};
}
function safeZipName(name){return String(name||'file').replace(/[\\/:*?"<>|]/g,'-').replace(/^\.+/,'').slice(0,140)||'file'}

function dataUrlBytes(url){
  const value=String(url||''),comma=value.indexOf(',');
  if(comma<0)throw new Error('Evidence media is not stored as a downloadable data URL');
  const payload=value.slice(comma+1),isBase64=/;base64/i.test(value.slice(0,comma));
  if(!isBase64)return new TextEncoder().encode(decodeURIComponent(payload));
  const b=atob(payload),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u
}
function makeZipBlob(entries){
  const enc=new TextEncoder(),parts=[],centrals=[];let offset=0;
  const u16=n=>new Uint8Array([n&255,(n>>>8)&255]),u32=n=>new Uint8Array([n&255,(n>>>8)&255,(n>>>16)&255,(n>>>24)&255]);
  for(const e of entries){
    const name=enc.encode(e.name),data=e.data instanceof Uint8Array?e.data:new Uint8Array(e.data),crc=crc32(data);
    const header=[u32(0x04034b50),u16(20),u16(0),u16(0),u16(0),u16(0),u32(crc),u32(data.length),u32(data.length),u16(name.length),u16(0),name];
    parts.push(...header,data);
    const localLength=header.reduce((n,p)=>n+p.length,0)+data.length;
    centrals.push(u32(0x02014b50),u16(20),u16(20),u16(0),u16(0),u16(0),u16(0),u32(crc),u32(data.length),u32(data.length),u16(name.length),u16(0),u16(0),u16(0),u16(0),u32(0),u32(offset),name);
    offset+=localLength;
  }
  const centralSize=centrals.reduce((n,p)=>n+p.length,0);
  parts.push(...centrals,u32(0x06054b50),u16(0),u16(0),u16(entries.length),u16(entries.length),u32(centralSize),u32(offset),u16(0));
  // Blob keeps the media buffers as separate parts and avoids allocating several full copies of a large package.
  return new Blob(parts,{type:'application/zip'});
}
function crc32(data){let c=0xffffffff;for(const b of data){c^=b;for(let k=0;k<8;k++)c=(c>>>1)^((c&1)?0xedb88320:0)}return(c^0xffffffff)>>>0}

function makeImagePDF(images,width,height){
  const enc=new TextEncoder(),parts=[],offsets=[0];let pos=0;const add=v=>{const u=typeof v==='string'?enc.encode(v):v;parts.push(u);pos+=u.length};
  add('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n');const count=2+images.length*3;
  function obj(n,head,stream){offsets[n]=pos;add(`${n} 0 obj\n${head}`);if(stream){add(`\nstream\n`);add(stream);add(`\nendstream`)}add(`\nendobj\n`)}
  obj(1,'<< /Type /Catalog /Pages 2 0 R >>');
  const pageIds=images.map((_,i)=>3+i*3+2);obj(2,`<< /Type /Pages /Count ${images.length} /Kids [${pageIds.map(n=>`${n} 0 R`).join(' ')}] >>`);
  images.forEach((img,i)=>{const imageId=3+i*3,contentId=imageId+1,pageId=imageId+2;obj(imageId,`<< /Type /XObject /Subtype /Image /Width ${width} /Height ${height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${img.length} >>`,img);const stream=enc.encode('q\n595.28 0 0 841.89 0 0 cm\n/Im0 Do\nQ');obj(contentId,`<< /Length ${stream.length} >>`,stream);obj(pageId,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Im0 ${imageId} 0 R >> >> /Contents ${contentId} 0 R >>`)});
  const xref=pos;add(`xref\n0 ${count+1}\n0000000000 65535 f \n`);for(let i=1;i<=count;i++)add(`${String(offsets[i]).padStart(10,'0')} 00000 n \n`);add(`trailer\n<< /Size ${count+1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`);const total=parts.reduce((s,p)=>s+p.length,0),out=new Uint8Array(total);let at=0;parts.forEach(p=>{out.set(p,at);at+=p.length});return out;
}
