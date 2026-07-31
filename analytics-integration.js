(function(){
'use strict';
const A=()=>window.ApprenticeAnalytics;
let currentScreen='unknown';
let screenEnteredAt=Date.now();
const startedScreens=new Map();
const DAILY_KEY='apprenticeplus.analytics.daily.v1';
function readDaily(){try{const d=JSON.parse(localStorage.getItem(DAILY_KEY)||'{}');return d&&typeof d==='object'?d:{}}catch{return {}}}
function writeDaily(d){try{localStorage.setItem(DAILY_KEY,JSON.stringify(d))}catch{}}
function dayKey(){return new Date().toISOString().slice(0,10)}
function countDaily(metric){const all=readDaily(),day=dayKey();if(!all[day])all[day]={};all[day][metric]=(all[day][metric]||0)+1;Object.keys(all).sort().slice(0,-7).forEach(k=>delete all[k]);writeDaily(all)}
function sendDailySummary(){const all=readDaily(),day=dayKey(),d=all[day]||{};if(!Object.keys(d).length)return;track('engagement_summary',{day_offset:0,screen_views:d.screen_views||0,ui_actions:d.ui_actions||0,assessments_started:d.assessments_started||0,assessments_completed:d.assessments_completed||0,exports:d.exports||0,tool_opens:d.tool_opens||0,evidence_actions:d.evidence_actions||0});}
const SAFE_DATA_KEYS=['action','view','tab','section','subject','type','tool','difficulty','scale','course','n','mode','kind','status'];
const RESULT_SCREENS=new Set(['trade_result','functional_result','epa_result','epa_discussion_result','epa_results','knowledge_result']);
const TEST_SCREENS=new Set(['trade_test','functional_test','epa_test','epa_discussion','epa_practical','knowledge_test']);
function slug(value,max=80){return String(value??'').toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_+|_+$/g,'').slice(0,max)||'unknown'}
function track(name,params){try{return A()?.trackEvent?.(name,params)}catch{return false}}
function safeDataset(el){const out={};if(!el?.dataset)return out;SAFE_DATA_KEYS.forEach(k=>{if(el.dataset[k]!=null&&el.dataset[k]!=='')out[k]=slug(el.dataset[k])});return out}
function controlId(el){return slug(el?.id||el?.getAttribute?.('name')||el?.getAttribute?.('role')||el?.tagName||'control')}
function controlType(el){if(!el)return'unknown';if(el.matches?.('a'))return el.hasAttribute('download')?'download_link':'link';if(el.matches?.('button'))return'button';if(el.matches?.('select'))return'select';if(el.matches?.('textarea'))return'textarea';if(el.matches?.('input'))return slug(el.type||'input');return slug(el.tagName||'control')}
function actionFrom(el){const id=controlId(el);const words=['submit','save','start','finish','complete','download','export','generate','open','close','pause','resume','delete','remove','add','record','play','print','search','select','view','retry','retake','install','update','send','upload'];return words.find(w=>id.includes(w))||'activate'}
function semanticFeature(el){const id=controlId(el);const classes=slug(el?.className||'');const combined=id+'_'+classes;const map=[['drawingmate','drawingmate'],['materialmate','materialmate'],['measuremate','measuremate'],['projectmate','projectmate'],['notepad','notemate'],['notemate','notemate'],['otj','otjmate'],['feedback','feedbackmate'],['certificate','certificates'],['functional','functional_skills'],['trade','trade_courses'],['epa','epa'],['walkthrough','video_walkthrough'],['witness','witness_testimony'],['discussion','professional_discussion'],['practical','practical_assessment'],['photo','photographic_evidence'],['statement','learner_statement'],['assignment','assignment'],['portfolio','portfolio'],['search','search'],['settings','settings'],['reward','rewards']];for(const [needle,value] of map)if(combined.includes(needle))return value;return currentScreen}
function screenCategory(screen){if(screen.startsWith('epa'))return'epa';if(screen.startsWith('functional'))return'functional_skills';if(screen.startsWith('trade'))return'trade_courses';if(screen.includes('knowledge'))return'knowledge';if(['measuremate','materialmate','drawingmate','feedbackmate','projectmate','otjmate','notepad','resources','tools'].includes(screen))return'toolbox';if(['assignment','section','walkthrough'].includes(screen))return'evidence';return screen}
function screenTransition(nextRaw){
 const next=slug(nextRaw);
 const now=Date.now();
 if(currentScreen!==next){
  if(currentScreen!=='unknown')track('feature_exit',{screen:currentScreen,category:screenCategory(currentScreen),duration_seconds:Math.max(1,Math.round((now-screenEnteredAt)/1000))});
  currentScreen=next;screenEnteredAt=now;track('feature_open',{screen:next,category:screenCategory(next)});countDaily('screen_views');if(screenCategory(next)==='toolbox')countDaily('tool_opens');
 }
 if(TEST_SCREENS.has(next)&&!startedScreens.has(next)){startedScreens.set(next,now);track('assessment_started',{assessment_type:next});countDaily('assessments_started');}
 if(RESULT_SCREENS.has(next)){const source=next.replace(/_result(s)?$/,'_test');const started=startedScreens.get(source)||startedScreens.get(next.replace('_result',''))||now;track('assessment_completed',{assessment_type:next,duration_seconds:Math.max(1,Math.round((now-started)/1000))});countDaily('assessments_completed');startedScreens.delete(source);}
}
function installScreenHook(){
 const original=A()?.trackScreen;
 if(typeof original!=='function')return;
 const wrapped=function(name){const result=original.call(A(),name);screenTransition(name);return result};
 A().trackScreen=wrapped;window.trackScreen=wrapped;
}
function clickHandler(event){
 const el=event.target?.closest?.('button,a,[role="button"],input[type="button"],input[type="submit"],label[data-action],[data-action]');if(!el)return;
 const info={screen:currentScreen,category:screenCategory(currentScreen),control_id:controlId(el),control_type:controlType(el),action:actionFrom(el),feature:semanticFeature(el),...safeDataset(el)};
 track('ui_action',info);countDaily('ui_actions');if(['photographic_evidence','learner_statement','video_walkthrough','witness_testimony','professional_discussion','practical_assessment'].includes(info.feature))countDaily('evidence_actions');
 const action=info.action,feature=info.feature;
 if(['download','export','print'].includes(action)||el.hasAttribute?.('download'))track('document_export',{screen:currentScreen,document_type:feature,action});countDaily('exports');
 if(action==='search')track('search_used',{screen:currentScreen,search_type:feature});
 if(action==='start'&&feature!=='unknown')track('feature_started',{feature,screen:currentScreen});
 if(['finish','complete','submit','send','save'].includes(action)&&feature!=='unknown')track('feature_completed',{feature,screen:currentScreen,action});
}
function changeHandler(event){
 const el=event.target;if(!el?.matches?.('input,select,textarea'))return;
 const params={screen:currentScreen,field_id:controlId(el),field_type:controlType(el),feature:semanticFeature(el),...safeDataset(el)};
 if(el.type==='file'){params.file_count=Number(el.files?.length||0);params.file_category=(el.accept||'').includes('video')?'video':(el.accept||'').includes('image')?'image':(el.accept||'').includes('audio')?'audio':'file';track('file_selected',params);return;}
 if(el.type==='checkbox'||el.type==='radio')params.state=el.checked?'on':'off';
 if(el.matches('select'))params.option_index=Math.max(0,el.selectedIndex);
 track('field_changed',params);
}
function submitHandler(event){const form=event.target;if(!form?.matches?.('form'))return;track('form_submitted',{screen:currentScreen,form_id:controlId(form),feature:semanticFeature(form)});}
function mediaHandler(event){const el=event.target;if(!el?.matches?.('video,audio'))return;track('media_'+event.type,{screen:currentScreen,media_type:el.tagName.toLowerCase(),media_id:controlId(el),duration_seconds:Number.isFinite(el.duration)?Math.round(el.duration):0});}
function installDownloadHooks(){
 const originalPrint=window.print;window.print=function(){track('document_export',{screen:currentScreen,document_type:'print_or_pdf',action:'print'});return originalPrint.apply(this,arguments)};
 const originalOpen=window.open;window.open=function(url,target,features){try{const u=String(url||'');if(u.startsWith('blob:')||/\.pdf($|\?)/i.test(u))track('document_export',{screen:currentScreen,document_type:'generated_document',action:'open'})}catch{}return originalOpen.apply(this,arguments)};
}
function installLifecycle(){
 document.addEventListener('click',clickHandler,true);document.addEventListener('change',changeHandler,true);document.addEventListener('submit',submitHandler,true);
 ['play','pause','ended'].forEach(type=>document.addEventListener(type,mediaHandler,true));
 window.addEventListener('beforeinstallprompt',()=>track('install_prompt_shown'));
 window.addEventListener('appinstalled',()=>track('app_installed'));
 window.addEventListener('apprenticeplus:update-ready',()=>track('update_available'));
 document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')track('feature_exit',{screen:currentScreen,category:screenCategory(currentScreen),duration_seconds:Math.max(1,Math.round((Date.now()-screenEnteredAt)/1000))})});
}
function init(){if(!A()){setTimeout(init,100);return}installScreenHook();installDownloadHooks();installLifecycle();A()?.setUserProperties?.({analytics_level:'full_anonymous',integration_version:'v1_5_55'});window.addEventListener('pagehide',sendDailySummary);document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')sendDailySummary()});track('analytics_integration_ready',{coverage:'dashboard_ready_full_anonymous'});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
