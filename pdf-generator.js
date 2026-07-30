// v1.37.1 layout tweak
'use strict';

/* Apprentice+ offline PDF generator. Evidence stays in the browser; no data is uploaded. */
async function generateEvidencePackPDF({course, assignment, profile, sections, branding, returnPackage=false}) {
  if(course && course.nvqUnits) return generateNVQEvidencePackPDF({course, assignment, profile, sections, branding, returnPackage});
  const W=1240,H=1754,M=88,TEAL='#06382c',GREEN='#79d22f',LIGHT_GREEN='#DDF4E6',SOFT_GREEN='#B9E8CA',INK='#172426',MUTED='#627274',PALE='#F5F8F7',WHITE='#ffffff';
  const pages=[];
  const percentageScore=d=>{const max=assignment.ksbs.length*5;if(!max)return 0;const achieved=assignment.ksbs.reduce((sum,[code])=>sum+(+d?.scores?.[code]||0),0);return Math.round((achieved/max)*100)};
  const buildSkillCriteria=summary=>{const text=String(summary||'').replace(/[.]+$/,'').trim(),lower=text.toLowerCase(),action=text.charAt(0).toLowerCase()+text.slice(1);let out=[`Selected the correct tools, equipment and materials needed to ${action}.`,`Used an appropriate sequence and working method to ${action}.`,'Completed the work accurately and in line with the drawing, specification or required tolerance.','Checked the finished work, corrected defects and left it to the required quality standard.'];if(/health|safety|ppe|rpe|lev|safe working/.test(lower))out=['Identified the main hazards and selected the correct PPE, RPE and control measures.','Followed the safe system of work and used tools, equipment and controls correctly.','Applied the relevant safety requirements consistently throughout the activity.','Maintained good housekeeping, protected others and left the work area safe.'];else if(/communicat|team|wellbeing|inclusion|equity|diversity/.test(lower))out=['Identified who needed information, support or involvement before starting the activity.','Used clear, appropriate communication and worked constructively with others.','Shared accurate information using suitable trade terminology and checked understanding.','Responded professionally, supported the team and reflected on how communication could improve.'];else if(/interpret|drawing|specification|digital design/.test(lower))out=['Selected the correct drawing, specification or digital information for the task.','Extracted the relevant dimensions, symbols, notes and construction requirements.','Transferred the information accurately into the practical work or setting-out process.','Cross-checked the completed work against the source information and corrected discrepancies.'];else if(/estimate|select.*material|resource|cutting list|size timber/.test(lower))out=['Identified the materials, quantities and specification required for the task.','Used an appropriate estimating, measuring or selection method.','Calculated or selected resources accurately with suitable allowances for waste and cutting.','Checked the result against the task requirements and justified the final selection.'];else if(/tool|equipment|maintain|sharpen/.test(lower))out=['Selected tools and equipment that were suitable, serviceable and safe for the task.','Set up and used each tool correctly, following manufacturer and workplace guidance.','Controlled the tools accurately to achieve the required dimensions and finish.','Checked, cleaned, maintained and stored the tools correctly after use.'];else if(/set out|measure|level|laser|mark out/.test(lower))out=['Selected suitable measuring, marking and setting-out equipment.','Established accurate datum points, lines, levels, centres or profiles in the correct sequence.','Checked all dimensions, angles, levels and tolerances throughout the work.','Verified the completed setting out against the drawing or specification before work continued.'];else if(/construct|build|install|fit|form|produce|apply|mix|repair|cut|splice|scribe/.test(lower))out=['Selected and prepared the correct tools, equipment, materials and work area for this skill.',`Used the correct practical sequence and trade technique to ${action}.`,'Maintained the required measurements, alignment, tolerances and component positioning.','Checked workmanship, finish and compliance with the specification, correcting defects where needed.'];else if(/environment|sustainab|recycl|waste/.test(lower))out=['Identified the environmental controls and resource requirements before starting.','Used materials efficiently and followed the correct reuse, recycling and disposal procedures.','Segregated resources correctly and prevented contamination or avoidable waste.','Left the area compliant, tidy and with environmental impacts minimised.'];return out};
  const skillCriteria=()=>assignment.ksbs.filter(([c])=>String(c).toUpperCase().startsWith('S')).map(([code,summary])=>({code,summary,criteria:buildSkillCriteria(summary)}));
  const practicalScoringSummary=d=>{const skills=skillCriteria(),scores=d?.scores||{},keys=skills.flatMap(s=>s.criteria.map((_,i)=>`${s.code}::${i+1}`)),graded=keys.map(k=>+scores[k]||0).filter(v=>v>=1&&v<=5);if(graded.length){const achieved=graded.reduce((sum,v)=>sum+v,0);return {graded:graded.length,percentage:Math.round((achieved/(graded.length*5))*100)}}const legacy=skills.map(s=>+scores[s.code]||0).filter(v=>v>=1&&v<=5);if(legacy.length){const achieved=legacy.reduce((sum,v)=>sum+v,0);return {graded:legacy.length,percentage:Math.round((achieved/(legacy.length*5))*100)}}return {graded:0,percentage:null}};
  const practicalPercentageScore=d=>practicalScoringSummary(d).percentage;
  const gradeForPercentage=p=>p>=90?'Distinction':p>=80?'Merit':p>=70?'Pass':'Fail';
  const resultText=d=>{const pct=percentageScore(d);return `${pct}% — ${gradeForPercentage(pct)}`};
  const practicalResultText=d=>{const pct=practicalPercentageScore(d);return pct===null?'Not yet graded':`${pct}% — ${gradeForPercentage(pct)}`};
  const clean=v=>String(v??'').replace(/[\u2010-\u2015]/g,'-').replace(/[\u2018\u2019]/g,"'").replace(/[\u201c\u201d]/g,'"');
  const PDF_COLOURS={cover:TEAL,practical:'#2E7D32',statement:'#1565C0',witness:'#B7791F',video:'#6A1B9A',discussion:'#00897B',photo:'#C65D00',knowledge:'#3949AB',documents:'#546E7A',specification:'#A82A2A'};
  const pdfSectionFor=title=>{const t=String(title||'').toLowerCase();if(/practical assessment|assessor observation/.test(t))return ['Practical Assessment',PDF_COLOURS.practical];if(/learner statement/.test(t))return ['Learner Statement',PDF_COLOURS.statement];if(/witness|employer|supporting evidence - statement/.test(t))return ['Witness Testimony',PDF_COLOURS.witness];if(/video|walkthrough/.test(t))return ['Video Walkthrough',PDF_COLOURS.video];if(/professional discussion/.test(t))return ['Professional Discussion',PDF_COLOURS.discussion];if(/photo|image/.test(t))return ['Photo Evidence',PDF_COLOURS.photo];if(/knowledge|theory|question/.test(t))return ['Knowledge Questions',PDF_COLOURS.knowledge];if(/document|certificate|supporting evidence/.test(t))return ['Documents',PDF_COLOURS.documents];return ['Evidence Portfolio',PDF_COLOURS.cover]};
  const pdfStampFor=title=>{const t=String(title||'').toLowerCase();if(/ksb evidence matrix|ksb mapping/.test(t))return ['KSB','Evidence Matrix',TEAL];if(/portfolio contents|evidence index/.test(t))return ['CONT','Contents',TEAL];if(/practical assessment|assessor observation/.test(t))return ['PA','Practical Assessment',PDF_COLOURS.practical];if(/learner statement/.test(t))return ['LS','Learner Statement',PDF_COLOURS.statement];if(/witness|employer|supporting evidence - statement/.test(t))return ['WT','Witness Testimony',PDF_COLOURS.witness];if(/video|walkthrough/.test(t))return ['VW','Video Walkthrough',PDF_COLOURS.video];if(/professional discussion/.test(t))return ['PD','Professional Discussion',PDF_COLOURS.discussion];if(/photo|image/.test(t))return ['PE','Photo Evidence',PDF_COLOURS.photo];if(/knowledge|theory|question/.test(t))return ['KQ','Knowledge Questions',PDF_COLOURS.knowledge];if(/specification/.test(t))return ['SPEC','Specification',PDF_COLOURS.specification];if(/document|certificate|supporting evidence/.test(t))return ['SE','Supporting Evidence',PDF_COLOURS.documents];if(/assignment/.test(t))return ['AS','Assignment',TEAL];return ['PORT','Portfolio',TEAL]};
  const drawPdfStamp=(x,title,cx=W-112,cy=108,r=78)=>{const [code,labelText,colour]=pdfStampFor(title);x.save();x.shadowColor='rgba(10,35,37,.28)';x.shadowBlur=18;x.shadowOffsetY=8;const grad=x.createRadialGradient(cx-r*.35,cy-r*.42,r*.10,cx,cy,r);grad.addColorStop(0,'#ffffff');grad.addColorStop(.14,colour);grad.addColorStop(1,colour);x.fillStyle=grad;x.beginPath();x.arc(cx,cy,r,0,Math.PI*2);x.fill();x.shadowColor='transparent';x.strokeStyle='rgba(255,255,255,.88)';x.lineWidth=5;x.beginPath();x.arc(cx,cy,r-8,0,Math.PI*2);x.stroke();x.strokeStyle='rgba(7,53,57,.22)';x.lineWidth=2;x.beginPath();x.arc(cx,cy,r-16,0,Math.PI*2);x.stroke();x.fillStyle=WHITE;x.textAlign='center';x.textBaseline='middle';x.font=`900 ${code.length>3?24:34}px Arial`;x.fillText(code,cx,cy-10);x.font='700 12px Arial';const words=labelText.toUpperCase().split(' ');if(words.length>1){x.fillText(words[0],cx,cy+23);x.fillText(words.slice(1).join(' '),cx,cy+38)}else x.fillText(words[0],cx,cy+29);x.textAlign='left';x.textBaseline='alphabetic';x.restore()};
  const apprenticeLogo=await loadImage('logo-apprentice-plus.png');
  const collegeLogo=branding?.logo?await loadImage(branding.logo):null;
  const drawLogo=(x,img,px,py,maxW,maxH)=>{if(!img)return;const sc=Math.min(maxW/img.width,maxH/img.height);x.drawImage(img,px,py,img.width*sc,img.height*sc)};
  const newPage=(title,version,status='Submitted - Locked')=>{
    const c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');const [sectionName,sectionColour]=pdfSectionFor(title);x._sectionColour=sectionColour;x._sectionName=sectionName;
    x.fillStyle=WHITE;x.fillRect(0,0,W,H);
    x.fillStyle=LIGHT_GREEN;x.fillRect(0,0,W,18);
    x.fillStyle=SOFT_GREEN;x.fillRect(M,226,W-2*M,5);
    drawLogo(x,apprenticeLogo,M,48,185,82);
    if(collegeLogo)drawLogo(x,collegeLogo,W-M-430,52,190,72);
    x.fillStyle=MUTED;x.font='700 16px Arial';x.fillText(`${clean(course.standard||'')}  •  Level ${clean(course.level||'-')}`,M,155);
    x.fillStyle=TEAL;x.font='700 44px Arial';fitText(x,clean(course.name||'Apprenticeship Course'),M,202,W-2*M,44);
    x.fillStyle=INK;x.font='700 27px Arial';fitText(x,clean(title),M,274,W-2*M-270,27);
    const metaText=`${String(version).startsWith('Attempt')?version:`Version ${version}`}  •  ${status}`;x.fillStyle=MUTED;x.font='600 16px Arial';x.fillText(metaText,M,309);
    const tabW=Math.min(250,Math.max(150,sectionName.length*11+28));x.fillStyle=LIGHT_GREEN;x.fillRect(W-M-tabW,247,tabW,52);x.strokeStyle=SOFT_GREEN;x.lineWidth=2;x.strokeRect(W-M-tabW,247,tabW,52);x.fillStyle=TEAL;x.font='700 15px Arial';x.textAlign='center';x.fillText(sectionName,W-M-tabW/2,280);x.textAlign='left';
    drawPdfStamp(x,title);
    pages.push({canvas:c,ctx:x,colour:sectionColour,sectionName});return {c,x,y:354};
  };
  function fitText(x,text,px,py,max,fontSize){let s=fontSize;x.font=`700 ${s}px Arial`;while(x.measureText(text).width>max&&s>16){s--;x.font=`700 ${s}px Arial`}x.fillText(text,px,py)}
  function line(x,y,w= W-2*M){x.fillStyle=x._sectionColour||GREEN;x.fillRect(M,y,w,4)}
  function label(x,t,px,py){x.fillStyle=MUTED;x.font='700 17px Arial';x.fillText(clean(t).toUpperCase(),px,py)}
  function value(x,t,px,py,size=22,bold=false){x.fillStyle=INK;x.font=`${bold?700:400} ${size}px Arial`;x.fillText(clean(t||'-'),px,py)}
  function wrap(x,text,maxWidth,font='400 22px Arial'){x.font=font;const paras=clean(text||'-').split(/\n/),out=[];for(const p of paras){const words=p.split(/\s+/);let l='';for(const w of words){const test=l?`${l} ${w}`:w;if(x.measureText(test).width>maxWidth&&l){out.push(l);l=w}else l=test}out.push(l||' ')}return out}
  function sectionHeading(x,t,y){x.fillStyle=x._sectionColour||TEAL;x.font='700 25px Arial';x.fillText(clean(t),M,y);line(x,y+14);return y+52}
  function meta(p,version,date,type){const {x}=p;let y=p.y;x.fillStyle=PALE;x.fillRect(M,y,W-2*M,132);label(x,'Learner',M+24,y+31);value(x,profile.fullName,M+24,y+62,21,true);label(x,'Date submitted',M+560,y+31);value(x,date||'-',M+560,y+62,21,true);label(x,'Evidence type',M+24,y+96);value(x,type,M+190,y+96,19,true);label(x,'Status',M+560,y+96);value(x,'Submitted - Locked',M+650,y+96,19,true);p.y=y+168;return p}
  function signature(x,data,y,title='Signature') {label(x,title,M,y);x.strokeStyle='#b8c4c1';x.lineWidth=2;x.strokeRect(M,y+18,420,122);if(data){try{x.drawImage(data._img||data,M+12,y+28,396,98)}catch{}}return y+162}
  async function loadImage(src){if(!src)return null;return new Promise(r=>{const i=new Image();i.onload=()=>r(i);i.onerror=()=>r(null);i.src=src})}
  function footerAll(){const numbered=pages.filter(p=>!p.isCover),total=numbered.length;let pageNo=0;pages.forEach(p=>{if(p.isCover)return;pageNo++;const x=p.ctx;x.fillStyle=LIGHT_GREEN;x.fillRect(M,H-72,W-2*M,3);x.fillStyle=MUTED;x.font='600 15px Arial';x.fillText(`${branding?.name?branding.name+'  •  ':''}Apprentice+ | Your Course, Your Way`,M,H-34);x.textAlign='right';x.fillText(`Page ${pageNo} of ${total}`,W-M,H-34);x.textAlign='left'})}

  const evidenceCatalogue=[];
  const evidenceMatrix={};(assignment.ksbs||[]).forEach(([code])=>evidenceMatrix[code]=[]);
  const addMatrix=(code,ref)=>{if(evidenceMatrix[code]&&!evidenceMatrix[code].includes(ref))evidenceMatrix[code].push(ref)};
  const selectedCodes=d=>{
    const valid=code=>Object.prototype.hasOwnProperty.call(evidenceMatrix,code);
    const explicit=Array.isArray(d?.ksbEvidence)?d.ksbEvidence:[];
    const photoLinked=Object.keys(d?.outcomePhotos||{}).filter(code=>!!d.outcomePhotos?.[code]?.data);
    const scored=Object.keys(d?.scores||{}).map(k=>String(k).split('::')[0]).filter(code=>{const raw=d?.scores?.[code]??Object.entries(d?.scores||{}).find(([key])=>String(key).split('::')[0]===code)?.[1];return Number(raw)>0});
    const recorded=Object.keys(d?.recordings||{}).filter(code=>!!d.recordings?.[code]?.data);
    return [...new Set([...explicit,...photoLinked,...scored,...recorded].filter(valid))];
  };
  const practicalCodes=d=>{const skillSet=new Set((assignment.ksbs||[]).filter(([code])=>String(code).toUpperCase().startsWith('S')).map(([code])=>code));return selectedCodes(d).filter(code=>skillSet.has(code))};
  const addEvidence=(ref,title,type,date)=>evidenceCatalogue.push({ref,title,type,date:date||'-'});
  (sections.practical||[]).forEach((d,i)=>{const ref=`PA${i+1}`;addEvidence(ref,`Practical Assessment ${i+1}`,'Practical Assessment',d.date);practicalCodes(d).forEach(code=>addMatrix(code,ref))});
  (sections.statement||[]).forEach((d,i)=>{const ref=`LS${i+1}`;addEvidence(ref,`Learner Statement ${i+1}`,'Learner Statement',d.date);selectedCodes(d).forEach(code=>addMatrix(code,ref))});
  (sections.witness||[]).forEach((d,i)=>{const ref=`WT${i+1}`;addEvidence(ref,`Witness Testimony ${i+1}`,'Witness Testimony',d.date);selectedCodes(d).forEach(code=>addMatrix(code,ref))});
  (sections.photos||[]).forEach((d,i)=>{const ref=`PE${i+1}`;addEvidence(ref,`Photographic Evidence ${i+1}`,'Photo Evidence',d.date);selectedCodes(d).forEach(code=>addMatrix(code,ref))});
  (sections.professionalDiscussion||[]).forEach((d,i)=>{const ref=`PD${i+1}`;addEvidence(ref,`Professional Discussion ${i+1}`,'Professional Discussion',d.date);Object.keys(d.recordings||{}).filter(code=>d.recordings?.[code]?.data).forEach(code=>addMatrix(code,ref))});
  (sections.walkthrough||[]).forEach((d,i)=>{const ref=`VW${i+1}`;addEvidence(ref,`Video Walkthrough ${i+1}`,'Video Walkthrough',d.date);if(d.code)addMatrix(d.code,ref)});

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


  function drawSelectedKsbRows(x,d,startY,maxHeight){
    const rows=(assignment.ksbs||[]).filter(([code])=>selectedCodes(d).includes(code));
    if(!rows.length){x.fillStyle=MUTED;x.font='400 15px Arial';x.fillText('No KSBs selected.',M,startY);return startY+24}
    const rowH=Math.max(22,Math.min(38,Math.floor(maxHeight/rows.length)));
    const font=Math.max(10,Math.min(15,rowH-9));
    let y=startY;
    rows.forEach(([code,summary],i)=>{
      const kind=String(code).toUpperCase().startsWith('K')?'Knowledge':String(code).toUpperCase().startsWith('S')?'Skill':String(code).toUpperCase().startsWith('B')?'Behaviour':'KSB';
      x.fillStyle=i%2?WHITE:PALE;x.fillRect(M,y-rowH+7,W-2*M,rowH);
      x.fillStyle=x._sectionColour||TEAL;x.font=`700 ${font}px Arial`;x.fillText(clean(code),M+10,y);
      x.fillStyle=MUTED;x.font=`700 ${Math.max(9,font-2)}px Arial`;x.fillText(kind.toUpperCase(),M+70,y);
      x.fillStyle=INK;x.font=`400 ${font}px Arial`;fitText(x,clean(summary),M+170,y,W-2*M-182,font);
      y+=rowH;
    });
    return y;
  }
  async function drawEvidencePhotoStrip(x,d,y,maxHeight){
    const items=[];
    for(const [code,ph] of Object.entries(d?.outcomePhotos||{})){if(ph?.data)items.push({code,img:await loadImage(ph.data)})}
    for(let i=0;i<(d?.photos||[]).length;i++){const ph=d.photos[i];if(ph?.data)items.push({code:`Photo ${i+1}`,img:await loadImage(ph.data)})}
    if(!items.length)return y;
    const shown=items.slice(0,6),gap=10,cellW=(W-2*M-gap*(shown.length-1))/shown.length,cellH=Math.min(maxHeight,Math.max(58,cellW*.62));
    shown.forEach((it,i)=>{const px=M+i*(cellW+gap);x.fillStyle=PALE;x.fillRect(px,y,cellW,cellH);if(it.img){const sc=Math.max(cellW/it.img.width,cellH/it.img.height),iw=it.img.width*sc,ih=it.img.height*sc;x.save();x.beginPath();x.rect(px,y,cellW,cellH);x.clip();x.drawImage(it.img,px+(cellW-iw)/2,y+(cellH-ih)/2,iw,ih);x.restore()}x.fillStyle=WHITE;x.fillRect(px,y+cellH-20,cellW,20);x.fillStyle=TEAL;x.font='700 10px Arial';fitText(x,clean(it.code),px+4,y+cellH-6,cellW-8,10)});
    return y+cellH+12;
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

  // Front cover (unnumbered)
  {
    const c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');x.fillStyle=WHITE;x.fillRect(0,0,W,H);
    // layered, logo-inspired cover shapes with soft 3D depth
    x.fillStyle='rgba(7,53,57,.10)';x.beginPath();x.arc(W+70,330,390,0,Math.PI*2);x.fill();
    x.fillStyle=LIGHT_GREEN;x.beginPath();x.arc(W+25,270,340,0,Math.PI*2);x.fill();
    x.fillStyle='rgba(185,232,202,.50)';x.fillRect(M+14,382,W-2*M,770);
    x.fillStyle='rgba(7,53,57,.10)';x.fillRect(M+26,394,W-2*M,770);
    x.fillStyle=WHITE;x.fillRect(M,368,W-2*M,770);
    x.strokeStyle=SOFT_GREEN;x.lineWidth=3;x.strokeRect(M,368,W-2*M,770);
    drawLogo(x,apprenticeLogo,M,64,250,112);if(collegeLogo)drawLogo(x,collegeLogo,W-M-500,76,210,82);drawPdfStamp(x,'Evidence Portfolio');
    x.fillStyle=TEAL;x.font='700 64px Arial';fitText(x,clean(course.name||'Apprenticeship Course'),M,254,W-2*M,64);
    x.fillStyle=MUTED;x.font='600 21px Arial';x.fillText(`${clean(course.standard||'')}  •  Level ${clean(course.level||'-')}`,M,302);
    x.fillStyle=INK;x.font='700 36px Arial';x.fillText('EVIDENCE PORTFOLIO',M,448);
    x.fillStyle=GREEN;x.fillRect(M,474,145,7);
    let y=548;
    [['Learner',profile.fullName],['Evidence',`Assignment ${assignment.n} - ${assignment.title}`],['Employer',profile.employer],['Training provider',branding?.name||profile.trainingProvider||profile.provider||'-'],['Assessor',profile.mentor],['Portfolio date',new Date().toLocaleDateString('en-GB')],['Evidence items',String(evidenceCatalogue.length)]].forEach(([a,b])=>{x.fillStyle=MUTED;x.font='700 15px Arial';x.fillText(clean(a).toUpperCase(),M+48,y);x.fillStyle=INK;x.font='700 25px Arial';fitText(x,clean(b||'-'),M+48,y+34,W-2*M-96,25);y+=96});
    x.fillStyle=TEAL;x.font='700 21px Arial';x.fillText('APPRENTICE+',M,H-122);x.fillStyle=MUTED;x.font='600 18px Arial';x.fillText('Your Course, Your Way',M,H-88);
    pages.push({canvas:c,ctx:x,colour:TEAL,sectionName:'Portfolio',isCover:true});
  }

  // Page 1 - portfolio contents
  {
    const p=meta(newPage('Portfolio Contents','Page 1'),'Portfolio index','Evidence Portfolio');const x=p.x;let y=sectionHeading(x,'Evidence Index',p.y);
    if(!evidenceCatalogue.length){value(x,'No submitted evidence items were available.',M,y,20)}else{
      evidenceCatalogue.forEach((item,i)=>{if(y>H-135)return;x.fillStyle=i%2?WHITE:PALE;x.fillRect(M,y-28,W-2*M,52);x.fillStyle=x._sectionColour||TEAL;x.font='700 19px Arial';x.fillText(item.ref,M+16,y);x.fillStyle=INK;x.font='600 18px Arial';fitText(x,item.title,M+105,y,W-2*M-340,18);x.fillStyle=MUTED;x.font='500 16px Arial';x.textAlign='right';x.fillText(item.date||'-',W-M-18,y);x.textAlign='left';y+=56});
    }
    y=Math.min(y+25,H-310);y=sectionHeading(x,'Evidence Reference Key',y);
    const keys=['PA  Practical Assessment','LS  Learner Statement','WT  Witness / Employer Testimony','VW  Video Walkthrough','PD  Professional Discussion','PE  Photo Evidence'];
    keys.forEach((t,i)=>{x.fillStyle=INK;x.font='600 17px Arial';x.fillText(t,M+(i%2)*520,y+Math.floor(i/2)*34)});
  }

  // Page 2+ - automatic KSB evidence matrix. Every evidence reference is shown
  // and long KSB descriptions wrap instead of running beyond the page edge.
  {
    let p=meta(newPage('KSB Evidence Matrix','Page 2'),'Automatic mapping','Evidence Portfolio');let x=p.x;let y=sectionHeading(x,'KSB Mapping',p.y);
    x.fillStyle=MUTED;x.font='400 17px Arial';x.fillText('Evidence references show exactly where each KSB is evidenced within this downloaded portfolio.',M,y);y+=42;
    const drawMatrixHeader=()=>{x.fillStyle=x._sectionColour||TEAL;x.fillRect(M,y-24,W-2*M,38);x.fillStyle=WHITE;x.font='700 15px Arial';x.fillText('KSB',M+14,y);x.fillText('Description',M+88,y);x.textAlign='right';x.fillText('Evidence location',W-M-16,y);x.textAlign='left';y+=54};
    drawMatrixHeader();
    for(const [code,summary] of assignment.ksbs||[]){
      const refs=evidenceMatrix[code]||[];
      x.font='600 15px Arial';const summaryLines=wrap(x,clean(summary),W-2*M-390,'600 15px Arial');
      x.font='700 16px Arial';const refText=refs.length?refs.join('  '):'No evidence mapped';const refLines=wrap(x,refText,280,'700 16px Arial');
      const rowH=Math.max(58,Math.max(summaryLines.length*20,refLines.length*21)+26);
      if(y+rowH>H-115){p=meta(newPage('KSB Evidence Matrix - Continued','Automatic mapping'),'Automatic mapping','Evidence Portfolio');x=p.x;y=sectionHeading(x,'KSB Mapping (continued)',p.y);drawMatrixHeader()}
      x.fillStyle=refs.length?PALE:'#fafafa';x.fillRect(M,y-25,W-2*M,rowH-6);
      x.fillStyle=x._sectionColour||TEAL;x.font='700 18px Arial';x.fillText(code,M+14,y);
      x.fillStyle=INK;x.font='600 15px Arial';summaryLines.forEach((line,i)=>x.fillText(line,M+88,y+i*20));
      x.textAlign='right';x.fillStyle=refs.length?(x._sectionColour||TEAL):MUTED;x.font='700 16px Arial';refLines.forEach((line,i)=>x.fillText(line,W-M-16,y+i*21));x.textAlign='left';y+=rowH;
    }
    const covered=Object.values(evidenceMatrix).filter(v=>v.length).length,total=(assignment.ksbs||[]).length;
    if(y+86>H-110){p=meta(newPage('KSB Evidence Matrix - Summary','Automatic mapping'),'Automatic mapping','Evidence Portfolio');x=p.x;y=sectionHeading(x,'KSB Mapping Summary',p.y)}
    x.fillStyle=PALE;x.fillRect(M,y,W-2*M,76);label(x,'KSB coverage in this pack',M+22,y+31);value(x,`${covered} of ${total} KSBs mapped`,M+355,y+32,22,true);
  }

  const scoreRows=(p,d,startY)=>{const x=p.x;let y=startY;assignment.ksbs.forEach(([code,summary])=>{if(y>H-230){p=meta(newPage(`${p.title||'Assessment'} - Scores Continued`,d._version),d._version,d.date,'Assessment');y=sectionHeading(p.x,'KSB Scores (continued)',p.y)}x=p.x;x.fillStyle=PALE;x.fillRect(M,y-29,W-2*M,45);x.fillStyle=TEAL;x.font='700 19px Arial';x.fillText(code,M+16,y);x.fillStyle=INK;x.font='400 18px Arial';x.fillText(clean(summary),M+105,y);x.textAlign='right';x.font='700 20px Arial';x.fillText(`${d.scores?.[code]||'-'} / 5`,W-M-18,y);x.textAlign='left';y+=52});return {p,y}};

  // Practical - every saved version, exactly one A4 page per version
  for(let i=0;i<(sections.practical||[]).length;i++){
    const d=sections.practical[i],v=i+1;d._version=v;
    const p=meta(newPage(`Practical Assessment · PA${v}`,`Attempt ${v}`),`Attempt ${v}`,d.date,'Practical Assessment');const x=p.x;let y=sectionHeading(x,'Assessment Details',p.y);
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
    {const fp=meta(newPage(`Practical Assessment Feedback · PA${v}`,`Attempt ${v}`),`Attempt ${v}`,d.date,'Practical Assessment');const fx=fp.x;let fy=sectionHeading(fx,'Assessment Summary',fp.y);fy=drawCompactParagraph(fx,d.feedbackSummary||d.feedback||'No assessment summary recorded.',M,fy,W-2*M,260)+22;fy=sectionHeading(fx,'Areas for Improvement',fy);fy=drawCompactParagraph(fx,d.feedbackDevelopment||'No areas for improvement recorded.',M,fy,W-2*M,260)+22;fy=sectionHeading(fx,'Additional Assessment Comments',fy);drawCompactParagraph(fx,d.feedback||'No additional comments recorded.',M,fy,W-2*M,Math.max(120,H-fy-120));}
    if(course.nvqUnits)await addOutcomePhotoPages(d,'Assessor Observation',`Attempt ${v}`,d.date,'Assessor Observation',true);
  }

  // Photographic Evidence - three photographs per selected Skill
  for(let i=0;i<(sections.photos||[]).length;i++){
    const d=sections.photos[i],v=i+1;
    const selected=(assignment.ksbs||[]).filter(([code])=>String(code).toUpperCase().startsWith('S')&&(d.ksbEvidence||[]).includes(code));
    const entries=[];
    for(const [code,text] of selected){for(let j=0;j<3;j++){const ph=d.skillPhotos?.[code]?.[j];if(ph?.data)entries.push({code,text,index:j+1,img:await loadImage(ph.data)})}}
    if(!entries.length){for(let j=0;j<(d.photos||[]).length;j++){const ph=d.photos[j];if(ph?.data)entries.push({code:'PE',text:'Legacy photographic evidence',index:j+1,img:await loadImage(ph.data)})}}
    for(let start=0;start<entries.length;start+=6){const batch=entries.slice(start,start+6),pageNo=Math.floor(start/6)+1,totalPages=Math.max(1,Math.ceil(entries.length/6));const p=meta(newPage(`Photographic Evidence · PE${v}${totalPages>1?` · ${pageNo}/${totalPages}`:''}`,v),v,d.date,'Photographic Evidence');const x=p.x;let y=sectionHeading(x,'Skill Photographs',p.y);const gapX=22,gapY=34,cellW=(W-2*M-gapX)/2,cellH=cellW*9/16;for(let j=0;j<batch.length;j++){const item=batch[j],col=j%2,row=Math.floor(j/2),px=M+col*(cellW+gapX),py=y+row*(cellH+gapY+26),img=item.img;x.fillStyle=PALE;x.fillRect(px,py,cellW,cellH);if(img){const scale=Math.max(cellW/img.width,cellH/img.height),iw=img.width*scale,ih=img.height*scale;x.save();x.beginPath();x.rect(px,py,cellW,cellH);x.clip();x.drawImage(img,px+(cellW-iw)/2,py+(cellH-ih)/2,iw,ih);x.restore()}x.fillStyle=TEAL;x.font='700 14px Arial';x.fillText(`${item.code} · Photo ${item.index}`,px,py+cellH+20);x.fillStyle=INK;x.font='400 12px Arial';fitText(x,clean(item.text),px,py+cellH+38,cellW,12)}if(start+6>=entries.length){const sig=await loadImage(d.signature);signature(x,sig,H-225,'Learner signature')}}
  }

  // Statements
  for(let i=0;i<(sections.statement||[]).length;i++){
    const d=sections.statement[i],v=i+1;const r=addTextPages(`Learner Statement · LS${v}`,v,d.date,'Learner Statement','Statement',d.text);let {p,x,y}=r;const sig=await loadImage(d.signature);if(y>H-300){p=meta(newPage(`Learner Statement - Signature · LS${v}`,v),v,d.date,'Learner Statement');signature(p.x,sig,p.y,'Learner signature')}else signature(x,sig,y+35,'Learner signature');await addOutcomePhotoPages(d,'Learner Statement',v,d.date,'Learner Statement');
  }

  // Witness testimony - one complete A4 page per testimony.
  for(let i=0;i<(sections.witness||[]).length;i++){
    const d=sections.witness[i],v=i+1;
    const p=meta(newPage(`Witness Testimony · WT${v}`,`Attempt ${v}`),`Attempt ${v}`,d.date,d.type||'Witness Testimony');const x=p.x;let y=sectionHeading(x,'Witness Details',p.y);
    const detailRows=[['Evidence source',d.type||'Witness testimony'],['Name',d.personName],['Role',d.role],['Organisation',d.organisation],['Activity witnessed',d.activity]];
    detailRows.forEach(([a,b])=>{label(x,a,M,y);value(x,b,M+210,y,15,true);y+=28});
    y=sectionHeading(x,'Selected Knowledge, Skills and Behaviours',y+2);
    const selectedCount=Math.max(1,selectedCodes(d).length),ksbBudget=Math.min(420,Math.max(130,selectedCount*30));
    y=drawSelectedKsbRows(x,d,y,ksbBudget)+8;
    const photos=Object.values(d?.outcomePhotos||{}).filter(ph=>ph?.data).length+(d?.photos||[]).filter(ph=>ph?.data).length;
    if(photos){y=sectionHeading(x,'Attached Photographs',y);y=await drawEvidencePhotoStrip(x,d,y,115)}
    const sigTop=H-205;
    const remaining=Math.max(170,sigTop-y-20),block=Math.floor(remaining/3);
    y=sectionHeading(x,'Witness Testimony',y);y=drawCompactParagraph(x,d.feedback||'No testimony recorded.',M,y,W-2*M,Math.max(70,block))+8;
    y=sectionHeading(x,'Assessment Summary',y);y=drawCompactParagraph(x,d.feedbackSummary||d.feedback||'No assessment summary recorded.',M,y,W-2*M,Math.max(60,block-8))+8;
    y=sectionHeading(x,'Areas for Improvement / Additional Comments',y);drawCompactParagraph(x,[d.feedbackDevelopment,d.additionalComments].filter(Boolean).join('\n')||'No areas for improvement or additional comments recorded.',M,y,W-2*M,Math.max(55,sigTop-y-16));
    const sig=await loadImage(d.signature);signature(x,sig,sigTop,`${d.type||'Witness'} signature`);
  }

  // Professional discussion - recordings are listed in the PDF and included in the ZIP package
  for(let i=0;i<(sections.professionalDiscussion||[]).length;i++){
    const d=sections.professionalDiscussion[i],v=i+1,recordings=d.recordings||{},notes=d.notes||{};
    const lines=(assignment.ksbs||[]).map(([code,summary])=>{
      const rec=recordings[code],note=String(notes[code]||'').trim();
      return `${code} — ${summary}\nRecording: ${rec?`Included (${rec.duration||'duration unavailable'}, recorded ${rec.date||d.date||''})`:'Not recorded'}${note?`\nNotes: ${note}`:''}`;
    }).join('\n\n');
    const intro=`Discussion lead: ${d.assessor||''}\nActivity / subject: ${d.activity||''}\n\n${lines}`;
    let r=addTextPages(`Professional Discussion · PD${v}`,`Attempt ${v}`,d.date,'Professional Discussion','Learning Outcome Recordings',intro),{p,x,y}=r;
    const sig=await loadImage(d.signature);if(y>H-300){p=meta(newPage(`Professional Discussion - Signature · PD${v}`,v),v,d.date,'Professional Discussion');signature(p.x,sig,p.y,'Assessor / discussion lead signature')}else signature(x,sig,y+35,'Assessor / discussion lead signature');
  }

  // Video evidence index - list every attached video title together on one page.
  {
    const videoTitles=[];
    for(const f of sections.walkthrough||[])videoTitles.push(ksbMediaFileName(f));
    if(videoTitles.length){
      const p=meta(newPage('Video Evidence Files','Attached media'),'Attached media','Video Evidence Index');const x=p.x;let y=sectionHeading(x,'Attached video files',p.y);
      x.fillStyle=MUTED;x.font='400 17px Arial';x.fillText('The playable files below are included in the downloaded evidence package.',M,y);y+=42;
      const available=H-y-145,lineH=Math.max(24,Math.min(38,Math.floor(available/Math.max(1,videoTitles.length))));
      const fontSize=Math.max(13,Math.min(19,lineH-7));
      videoTitles.forEach((name,i)=>{x.fillStyle=i%2?WHITE:PALE;x.fillRect(M,y-24,W-2*M,lineH);x.fillStyle=TEAL;x.font=`700 ${fontSize}px Arial`;x.fillText(`${i+1}.`,M+14,y);x.fillStyle=INK;x.font=`600 ${fontSize}px Arial`;fitText(x,clean(name),M+58,y,W-2*M-78,fontSize);y+=lineH});
    }
  }

  // Professional Discussion file index, matching the Video Walkthrough index.
  {
    const audioTitles=[];
    for(let vi=0;vi<(sections.professionalDiscussion||[]).length;vi++){
      const version=sections.professionalDiscussion[vi];
      for(const [code,rec] of Object.entries(version.recordings||{})){
        if(rec?.data)audioTitles.push(`${code} - Professional Discussion - Attempt ${vi+1}${rec.duration?` (${rec.duration})`:''}`);
      }
    }
    if(audioTitles.length){
      const p=meta(newPage('Professional Discussion Audio Files','Attached media'),'Attached media','Professional Discussion');const x=p.x;let y=sectionHeading(x,'Attached professional discussion files',p.y);
      x.fillStyle=MUTED;x.font='400 17px Arial';x.fillText('The playable audio files below are included in the downloaded evidence package.',M,y);y+=42;
      const available=H-y-145,lineH=Math.max(24,Math.min(38,Math.floor(available/Math.max(1,audioTitles.length))));
      const fontSize=Math.max(13,Math.min(19,lineH-7));
      audioTitles.forEach((name,i)=>{x.fillStyle=i%2?WHITE:PALE;x.fillRect(M,y-24,W-2*M,lineH);x.fillStyle=TEAL;x.font=`700 ${fontSize}px Arial`;x.fillText(`${i+1}.`,M+14,y);x.fillStyle=INK;x.font=`600 ${fontSize}px Arial`;fitText(x,clean(name),M+58,y,W-2*M-78,fontSize);y+=lineH});
    }
  }


  footerAll();
  const jpegPages=pages.map(p=>dataUrlBytes(p.canvas.toDataURL('image/jpeg',0.90)));
  const pdf=makeImagePDF(jpegPages,W,H);
  const safe=clean(profile.fullName).replace(/[^a-z0-9]+/gi,'-').replace(/^-|-$/g,'');
  const pdfName=`${safe||'Learner'}-Assignment-${assignment.n}-Evidence-Pack.pdf`;
  const videos=[];for(const version of sections.supporting||[]){const codes=selectedKsbCodesForMedia(assignment,version);for(const f of version.files||[])if((f.type||'').startsWith('video/')&&f.data)videos.push({...f,ksbCodes:codes})}
  const walkthroughVideos=(sections.walkthrough||[]).filter(f=>f?.data);
  const audios=[];for(let vi=0;vi<(sections.professionalDiscussion||[]).length;vi++){const version=sections.professionalDiscussion[vi];for(const [code,rec] of Object.entries(version.recordings||{}))if(rec?.data)audios.push({code,rec,attempt:vi+1})}
  if(videos.length||walkthroughVideos.length||audios.length){
    const entries=[{name:pdfName,data:pdf}],used=new Set();
    videos.forEach((f,i)=>{const original=String(f.name||''),dot=original.lastIndexOf('.'),ext=dot>0?original.slice(dot):'.mp4',prefix=(f.ksbCodes||[]).join('-'),base=safeZipName(`${prefix?prefix+' - ':''}${(f.evidenceName||`Supporting video ${i+1}`).trim()}`);let name=uniqueMediaName(base,ext,used);entries.push({name:`Supporting Videos/${name}`,data:dataUrlBytes(f.data)})});
    walkthroughVideos.forEach(f=>{const ext=mediaExtension(f.type,f.name,'video'),base=safeZipName(`${f.code} - ${f.summary||'Video evidence'}`),name=uniqueMediaName(base,ext,used);entries.push({name:`KSB Video Evidence/${name}`,data:dataUrlBytes(f.data)})});
    audios.forEach(({code,rec,attempt},i)=>{const ext=mediaExtension(rec.type,'','audio'),base=safeZipName(`${code} - Professional Discussion - Attempt ${attempt}`),name=uniqueMediaName(base,ext,used);entries.push({name:`KSB Voice Notes/${name}`,data:dataUrlBytes(rec.data)})});
    const packageName=`${safe||'Learner'}-Assignment-${assignment.n}-Complete-Evidence-Package.zip`;
    if(returnPackage)return {assignmentNumber:assignment.n,pdfName,entries,packageName};
    await downloadBlob(makeZipBlob(entries),'application/zip',packageName);
  }else{
    const entries=[{name:pdfName,data:pdf}];
    if(returnPackage)return {assignmentNumber:assignment.n,pdfName,entries,packageName:pdfName};
    await downloadBlob(pdf,'application/pdf',pdfName);
  }
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
async function generateNVQEvidencePackPDF({course, assignment, profile, sections, branding, returnPackage=false}) {
  const W=1240,H=1754,M=88,TEAL='#06382c',GREEN='#48E023',YELLOW='#F7D75C',GREY='#EEF1F1',INK='#1A1A1A',MUTED='#5f6f70',PALE='#f2f7f5',WHITE='#ffffff';
  const pages=[];
  const clean=v=>String(v??'').replace(/[\u2010-\u2015]/g,'-').replace(/[\u2018\u2019]/g,"'").replace(/[\u201c\u201d]/g,'"');
  const allOutcomeCodes=new Set((assignment.ksbs||[]).map(([code])=>code));
  const selectedCodes=d=>{const explicit=Array.isArray(d?.ksbEvidence)?d.ksbEvidence:[];const photos=Object.keys(d?.outcomePhotos||{}).filter(code=>d.outcomePhotos?.[code]?.data);const scores=Object.keys(d?.scores||{}).map(k=>String(k).split('::')[0]).filter(code=>Number(d?.scores?.[code]??Object.entries(d?.scores||{}).find(([key])=>String(key).split('::')[0]===code)?.[1])>0);const recordings=Object.keys(d?.recordings||{}).filter(code=>d.recordings?.[code]?.data);return [...new Set([...explicit,...photos,...scores,...recordings].filter(code=>allOutcomeCodes.has(code)))];};
  const selectedScores=d=>(assignment.ksbs||[]).filter(([code])=>selectedCodes(d).includes(code));
  const drawAllOutcomeRows=(x,d,startY,maxHeight)=>{const rows=selectedScores(d);if(!rows.length){x.fillStyle=MUTED;x.font='400 15px Arial';x.fillText('No learning outcomes selected.',M,startY);return startY+24}const rowH=Math.max(22,Math.min(38,Math.floor(maxHeight/rows.length))),font=Math.max(10,Math.min(15,rowH-9));let y=startY;rows.forEach(([code,text],i)=>{x.fillStyle=i%2?WHITE:PALE;x.fillRect(M,y-rowH+7,W-2*M,rowH);x.fillStyle=x._sectionColour||TEAL;x.font=`700 ${font}px Arial`;x.fillText(clean(code),M+10,y);x.fillStyle=INK;x.font=`400 ${font}px Arial`;fitText(x,clean(text),M+90,y,W-2*M-102,font);y+=rowH});return y};
  const selectedStatement=d=>(assignment.ksbs||[]).filter(([code])=>selectedCodes(d).includes(code));
  const selectedDiscussion=d=>(assignment.ksbs||[]).filter(([code])=>selectedCodes(d).includes(code));
  const evidenceMap={};(assignment.ksbs||[]).forEach(([code])=>evidenceMap[code]=[]);
  const add=(code,ref,type)=>{if(evidenceMap[code]&&!evidenceMap[code].some(e=>e.ref===ref))evidenceMap[code].push({ref,type})};
  (sections.practical||[]).forEach((d,i)=>selectedCodes(d).forEach(c=>add(c,`AO${i+1}`,'Assessor Observation')));
  (sections.photos||[]).forEach((d,i)=>selectedCodes(d).forEach(c=>add(c,`PE${i+1}`,'Photographic Evidence')));
  (sections.statement||[]).forEach((d,i)=>selectedCodes(d).forEach(c=>add(c,`LS${i+1}`,'Learner Statement')));
  (sections.discussion||[]).forEach((d,i)=>selectedCodes(d).forEach(c=>add(c,`VW${i+1}`,'Video Walkthrough')));
  (sections.professionalDiscussion||[]).forEach((d,i)=>selectedCodes(d).forEach(c=>add(c,`PD${i+1}`,'Professional Discussion')));
  (sections.witness||[]).forEach((d,i)=>selectedCodes(d).forEach(c=>add(c,`WT${i+1}`,'Witness Testimony')));

  const PDF_COLOURS={cover:'#79d22f',practical:'#2E7D32',statement:'#1565C0',witness:'#F9A825',video:'#6A1B9A',discussion:'#00897B',photo:'#EF6C00',knowledge:'#3949AB',documents:'#546E7A'};
  const pdfSectionFor=title=>{const t=String(title||'').toLowerCase();if(/assessor observation|practical/.test(t))return ['Practical Assessment',PDF_COLOURS.practical];if(/learner statement/.test(t))return ['Learner Statement',PDF_COLOURS.statement];if(/witness|employer/.test(t))return ['Witness Testimony',PDF_COLOURS.witness];if(/video|walkthrough/.test(t))return ['Video Walkthrough',PDF_COLOURS.video];if(/professional discussion/.test(t))return ['Professional Discussion',PDF_COLOURS.discussion];if(/photo|image/.test(t))return ['Photo Evidence',PDF_COLOURS.photo];if(/knowledge|question/.test(t))return ['Knowledge Questions',PDF_COLOURS.knowledge];if(/document|certificate|supporting/.test(t))return ['Documents',PDF_COLOURS.documents];return ['Evidence Portfolio',PDF_COLOURS.cover]};
  const pdfStampFor=title=>{const t=String(title||'').toLowerCase();if(/learning outcome|coverage|evidence pack/.test(t))return ['NVQ','Evidence Pack',PDF_COLOURS.cover];if(/assessor observation|practical/.test(t))return ['PA','Practical Assessment',PDF_COLOURS.practical];if(/learner statement/.test(t))return ['LS','Learner Statement',PDF_COLOURS.statement];if(/witness|employer/.test(t))return ['WT','Witness Testimony',PDF_COLOURS.witness];if(/video|walkthrough/.test(t))return ['VW','Video Walkthrough',PDF_COLOURS.video];if(/professional discussion/.test(t))return ['PD','Professional Discussion',PDF_COLOURS.discussion];if(/photo|image/.test(t))return ['PE','Photo Evidence',PDF_COLOURS.photo];if(/knowledge|question/.test(t))return ['KQ','Knowledge Questions',PDF_COLOURS.knowledge];if(/document|certificate|supporting/.test(t))return ['SE','Supporting Evidence',PDF_COLOURS.documents];return ['PORT','Portfolio',PDF_COLOURS.cover]};
  const drawPdfStamp=(x,title,cx=W-105,cy=104,r=76)=>{const [code,labelText,colour]=pdfStampFor(title);x.save();x.shadowColor='rgba(0,0,0,.30)';x.shadowBlur=16;x.shadowOffsetY=7;const grad=x.createRadialGradient(cx-r*.35,cy-r*.42,r*.10,cx,cy,r);grad.addColorStop(0,'#ffffff');grad.addColorStop(.14,colour);grad.addColorStop(1,colour);x.fillStyle=grad;x.beginPath();x.arc(cx,cy,r,0,Math.PI*2);x.fill();x.shadowColor='transparent';x.strokeStyle='rgba(255,255,255,.90)';x.lineWidth=5;x.beginPath();x.arc(cx,cy,r-8,0,Math.PI*2);x.stroke();x.strokeStyle='rgba(0,0,0,.20)';x.lineWidth=2;x.beginPath();x.arc(cx,cy,r-16,0,Math.PI*2);x.stroke();x.fillStyle=WHITE;x.textAlign='center';x.textBaseline='middle';x.font=`900 ${code.length>3?24:34}px Arial`;x.fillText(code,cx,cy-9);x.font='700 11px Arial';const words=labelText.toUpperCase().split(' ');if(words.length>1){x.fillText(words[0],cx,cy+22);x.fillText(words.slice(1).join(' '),cx,cy+36)}else x.fillText(words[0],cx,cy+28);x.textAlign='left';x.textBaseline='alphabetic';x.restore()};
  const newPage=(title,subtitle='NVQ Evidence Portfolio')=>{const c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d'),[sectionName,sectionColour]=pdfSectionFor(title);x._sectionColour=sectionColour;x._sectionName=sectionName;x.fillStyle=WHITE;x.fillRect(0,0,W,H);x.fillStyle=sectionColour;x.fillRect(0,0,W,16);x.fillRect(0,0,18,H);x.fillStyle=sectionColour;x.fillRect(M,54,W-2*M,150);x.fillStyle=WHITE;x.font='700 24px Arial';x.fillText('APPRENTICE+ NVQ EVIDENCE PORTFOLIO',M+30,92);x.font='700 38px Arial';fitText(x,clean(title),M+30,148,W-2*M-245,38);x.font='600 20px Arial';x.fillText(clean(subtitle),M+30,184);const tabW=Math.min(300,Math.max(170,sectionName.length*13+34));x.fillStyle=sectionColour;x.fillRect(W-M-tabW,214,tabW,38);x.fillStyle=WHITE;x.font='700 16px Arial';x.textAlign='center';x.fillText(sectionName,W-M-tabW/2,239);x.textAlign='left';drawPdfStamp(x,title);pages.push({canvas:c,ctx:x,colour:sectionColour,sectionName});return {c,x,y:272}};
  function fitText(x,text,px,py,max,fontSize){let s=fontSize;x.font=`700 ${s}px Arial`;while(x.measureText(text).width>max&&s>14){s--;x.font=`700 ${s}px Arial`}x.fillText(text,px,py)}
  function label(x,t,px,py){x.fillStyle=MUTED;x.font='700 17px Arial';x.fillText(clean(t).toUpperCase(),px,py)}
  function value(x,t,px,py,size=21,bold=false){x.fillStyle=INK;x.font=`${bold?700:400} ${size}px Arial`;x.fillText(clean(t||'-'),px,py)}
  function wrap(x,text,maxWidth,font='400 21px Arial'){x.font=font;const out=[];for(const p of clean(text||'-').split(/\n/)){const words=p.split(/\s+/);let line='';for(const w of words){const test=line?`${line} ${w}`:w;if(x.measureText(test).width>maxWidth&&line){out.push(line);line=w}else line=test}out.push(line||' ')}return out}
  function sectionHeading(x,t,y){x.fillStyle=x._sectionColour||TEAL;x.font='700 25px Arial';x.fillText(clean(t),M,y);x.fillStyle=x._sectionColour||GREEN;x.fillRect(M,y+14,W-2*M,4);return y+52}
  function meta(p,date,type,attempt){const {x}=p;let y=p.y;x.fillStyle=PALE;x.fillRect(M,y,W-2*M,132);label(x,'Learner',M+24,y+31);value(x,profile.fullName,M+24,y+62,21,true);label(x,'Date submitted',M+560,y+31);value(x,date||'-',M+560,y+62,21,true);label(x,'Evidence type',M+24,y+96);value(x,type,M+190,y+96,19,true);label(x,'Attempt',M+560,y+96);value(x,String(attempt),M+650,y+96,19,true);p.y=y+168;return p}
  async function loadImage(src){if(!src)return null;return new Promise(r=>{const i=new Image();i.onload=()=>r(i);i.onerror=()=>r(null);i.src=src})}
  function signature(x,img,y,title){label(x,title,M,y);x.strokeStyle='#b8c4c1';x.lineWidth=2;x.strokeRect(M,y+18,420,122);if(img)try{x.drawImage(img,M+12,y+28,396,98)}catch{}return y+162}
  function paragraph(x,text,y,maxHeight=360){const sizes=[21,20,19,18,17,16,15];for(const size of sizes){const lh=Math.round(size*1.43),lines=wrap(x,text,W-2*M,`400 ${size}px Arial`);if(lines.length*lh<=maxHeight){x.font=`400 ${size}px Arial`;x.fillStyle=INK;lines.forEach((l,i)=>x.fillText(l,M,y+i*lh));return y+lines.length*lh}}const lines=wrap(x,text,W-2*M,'400 15px Arial'),max=Math.floor(maxHeight/22);x.font='400 15px Arial';x.fillStyle=INK;lines.slice(0,max).forEach((l,i)=>x.fillText(l,M,y+i*22));return y+Math.min(lines.length,max)*22}
  function drawOutcomeRows(x,outcomes,y,showCriteria=true){for(const [code,text] of outcomes){if(y>H-160)break;x.fillStyle=PALE;x.fillRect(M,y-28,W-2*M,64);x.fillStyle=TEAL;x.font='700 19px Arial';x.fillText(code,M+16,y);x.fillStyle=INK;x.font='600 17px Arial';fitText(x,clean(text),M+100,y,W-2*M-125,17);if(showCriteria&&assignment.criteria?.[code]){x.fillStyle=MUTED;x.font='400 13px Arial';fitText(x,`Criteria: ${clean(assignment.criteria[code])}`,M+100,y+23,W-2*M-125,13)}y+=76}return y}
  async function photoPages(d,title,attempt,outcomes){const photos=d?.outcomePhotos||{},available=outcomes.filter(([code])=>photos[code]?.data);for(let i=0;i<available.length;i+=4){const batch=available.slice(i,i+4),p=meta(newPage(`${title} - ${course.nvqUnits?'Learning Outcome':'KSB'} Photos`,`${title} | Attempt ${attempt}`),d.date,title,attempt),x=p.x;let y=sectionHeading(x,course.nvqUnits?'Learning Outcome Photographs':'KSB Photographs',p.y),gapX=22,gapY=32,cellW=(W-2*M-gapX)/2,cellH=cellW*9/16;for(let j=0;j<batch.length;j++){const [code,text]=batch[j],col=j%2,row=Math.floor(j/2),px=M+col*(cellW+gapX),py=y+row*(cellH+gapY+54),img=await loadImage(photos[code].data);x.fillStyle=PALE;x.fillRect(px,py,cellW,cellH);if(img){const scale=Math.max(cellW/img.width,cellH/img.height),iw=img.width*scale,ih=img.height*scale;x.save();x.beginPath();x.rect(px,py,cellW,cellH);x.clip();x.drawImage(img,px+(cellW-iw)/2,py+(cellH-ih)/2,iw,ih);x.restore()}x.fillStyle=TEAL;x.font='700 17px Arial';x.fillText(code,px,py+cellH+24);x.fillStyle=INK;x.font='400 13px Arial';wrap(x,text,cellW,'400 13px Arial').slice(0,2).forEach((line,k)=>x.fillText(line,px,py+cellH+43+k*16))}}}

  {const p=newPage(`Evidence Pack ${assignment.n}: ${assignment.title}`,`Unit ${assignment.unit}${assignment.optional?' | Optional unit':''}`),x=p.x;let y=p.y;x.fillStyle=PALE;x.fillRect(M,y,W-2*M,300);y+=46;[['Qualification',course.name],['Unit',assignment.unit],['Learner',profile.fullName],['Employer',profile.employer],['Assessor',profile.mentor]].forEach(([a,b])=>{label(x,a,M+28,y);value(x,b,M+300,y,21,true);y+=46});y=sectionHeading(x,'Learning Outcome Coverage',p.y+350);for(const [code,text] of assignment.ksbs){const count=Math.min(2,evidenceMap[code].length),colour=count>=2?GREEN:count===1?YELLOW:GREY;x.fillStyle=colour;x.fillRect(M,y-28,W-2*M,66);x.fillStyle=TEAL;x.font='700 20px Arial';x.fillText(`${code}  ${count}/2`,M+18,y);x.fillStyle=INK;x.font='600 16px Arial';fitText(x,clean(text),M+150,y,W-2*M-175,16);y+=78}const met=Object.values(evidenceMap).reduce((n,a)=>n+Math.min(2,a.length),0),total=(assignment.ksbs||[]).length*2;x.fillStyle=PALE;x.fillRect(M,y,W-2*M,78);label(x,'Overall evidence coverage',M+24,y+30);value(x,`${met} of ${total} requirements met`,M+330,y+31,22,true)}

  // Detailed LO matrix: shows every evidence type and its exact location.
  {let p=meta(newPage('Learning Outcome Evidence Matrix','Automatic mapping'),'-','Learning Outcome Matrix',1),x=p.x,y=sectionHeading(x,'Learning Outcome Mapping',p.y);x.fillStyle=MUTED;x.font='400 17px Arial';x.fillText('References show exactly where each learning outcome is evidenced in this portfolio.',M,y);y+=44;
   const header=()=>{x.fillStyle=TEAL;x.fillRect(M,y-24,W-2*M,38);x.fillStyle=WHITE;x.font='700 15px Arial';x.fillText('LO',M+14,y);x.fillText('Learning outcome',M+82,y);x.textAlign='right';x.fillText('Evidence location',W-M-16,y);x.textAlign='left';y+=54};header();
   for(const [code,text] of assignment.ksbs){const refs=evidenceMap[code]||[],refText=refs.length?refs.map(e=>e.ref).join('  '):'No evidence mapped';x.font='600 15px Arial';const desc=wrap(x,clean(text),W-2*M-390,'600 15px Arial');x.font='700 16px Arial';const refLines=wrap(x,refText,280,'700 16px Arial');const rowH=Math.max(58,Math.max(desc.length*20,refLines.length*21)+26);if(y+rowH>H-115){p=meta(newPage('Learning Outcome Evidence Matrix - Continued','Automatic mapping'),'-','Learning Outcome Matrix',1);x=p.x;y=sectionHeading(x,'Learning Outcome Mapping (continued)',p.y);header()}x.fillStyle=refs.length?PALE:'#fafafa';x.fillRect(M,y-25,W-2*M,rowH-6);x.fillStyle=TEAL;x.font='700 18px Arial';x.fillText(code,M+14,y);x.fillStyle=INK;x.font='600 15px Arial';desc.forEach((line,i)=>x.fillText(line,M+82,y+i*20));x.textAlign='right';x.fillStyle=refs.length?TEAL:MUTED;x.font='700 16px Arial';refLines.forEach((line,i)=>x.fillText(line,W-M-16,y+i*21));x.textAlign='left';y+=rowH}
   if(y+130>H-110){p=meta(newPage('Learning Outcome Evidence Key','Automatic mapping'),'-','Learning Outcome Matrix',1);x=p.x;y=sectionHeading(x,'Evidence Reference Key',p.y)}else y=sectionHeading(x,'Evidence Reference Key',y+12);const keys=['AO  Assessor Observation','LS  Learner Statement','WT  Witness Testimony','VW  Video Walkthrough','PD  Professional Discussion','PE  Photographic Evidence'];keys.forEach((t,i)=>{x.fillStyle=INK;x.font='600 16px Arial';x.fillText(t,M+(i%2)*520,y+Math.floor(i/2)*32)})}

  for(let i=0;i<(sections.practical||[]).length;i++){const d=sections.practical[i],attempt=i+1,outcomes=selectedScores(d),p=meta(newPage('Assessor Observation',`Attempt ${attempt}`),d.date,'Assessor Observation',attempt),x=p.x;let y=sectionHeading(x,'Observation Details',p.y);label(x,'Assessor',M,y);value(x,d.tutor,M+230,y,19,true);y+=40;label(x,'Activity observed',M,y);value(x,d.activity,M+230,y,18);y+=54;y=sectionHeading(x,'Learning Outcomes Observed',y);y=drawOutcomeRows(x,outcomes,y);y=sectionHeading(x,'Assessor Observation',y+8);y=paragraph(x,d.feedback||'-',y,Math.max(110,H-y-330));const sig=await loadImage(d.signature);signature(x,sig,Math.min(H-245,y+28),'Assessor signature');{const fp=meta(newPage('Assessor Observation Feedback',`Attempt ${attempt}`),d.date,'Assessor Observation',attempt),fx=fp.x;let fy=sectionHeading(fx,'Assessment Summary',fp.y);fy=paragraph(fx,d.feedbackSummary||d.feedback||'No assessment summary recorded.',fy,300)+24;fy=sectionHeading(fx,'Areas for Improvement',fy);paragraph(fx,d.feedbackDevelopment||'No areas for improvement recorded.',fy,300)}await photoPages(d,'Assessor Observation',attempt,outcomes)}
  for(let i=0;i<(sections.photos||[]).length;i++){const d=sections.photos[i],attempt=i+1,outcomes=selectedStatement(d),p=meta(newPage('Photographic Evidence',`Attempt ${attempt}`),d.date,'Photographic Evidence',attempt),x=p.x;let y=sectionHeading(x,'Learning Outcomes Evidenced',p.y);y=drawOutcomeRows(x,outcomes,y);y=sectionHeading(x,'Photographic Evidence Notes',y+8);y=paragraph(x,d.activity||'Photographs submitted as evidence for the selected learning outcomes.',y,Math.max(100,H-y-330));const sig=await loadImage(d.signature);signature(x,sig,Math.min(H-245,y+28),'Learner signature');await photoPages(d,'Photographic Evidence',attempt,outcomes)}
  for(let i=0;i<(sections.statement||[]).length;i++){const d=sections.statement[i],attempt=i+1,outcomes=selectedStatement(d),p=meta(newPage('Learner Statement',`Attempt ${attempt}`),d.date,'Learner Statement',attempt),x=p.x;let y=sectionHeading(x,'Learning Outcomes Evidenced',p.y);y=drawOutcomeRows(x,outcomes,y);y=sectionHeading(x,'Learner Statement',y+8);y=paragraph(x,d.text,y,Math.max(130,H-y-330));const sig=await loadImage(d.signature);signature(x,sig,Math.min(H-245,y+28),'Learner signature');await photoPages(d,'Learner Statement',attempt,outcomes)}
  for(let i=0;i<(sections.discussion||[]).length;i++){const d=sections.discussion[i],attempt=i+1,outcomes=selectedDiscussion(d),p=meta(newPage('Video Walkthrough',`Attempt ${attempt}`),d.date,'Video Walkthrough',attempt),x=p.x;let y=sectionHeading(x,'Walkthrough Details',p.y);label(x,'Walkthrough lead',M,y);value(x,d.assessor,M+230,y,19,true);y+=40;label(x,'Activity demonstrated',M,y);value(x,d.activity,M+230,y,18);y+=54;y=sectionHeading(x,'Recorded Learning Outcomes',y);for(const [code,text] of outcomes){if(y>H-350){break}x.fillStyle=PALE;x.fillRect(M,y-28,W-2*M,112);x.fillStyle=TEAL;x.font='700 19px Arial';x.fillText(code,M+16,y);x.fillStyle=INK;x.font='600 16px Arial';fitText(x,clean(text),M+100,y,W-2*M-125,16);const rec=d.recordings?.[code],note=String(d.notes?.[code]||'').trim();x.fillStyle=MUTED;x.font='400 14px Arial';x.fillText(`Video included in evidence package${rec?.duration?` | ${rec.duration}`:''}`,M+100,y+28);if(note){x.fillStyle=INK;x.font='400 14px Arial';fitText(x,`Notes: ${clean(note)}`,M+100,y+54,W-2*M-125,14)}y+=126}const sig=await loadImage(d.signature);signature(x,sig,Math.min(H-245,y+20),'Assessor / walkthrough lead signature')}
  for(let i=0;i<(sections.professionalDiscussion||[]).length;i++){const d=sections.professionalDiscussion[i],attempt=i+1,outcomes=selectedDiscussion(d),p=meta(newPage('Professional Discussion',`Attempt ${attempt}`),d.date,'Professional Discussion',attempt),x=p.x;let y=sectionHeading(x,'Discussion Details',p.y);label(x,'Discussion lead',M,y);value(x,d.assessor,M+230,y,19,true);y+=40;label(x,'Activity discussed',M,y);value(x,d.activity,M+230,y,18);y+=54;y=sectionHeading(x,'Recorded Learning Outcomes',y);for(const [code,text] of outcomes){if(y>H-350)break;x.fillStyle=PALE;x.fillRect(M,y-28,W-2*M,112);x.fillStyle=TEAL;x.font='700 19px Arial';x.fillText(code,M+16,y);x.fillStyle=INK;x.font='600 16px Arial';fitText(x,clean(text),M+100,y,W-2*M-125,16);const rec=d.recordings?.[code],note=String(d.notes?.[code]||'').trim();x.fillStyle=MUTED;x.font='400 14px Arial';x.fillText(`Audio included in evidence package${rec?.duration?` | ${rec.duration}`:''}`,M+100,y+28);if(note){x.fillStyle=INK;x.font='400 14px Arial';fitText(x,`Notes: ${clean(note)}`,M+100,y+54,W-2*M-125,14)}y+=126}const sig=await loadImage(d.signature);signature(x,sig,Math.min(H-245,y+20),'Assessor / discussion lead signature')}
  for(let i=0;i<(sections.witness||[]).length;i++){
    const d=sections.witness[i],attempt=i+1,p=meta(newPage('Witness Testimony',`Attempt ${attempt}`),d.date,'Witness Testimony',attempt),x=p.x;let y=sectionHeading(x,'Witness Details',p.y);
    [['Name',d.personName],['Role',d.role],['Organisation',d.organisation],['Activity witnessed',d.activity]].forEach(([a,b])=>{label(x,a,M,y);value(x,b,M+210,y,15,true);y+=30});
    y=sectionHeading(x,'Learning Outcomes Witnessed',y+4);y=drawAllOutcomeRows(x,d,y,380)+8;
    const sigTop=H-205,remaining=Math.max(180,sigTop-y-15),block=Math.floor(remaining/3);
    y=sectionHeading(x,'Witness Testimony',y);y=paragraph(x,d.feedback||'No testimony recorded.',y,Math.max(65,block))+8;
    y=sectionHeading(x,'Assessment Summary',y);y=paragraph(x,d.feedbackSummary||d.feedback||'No assessment summary recorded.',y,Math.max(55,block-8))+8;
    y=sectionHeading(x,'Areas for Improvement / Additional Comments',y);paragraph(x,[d.feedbackDevelopment,d.additionalComments].filter(Boolean).join('\n')||'No areas for improvement or additional comments recorded.',y,Math.max(50,sigTop-y-12));
    const sig=await loadImage(d.signature);signature(x,sig,sigTop,'Witness signature');
  }

  // Professional Discussion file index for NVQ evidence packs.
  {const audioTitles=[];for(let vi=0;vi<(sections.professionalDiscussion||[]).length;vi++){const version=sections.professionalDiscussion[vi];for(const [code,rec] of Object.entries(version.recordings||{}))if(rec?.data)audioTitles.push(`${code} - Professional Discussion - Attempt ${vi+1}${rec.duration?` (${rec.duration})`:''}`)}if(audioTitles.length){const p=meta(newPage('Professional Discussion Audio Files','Attached media'),'-','Professional Discussion',1),x=p.x;let y=sectionHeading(x,'Attached professional discussion files',p.y);x.fillStyle=MUTED;x.font='400 17px Arial';x.fillText('The playable audio files below are included in the downloaded evidence package.',M,y);y+=42;const available=H-y-145,lineH=Math.max(24,Math.min(38,Math.floor(available/Math.max(1,audioTitles.length)))),fontSize=Math.max(13,Math.min(19,lineH-7));audioTitles.forEach((name,i)=>{x.fillStyle=i%2?WHITE:PALE;x.fillRect(M,y-24,W-2*M,lineH);x.fillStyle=TEAL;x.font=`700 ${fontSize}px Arial`;x.fillText(`${i+1}.`,M+14,y);x.fillStyle=INK;x.font=`600 ${fontSize}px Arial`;fitText(x,clean(name),M+58,y,W-2*M-78,fontSize);y+=lineH})}}

  const total=pages.length;pages.forEach((p,i)=>{const x=p.ctx;x.fillStyle=p.colour||TEAL;x.fillRect(0,H-62,W,62);x.fillStyle=WHITE;x.font='600 17px Arial';x.fillText('Apprentice+ | NVQ Evidence Portfolio',M,H-25);x.textAlign='right';x.fillText(`Page ${i+1} of ${total}`,W-M,H-25);x.textAlign='left'});
  const jpegPages=pages.map(p=>dataUrlBytes(p.canvas.toDataURL('image/jpeg',0.90))),pdf=makeImagePDF(jpegPages,W,H),safe=clean(profile.fullName).replace(/[^a-z0-9]+/gi,'-').replace(/^-|-$/g,''),unit=String(assignment.unit||assignment.n).replace(/[^a-z0-9-]+/gi,'-'),pdfName=`${safe||'Learner'}-NVQ-Unit-${unit}-Evidence-Pack.pdf`;
  const walkthroughVideos=[];for(let vi=0;vi<(sections.discussion||[]).length;vi++){const version=sections.discussion[vi];for(const [code,rec] of Object.entries(version.recordings||{}))if(rec?.data)walkthroughVideos.push({code,rec,attempt:vi+1,type:'video'})}
  for(let vi=0;vi<(sections.professionalDiscussion||[]).length;vi++){const version=sections.professionalDiscussion[vi];for(const [code,rec] of Object.entries(version.recordings||{}))if(rec?.data)walkthroughVideos.push({code,rec,attempt:vi+1,type:'audio'})}
  if(walkthroughVideos.length){
    const entries=[{name:pdfName,data:pdf}],used=new Set();
    walkthroughVideos.forEach(({code,rec,attempt,type},i)=>{const mime=String(rec.type||'video/webm'),ext=mime.includes('mp4')?'.mp4':mime.includes('ogg')?'.ogg':mime.startsWith('audio/')?(mime.includes('mp4')?'.m4a':'.webm'):'.webm',label=type==='audio'?'Professional Discussion':'Video Walkthrough',base=safeZipName(`Attempt ${attempt} - ${code} ${label}`);let name=`${base}${ext}`;if(used.has(name.toLowerCase()))name=`${base}-${i+1}${ext}`;used.add(name.toLowerCase());entries.push({name:`${label} Recordings/${name}`,data:dataUrlBytes(rec.data)})});
    const packageName=`${safe||'Learner'}-NVQ-Unit-${unit}-Evidence-Package.zip`;
    if(returnPackage)return {assignmentNumber:assignment.n,pdfName,entries,packageName};
    await downloadBlob(makeZipBlob(entries),'application/zip',packageName);
  }else{
    const entries=[{name:pdfName,data:pdf}];
    if(returnPackage)return {assignmentNumber:assignment.n,pdfName,entries,packageName:pdfName};
    await downloadBlob(pdf,'application/pdf',pdfName);
  }
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
