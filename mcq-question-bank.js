'use strict';

(function(global){
 const banks=Object.create(null);
 function key(courseId,assignment){return `${courseId}::${Number(assignment)}`}
 function register(courseId,assignment,questions){
  const bankKey=key(courseId,assignment);
  if(banks[bankKey])throw new Error(`MCQ bank already registered for ${bankKey}`);
  banks[bankKey]=Object.freeze((questions||[]).map(q=>Object.freeze({...q,courseId,assignment:Number(assignment),options:Object.freeze([...(q.options||[])])})));
 }
 function get(courseId,assignment){return banks[key(courseId,assignment)]||[]}
 function summary(){return Object.entries(banks).map(([bankKey,questions])=>({bankKey,total:questions.length,approved:questions.filter(q=>q.status==='approved').length}));}
 global.MCQQuestionBank=Object.freeze({version:'2.0.3-bricklayer-kb-challenging-set2',register,get,summary});
})(window);


window.MCQQuestionBank.register('bricklayer-st0095-v1-2',1,[
  {
    "ksb": "K1",
    "concept": "K1 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Who is legally responsible for health and safety on site?",
    "options": [
      "The site manager only",
      "Everyone on site, including yourself",
      "Your employer only",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Everyone has legal responsibilities under the Health and Safety at Work etc. Act 1974. Employers, supervisors and employees must all work safely, follow site rules and report hazards.",
    "id": "brick-approved-a1-k1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K2",
    "concept": "K2 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Which item of PPE should always be replaced if it becomes damaged?",
    "options": [
      "Safety boots",
      "High-visibility vest",
      "Safety helmet",
      "I don't know"
    ],
    "correct": 2,
    "explanation": "A damaged safety helmet may no longer protect you from falling objects or impacts. It should be replaced immediately and never repaired.",
    "id": "brick-approved-a1-k2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K3",
    "concept": "K3 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "You are asked to carry out work that isn't covered by the RAMS. What should you do?",
    "options": [
      "Continue if an experienced bricklayer approves",
      "Stop and ask for the RAMS to be reviewed",
      "Work carefully until the supervisor returns",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "RAMS must reflect the work being carried out. If they do not, work should stop until suitable controls are in place.",
    "id": "brick-approved-a1-k3",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B1",
    "concept": "B1 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "You notice another apprentice working unsafely. What should you do?",
    "options": [
      "Ignore it if they have more experience",
      "Report it or challenge it safely if appropriate",
      "Wait until the end of the day",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Professional bricklayers have a responsibility to help maintain a safe workplace. Unsafe behaviour should be challenged appropriately or reported before someone is injured.",
    "id": "brick-approved-a1-b1",
    "type": "Behaviour",
    "status": "approved"
  }
,
  {
    "ksb": "K1",
    "concept": "K1 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A bricklayer is asked to chase a wall in a refurbishment area where the survey information is missing. What is the safest response?",
    "options": [
      "Use hand tools to reduce dust",
      "Stop work and confirm the asbestos information before disturbing the material",
      "Wear a disposable mask and continue",
      "Ask another trade whether the wall looks safe"
    ],
    "correct": 1,
    "explanation": "Unknown materials in refurbishment work must not be disturbed until asbestos information and suitable controls are confirmed.",
    "id": "brick-challenging-set1-a1-k1-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K2",
    "concept": "K2 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "During repeated dry cutting, an operative wears an FFP3 mask but the extraction unit is disconnected. Why is this still unacceptable?",
    "options": [
      "RPE replaces the need for extraction",
      "LEV or dust suppression should control dust at source, with suitable RPE as additional protection",
      "Only eye protection is required outdoors",
      "An FFP3 mask is only needed when mixing mortar"
    ],
    "correct": 1,
    "explanation": "Dust should be controlled at source using effective extraction or suppression; RPE is an additional control, not a substitute.",
    "id": "brick-challenging-set1-a1-k2-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K3",
    "concept": "K3 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A method statement specifies a mechanical lifting aid, but the aid is unavailable when heavy lintels arrive. What should happen?",
    "options": [
      "Lift the lintels manually with extra workers",
      "Change the sequence without recording it",
      "Stop the task until the safe system is reviewed and suitable equipment is provided",
      "Proceed because the delivery driver is waiting"
    ],
    "correct": 2,
    "explanation": "Work must follow the agreed safe system. A missing control requires the task to stop and the RAMS to be reviewed.",
    "id": "brick-challenging-set1-a1-k3-3",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B1",
    "concept": "B1 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A supervisor asks the team to skip an edge-protection check to recover lost time. Which response best demonstrates B1?",
    "options": [
      "Agree because the supervisor is accountable",
      "Carry on but work more slowly",
      "Explain the safety concern and do not start until the protection is confirmed",
      "Ask someone else to work near the edge first"
    ],
    "correct": 2,
    "explanation": "Putting health, safety and wellbeing first means refusing unsafe shortcuts and ensuring controls are effective before work starts.",
    "id": "brick-challenging-set1-a1-b1-4",
    "type": "Behaviour",
    "status": "approved"
  }
,
  {
    "ksb": "K1",
    "concept": "K1 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "During refurbishment, a bricklayer finds a damaged board labelled as potentially containing asbestos beside the planned work area. What is the correct response?",
    "options": [
      "Move it carefully to one side",
      "Stop work, prevent disturbance and report it under the site asbestos procedure",
      "Wet it and continue working nearby",
      "Break it into smaller pieces for disposal"
    ],
    "correct": 1,
    "explanation": "Suspected asbestos-containing material must not be disturbed. Work should stop and the site procedure followed.",
    "id": "brick-challenging-set2-a1-k1-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K2",
    "concept": "K2 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A worker has the correct RPE for cutting masonry but has not completed a face-fit test. Why should the task not begin?",
    "options": [
      "The mask colour may not match the site rules",
      "The protection level cannot be relied upon without a suitable face fit",
      "Face-fit testing is only needed for welding",
      "RPE is unnecessary when cutting outdoors"
    ],
    "correct": 1,
    "explanation": "Tight-fitting RPE must fit the individual wearer correctly; otherwise contaminated air can leak around the seal.",
    "id": "brick-challenging-set2-a1-k2-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K3",
    "concept": "K3 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A toolbox talk identifies a new vehicle route crossing the mortar-mixing area. What is the best next step?",
    "options": [
      "Continue using the area until an incident occurs",
      "Update the task controls and relocate or segregate the mixing area before work continues",
      "Ask drivers to sound their horns",
      "Work faster whenever vehicles approach"
    ],
    "correct": 1,
    "explanation": "Changed site conditions require the safe system of work and controls to be reviewed before continuing.",
    "id": "brick-challenging-set2-a1-k3-3",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B1",
    "concept": "B1 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A colleague appears exhausted and is making repeated errors while working from a scaffold. What action best puts wellbeing and safety first?",
    "options": [
      "Ignore it because they are responsible for themselves",
      "Speak to them and the supervisor, pause the task and arrange suitable support",
      "Give them stronger coffee and continue",
      "Complete their checks without telling anyone"
    ],
    "correct": 1,
    "explanation": "Health, safety and wellbeing come before production, so concerns should be raised and the task paused if necessary.",
    "id": "brick-challenging-set2-a1-b1-4",
    "type": "Behaviour",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register('bricklayer-st0095-v1-2',2,[
  {
    "ksb": "K4",
    "concept": "K4 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why should mortar never be washed into a surface drain?",
    "options": [
      "It stains the brickwork",
      "It weakens the mortar",
      "It can pollute watercourses and block drainage",
      "I don't know"
    ],
    "correct": 2,
    "explanation": "Mortar is highly alkaline. Allowing it into drains can pollute rivers and streams and may breach environmental regulations.",
    "id": "brick-approved-a2-k4",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K5",
    "concept": "K5 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Which action is most likely to reduce brick waste?",
    "options": [
      "Accurate setting out before work starts",
      "Ordering extra bricks",
      "Using a wetter mortar mix",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Good setting out reduces unnecessary cuts and mistakes, helping to minimise waste and improve productivity.",
    "id": "brick-approved-a2-k5",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K7",
    "concept": "K7 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Which document sets the standard for the workmanship of brickwork?",
    "options": [
      "BS EN 771-1",
      "BS EN 998-2",
      "BS 8000-3",
      "I don't know"
    ],
    "correct": 2,
    "explanation": "BS 8000-3 provides guidance on the workmanship expected when carrying out masonry construction, including brickwork.",
    "id": "brick-approved-a2-k7",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B2",
    "concept": "B2 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "You realise you've laid a course out of line. What should you do?",
    "options": [
      "Continue and hope it isn't noticed",
      "Correct it as soon as possible and inform your supervisor if necessary",
      "Hide it when pointing",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Taking responsibility for mistakes is a key professional behaviour. Correcting defects early usually saves time, money and materials.",
    "id": "brick-approved-a2-b2",
    "type": "Behaviour",
    "status": "approved"
  }
,
  {
    "ksb": "K4",
    "concept": "K4 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Which waste-management decision best reduces environmental impact when a pallet contains usable bricks, broken clean masonry and contaminated packaging?",
    "options": [
      "Place everything in mixed waste",
      "Reuse sound bricks, segregate clean masonry for recycling and dispose of contaminated packaging through the correct route",
      "Crush all materials together on site",
      "Burn the packaging and reuse the ash"
    ],
    "correct": 1,
    "explanation": "The waste hierarchy prioritises reuse, then recycling, with controlled disposal for materials that cannot be recovered safely.",
    "id": "brick-challenging-set1-a2-k4-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K5",
    "concept": "K5 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A newly built cavity wall has insulation gaps and poorly sealed service penetrations. What is the most likely combined consequence?",
    "options": [
      "Improved ventilation and lower heat loss",
      "Reduced airtightness, thermal bridging and increased condensation risk",
      "Stronger masonry and faster drying",
      "No effect once plasterboard is installed"
    ],
    "correct": 1,
    "explanation": "Gaps and unsealed penetrations increase uncontrolled air leakage and heat loss and can create cold surfaces where condensation forms.",
    "id": "brick-challenging-set1-a2-k5-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K7",
    "concept": "K7 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A drawing detail conflicts with a manufacturer-approved cavity tray installation detail. What should the bricklayer do?",
    "options": [
      "Choose the quickest detail",
      "Follow the drawing because drawings always override specifications",
      "Raise the discrepancy and obtain clarification before installation",
      "Combine both details without approval"
    ],
    "correct": 2,
    "explanation": "Conflicting technical requirements must be clarified by the responsible person before work proceeds to ensure compliance.",
    "id": "brick-challenging-set1-a2-k7-3",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B2",
    "concept": "B2 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Which action best demonstrates environmental responsibility while cutting bricks?",
    "options": [
      "Cut every brick individually without planning",
      "Plan cuts, use offcuts where suitable and operate dust suppression correctly",
      "Discard all offcuts to keep the area tidy",
      "Use dry cutting because it is faster"
    ],
    "correct": 1,
    "explanation": "Planning cuts reduces waste, suitable offcuts can be reused, and dust suppression limits environmental and health impacts.",
    "id": "brick-challenging-set1-a2-b2-4",
    "type": "Behaviour",
    "status": "approved"
  }
,
  {
    "ksb": "K4",
    "concept": "K4 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Which action best prevents surface-water contamination when cleaning masonry tools?",
    "options": [
      "Wash cement residue into a road drain",
      "Use a designated washout area that contains and manages contaminated water",
      "Rinse tools beside a watercourse",
      "Dilute the residue with extra water"
    ],
    "correct": 1,
    "explanation": "Cementitious wash water is highly alkaline and must be contained and managed rather than entering surface-water drains.",
    "id": "brick-challenging-set2-a2-k4-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K5",
    "concept": "K5 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why can excessive uncontrolled ventilation reduce the energy performance of a completed building?",
    "options": [
      "It makes insulation stronger",
      "It increases unintended heat loss and can undermine airtightness targets",
      "It prevents all condensation",
      "It increases the thermal mass of masonry"
    ],
    "correct": 1,
    "explanation": "Uncontrolled air leakage increases heat loss and can compromise designed airtightness and energy performance.",
    "id": "brick-challenging-set2-a2-k5-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K7",
    "concept": "K7 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A warranty provider detail specifies a larger cavity than the drawing. What should happen before work starts?",
    "options": [
      "Use whichever dimension saves materials",
      "Raise the conflict and obtain an approved clarification",
      "Average the two dimensions",
      "Follow the verbal instruction of the nearest operative"
    ],
    "correct": 1,
    "explanation": "Conflicting requirements must be formally clarified before work proceeds.",
    "id": "brick-challenging-set2-a2-k7-3",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B2",
    "concept": "B2 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "What best demonstrates environmental consideration when mortar is left at the end of a shift?",
    "options": [
      "Wash it into the drainage system",
      "Use it on any nearby wall regardless of specification",
      "Minimise surplus through accurate batching and dispose of unavoidable waste correctly",
      "Leave it uncovered for the next day"
    ],
    "correct": 2,
    "explanation": "Accurate batching reduces waste, and unavoidable residue must follow the correct disposal route.",
    "id": "brick-challenging-set2-a2-b2-4",
    "type": "Behaviour",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register('bricklayer-st0095-v1-2',3,[
  {
    "ksb": "K10",
    "concept": "K10 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Before starting work from a drawing, what should you check first?",
    "options": [
      "The drawing scale",
      "The name of the designer",
      "That you have the latest revision",
      "I don't know"
    ],
    "correct": 2,
    "explanation": "Construction drawings are regularly updated. Always use the latest approved revision to avoid building from outdated information.",
    "id": "brick-approved-a3-k10",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K9",
    "concept": "K9 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "What is a key advantage of factory-produced masonry panels?",
    "options": [
      "They eliminate the need for foundations",
      "They reduce construction time and improve consistency",
      "They remove the need for wall ties",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Factory-built panels are manufactured under controlled conditions, improving quality and reducing installation time on site.",
    "id": "brick-approved-a3-k9",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K11",
    "concept": "K11 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why should you always use the latest drawing revision?",
    "options": [
      "It uses the correct paper size",
      "It contains the most up-to-date construction information",
      "It is easier to read",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Construction drawings are updated throughout a project. Using an outdated revision can lead to errors, rework and non-compliant construction.",
    "id": "brick-approved-a3-k11",
    "type": "Knowledge",
    "status": "approved"
  }
,
  {
    "ksb": "K10",
    "concept": "K10 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A plan is drawn at 1:50 and shows a wall length of 86 mm. What full-size length should be set out?",
    "options": [
      "1.72 m",
      "4.30 m",
      "43.0 m",
      "0.43 m"
    ],
    "correct": 1,
    "explanation": "At 1:50, 86 mm represents 86 × 50 = 4300 mm, or 4.30 m.",
    "id": "brick-challenging-set1-a3-k10-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K9",
    "concept": "K9 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why might a masonry support system be specified above a wide opening in a framed building?",
    "options": [
      "To replace all cavity insulation",
      "To transfer the load of masonry safely back to the structural frame",
      "To remove the need for movement joints",
      "To allow bricks to be laid without mortar"
    ],
    "correct": 1,
    "explanation": "Masonry support systems carry masonry loads and transfer them into the structural frame where traditional support is not available.",
    "id": "brick-challenging-set1-a3-k9-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K11",
    "concept": "K11 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A digital model shows a service passing through the proposed wall line. What is the main benefit of identifying this before construction?",
    "options": [
      "It removes the need to read drawings",
      "It allows coordination and clash resolution before work and materials are committed",
      "It automatically changes the structural design",
      "It guarantees the service has already been installed"
    ],
    "correct": 1,
    "explanation": "Digital coordination can reveal clashes early, allowing approved changes before they cause rework, delay or safety risks.",
    "id": "brick-challenging-set1-a3-k11-3",
    "type": "Knowledge",
    "status": "approved"
  }
,
  {
    "ksb": "K10",
    "concept": "K10 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A section drawing shows a DPC 150 mm above finished external ground level. What should the bricklayer do if the site level would leave only 80 mm?",
    "options": [
      "Build to 80 mm because the ground is already formed",
      "Raise the discrepancy before laying and obtain an approved solution",
      "Add a thicker bed joint below the DPC",
      "Ignore the section and follow the elevation"
    ],
    "correct": 1,
    "explanation": "The discrepancy affects moisture protection and must be resolved before construction.",
    "id": "brick-challenging-set2-a3-k10-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K9",
    "concept": "K9 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "What is a key advantage of using prefabricated masonry components in rapid-build construction?",
    "options": [
      "They remove the need for setting out",
      "They can improve consistency and reduce site installation time when correctly coordinated",
      "They eliminate lifting risks",
      "They allow specifications to be ignored"
    ],
    "correct": 1,
    "explanation": "Prefabrication can improve consistency and speed, but still requires accurate coordination and safe installation.",
    "id": "brick-challenging-set2-a3-k9-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K11",
    "concept": "K11 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A BIM model and printed drawing show different lintel levels. Which source should be assumed correct?",
    "options": [
      "The newest-looking one",
      "Neither until the discrepancy is checked through the project information-control process",
      "The printed copy because paper is permanent",
      "The digital model because software cannot be wrong"
    ],
    "correct": 1,
    "explanation": "Conflicting controlled information must be checked and clarified rather than assumed.",
    "id": "brick-challenging-set2-a3-k11-3",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register('bricklayer-st0095-v1-2',4,[
  {
    "ksb": "K8",
    "concept": "K8 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Which facing brick classification is suitable for severe exposure?",
    "options": [
      "F2/S2",
      "F1/S1",
      "F1/S2",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "F2 bricks have high frost resistance, while S2 indicates higher resistance to soluble salts, making F2/S2 suitable for severe exposure.",
    "id": "brick-approved-a4-k8",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K6",
    "concept": "K6 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "What is the main purpose of a cavity in a cavity wall?",
    "options": [
      "Reduce the amount of mortar used",
      "Improve moisture resistance and thermal performance",
      "Make bricklaying quicker",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "The cavity helps prevent moisture reaching the inner leaf and improves the wall's thermal performance when correctly insulated.",
    "id": "brick-approved-a4-k6",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K12",
    "concept": "K12 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "What is the main reason for calculating material quantities before work starts?",
    "options": [
      "To reduce waste and avoid material shortages",
      "To make bricklaying quicker",
      "To reduce the number of deliveries",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Accurate estimating ensures enough materials are available while reducing waste, unnecessary costs and delays.",
    "id": "brick-approved-a4-k12",
    "type": "Knowledge",
    "status": "approved"
  }
,
  {
    "ksb": "K8",
    "concept": "K8 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Facing bricks are specified for severe exposure near the coast. Which combination is most important when selecting them?",
    "options": [
      "Colour and pallet size only",
      "Suitable frost resistance and soluble-salt classification",
      "Lowest compressive strength available",
      "Highest water absorption available"
    ],
    "correct": 1,
    "explanation": "Bricks in severe exposure require appropriate durability classifications, including frost resistance and resistance to soluble salts.",
    "id": "brick-challenging-set1-a4-k8-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K6",
    "concept": "K6 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why must cavity wall ties be installed at the specified spacing, embedment and orientation?",
    "options": [
      "To make pointing easier",
      "To connect the leaves, transfer lateral loads and avoid directing moisture inward",
      "To reduce the number of insulation boards",
      "To support floor finishes"
    ],
    "correct": 1,
    "explanation": "Correctly installed ties connect the leaves structurally and should be oriented so moisture is not carried across the cavity.",
    "id": "brick-challenging-set1-a4-k6-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K12",
    "concept": "K12 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A 10 m² single-leaf wall uses 60 bricks per m² and a 7.5% allowance is required. Approximately how many bricks should be ordered?",
    "options": [
      "600",
      "615",
      "645",
      "675"
    ],
    "correct": 2,
    "explanation": "The basic quantity is 600 bricks. Adding 7.5% gives 645 bricks.",
    "id": "brick-challenging-set1-a4-k12-3",
    "type": "Knowledge",
    "status": "approved"
  }
,
  {
    "ksb": "K8",
    "concept": "K8 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why should high-suction bricks sometimes be controlled before laying in hot conditions?",
    "options": [
      "To increase their weight",
      "To prevent them drawing water too quickly from the mortar and weakening bond development",
      "To make them darker",
      "To eliminate the need for curing"
    ],
    "correct": 1,
    "explanation": "Excessive suction can remove water from mortar too rapidly, reducing workability and bond.",
    "id": "brick-challenging-set2-a4-k8-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K6",
    "concept": "K6 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "What is the main purpose of correctly installed cavity insulation retainers?",
    "options": [
      "To hold wall ties horizontally",
      "To keep insulation securely positioned and maintain the designed cavity arrangement",
      "To replace fire stopping",
      "To support the outer leaf vertically"
    ],
    "correct": 1,
    "explanation": "Retainers help keep insulation correctly located so the cavity performs as designed.",
    "id": "brick-challenging-set2-a4-k6-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K12",
    "concept": "K12 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A wall requires 840 blocks, including waste. Blocks are supplied in packs of 72. What is the minimum number of full packs required?",
    "options": [
      "10",
      "11",
      "12",
      "13"
    ],
    "correct": 2,
    "explanation": "840 divided by 72 is 11.67, so 12 full packs are required.",
    "id": "brick-challenging-set2-a4-k12-3",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register('bricklayer-st0095-v1-2',5,[
  {
    "ksb": "K13",
    "concept": "K13 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Which tool is primarily used to maintain a straight course of brickwork?",
    "options": [
      "Spirit level",
      "Brick trowel",
      "Line and pins",
      "I don't know"
    ],
    "correct": 2,
    "explanation": "A line and pins provide a straight guide for each course, helping maintain alignment and producing accurate brickwork.",
    "id": "brick-approved-a5-k13",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K14",
    "concept": "K14 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Which disc should normally be fitted when cutting bricks with a cut-off saw?",
    "options": [
      "Diamond blade",
      "Wood cutting blade",
      "Grinding disc",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Diamond blades are designed for cutting masonry safely and accurately while producing a clean finish.",
    "id": "brick-approved-a5-k14",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B1",
    "concept": "B1 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "You notice another apprentice working unsafely. What should you do?",
    "options": [
      "Ignore it if they have more experience",
      "Report it or challenge it safely if appropriate",
      "Wait until the end of the day",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Professional bricklayers have a responsibility to help maintain a safe workplace. Unsafe behaviour should be challenged appropriately or reported before someone is injured.",
    "id": "brick-approved-a5-b1",
    "type": "Behaviour",
    "status": "approved"
  }
,
  {
    "ksb": "K13",
    "concept": "K13 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A spirit level gives different readings when reversed on the same surface. What does this indicate?",
    "options": [
      "The wall is definitely level",
      "The level may be inaccurate and should be checked or removed from use",
      "The bubble needs warming",
      "The surface must be dry before testing"
    ],
    "correct": 1,
    "explanation": "A reliable level should give a consistent reading when reversed. Different readings indicate possible calibration or damage.",
    "id": "brick-challenging-set1-a5-k13-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K14",
    "concept": "K14 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A disc cutter begins to vibrate excessively during a cut. What is the correct action?",
    "options": [
      "Grip it harder and finish the cut",
      "Increase speed to stabilise it",
      "Stop, isolate it and inspect the disc, guard and machine before reuse",
      "Remove the guard to see the disc clearly"
    ],
    "correct": 2,
    "explanation": "Unexpected vibration can indicate a damaged disc, poor fitting or machine defect. The equipment must be stopped and inspected.",
    "id": "brick-challenging-set1-a5-k14-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B1",
    "concept": "B1 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A damaged guard is found on the mixer immediately before a large pour. What action best reflects B1?",
    "options": [
      "Use it carefully for one batch",
      "Remove it from service, report the defect and obtain safe equipment",
      "Ask a colleague to stand beside the moving parts",
      "Operate it only at half load"
    ],
    "correct": 1,
    "explanation": "Unsafe equipment must be taken out of service and reported rather than used under production pressure.",
    "id": "brick-challenging-set1-a5-b1-3",
    "type": "Behaviour",
    "status": "approved"
  }
,
  {
    "ksb": "K13",
    "concept": "K13 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A brick trowel has a loose handle. What is the safest action?",
    "options": [
      "Wrap tape around it and continue",
      "Remove it from use until it is repaired or replaced",
      "Use it only for pointing",
      "Soak the handle in water"
    ],
    "correct": 1,
    "explanation": "A loose handle can fail unexpectedly and the tool should not be used until safe.",
    "id": "brick-challenging-set2-a5-k13-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K14",
    "concept": "K14 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why must the maximum diameter and speed rating of a cutting disc match the power tool?",
    "options": [
      "To improve colour matching",
      "To prevent overspeed, poor guarding and potential disc failure",
      "To reduce the need for training",
      "To make the tool quieter"
    ],
    "correct": 1,
    "explanation": "An unsuitable disc can be oversped or inadequately guarded, creating a serious failure risk.",
    "id": "brick-challenging-set2-a5-k14-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B1",
    "concept": "B1 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A power lead has exposed inner insulation but the tool still works. What should the bricklayer do?",
    "options": [
      "Use it only in dry weather",
      "Tape it temporarily and finish the job",
      "Isolate and remove the tool from use, then report the defect",
      "Ask a colleague to hold the cable clear"
    ],
    "correct": 2,
    "explanation": "Damaged electrical equipment must be taken out of service and reported.",
    "id": "brick-challenging-set2-a5-b1-3",
    "type": "Behaviour",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register('bricklayer-st0095-v1-2',6,[
  {
    "ksb": "K21",
    "concept": "K21 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "What is the main purpose of a cavity tray above a window opening?",
    "options": [
      "Support the lintel",
      "Prevent moisture reaching the inner leaf",
      "Hold the wall ties in place",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "A cavity tray collects water within the cavity and directs it out through weep holes, preventing damp from reaching the inside of the building.",
    "id": "brick-approved-a6-k21",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K22",
    "concept": "K22 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "What is the main function of a wall tie?",
    "options": [
      "Hold insulation against the inner leaf",
      "Connect the inner and outer leaves while allowing movement",
      "Support the DPC",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Wall ties provide structural restraint between the two leaves of a cavity wall while allowing small amounts of movement.",
    "id": "brick-approved-a6-k22",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B3",
    "concept": "B3 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A customer asks you a question you don't know the answer to. What is the best response?",
    "options": [
      "Make an educated guess",
      "Politely explain you'll find the correct information",
      "Tell them to ask someone else",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Being honest and respectful builds trust. If you are unsure, seek the correct information rather than giving incorrect advice.",
    "id": "brick-approved-a6-b3",
    "type": "Behaviour",
    "status": "approved"
  }
,
  {
    "ksb": "K21",
    "concept": "K21 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "When setting out a cavity wall opening, which check most directly prevents the reveals from becoming out of square?",
    "options": [
      "Checking only the overall wall length",
      "Comparing the diagonals and confirming lines with a square",
      "Increasing the bed-joint thickness",
      "Setting the lintel before the first course"
    ],
    "correct": 1,
    "explanation": "Equal diagonals and square checks confirm that the opening and wall lines are correctly set out.",
    "id": "brick-challenging-set1-a6-k21-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K22",
    "concept": "K22 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why are weep holes installed above a cavity tray over an opening?",
    "options": [
      "To ventilate the room",
      "To allow moisture collected by the tray to discharge through the outer leaf",
      "To support the lintel",
      "To hold insulation against the inner leaf"
    ],
    "correct": 1,
    "explanation": "Weep holes provide a drainage route for water intercepted by the cavity tray.",
    "id": "brick-challenging-set1-a6-k22-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B3",
    "concept": "B3 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "An opening is found to be 12 mm outside the specified width before the lintel is installed. What best demonstrates ownership?",
    "options": [
      "Continue and leave it for the window installer",
      "Adjust the next courses without telling anyone",
      "Stop, report the deviation and correct it using an agreed method",
      "Record it only after the wall is complete"
    ],
    "correct": 2,
    "explanation": "Taking ownership means identifying, reporting and correcting non-compliant work before it creates further defects.",
    "id": "brick-challenging-set1-a6-b3-3",
    "type": "Behaviour",
    "status": "approved"
  }
,
  {
    "ksb": "K21",
    "concept": "K21 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why is a gauge rod useful when setting out an opening in cavity walling?",
    "options": [
      "It calculates mortar strength",
      "It controls course heights and helps align openings, lintels and features accurately",
      "It measures cavity width automatically",
      "It replaces a spirit level"
    ],
    "correct": 1,
    "explanation": "A gauge rod provides consistent vertical course control and feature alignment.",
    "id": "brick-challenging-set2-a6-k21-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K22",
    "concept": "K22 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "What defect can result if cavity insulation is pushed tightly against mortar droppings bridging the cavity?",
    "options": [
      "Improved thermal performance",
      "A path for moisture to cross toward the inner leaf",
      "Higher compressive strength",
      "Reduced need for wall ties"
    ],
    "correct": 1,
    "explanation": "Mortar bridges can transfer moisture across the cavity, especially where insulation is forced against them.",
    "id": "brick-challenging-set2-a6-k22-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B3",
    "concept": "B3 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A wall tie has been omitted in a completed section that is still accessible. What action shows ownership?",
    "options": [
      "Cover it with insulation",
      "Record and report it, then correct it using the approved method",
      "Leave it because one tie makes no difference",
      "Ask the next trade to decide"
    ],
    "correct": 1,
    "explanation": "Ownership means acknowledging the defect and ensuring an approved correction before concealment.",
    "id": "brick-challenging-set2-a6-b3-3",
    "type": "Behaviour",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register('bricklayer-st0095-v1-2',7,[
  {
    "ksb": "K17",
    "concept": "K17 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Which joint profile provides the best resistance to rain penetration?",
    "options": [
      "Recessed joint",
      "Bucket handle joint",
      "Flush joint",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "The bucket handle joint compresses the mortar, creating a dense finish that improves resistance to water penetration.",
    "id": "brick-approved-a7-k17",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K19",
    "concept": "K19 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why are movement joints installed in long lengths of brickwork?",
    "options": [
      "To improve appearance",
      "To allow expansion and contraction without cracking",
      "To reduce the amount of mortar required",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Brickwork expands and contracts with temperature and moisture changes. Movement joints reduce the risk of uncontrolled cracking.",
    "id": "brick-approved-a7-k19",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K20",
    "concept": "K20 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "What should never be done once mortar has begun its initial set?",
    "options": [
      "Protect it from drying out",
      "Cover it between uses",
      "Add water and remix it",
      "I don't know"
    ],
    "correct": 2,
    "explanation": "Adding water after mortar has begun its initial set weakens the mix and can reduce the strength and durability of the finished brickwork.",
    "id": "brick-approved-a7-k20",
    "type": "Knowledge",
    "status": "approved"
  }
,
  {
    "ksb": "K17",
    "concept": "K17 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Which joint finish is generally most effective at shedding rainwater on exposed brickwork?",
    "options": [
      "Deep recessed",
      "Weather-struck",
      "Raked-out",
      "Unfinished flush"
    ],
    "correct": 1,
    "explanation": "A properly formed weather-struck joint creates a sloping face that helps shed water from the masonry surface.",
    "id": "brick-challenging-set1-a7-k17-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K19",
    "concept": "K19 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why should brickwork movement joints remain free from mortar bridges?",
    "options": [
      "Mortar makes the sealant too dark",
      "A rigid bridge prevents movement and can cause cracking beside the joint",
      "It reduces the strength of every brick",
      "It stops wall ties being installed"
    ],
    "correct": 1,
    "explanation": "Movement joints need to accommodate expansion and contraction; rigid mortar bridges restrain movement and transfer stress into the wall.",
    "id": "brick-challenging-set1-a7-k19-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K20",
    "concept": "K20 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A mortar batch is mixed with inconsistent amounts of water between loads. What is the most likely effect?",
    "options": [
      "Identical strength and colour",
      "Variation in workability, strength and finished appearance",
      "Faster brick production with no quality effect",
      "Improved resistance to all weather conditions"
    ],
    "correct": 1,
    "explanation": "Inconsistent gauging changes the water-cement ratio and workability, leading to variable strength, curing and colour.",
    "id": "brick-challenging-set1-a7-k20-3",
    "type": "Knowledge",
    "status": "approved"
  }
,
  {
    "ksb": "K17",
    "concept": "K17 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "What is a likely consequence of tooling joints after the mortar has become too hard?",
    "options": [
      "A denser brick face",
      "Poor compaction and an uneven, weak joint finish",
      "Increased wall-tie strength",
      "Improved bond between courses"
    ],
    "correct": 1,
    "explanation": "Late tooling can prevent proper compaction and leave an inconsistent finish.",
    "id": "brick-challenging-set2-a7-k17-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K19",
    "concept": "K19 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why is compressible filler used within a masonry movement joint?",
    "options": [
      "To bond both sides rigidly",
      "To accommodate movement while supporting the sealant profile",
      "To replace wall ties",
      "To absorb rainwater permanently"
    ],
    "correct": 1,
    "explanation": "The filler allows movement and helps form the correct sealed joint arrangement.",
    "id": "brick-challenging-set2-a7-k19-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K20",
    "concept": "K20 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why should cement and sand be accurately gauged for each mortar batch?",
    "options": [
      "To ensure consistent proportions, performance and colour",
      "To make every batch set instantly",
      "To avoid using clean water",
      "To eliminate the need for mixing"
    ],
    "correct": 0,
    "explanation": "Consistent gauging produces more uniform workability, strength and appearance.",
    "id": "brick-challenging-set2-a7-k20-3",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register('bricklayer-st0095-v1-2',8,[
  {
    "ksb": "K15",
    "concept": "K15 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Which bond is most commonly used for the outer leaf of a modern cavity wall?",
    "options": [
      "English bond",
      "Stretcher bond",
      "Flemish bond",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Stretcher bond is commonly used because wall ties connect the two leaves, removing the need for headers through the cavity.",
    "id": "brick-approved-a8-k15",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K16",
    "concept": "K16 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "What is the purpose of a gauge rod when building brickwork?",
    "options": [
      "To check wall thickness",
      "To maintain consistent course heights",
      "To measure cavity width",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "A gauge rod marks the height of each course, helping maintain accurate gauge and reducing cumulative errors.",
    "id": "brick-approved-a8-k16",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K18",
    "concept": "K18 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "What is the maximum recommended projection of a corbel course?",
    "options": [
      "Half a brick",
      "One-quarter of a brick",
      "One-third of a brick",
      "I don't know"
    ],
    "correct": 2,
    "explanation": "Limiting each corbel course to about one-third of the brick width helps maintain stability and reduces the risk of failure.",
    "id": "brick-approved-a8-k18",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K23",
    "concept": "K23 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why should a DPC never be bridged with mortar?",
    "options": [
      "It weakens the brickwork",
      "It allows moisture to bypass the DPC",
      "It prevents wall ties from working",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Mortar bridging creates a path for moisture to travel past the DPC, increasing the risk of damp penetration.",
    "id": "brick-approved-a8-k23",
    "type": "Knowledge",
    "status": "approved"
  }
,
  {
    "ksb": "K15",
    "concept": "K15 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why are snapped headers required in parts of an English bond wall?",
    "options": [
      "To reduce the wall thickness",
      "To maintain bonding and avoid continuous vertical joints",
      "To create a cavity",
      "To replace closers at every corner"
    ],
    "correct": 1,
    "explanation": "Correctly positioned headers and closers maintain the bond and prevent continuous vertical joints through the wall.",
    "id": "brick-challenging-set1-a8-k15-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K16",
    "concept": "K16 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "What is the main purpose of checking gauge before constructing the capping course on a solid wall?",
    "options": [
      "To reduce mortar mixing",
      "To ensure the wall finishes at the required height with consistent joints",
      "To make the bricks absorb more water",
      "To remove the need for line and level checks"
    ],
    "correct": 1,
    "explanation": "Gauge planning ensures the courses and capping finish at the designed height without irregular joint adjustments.",
    "id": "brick-challenging-set1-a8-k16-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K18",
    "concept": "K18 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "An attached pier is added to a long wall. What must be maintained where the pier bonds into the wall?",
    "options": [
      "A continuous vertical joint",
      "Proper bonding and consistent course alignment",
      "A wider cavity behind the pier",
      "Dry joints between all projecting bricks"
    ],
    "correct": 1,
    "explanation": "The pier must be properly bonded into the wall and aligned with the wall courses to perform and appear correctly.",
    "id": "brick-challenging-set1-a8-k18-3",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K23",
    "concept": "K23 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "When setting out a soldier course over an opening, why should the total opening width be divided before laying?",
    "options": [
      "To determine an even unit and joint arrangement",
      "To increase the lintel bearing",
      "To avoid using a spirit level",
      "To make the bricks lighter"
    ],
    "correct": 0,
    "explanation": "Dividing the available width allows the bricks and joints to be distributed evenly and avoids an undersized final unit.",
    "id": "brick-challenging-set1-a8-k23-4",
    "type": "Knowledge",
    "status": "approved"
  }
,
  {
    "ksb": "K15",
    "concept": "K15 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Which feature distinguishes Flemish bond from English bond?",
    "options": [
      "Every course contains only stretchers",
      "Headers and stretchers alternate within each course",
      "Headers are used only at corners",
      "There are no vertical joints"
    ],
    "correct": 1,
    "explanation": "Flemish bond alternates headers and stretchers in the same course.",
    "id": "brick-challenging-set2-a8-k15-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K16",
    "concept": "K16 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why should the first course of a solid wall be checked carefully for line, level and square?",
    "options": [
      "Later courses can only compensate with thicker joints",
      "Errors at the base are carried through and become harder to correct",
      "It determines mortar colour",
      "It prevents all efflorescence"
    ],
    "correct": 1,
    "explanation": "Initial setting-out errors accumulate and affect the entire wall.",
    "id": "brick-challenging-set2-a8-k16-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K18",
    "concept": "K18 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "When building an attached pier, why must its bond be coordinated with the wall?",
    "options": [
      "To create a decorative shadow only",
      "To ensure the pier is properly integrated rather than acting as an unstable separate element",
      "To reduce the number of bricks",
      "To avoid using closures"
    ],
    "correct": 1,
    "explanation": "Correct bonding integrates the pier with the wall and improves stability.",
    "id": "brick-challenging-set2-a8-k18-3",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K23",
    "concept": "K23 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "What is the main setting-out risk when forming a brick-on-edge sill?",
    "options": [
      "Using bricks with equal colour",
      "Failing to allow for joint widths and the required projection or fall",
      "Checking the opening width",
      "Using a gauge rod"
    ],
    "correct": 1,
    "explanation": "The unit arrangement, joints, projection and fall must be set out together to avoid a poor fit or drainage defect.",
    "id": "brick-challenging-set2-a8-k23-4",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register('bricklayer-st0095-v1-2',9,[
  {
    "ksb": "K24",
    "concept": "K24 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "What is the minimum end bearing normally required for a standard lintel unless specified otherwise?",
    "options": [
      "100 mm",
      "150 mm",
      "225 mm",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Most standard lintels require a minimum end bearing of 150 mm, although the manufacturer's instructions and project specification must always be followed.",
    "id": "brick-approved-a9-k24",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K25",
    "concept": "K25 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why are weep holes installed above openings?",
    "options": [
      "Improve ventilation inside the building",
      "Allow water collected by the cavity tray to drain outside",
      "Strengthen the outer leaf",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Weep holes allow water collected by the cavity tray to escape safely from the wall, helping prevent damp problems.",
    "id": "brick-approved-a9-k25",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B3",
    "concept": "B3 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A customer asks you a question you don't know the answer to. What is the best response?",
    "options": [
      "Make an educated guess",
      "Politely explain you'll find the correct information",
      "Tell them to ask someone else",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Being honest and respectful builds trust. If you are unsure, seek the correct information rather than giving incorrect advice.",
    "id": "brick-approved-a9-b3",
    "type": "Behaviour",
    "status": "approved"
  }
,
  {
    "ksb": "K24",
    "concept": "K24 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Several bricks have spalled faces while surrounding mortar is extremely hard and dense. What is a likely contributing factor?",
    "options": [
      "Mortar that is too strong and impermeable for the masonry",
      "Bed joints that are too consistent",
      "Use of clean water when mixing",
      "Correct protection during curing"
    ],
    "correct": 0,
    "explanation": "Overly strong, impermeable mortar can concentrate moisture and frost damage in softer bricks instead of accommodating movement and drying.",
    "id": "brick-challenging-set1-a9-k24-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K25",
    "concept": "K25 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Fresh brickwork is forecast to experience overnight frost. Which protection is most appropriate?",
    "options": [
      "Seal it tightly with non-breathable plastic against the face",
      "Protect it with insulated, securely fixed covers while maintaining ventilation and avoiding contact damage",
      "Soak the wall before leaving",
      "Apply heat directly with a flame"
    ],
    "correct": 1,
    "explanation": "Insulated covers protect fresh work from frost while suitable ventilation and separation avoid condensation and surface damage.",
    "id": "brick-challenging-set1-a9-k25-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B3",
    "concept": "B3 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A replacement brick does not match the existing colour or size, but the repair deadline is today. What best demonstrates ownership?",
    "options": [
      "Install it and hide it with mortar",
      "Report the mismatch and obtain approval or a suitable replacement",
      "Leave the opening unattended",
      "Ask the customer not to look closely"
    ],
    "correct": 1,
    "explanation": "Ownership includes checking materials against the requirement and escalating incompatibility before completing a defective repair.",
    "id": "brick-challenging-set1-a9-b3-3",
    "type": "Behaviour",
    "status": "approved"
  }
,
  {
    "ksb": "K24",
    "concept": "K24 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A horizontal crack follows the bed joint beneath a long concrete lintel. Which issue should be investigated first?",
    "options": [
      "Whether the bricks were too clean",
      "Differential movement or inadequate movement provision around the lintel",
      "Whether the wall was pointed neatly",
      "The colour of the DPC"
    ],
    "correct": 1,
    "explanation": "Concrete and masonry can move differently, so movement detailing around the lintel should be checked.",
    "id": "brick-challenging-set2-a9-k24-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K25",
    "concept": "K25 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "How should facing bricks be stored before use during wet weather?",
    "options": [
      "Directly on muddy ground under a torn sheet",
      "On a firm raised base, protected from saturation while allowing ventilation",
      "Fully submerged to equalise suction",
      "Uncovered beside the mixer"
    ],
    "correct": 1,
    "explanation": "Raised, ventilated protection reduces contamination, saturation and frost damage.",
    "id": "brick-challenging-set2-a9-k25-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B3",
    "concept": "B3 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A repaired area is structurally sound but the joint profile visibly differs from the existing work. What should the bricklayer do?",
    "options": [
      "Leave it because strength is all that matters",
      "Inspect it against the specification and correct the finish before handover",
      "Apply paint over the joints",
      "Ask the customer to accept it verbally"
    ],
    "correct": 1,
    "explanation": "Taking ownership includes checking both performance and specified finish before completion.",
    "id": "brick-challenging-set2-a9-b3-3",
    "type": "Behaviour",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register('bricklayer-st0095-v1-2',10,[
  {
    "ksb": "K26",
    "concept": "K26 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why should cavity insulation be fitted tightly without gaps?",
    "options": [
      "To reduce heat loss through the wall",
      "To reduce mortar usage",
      "To improve brick bond",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Gaps in insulation create cold bridges, reducing the wall's thermal efficiency and increasing heat loss.",
    "id": "brick-approved-a10-k26",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K27",
    "concept": "K27 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "What should you do if brickwork is found to be outside the specified tolerance?",
    "options": [
      "Hide the defect with pointing",
      "Report the issue and agree corrective action",
      "Continue until the wall is complete",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Quality issues should be reported as soon as they are identified so corrective action can be agreed before further work continues.",
    "id": "brick-approved-a10-k27",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B6",
    "concept": "B6 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Your supervisor gives you constructive feedback. What should you do?",
    "options": [
      "Ignore it if the work has passed",
      "Listen, act on it and use it to improve",
      "Explain why your way is better",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Constructive feedback helps develop your skills and professionalism. Acting on feedback is an important part of continuous improvement.",
    "id": "brick-approved-a10-b6",
    "type": "Behaviour",
    "status": "approved"
  },
  {
    "ksb": "B5",
    "concept": "B5 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Before leaving your work area, what should you always do?",
    "options": [
      "Check your work and leave the area clean and tidy",
      "Leave any waste for the labourer",
      "Cover unfinished work only",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Professional bricklayers take pride in their workmanship and housekeeping. A clean, organised work area reduces hazards and reflects high standards.",
    "id": "brick-approved-a10-b5",
    "type": "Behaviour",
    "status": "approved"
  }
,
  {
    "ksb": "K26",
    "concept": "K26 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A bricklayer needs to explain a cavity tray defect to a customer. Which approach is most effective?",
    "options": [
      "Use unexplained technical abbreviations throughout",
      "Explain the issue in plain language, then confirm the required action and likely effect",
      "Avoid discussing the defect until work is complete",
      "Only show the customer the drawing"
    ],
    "correct": 1,
    "explanation": "Communication should be adapted to the audience while clearly explaining the issue, action and consequences.",
    "id": "brick-challenging-set1-a10-k26-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K27",
    "concept": "K27 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A delivery delay will prevent the bricklaying gang from completing an area needed by another trade. What should the team do?",
    "options": [
      "Keep the delay within the gang",
      "Inform the wider team early and agree a revised sequence",
      "Start unrelated work without coordination",
      "Blame the supplier during the next meeting"
    ],
    "correct": 1,
    "explanation": "Effective teamwork requires early communication and coordination so dependent trades can adjust safely and efficiently.",
    "id": "brick-challenging-set1-a10-k27-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B6",
    "concept": "B6 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Which action best demonstrates team focus when scaffolding access is shared with another trade?",
    "options": [
      "Store materials across the access while taking lunch",
      "Coordinate timings and keep agreed routes clear",
      "Use the access first because brickwork is external",
      "Move the other trade’s equipment without asking"
    ],
    "correct": 1,
    "explanation": "Considering the wider build team means coordinating shared resources and maintaining safe access for everyone.",
    "id": "brick-challenging-set1-a10-b6-3",
    "type": "Behaviour",
    "status": "approved"
  },
  {
    "ksb": "B5",
    "concept": "B5 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "An apprentice repeatedly struggles to interpret masonry details. What action best demonstrates B5?",
    "options": [
      "Avoid drawings and copy nearby work",
      "Request focused support, practise the skill and review feedback",
      "Wait until the final assessment",
      "Ask another person to complete all setting out"
    ],
    "correct": 1,
    "explanation": "Seeking development opportunities involves identifying a gap, obtaining support and applying feedback to improve competence.",
    "id": "brick-challenging-set1-a10-b5-4",
    "type": "Behaviour",
    "status": "approved"
  }
,
  {
    "ksb": "K26",
    "concept": "K26 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Which message is most suitable when warning another trade about uncured masonry?",
    "options": [
      "Keep off",
      "The wall is weak",
      "Do not load or fix to this wall until the stated curing period has passed; contact the bricklaying supervisor if access is needed",
      "Everyone should know not to touch it"
    ],
    "correct": 2,
    "explanation": "Clear communication identifies the restriction, duration and contact route without ambiguity.",
    "id": "brick-challenging-set2-a10-k26-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K27",
    "concept": "K27 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why should the bricklaying team coordinate scaffold loading with the scaffold contractor?",
    "options": [
      "To reserve the best working lift",
      "To ensure loads and material positions remain within the scaffold design and safe capacity",
      "To reduce brick colour variation",
      "To avoid completing inspections"
    ],
    "correct": 1,
    "explanation": "Scaffold loading must stay within the designed capacity and arrangement.",
    "id": "brick-challenging-set2-a10-k27-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B6",
    "concept": "B6 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "The team finishes its area early while another gang is struggling with a shared deadline. What best demonstrates team focus?",
    "options": [
      "Leave immediately",
      "Offer appropriate support through the supervisor without working beyond competence",
      "Take over unfamiliar work without permission",
      "Criticise the slower gang"
    ],
    "correct": 1,
    "explanation": "Team focus includes supporting wider goals while respecting competence and supervision.",
    "id": "brick-challenging-set2-a10-b6-3",
    "type": "Behaviour",
    "status": "approved"
  },
  {
    "ksb": "B5",
    "concept": "B5 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A bricklayer receives feedback that their raking cuts are inconsistent. What is the best response?",
    "options": [
      "Ignore it because the wall passed",
      "Request coaching, practise controlled setting out and review the results",
      "Avoid all future raking work",
      "Blame the cutting tools"
    ],
    "correct": 1,
    "explanation": "Development means acting on feedback and deliberately improving the identified skill.",
    "id": "brick-challenging-set2-a10-b5-4",
    "type": "Behaviour",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register('bricklayer-st0095-v1-2',11,[
  {
    "ksb": "K28",
    "concept": "K28 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Before starting work, which information is most important to confirm with your supervisor?",
    "options": [
      "The latest approved drawings and work instructions",
      "The brick manufacturer's address",
      "The site opening times",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Confirming the correct drawings and instructions helps ensure the work is completed safely and to the required specification.",
    "id": "brick-approved-a11-k28",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K31",
    "concept": "K31 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why is it important to keep your bricklaying knowledge up to date?",
    "options": [
      "To keep up with changes in regulations, products and working practices",
      "To reduce the amount of brick cutting",
      "To increase mortar strength",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "The construction industry continually changes. Keeping your knowledge current helps maintain safe, compliant and high-quality work.",
    "id": "brick-approved-a11-k31",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B4",
    "concept": "B4 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A colleague is struggling to safely lift heavy blocks. What should you do?",
    "options": [
      "Continue with your own work",
      "Offer assistance or arrange suitable help if it is safe to do so",
      "Tell them to work faster",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Good teamwork improves safety, productivity and quality. Supporting colleagues appropriately is part of professional behaviour.",
    "id": "brick-approved-a11-b4",
    "type": "Behaviour",
    "status": "approved"
  }
,
  {
    "ksb": "K28",
    "concept": "K28 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A colleague’s suggestion is dismissed because of their accent before it is considered. Which principle has been breached?",
    "options": [
      "Efficient material use",
      "Inclusive and equitable treatment",
      "Quality-control sampling",
      "Work sequencing"
    ],
    "correct": 1,
    "explanation": "Inclusive workplaces judge contributions fairly and do not disadvantage people because of protected or personal characteristics.",
    "id": "brick-challenging-set1-a11-k28-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K31",
    "concept": "K31 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A normally reliable colleague becomes withdrawn, makes unusual mistakes and says they are overwhelmed. What is the most appropriate response?",
    "options": [
      "Diagnose the condition yourself",
      "Speak privately, listen without judgement and signpost workplace or professional support",
      "Tell the whole team so they can monitor them",
      "Ignore it unless they request sick leave"
    ],
    "correct": 1,
    "explanation": "A supportive response is private, respectful and focused on listening and directing the person to appropriate support, not diagnosis.",
    "id": "brick-challenging-set1-a11-k31-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B4",
    "concept": "B4 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A new team member needs a reasonable adjustment to take part in a briefing. What best demonstrates B4?",
    "options": [
      "Hold the briefing unchanged to treat everyone identically",
      "Work with them and the supervisor to provide an effective adjustment",
      "Exclude them from the briefing and send notes later",
      "Ask them to arrange everything without support"
    ],
    "correct": 1,
    "explanation": "An inclusive culture removes avoidable barriers so people can participate effectively and equitably.",
    "id": "brick-challenging-set1-a11-b4-3",
    "type": "Behaviour",
    "status": "approved"
  }
,
  {
    "ksb": "K28",
    "concept": "K28 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "What is the difference between equality and equity in the workplace?",
    "options": [
      "Equality gives identical support; equity provides appropriate support to remove disadvantage",
      "They mean exactly the same thing",
      "Equity applies only to pay",
      "Equality allows discrimination when deadlines are tight"
    ],
    "correct": 0,
    "explanation": "Equality concerns fair treatment, while equity recognises that different support may be needed to achieve fair participation.",
    "id": "brick-challenging-set2-a11-k28-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K31",
    "concept": "K31 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Which source is most appropriate for immediate workplace wellbeing support?",
    "options": [
      "Unverified social media advice",
      "The employer support route, trained mental-health first aider, GP or recognised support service",
      "A customer on site",
      "A materials supplier"
    ],
    "correct": 1,
    "explanation": "Support should come from recognised workplace or professional routes.",
    "id": "brick-challenging-set2-a11-k31-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B4",
    "concept": "B4 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A colleague is repeatedly excluded from informal planning discussions. What action best supports inclusion?",
    "options": [
      "Continue because attendance is voluntary",
      "Ensure relevant discussions and decisions are shared through accessible team channels",
      "Tell them to ask afterwards",
      "Only include senior workers"
    ],
    "correct": 1,
    "explanation": "Inclusive practice ensures everyone affected has fair access to relevant information and participation.",
    "id": "brick-challenging-set2-a11-b4-3",
    "type": "Behaviour",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register('bricklayer-st0095-v1-2',12,[
  {
    "ksb": "K30",
    "concept": "K30 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A customer asks you to change the work from the drawing. What should you do?",
    "options": [
      "Make the change if it seems reasonable",
      "Explain that changes must be authorised before work continues",
      "Ask another bricklayer what they think",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Only authorised changes should be made. Unapproved alterations may breach the specification, regulations or contract requirements.",
    "id": "brick-approved-a12-k30",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K29",
    "concept": "K29 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Another trade has damaged completed brickwork. What should you do first?",
    "options": [
      "Repair it without telling anyone",
      "Report the damage to the appropriate person",
      "Continue working around it",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Damage should be reported promptly so the correct repair can be agreed and responsibility recorded.",
    "id": "brick-approved-a12-k29",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B2",
    "concept": "B2 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "You realise you've laid a course out of line. What should you do?",
    "options": [
      "Continue and hope it isn't noticed",
      "Correct it as soon as possible and inform your supervisor if necessary",
      "Hide it when pointing",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Taking responsibility for mistakes is a key professional behaviour. Correcting defects early usually saves time, money and materials.",
    "id": "brick-approved-a12-b2",
    "type": "Behaviour",
    "status": "approved"
  }
,
  {
    "ksb": "K30",
    "concept": "K30 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Before constructing a gable with a raking cut, which setting-out method gives the most reliable control of the slope?",
    "options": [
      "Guessing each cut from the previous brick",
      "Establishing the rise and run, fixing a line or template, and checking course intersections",
      "Cutting every brick to the same angle before setting out",
      "Increasing joint thickness near the top"
    ],
    "correct": 1,
    "explanation": "The rake should be derived from the required geometry and controlled with an accurate line or template linked to the course gauge.",
    "id": "brick-challenging-set1-a12-k30-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K29",
    "concept": "K29 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why should a bolster be positioned on the waste side of a marked brick cut?",
    "options": [
      "To keep the required piece closer to the intended dimension",
      "To make the brick absorb less water",
      "To increase the bed-joint thickness",
      "To avoid wearing eye protection"
    ],
    "correct": 0,
    "explanation": "Positioning the tool on the waste side allows for the width and break of the cut, protecting the required dimension.",
    "id": "brick-challenging-set1-a12-k29-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B2",
    "concept": "B2 challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Repeated cuts are needed for a raking wall. Which approach best demonstrates environmental consideration?",
    "options": [
      "Cut each brick without a cutting schedule",
      "Set out and label cuts first, reuse suitable offcuts and minimise dust and slurry",
      "Discard all partial bricks immediately",
      "Use excess water and allow slurry to enter a drain"
    ],
    "correct": 1,
    "explanation": "Planned cutting reduces waste, enables offcut reuse and supports controlled management of dust and slurry.",
    "id": "brick-challenging-set1-a12-b2-3",
    "type": "Behaviour",
    "status": "approved"
  }
,
  {
    "ksb": "K30",
    "concept": "K30 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "When setting out a raking wall, why should perp-joint positions be considered before cutting?",
    "options": [
      "To keep the bond and avoid weak or visually poor slivers",
      "To increase mortar waste",
      "To remove the need for a line",
      "To make all cuts identical"
    ],
    "correct": 0,
    "explanation": "Planning joint positions maintains bond and avoids unsuitable small cut units.",
    "id": "brick-challenging-set2-a12-k30-1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K29",
    "concept": "K29 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "What is the safest method for making a controlled hand cut to a brick?",
    "options": [
      "Hold it in one hand and strike toward the body",
      "Support it securely, mark the cut, wear eye protection and use the correct bolster and hammer technique",
      "Use any damaged chisel available",
      "Strike repeatedly without marking"
    ],
    "correct": 1,
    "explanation": "Secure support, clear marking, PPE and correct tools improve control and reduce injury risk.",
    "id": "brick-challenging-set2-a12-k29-2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B2",
    "concept": "B2 alternative challenging brickwork question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Which approach best reduces waste when cutting blocks for a gable?",
    "options": [
      "Begin cutting before setting out",
      "Prepare a cutting schedule and reuse suitable matching offcuts",
      "Discard every offcut below half length",
      "Cut all blocks longer and trim them repeatedly"
    ],
    "correct": 1,
    "explanation": "A cutting schedule and planned reuse reduce unnecessary material use and waste.",
    "id": "brick-challenging-set2-a12-b2-3",
    "type": "Behaviour",
    "status": "approved"
  }
]);


window.MCQQuestionBank.register('site-carpentry-v1-4',1,[
  {
    "ksb": "K1",
    "concept": "K1 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A cable runs across a busy access route. What is the safest immediate action?",
    "options": [
      "Cover it with timber offcuts",
      "Reroute or protect it using an approved cable cover",
      "Mark it with warning tape only",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Cables across access routes create a trip and electrical hazard. They should be rerouted or protected with a suitable cable cover, not improvised materials.",
    "id": "site-carpentry-approved-a1-k1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K2",
    "concept": "K2 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "You are sanding MDF indoors. Which control best reduces exposure to fine dust?",
    "options": [
      "Safety glasses and an open window",
      "Disposable dust mask without extraction",
      "Tool extraction with suitable RPE",
      "I don't know"
    ],
    "correct": 2,
    "explanation": "MDF produces fine dust that can damage health. Extraction should remove dust at source, supported by correctly selected and fitted RPE.",
    "id": "site-carpentry-approved-a1-k2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K3",
    "concept": "K3 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "The method statement specifies a podium, but only stepladders are available. What should you do?",
    "options": [
      "Stop and obtain the specified equipment or revised method",
      "Use the stepladder if another worker holds it",
      "Complete only the easier sections from the ladder",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "The agreed safe system must be followed. Different access equipment requires the risks and working method to be reviewed before work begins.",
    "id": "site-carpentry-approved-a1-k3",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B1",
    "concept": "B1 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "You notice a damaged extension lead being used on site. What should you do?",
    "options": [
      "Use it for low-powered tools only",
      "Remove it from use and report it immediately",
      "Tape over the damage and continue working",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Damaged electrical equipment must never be used. Remove it from service, report it and ensure a safe replacement is provided.",
    "id": "site-carpentry-approved-a1-b1",
    "type": "Behaviour",
    "status": "approved"
  },
  {
    "ksb": "K1",
    "concept": "K1 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "During refurbishment, a board is suspected to contain asbestos and must be moved to reach damaged framing. What is the correct response?",
    "options": [
      "Dampen it and remove it carefully",
      "Stop work, prevent disturbance and report it for assessment",
      "Wear a disposable mask and continue",
      "Break it into smaller pieces for easier removal"
    ],
    "correct": 1,
    "explanation": "Suspected asbestos-containing material must not be disturbed. Work must stop and the material must be assessed and managed by competent persons under the appropriate plan.",
    "id": "site-carpentry-challenging-a1-k1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K2",
    "concept": "K2 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A carpenter is routing MDF for several hours in a workshop. Which control combination follows the hierarchy most effectively?",
    "options": [
      "Open a door and wear safety glasses",
      "Use on-tool LEV, suitable RPE and verify both are functioning",
      "Wear ear defenders and sweep dust afterwards",
      "Use a fan to blow dust away from the operator"
    ],
    "correct": 1,
    "explanation": "Fine wood dust should be controlled at source with effective extraction, supported by correctly selected and face-fitted RPE where residual exposure remains.",
    "id": "site-carpentry-challenging-a1-k2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K3",
    "concept": "K3 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A task changes because newly installed services now pass through the planned cutting area. What should happen before work continues?",
    "options": [
      "The carpenter should work more slowly around the services",
      "The risk assessment and method statement should be reviewed and briefed",
      "A warning note should be added after the task",
      "Only insulated hand tools should be used"
    ],
    "correct": 1,
    "explanation": "A material change to the work invalidates assumptions in the safe system. RAMS must be reviewed, controls revised and those affected briefed before restarting.",
    "id": "site-carpentry-challenging-a1-k3",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B1",
    "concept": "B1 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A colleague removes a guard because it slows production. What best demonstrates putting health, safety and wellbeing first?",
    "options": [
      "Finish the current cut, then replace it",
      "Stop use of the machine and challenge or report the unsafe act",
      "Stand further away while they cut",
      "Record it only if an accident occurs"
    ],
    "correct": 1,
    "explanation": "Unsafe equipment use must be stopped immediately. Protecting people takes priority over output or avoiding confrontation.",
    "id": "site-carpentry-challenging-a1-b1",
    "type": "Behaviour",
    "status": "approved"
  },
{
  "ksb": "K1",
  "concept": "K1 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "While lifting floorboards, an operative finds damaged insulation that may contain asbestos. What is the correct response?",
  "options": [
    "Bag it as general waste and continue",
    "Stop work, prevent disturbance and report it under the asbestos procedure",
    "Wet it and remove it wearing a dust mask",
    "Ask another trade to dispose of it without recording the find"
  ],
  "correct": 1,
  "explanation": "Suspected asbestos must not be disturbed. Work should stop, the area should be controlled and the finding reported through the authorised procedure.",
  "id": "site-carpentry-challenging-set2-a1-k1",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "K2",
  "concept": "K2 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "A circular saw is producing heavy airborne dust despite the operative wearing an FFP3 mask. Which additional control should be prioritised?",
  "options": [
    "Open a nearby door only",
    "Use suitable extraction or dust suppression at source",
    "Change to safety glasses",
    "Work faster to shorten exposure"
  ],
  "correct": 1,
  "explanation": "RPE is the last line of defence. Effective LEV or dust suppression should control dust at source before relying on personal protection.",
  "id": "site-carpentry-challenging-set2-a1-k2",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "K3",
  "concept": "K3 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "A method statement requires a podium step, but only an unsecured stepladder is available. What should the carpenter do?",
  "options": [
    "Use the stepladder for a short task",
    "Alter the method without telling anyone",
    "Stop and obtain the specified access equipment or an authorised revised method",
    "Ask a colleague to foot the ladder"
  ],
  "correct": 2,
  "explanation": "Safe systems of work must be followed. A change requires suitable equipment or an authorised review of the method and risk controls.",
  "id": "site-carpentry-challenging-set2-a1-k3",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "B1",
  "concept": "B1 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "A colleague removes a guard to finish a cut before break. What best demonstrates putting safety and wellbeing first?",
  "options": [
    "Ignore it because the colleague is experienced",
    "Stop the unsafe activity and ensure the guard is reinstated before work resumes",
    "Complete the cut for them",
    "Report it only after the job is finished"
  ],
  "correct": 1,
  "explanation": "Prioritising safety means intervening immediately when unsafe work could cause harm and ensuring the correct control is restored.",
  "id": "site-carpentry-challenging-set2-a1-b1",
  "type": "Behaviour",
  "status": "approved"
}
]);

window.MCQQuestionBank.register('site-carpentry-v1-4',2,[
  {
    "ksb": "K4",
    "concept": "K4 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Which method best reduces waste when cutting several identical timber components?",
    "options": [
      "Cut each piece separately from full lengths",
      "Prepare a cutting list and optimise lengths before cutting",
      "Allow extra length on every component and trim later",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "A planned cutting list reduces offcuts, avoids unnecessary cuts and makes more efficient use of available timber lengths.",
    "id": "site-carpentry-approved-a2-k4",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K7",
    "concept": "K7 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A fire door lining is wider than the manufacturer's permitted tolerance. What should happen?",
    "options": [
      "Fit thicker architrave to cover the difference",
      "Correct the opening or lining before fitting the door",
      "Reduce the door edge until it fits",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Fire doors must be installed within the manufacturer's specified tolerances. Covering or trimming an incorrect opening may compromise fire performance.",
    "id": "site-carpentry-approved-a2-k7",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K40",
    "concept": "K40 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Which tax is normally deducted from an employee's wages through PAYE?",
    "options": [
      "Council Tax",
      "Income Tax",
      "VAT",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Employees usually pay Income Tax and National Insurance through the PAYE system, while self-employed workers have different tax responsibilities.",
    "id": "site-carpentry-approved-a2-k40",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B2",
    "concept": "B2 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "You have several usable timber offcuts left after completing a job. What should you do?",
    "options": [
      "Dispose of them in the general waste skip",
      "Burn them if permitted",
      "Store them for reuse if they meet the required standard",
      "I don't know"
    ],
    "correct": 2,
    "explanation": "Reusing suitable materials helps reduce waste, lowers costs and supports sustainable construction practices.",
    "id": "site-carpentry-approved-a2-b2",
    "type": "Behaviour",
    "status": "approved"
  },
  {
    "ksb": "K4",
    "concept": "K4 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Which timber purchasing decision best supports sustainable forestry without compromising specification?",
    "options": [
      "Buying the cheapest imported timber available",
      "Selecting certified timber from a traceable responsibly managed source",
      "Using reclaimed timber regardless of condition",
      "Ordering extra material to avoid later deliveries"
    ],
    "correct": 1,
    "explanation": "Certified, traceable timber supports responsible forest management while still allowing required strength, durability and quality to be verified.",
    "id": "site-carpentry-challenging-a2-k4",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K7",
    "concept": "K7 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A proprietary timber connector is being installed in a load-bearing structure. Which information takes priority?",
    "options": [
      "A similar detail used on a previous project",
      "The current design, relevant standard and manufacturer installation requirements",
      "The carpenter’s preferred fixing pattern",
      "The merchant’s verbal advice"
    ],
    "correct": 1,
    "explanation": "Structural work must follow current approved design information, applicable standards and the manufacturer’s tested installation requirements.",
    "id": "site-carpentry-challenging-a2-k7",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K40",
    "concept": "K40 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A self-employed carpenter quotes a fixed price for work. Which responsibility normally remains theirs?",
    "options": [
      "Their client must deduct all tax through PAYE",
      "They must manage business records, tax obligations and appropriate insurance",
      "They are automatically covered by the principal contractor’s insurance",
      "They do not need written terms for small jobs"
    ],
    "correct": 1,
    "explanation": "Self-employed workers are responsible for business records, tax and suitable insurance, and should use clear contractual terms.",
    "id": "site-carpentry-challenging-a2-k40",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B2",
    "concept": "B2 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Offcuts include clean structural timber, treated timber and contaminated packaging. What is the most sustainable action?",
    "options": [
      "Place everything in one timber skip",
      "Segregate each stream and reuse suitable clean timber where permitted",
      "Burn untreated timber and skip the rest",
      "Keep only the largest pieces and mix all remaining waste"
    ],
    "correct": 1,
    "explanation": "Effective segregation enables safe reuse, recycling and lawful disposal, preventing treated or contaminated materials from spoiling recoverable waste streams.",
    "id": "site-carpentry-challenging-a2-b2",
    "type": "Behaviour",
    "status": "approved"
  },
{
  "ksb": "K4",
  "concept": "K4 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "Which timber purchasing decision best supports sustainable forestry?",
  "options": [
    "Choose the cheapest imported timber regardless of source",
    "Specify certified timber from a responsibly managed source",
    "Use only hardwood because it lasts longer",
    "Order extra stock to avoid future deliveries"
  ],
  "correct": 1,
  "explanation": "Certified responsibly sourced timber provides traceability and supports sustainable forest management.",
  "id": "site-carpentry-challenging-set2-a2-k4",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "K7",
  "concept": "K7 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "A detail on site conflicts with the approved drawing and a relevant British Standard. What should the carpenter do?",
  "options": [
    "Follow the verbal instruction because it is quicker",
    "Use whichever option requires less material",
    "Pause the work and seek clarification through the approved technical process",
    "Follow the older detail because it has been used before"
  ],
  "correct": 2,
  "explanation": "Conflicting technical requirements should be resolved formally before work continues to avoid non-compliant installation.",
  "id": "site-carpentry-challenging-set2-a2-k7",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "K40",
  "concept": "K40 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "A self-employed carpenter quotes for work. Which responsibility normally remains theirs rather than an employer's?",
  "options": [
    "Deducting PAYE from their own wages",
    "Maintaining business records and arranging their own tax submissions",
    "Receiving statutory holiday pay from the client",
    "Being enrolled automatically into the client's pension"
  ],
  "correct": 1,
  "explanation": "Self-employed workers are generally responsible for business records, tax returns and their own tax arrangements.",
  "id": "site-carpentry-challenging-set2-a2-k40",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "B2",
  "concept": "B2 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "Offcuts from a roof job include reusable lengths, clean untreated waste and contaminated timber. What is the most sustainable action?",
  "options": [
    "Place everything in one skip",
    "Reuse suitable lengths and segregate the remainder into correct waste streams",
    "Burn the untreated timber and bin the rest",
    "Store all waste indefinitely"
  ],
  "correct": 1,
  "explanation": "Resource efficiency means prioritising reuse and then segregating waste correctly for recycling or lawful disposal.",
  "id": "site-carpentry-challenging-set2-a2-b2",
  "type": "Behaviour",
  "status": "approved"
}
]);

window.MCQQuestionBank.register('site-carpentry-v1-4',3,[
  {
    "ksb": "K5",
    "concept": "K5 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why must timber studwork be separated from a damp concrete floor?",
    "options": [
      "To improve the fixing strength",
      "To prevent the sole plate twisting",
      "To reduce moisture passing into the timber",
      "I don't know"
    ],
    "correct": 2,
    "explanation": "Timber in contact with damp concrete can absorb moisture and become vulnerable to decay. A suitable damp-resistant separation is required.",
    "id": "site-carpentry-approved-a3-k5",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K6",
    "concept": "K6 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A BIM model and printed drawing show different partition positions. What should you use?",
    "options": [
      "The latest authorised information after clarification",
      "The printed drawing because it is on site",
      "The BIM model because digital information is always newer",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Neither format automatically takes priority. The latest authorised revision must be confirmed before the work proceeds.",
    "id": "site-carpentry-approved-a3-k6",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K8",
    "concept": "K8 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A drawing dimension conflicts with a scaled measurement. Which should normally be followed?",
    "options": [
      "The written dimension",
      "The scaled measurement",
      "The measurement that uses the least material",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Written dimensions normally take priority because printed or displayed drawings may not be reproduced at their original scale.",
    "id": "site-carpentry-approved-a3-k8",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B4",
    "concept": "B4 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Your supervisor offers training on a new fixing system you've never used. What should you do?",
    "options": [
      "Decline because your current method works",
      "Attend the training and develop your knowledge",
      "Wait until you're told it's compulsory",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Taking opportunities to learn new methods and products helps you remain competent and improves your future career prospects.",
    "id": "site-carpentry-approved-a3-b4",
    "type": "Behaviour",
    "status": "approved"
  },
  {
    "ksb": "K5",
    "concept": "K5 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "When fixing internal timber lining to an external SIPS wall, why must the specified vapour-control and service-zone details be maintained?",
    "options": [
      "To make the wall easier to decorate",
      "To protect airtightness and reduce interstitial condensation risk",
      "To increase the density of the panel",
      "To avoid using mechanical fixings"
    ],
    "correct": 1,
    "explanation": "Incorrect penetrations or missing control layers can allow warm moist air into the panel build-up, increasing condensation and durability risks.",
    "id": "site-carpentry-challenging-a3-k5",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K6",
    "concept": "K6 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A digital model shows a service opening that is absent from the latest issued drawing. What is the correct approach?",
    "options": [
      "Cut the opening because 3D models are always authoritative",
      "Raise the discrepancy and confirm the approved coordinated information",
      "Ignore the model and continue immediately",
      "Average the two positions"
    ],
    "correct": 1,
    "explanation": "Conflicting information must be clarified through the project’s information-control process. Format alone does not establish authority.",
    "id": "site-carpentry-challenging-a3-k6",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K8",
    "concept": "K8 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A detail is marked “Do not scale” but one dimension is missing. What should the carpenter do?",
    "options": [
      "Scale the missing dimension from the screen",
      "Use the nearest standard timber size",
      "Request clarification before setting out",
      "Match the dimension used on the previous room"
    ],
    "correct": 2,
    "explanation": "Where scaling is prohibited and information is incomplete, the missing dimension must be formally clarified to prevent unapproved assumptions and rework.",
    "id": "site-carpentry-challenging-a3-k8",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B4",
    "concept": "B4 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A post-job review identifies repeated errors when reading revised drawings. What best demonstrates seeking development?",
    "options": [
      "Ask a colleague to check every drawing indefinitely",
      "Request targeted training and apply a revision-checking routine",
      "Avoid jobs involving detailed drawings",
      "Continue until an error causes rejection"
    ],
    "correct": 1,
    "explanation": "Targeted learning combined with an improved checking process addresses the competence gap and reduces recurrence.",
    "id": "site-carpentry-challenging-a3-b4",
    "type": "Behaviour",
    "status": "approved"
  },
{
  "ksb": "K5",
  "concept": "K5 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "Why must a carpenter identify whether a wall is part of a timber-frame fire-resisting construction before forming an opening?",
  "options": [
    "The timber may be harder to cut",
    "The work could interrupt structural, fire and moisture-control layers",
    "The opening will always need planning permission",
    "Timber-frame walls cannot contain services"
  ],
  "correct": 1,
  "explanation": "Modern wall systems combine structural, fire, air and moisture functions. Alterations can compromise several safety-critical layers.",
  "id": "site-carpentry-challenging-set2-a3-k5",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "K6",
  "concept": "K6 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "What is a key advantage of checking a coordinated digital model before setting out a partition?",
  "options": [
    "It guarantees the materials are already ordered",
    "It can reveal clashes with services and other building elements",
    "It removes the need to verify site dimensions",
    "It replaces all written specifications"
  ],
  "correct": 1,
  "explanation": "Digital models can expose coordination clashes, but dimensions and specifications still require verification.",
  "id": "site-carpentry-challenging-set2-a3-k6",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "K8",
  "concept": "K8 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "A drawing is marked 1:50, but one dimension appears inconsistent with the written specification. Which source should the carpenter rely on first?",
  "options": [
    "A scaled measurement taken from the drawing",
    "The written figured dimension and an approved clarification",
    "A similar detail from another project",
    "An estimate based on the available timber"
  ],
  "correct": 1,
  "explanation": "Figured dimensions and approved clarifications take priority over scaling drawings, especially where documents conflict.",
  "id": "site-carpentry-challenging-set2-a3-k8",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "B4",
  "concept": "B4 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "A carpenter repeatedly struggles to interpret complex roof drawings. What best demonstrates seeking development?",
  "options": [
    "Avoid roof work whenever possible",
    "Ask for targeted training and supervised practice",
    "Copy another carpenter's dimensions without checking",
    "Continue until a mistake is identified"
  ],
  "correct": 1,
  "explanation": "Recognising a development need and seeking training or supervised practice supports safe, competent progression.",
  "id": "site-carpentry-challenging-set2-a3-b4",
  "type": "Behaviour",
  "status": "approved"
}
]);

window.MCQQuestionBank.register('site-carpentry-v1-4',4,[
  {
    "ksb": "K9",
    "concept": "K9 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Which material is most suitable for a painted internal window board requiring good stability?",
    "options": [
      "Untreated green softwood",
      "Exterior structural plywood",
      "Moisture-resistant MDF where the specification permits",
      "I don't know"
    ],
    "correct": 2,
    "explanation": "Moisture-resistant MDF provides a stable, smooth surface for painted internal joinery, provided it is permitted by the specification and suitably protected.",
    "id": "site-carpentry-approved-a4-k9",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K10",
    "concept": "K10 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Timber is damp, darkened and feels soft, but the area remains continuously wet. What is most likely?",
    "options": [
      "Dry rot",
      "Wet rot",
      "Powder-post beetle attack",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Wet rot develops where timber remains persistently damp. Dry rot has different identifying features and can spread beyond the original moisture source.",
    "id": "site-carpentry-approved-a4-k10",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K12",
    "concept": "K12 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why should a cutting list be produced before machining timber?",
    "options": [
      "To reduce waste and improve material efficiency",
      "To make marking out unnecessary",
      "To reduce the number of fixings required",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "A cutting list ensures components are cut in the correct order, reducing waste, saving time and making the best use of available timber.",
    "id": "site-carpentry-approved-a4-k12",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K9",
    "concept": "K9 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why might laminated timber be specified instead of a solid section for a long component?",
    "options": [
      "It is always cheaper and needs no protection",
      "It can provide improved dimensional stability and engineered performance",
      "It contains no adhesive",
      "It can be cut without regard to grain direction"
    ],
    "correct": 1,
    "explanation": "Laminated products can be engineered for strength, stability and consistency, but must still be selected and used to specification.",
    "id": "site-carpentry-challenging-a4-k9",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K10",
    "concept": "K10 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Moisture readings remain high after replacing decayed timber. What is the most important next action?",
    "options": [
      "Apply preservative and conceal the area",
      "Identify and rectify the moisture source before completing repair",
      "Use denser hardwood for the replacement",
      "Increase ventilation only after decoration"
    ],
    "correct": 1,
    "explanation": "Decay repair will fail if the underlying moisture source remains. The cause must be diagnosed and corrected before reinstatement.",
    "id": "site-carpentry-challenging-a4-k10",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K12",
    "concept": "K12 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A cutting list totals exactly 42 metres of timber. Why should the order normally exceed this figure?",
    "options": [
      "Timber is sold only in one-metre lengths",
      "Allowance is needed for defects, cutting losses and available stock lengths",
      "Extra timber is required by law",
      "Every component must be cut twice"
    ],
    "correct": 1,
    "explanation": "Procurement must account for stock-length optimisation, kerf, trimming and permissible defects without creating excessive waste.",
    "id": "site-carpentry-challenging-a4-k12",
    "type": "Knowledge",
    "status": "approved"
  },
{
  "ksb": "K9",
  "concept": "K9 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "Which material is most suitable for a stable painted cabinet side where wide solid timber would be prone to movement?",
  "options": [
    "Unseasoned softwood boards",
    "Moisture-resistant MDF where the environment and specification permit",
    "Green oak",
    "Untreated external plywood in every location"
  ],
  "correct": 1,
  "explanation": "A suitable manufactured board can offer dimensional stability, provided its grade and intended environment match the specification.",
  "id": "site-carpentry-challenging-set2-a4-k9",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "K10",
  "concept": "K10 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "A skirting board shows crumbly brown timber with cuboidal cracking near a long-term leak. What is the most likely diagnosis?",
  "options": [
    "Dry rot caused only by dry air",
    "Wet rot associated with sustained high moisture",
    "Normal seasoning",
    "Insect attack with no moisture involvement"
  ],
  "correct": 1,
  "explanation": "Wet rot commonly develops where timber remains persistently damp and may produce soft, weakened or cracked timber.",
  "id": "site-carpentry-challenging-set2-a4-k10",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "K12",
  "concept": "K12 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "A cutting list totals 38.4 metres of timber. The stock length is 4.8 metres and 10% allowance is required. What is the minimum number of lengths?",
  "options": [
    "8",
    "9",
    "10",
    "11"
  ],
  "correct": 1,
  "explanation": "38.4 m plus 10% is 42.24 m. Dividing by 4.8 m gives 8.8, so nine full lengths are required.",
  "id": "site-carpentry-challenging-set2-a4-k12",
  "type": "Knowledge",
  "status": "approved"
}
]);

window.MCQQuestionBank.register('site-carpentry-v1-4',5,[
  {
    "ksb": "K14",
    "concept": "K14 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Which hand tool is primarily used to check whether two adjoining faces are exactly 90°?",
    "options": [
      "Bevel gauge",
      "Try square",
      "Spirit level",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "A try square is designed to check and mark right angles accurately when preparing timber components.",
    "id": "site-carpentry-approved-a5-k14",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K15",
    "concept": "K15 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why should a chisel be kept sharp?",
    "options": [
      "It requires less force and gives greater control",
      "It removes more timber with each cut",
      "It prevents timber from splitting completely",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Sharp tools are safer because they require less effort, provide better control and produce a cleaner finish.",
    "id": "site-carpentry-approved-a5-k15",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K17",
    "concept": "K17 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Before changing a blade on a circular saw, what should you do first?",
    "options": [
      "Lower the blade fully",
      "Remove the battery or disconnect the power supply",
      "Wear cut-resistant gloves",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Power must always be isolated before changing blades or carrying out maintenance to prevent accidental start-up.",
    "id": "site-carpentry-approved-a5-k17",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K14",
    "concept": "K14 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A mortise must be chopped accurately near the end of a component. Which practice gives best control?",
    "options": [
      "Use a blunt chisel so it removes less timber",
      "Secure the work, mark both faces and work progressively with a suitable sharp chisel",
      "Hold the timber by hand and cut from one side only",
      "Use the widest chisel available regardless of mortise size"
    ],
    "correct": 1,
    "explanation": "Secure support, accurate marking and a correctly sized sharp chisel reduce breakout and improve control and accuracy.",
    "id": "site-carpentry-challenging-a5-k14",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K15",
    "concept": "K15 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "After honing a plane iron, a wire edge remains on the back. What should be done?",
    "options": [
      "Leave it because it improves cutting",
      "Remove it by flattening and polishing the back",
      "Increase the blade projection",
      "Round over the cutting edge"
    ],
    "correct": 1,
    "explanation": "The burr or wire edge must be removed on the flat back to produce a clean, durable cutting edge.",
    "id": "site-carpentry-challenging-a5-k15",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K17",
    "concept": "K17 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A circular saw repeatedly binds during a rip cut even though the blade is sharp. Which issue should be checked first?",
    "options": [
      "Whether the workpiece is adequately supported without closing on the blade",
      "Whether the battery is fully charged",
      "Whether the blade guard has been tied back",
      "Whether more force can be applied"
    ],
    "correct": 0,
    "explanation": "Poor support can cause the kerf to close and trap the blade, increasing kickback risk. Guards must never be defeated and forcing the saw is unsafe.",
    "id": "site-carpentry-challenging-a5-k17",
    "type": "Knowledge",
    "status": "approved"
  },
{
  "ksb": "K14",
  "concept": "K14 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "Why should a mortise gauge be stored with its pins protected?",
  "options": [
    "To keep the timber dry",
    "To prevent injury and damage to the marking points",
    "To stop the stock shrinking",
    "To maintain the blade angle"
  ],
  "correct": 1,
  "explanation": "Protected pins reduce injury risk and prevent the fine marking points from being damaged.",
  "id": "site-carpentry-challenging-set2-a5-k14",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "K15",
  "concept": "K15 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "A chisel edge is sharp but has become rounded over behind the bevel. What is the best corrective action?",
  "options": [
    "Increase the honing angle each time",
    "Re-establish the primary bevel before honing the cutting edge",
    "Strike it harder during use",
    "Cool it by dipping a red-hot edge in water"
  ],
  "correct": 1,
  "explanation": "Regrinding the correct primary bevel removes excessive rounding; honing can then restore a durable cutting edge.",
  "id": "site-carpentry-challenging-set2-a5-k15",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "K17",
  "concept": "K17 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "Before changing a router cutter, what sequence is safest?",
  "options": [
    "Switch off, hold the spindle and change it immediately",
    "Disconnect or isolate the power, allow complete stop, then use the correct tools",
    "Leave the router plugged in but remove the battery indicator",
    "Clamp the trigger off and change the cutter"
  ],
  "correct": 1,
  "explanation": "The tool must be isolated from its energy source and fully stopped before cutter changes.",
  "id": "site-carpentry-challenging-set2-a5-k17",
  "type": "Knowledge",
  "status": "approved"
}
]);

window.MCQQuestionBank.register('site-carpentry-v1-4',6,[
  {
    "ksb": "K16",
    "concept": "K16 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why are jigs commonly used when producing several identical components?",
    "options": [
      "They eliminate the need for measuring",
      "They improve consistency and accuracy",
      "They reduce timber strength",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Jigs allow components to be produced repeatedly to the same dimensions, improving quality and reducing production time.",
    "id": "site-carpentry-approved-a6-k16",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K29",
    "concept": "K29 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why should a laser level be checked before use?",
    "options": [
      "To confirm it is calibrated and giving accurate levels",
      "To improve the battery life",
      "To increase the laser brightness",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "An incorrectly calibrated laser level can introduce errors throughout the installation, affecting the quality of the finished work.",
    "id": "site-carpentry-approved-a6-k29",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K16",
    "concept": "K16 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A drilling jig gives consistent holes, but every hole is 3 mm out of position. What is the underlying problem?",
    "options": [
      "The jig improves repeatability but was set out inaccurately",
      "The drill speed is too low",
      "The timber moisture content is too high",
      "The jig needs more clamps only"
    ],
    "correct": 0,
    "explanation": "A jig repeats its reference geometry. If the original setting-out is wrong, it will reproduce the same error accurately.",
    "id": "site-carpentry-challenging-a6-k16",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K29",
    "concept": "K29 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A cross-line laser is moved after the datum has been transferred. What check is essential before continuing?",
    "options": [
      "Increase brightness to maximum",
      "Reconfirm the laser against the established datum and check calibration",
      "Rotate it until the line appears level",
      "Use the floor as the new reference"
    ],
    "correct": 1,
    "explanation": "Movement can alter setup or reference. The instrument must be rechecked against the controlled datum before further levels are transferred.",
    "id": "site-carpentry-challenging-a6-k29",
    "type": "Knowledge",
    "status": "approved"
  },
{
  "ksb": "K16",
  "concept": "K16 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "A drilling jig produces holes that gradually move out of position after repeated use. What is the most likely cause?",
  "options": [
    "The workpieces are too dry",
    "The guide bush or locating face has worn",
    "The drill speed is too low in every case",
    "The jig is made from sheet material"
  ],
  "correct": 1,
  "explanation": "Wear in guide bushes or locating surfaces causes repeatability to deteriorate and requires repair or replacement.",
  "id": "site-carpentry-challenging-set2-a6-k16",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "K29",
  "concept": "K29 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "A cross-line laser gives different readings after being moved. What should be checked before relying on it?",
  "options": [
    "The colour of the beam",
    "Calibration, stable setup and reference datum",
    "Whether it is the newest model",
    "The room temperature only"
  ],
  "correct": 1,
  "explanation": "A laser must be calibrated, securely positioned and related to a verified datum before measurements are trusted.",
  "id": "site-carpentry-challenging-set2-a6-k29",
  "type": "Knowledge",
  "status": "approved"
}
]);

window.MCQQuestionBank.register('site-carpentry-v1-4',7,[
  {
    "ksb": "K13",
    "concept": "K13 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A drawing detail is unclear. What should you do before starting work?",
    "options": [
      "Build it using your previous experience",
      "Ask another apprentice",
      "Clarify the information with the appropriate person",
      "I don't know"
    ],
    "correct": 2,
    "explanation": "Unclear drawings should always be clarified before work starts to avoid errors, wasted materials and delays.",
    "id": "site-carpentry-approved-a7-k13",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K18",
    "concept": "K18 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Another trade is working in your area and access is restricted. What should you do?",
    "options": [
      "Continue working around them",
      "Wait until they have finished",
      "Coordinate the work safely with the other trade",
      "I don't know"
    ],
    "correct": 2,
    "explanation": "Good communication between trades helps prevent accidents, avoids delays and improves the overall quality of the build.",
    "id": "site-carpentry-approved-a7-k18",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K19",
    "concept": "K19 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A colleague is being treated unfairly because of their background. What is the most appropriate action?",
    "options": [
      "Ignore it unless it affects your work",
      "Challenge or report the behaviour using site procedures",
      "Discuss it privately after work only",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Everyone has a responsibility to help create an inclusive workplace. Discrimination should be challenged appropriately or reported through the correct procedures.",
    "id": "site-carpentry-approved-a7-k19",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K20",
    "concept": "K20 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A workmate's behaviour changes noticeably and you're concerned about their wellbeing. What should you do?",
    "options": [
      "Ignore it because it's a personal matter",
      "Ask if they're okay and encourage them to access appropriate support if needed",
      "Tell the rest of the team",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Looking out for colleagues is part of professional behaviour. Offering support and signposting appropriate help can make a significant difference.",
    "id": "site-carpentry-approved-a7-k20",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B3",
    "concept": "B3 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A new apprentice is excluded by other workers because of their background. What is the most appropriate action?",
    "options": [
      "Ignore it unless they complain",
      "Support them and report inappropriate behaviour through the correct channels",
      "Tell them they'll have to fit in",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Everyone deserves to work in a respectful and inclusive environment. Discrimination or exclusion should be challenged or reported appropriately.",
    "id": "site-carpentry-approved-a7-b3",
    "type": "Behaviour",
    "status": "approved"
  },
  {
    "ksb": "B5",
    "concept": "B5 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Another trade is delayed and your work depends on theirs. What is the best approach?",
    "options": [
      "Continue with work that hasn't been coordinated",
      "Work with the wider team to agree the safest and most efficient next step",
      "Leave site until they're finished",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Construction projects rely on good teamwork. Coordinating with other trades helps maintain safety, quality and programme deadlines.",
    "id": "site-carpentry-approved-a7-b5",
    "type": "Behaviour",
    "status": "approved"
  },
  {
    "ksb": "K13",
    "concept": "K13 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A client asks why a door cannot be altered as requested because it is fire-rated. What is the best communication approach?",
    "options": [
      "Use technical abbreviations without explanation",
      "Explain plainly how the proposed alteration could affect the certified assembly, then outline compliant options",
      "Simply state that regulations forbid all alterations",
      "Refer them to another trade without recording the issue"
    ],
    "correct": 1,
    "explanation": "Clear, audience-appropriate communication should explain the technical consequence and identify compliant next steps without unnecessary jargon.",
    "id": "site-carpentry-challenging-a7-k13",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K18",
    "concept": "K18 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Two trades need the same access platform to meet separate deadlines. What is the most effective team response?",
    "options": [
      "The first trade to arrive keeps it all day",
      "Coordinate priorities and sequence through the supervisor to protect the programme and safety",
      "Both trades use it simultaneously",
      "Each trade delays without informing anyone"
    ],
    "correct": 1,
    "explanation": "Good teamwork requires coordinated planning, clear communication and safe allocation of shared resources around wider project priorities.",
    "id": "site-carpentry-challenging-a7-k18",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K19",
    "concept": "K19 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A worker with limited English is excluded from a toolbox talk because it would take longer to explain. Why is this unacceptable?",
    "options": [
      "Toolbox talks are optional for experienced workers",
      "Safety information must be communicated accessibly and inclusion supports equal participation",
      "Only written information is legally valid",
      "The worker should rely on colleagues afterwards"
    ],
    "correct": 1,
    "explanation": "Everyone affected must understand essential safety information. Reasonable communication support promotes inclusion and safe participation.",
    "id": "site-carpentry-challenging-a7-k19",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K20",
    "concept": "K20 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A colleague’s concentration and behaviour have changed significantly over several weeks. What is the most appropriate response?",
    "options": [
      "Diagnose the cause yourself",
      "Speak privately, listen without judgement and signpost suitable support or supervision",
      "Discuss it openly with the whole team",
      "Ignore it unless work quality fails"
    ],
    "correct": 1,
    "explanation": "A supportive, confidential conversation and appropriate signposting respects boundaries while helping the person access competent support.",
    "id": "site-carpentry-challenging-a7-k20",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B3",
    "concept": "B3 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A team member is repeatedly interrupted and their ideas are dismissed. What action best contributes to an inclusive culture?",
    "options": [
      "Stay silent to avoid conflict",
      "Create space for them to contribute and challenge disrespectful behaviour appropriately",
      "Speak for them on every occasion",
      "Tell them to be more assertive"
    ],
    "correct": 1,
    "explanation": "Inclusive behaviour involves enabling participation and addressing conduct that marginalises others, while respecting the individual’s own voice.",
    "id": "site-carpentry-challenging-a7-b3",
    "type": "Behaviour",
    "status": "approved"
  },
  {
    "ksb": "B5",
    "concept": "B5 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Your own task is complete, but delayed partitions will prevent the next trade starting. What best demonstrates team focus?",
    "options": [
      "Leave immediately because your work is finished",
      "Inform the supervisor and offer appropriate support within your competence",
      "Change the partition design without approval",
      "Ask the next trade to work around the delay"
    ],
    "correct": 1,
    "explanation": "Team focus means considering the wider build programme, communicating constraints and supporting recovery without exceeding authority or competence.",
    "id": "site-carpentry-challenging-a7-b5",
    "type": "Behaviour",
    "status": "approved"
  },
{
  "ksb": "K13",
  "concept": "K13 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "Which instruction is clearest during a coordinated lift of a pre-hung door set?",
  "options": [
    "Lift it carefully over there",
    "On three, raise the hinge side first and move to the marked opening",
    "Do what we normally do",
    "Take it to the room when ready"
  ],
  "correct": 1,
  "explanation": "Clear terminology, sequencing and location information reduce ambiguity during team tasks.",
  "id": "site-carpentry-challenging-set2-a7-k13",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "K18",
  "concept": "K18 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "Two trades need the same access route at the same time. What best reflects good team working?",
  "options": [
    "Block the route before the other trade arrives",
    "Agree a safe sequence with the wider team and communicate changes",
    "Continue independently until someone complains",
    "Leave the decision to the apprentice"
  ],
  "correct": 1,
  "explanation": "Good teamwork requires coordination, communication and consideration of the wider build programme.",
  "id": "site-carpentry-challenging-set2-a7-k18",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "K19",
  "concept": "K19 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "A worker is excluded from technical discussions because English is not their first language. What is the best response?",
  "options": [
    "Continue because technical meetings must be fast",
    "Use clear communication and reasonable support so they can contribute",
    "Ask them to sign the briefing without discussion",
    "Allocate them only simple tasks"
  ],
  "correct": 1,
  "explanation": "Inclusive practice removes avoidable barriers and enables workers to participate safely and fairly.",
  "id": "site-carpentry-challenging-set2-a7-k19",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "K20",
  "concept": "K20 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "A normally reliable colleague becomes withdrawn, makes unusual mistakes and says they are not sleeping. What is the most appropriate first action?",
  "options": [
    "Diagnose the cause yourself",
    "Speak privately, listen, and signpost approved support while addressing immediate safety risks",
    "Tell the whole team so they can watch them",
    "Ignore it unless they ask for help"
  ],
  "correct": 1,
  "explanation": "A supportive private conversation and appropriate signposting are suitable, while any immediate safety concern must also be managed.",
  "id": "site-carpentry-challenging-set2-a7-k20",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "B3",
  "concept": "B3 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "A team member suggests adapting a briefing format for a colleague with dyslexia. What best demonstrates inclusive behaviour?",
  "options": [
    "Reject it because everyone should receive identical information",
    "Use an accessible format that still communicates the same requirements",
    "Remove the colleague from the task",
    "Ask them to rely on another worker"
  ],
  "correct": 1,
  "explanation": "Equality may require reasonable adjustments so everyone can access the same essential information.",
  "id": "site-carpentry-challenging-set2-a7-b3",
  "type": "Behaviour",
  "status": "approved"
},
{
  "ksb": "B5",
  "concept": "B5 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "The carpentry team is ahead, but dryliners are delayed by stored materials in their area. What best supports the overall team goal?",
  "options": [
    "Leave the materials because carpentry is on programme",
    "Coordinate their relocation safely to help the wider build sequence",
    "Tell the dryliners to work around them",
    "Move them without informing anyone"
  ],
  "correct": 1,
  "explanation": "Team focus includes considering dependencies across trades and resolving obstacles through coordinated action.",
  "id": "site-carpentry-challenging-set2-a7-b5",
  "type": "Behaviour",
  "status": "approved"
}
]);

window.MCQQuestionBank.register('site-carpentry-v1-4',8,[
  {
    "ksb": "K22",
    "concept": "K22 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why should timber sizing tables be checked before installing floor joists?",
    "options": [
      "To reduce the amount of timber ordered",
      "To confirm the timber can safely support the required load and span",
      "To make fixing easier",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Sizing tables ensure timber members have sufficient strength and stiffness for the intended span and loading.",
    "id": "site-carpentry-approved-a8-k22",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K22",
    "concept": "K22 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A load-bearing stud wall includes a concentrated load above an opening. How should timber sizes and fixings be selected?",
    "options": [
      "Use the same arrangement as a nearby non-load-bearing wall",
      "Follow the structural design and relevant sizing information for studs, lintel and fixings",
      "Increase nail quantity until the wall feels rigid",
      "Choose the largest timber available"
    ],
    "correct": 1,
    "explanation": "Load-bearing elements and structural fixings must follow approved structural information; visual similarity or improvised over-fixing is not a substitute for design.",
    "id": "site-carpentry-challenging-a8-k22",
    "type": "Knowledge",
    "status": "approved"
  },
{
  "ksb": "K22",
  "concept": "K22 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "A load-bearing stud wall requires a timber size shown in a structural schedule. Why must the carpenter avoid substituting a smaller section?",
  "options": [
    "Smaller timber is harder to nail",
    "The wall's load capacity, stability and compliance may be reduced",
    "The plasterboard will always crack immediately",
    "The insulation will become non-compliant regardless of type"
  ],
  "correct": 1,
  "explanation": "Structural timber sizes are selected to meet load and stability requirements and should not be reduced without authorised design approval.",
  "id": "site-carpentry-challenging-set2-a8-k22",
  "type": "Knowledge",
  "status": "approved"
}
]);

window.MCQQuestionBank.register('site-carpentry-v1-4',9,[
  {
    "ksb": "K27",
    "concept": "K27 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Before fixing a timber stud wall, what should be checked first?",
    "options": [
      "The manufacturer's warranty",
      "That it is correctly set out, plumb and positioned",
      "The plasterboard thickness",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Accurate setting out ensures walls align correctly with the building layout and prevents problems during second fix.",
    "id": "site-carpentry-approved-a9-k27",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K27",
    "concept": "K27 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Floor joists require notches and holes for services. Which principle is correct?",
    "options": [
      "Cut them wherever services align",
      "Follow specified permitted zones and limits to preserve structural capacity",
      "Drill all holes near supports",
      "Notches are acceptable if reinforced with screws"
    ],
    "correct": 1,
    "explanation": "Joist penetrations must remain within defined zones and size limits because incorrect cuts can seriously reduce structural performance.",
    "id": "site-carpentry-challenging-a9-k27",
    "type": "Knowledge",
    "status": "approved"
  },
{
  "ksb": "K27",
  "concept": "K27 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "Why are floor joist crowns normally oriented consistently during installation?",
  "options": [
    "To make joists easier to paint",
    "To reduce irregular floor levels as the joists settle under load",
    "To eliminate the need for strutting",
    "To increase joist moisture content"
  ],
  "correct": 1,
  "explanation": "Consistent crown orientation helps produce a more even floor and controls variation as the structure carries load.",
  "id": "site-carpentry-challenging-set2-a9-k27",
  "type": "Knowledge",
  "status": "approved"
}
]);

window.MCQQuestionBank.register('site-carpentry-v1-4',10,[
  {
    "ksb": "K28",
    "concept": "K28 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "When hanging an internal door, what should be checked before fitting the ironmongery?",
    "options": [
      "That the door has the correct and even clearance around the frame",
      "That the architrave has been fitted",
      "That the skirting boards have been installed",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "The door should open and close freely with consistent gaps before locks, handles and other ironmongery are fitted.",
    "id": "site-carpentry-approved-a10-k28",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K28",
    "concept": "K28 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "External timber cladding is being fixed over battens. Which detail is most important for long-term performance?",
    "options": [
      "Seal every rear cavity completely",
      "Maintain the specified drainage, ventilation, clearances and fixing pattern",
      "Fix boards tightly edge-to-edge",
      "Use internal-grade fixings if concealed"
    ],
    "correct": 1,
    "explanation": "Correct ventilation, drainage, movement allowance and durable fixings control moisture and accommodate timber movement.",
    "id": "site-carpentry-challenging-a10-k28",
    "type": "Knowledge",
    "status": "approved"
  },
{
  "ksb": "K28",
  "concept": "K28 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "When forming a service encasement, why must access to valves or inspection points be maintained?",
  "options": [
    "To reduce the amount of timber used",
    "To allow future inspection, isolation and maintenance",
    "To improve acoustic insulation only",
    "To avoid using fire-stopping materials"
  ],
  "correct": 1,
  "explanation": "Required service points must remain accessible for safe inspection, isolation and maintenance.",
  "id": "site-carpentry-challenging-set2-a10-k28",
  "type": "Knowledge",
  "status": "approved"
}
]);

window.MCQQuestionBank.register('site-carpentry-v1-4',11,[
  {
    "ksb": "K11",
    "concept": "K11 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Which product is most suitable for filling a small defect in painted internal timber?",
    "options": [
      "Silicone sealant",
      "Two-part wood filler",
      "Expanding foam",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Wood filler restores minor defects before sanding and painting. Silicone and foam are not suitable for producing a durable painted timber finish.",
    "id": "site-carpentry-approved-a11-k11",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K28",
    "concept": "K28 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "When hanging an internal door, what should be checked before fitting the ironmongery?",
    "options": [
      "That the door has the correct and even clearance around the frame",
      "That the architrave has been fitted",
      "That the skirting boards have been installed",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "The door should open and close freely with consistent gaps before locks, handles and other ironmongery are fitted.",
    "id": "site-carpentry-approved-a11-k28",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K11",
    "concept": "K11 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A sealant is required around a sanitary worktop joint. Which selection factor is most important?",
    "options": [
      "Choose the cheapest colour match",
      "Confirm compatibility, movement capability and resistance to moisture and mould",
      "Use wood filler because it can be sanded",
      "Select any mastic labelled multipurpose"
    ],
    "correct": 1,
    "explanation": "The product must suit the substrates, movement and environmental exposure; appearance alone does not ensure performance.",
    "id": "site-carpentry-challenging-a11-k11",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K28",
    "concept": "K28 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A run of base units is level, but the wall is badly out of plumb. What is the correct installation approach?",
    "options": [
      "Pull the units tight to the wall and accept the twist",
      "Keep units level and aligned, scribe or pack appropriately, and secure to suitable structure",
      "Follow the wall even if doors no longer align",
      "Remove all service gaps"
    ],
    "correct": 1,
    "explanation": "Units should remain level, aligned and structurally secure. Irregular backgrounds are accommodated by controlled scribing or packing, not by distorting units.",
    "id": "site-carpentry-challenging-a11-k28",
    "type": "Knowledge",
    "status": "approved"
  },
{
  "ksb": "K11",
  "concept": "K11 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "Which product is most appropriate for filling a small cosmetic defect in joinery before a painted finish?",
  "options": [
    "Expanding foam",
    "A compatible wood filler specified for the finish",
    "Roofing mastic",
    "Timber preservative"
  ],
  "correct": 1,
  "explanation": "A compatible wood filler is designed to repair minor surface defects and accept the intended finish.",
  "id": "site-carpentry-challenging-set2-a11-k11",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "K28",
  "concept": "K28 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "A wall unit is fixed to a metal-stud partition. What is the most important consideration?",
  "options": [
    "Use the longest screws available",
    "Fix into suitable structural support or specified proprietary anchors",
    "Apply adhesive only",
    "Position all fixings into plasterboard edges"
  ],
  "correct": 1,
  "explanation": "The fixing method must transfer the load safely into suitable support, not rely on unsuitable lining material alone.",
  "id": "site-carpentry-challenging-set2-a11-k28",
  "type": "Knowledge",
  "status": "approved"
}
]);

window.MCQQuestionBank.register('site-carpentry-v1-4',12,[
  {
    "ksb": "K21",
    "concept": "K21 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "When marking several identical components, which method gives the greatest accuracy?",
    "options": [
      "Measure each piece individually",
      "Use one master component or setting-out rod as a reference",
      "Estimate from the previous cut",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Using a master template or setting-out rod reduces cumulative measuring errors and produces consistent components.",
    "id": "site-carpentry-approved-a12-k21",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K27",
    "concept": "K27 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Before fixing a timber stud wall, what should be checked first?",
    "options": [
      "The manufacturer's warranty",
      "That it is correctly set out, plumb and positioned",
      "The plasterboard thickness",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Accurate setting out ensures walls align correctly with the building layout and prevents problems during second fix.",
    "id": "site-carpentry-approved-a12-k27",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K28",
    "concept": "K28 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "When hanging an internal door, what should be checked before fitting the ironmongery?",
    "options": [
      "That the door has the correct and even clearance around the frame",
      "That the architrave has been fitted",
      "That the skirting boards have been installed",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "The door should open and close freely with consistent gaps before locks, handles and other ironmongery are fitted.",
    "id": "site-carpentry-approved-a12-k28",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K21",
    "concept": "K21 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A handrail return requires two matching mitres. Which method best controls cumulative error?",
    "options": [
      "Cut both pieces from nominal angles without checking",
      "Mark from the actual installation, test-fit and adjust before final fixing",
      "Fill any gap with adhesive",
      "Cut one piece long and force it into position"
    ],
    "correct": 1,
    "explanation": "Site conditions may vary from nominal geometry. Direct measurement, test fitting and controlled adjustment achieve an accurate joint.",
    "id": "site-carpentry-challenging-a12-k21",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K27",
    "concept": "K27 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Before installing a straight stair flight, which verification is most critical?",
    "options": [
      "That all components are the same colour",
      "That the opening, rise, going, headroom and supports match approved information",
      "That skirting is installed first",
      "That the stair can be carried by two people"
    ],
    "correct": 1,
    "explanation": "Stair geometry and support conditions affect safety and compliance. They must be checked against approved design before installation.",
    "id": "site-carpentry-challenging-a12-k27",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K28",
    "concept": "K28 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "When fitting spindles to a straight flight, what determines their maximum clear spacing?",
    "options": [
      "The width of the available timber",
      "Regulatory requirements and the approved balustrade design",
      "The installer’s preferred appearance",
      "The spacing of nearby floor joists"
    ],
    "correct": 1,
    "explanation": "Balustrade openings must comply with the applicable requirements and approved design to prevent unsafe gaps.",
    "id": "site-carpentry-challenging-a12-k28",
    "type": "Knowledge",
    "status": "approved"
  },
{
  "ksb": "K21",
  "concept": "K21 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "A handrail return requires two matching mitres. How should the carpenter minimise a visible gap?",
  "options": [
    "Cut both pieces to nominal angles without testing",
    "Verify the actual angle, mark from a common reference and trial-fit before final fixing",
    "Fill the joint before checking alignment",
    "Cut one piece oversize and force it closed"
  ],
  "correct": 1,
  "explanation": "Accurate angle verification, common-reference marking and trial fitting are essential for close-fitting mitres.",
  "id": "site-carpentry-challenging-set2-a12-k21",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "K27",
  "concept": "K27 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "Which check is most important before fixing a straight flight of stairs into its opening?",
  "options": [
    "That every tread is the same colour",
    "That dimensions, pitch, support and landing levels match the approved design",
    "That the strings have been varnished",
    "That the handrail is already fitted"
  ],
  "correct": 1,
  "explanation": "The staircase must fit the approved geometry and have adequate support before permanent fixing.",
  "id": "site-carpentry-challenging-set2-a12-k27",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "K28",
  "concept": "K28 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "When fitting spindles to a straight flight, what determines compliant spacing?",
  "options": [
    "The width of the available offcuts",
    "The approved design and applicable guarding requirements",
    "The carpenter's preferred appearance",
    "The distance that gives the fewest spindles"
  ],
  "correct": 1,
  "explanation": "Spacing must follow the approved design and guarding requirements rather than convenience or appearance alone.",
  "id": "site-carpentry-challenging-set2-a12-k28",
  "type": "Knowledge",
  "status": "approved"
}
]);

window.MCQQuestionBank.register('site-carpentry-v1-4',13,[
  {
    "ksb": "K28",
    "concept": "K28 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "When hanging an internal door, what should be checked before fitting the ironmongery?",
    "options": [
      "That the door has the correct and even clearance around the frame",
      "That the architrave has been fitted",
      "That the skirting boards have been installed",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "The door should open and close freely with consistent gaps before locks, handles and other ironmongery are fitted.",
    "id": "site-carpentry-approved-a13-k28",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K28",
    "concept": "K28 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A fire door is being rehung after floor finishes changed. Which adjustment is acceptable?",
    "options": [
      "Plane the door until any gap looks even",
      "Maintain the certified assembly’s permitted gaps, seals, hinges and closer requirements",
      "Remove the intumescent seals if they rub",
      "Replace fire-rated hinges with lighter hinges"
    ],
    "correct": 1,
    "explanation": "A fire door is a tested assembly. Alterations must retain specified components and tolerances rather than relying on appearance alone.",
    "id": "site-carpentry-challenging-a13-k28",
    "type": "Knowledge",
    "status": "approved"
  },
{
  "ksb": "K28",
  "concept": "K28 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "An internal door binds at the head only after being hung. What should be checked before planing the door?",
  "options": [
    "Whether the handle is centred",
    "Frame squareness, hinge positioning and consistent clearances",
    "The paint colour",
    "The floor covering in the next room"
  ],
  "correct": 1,
  "explanation": "Binding may result from frame or hinge alignment. The cause should be checked before removing material from the door.",
  "id": "site-carpentry-challenging-set2-a13-k28",
  "type": "Knowledge",
  "status": "approved"
}
]);

window.MCQQuestionBank.register('site-carpentry-v1-4',14,[
  {
    "ksb": "K24",
    "concept": "K24 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why is accurate scribing important when fitting timber against an uneven surface?",
    "options": [
      "To reduce the number of fixings required",
      "To produce a close-fitting, professional finish",
      "To allow larger expansion gaps",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Scribing transfers the shape of an uneven surface onto the timber, producing a neat fit with minimal gaps.",
    "id": "site-carpentry-approved-a14-k24",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K28",
    "concept": "K28 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "When hanging an internal door, what should be checked before fitting the ironmongery?",
    "options": [
      "That the door has the correct and even clearance around the frame",
      "That the architrave has been fitted",
      "That the skirting boards have been installed",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "The door should open and close freely with consistent gaps before locks, handles and other ironmongery are fitted.",
    "id": "site-carpentry-approved-a14-k28",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K24",
    "concept": "K24 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why is scribing generally preferred to forcing skirting against an uneven floor?",
    "options": [
      "It removes the need for fixings",
      "It transfers the irregular profile for a close fit without distorting the moulding",
      "It makes every joint a mitre",
      "It increases timber moisture resistance"
    ],
    "correct": 1,
    "explanation": "Scribing accurately follows the adjoining surface, producing a controlled fit while keeping the component correctly positioned.",
    "id": "site-carpentry-challenging-a14-k24",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K28",
    "concept": "K28 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "An internal corner in skirting is slightly out of square. Which technique usually gives the most reliable joint?",
    "options": [
      "Two fixed 45-degree mitres",
      "A scribed joint formed from the actual moulding profile",
      "A square butt joint filled completely",
      "Bending both lengths into the corner"
    ],
    "correct": 1,
    "explanation": "A scribed internal joint accommodates minor angular and profile variations better than two nominal mitres.",
    "id": "site-carpentry-challenging-a14-k28",
    "type": "Knowledge",
    "status": "approved"
  },
{
  "ksb": "K24",
  "concept": "K24 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "Why is scribing generally preferred to a mitre for an internal skirting corner?",
  "options": [
    "It requires no marking",
    "It better accommodates small corner-angle changes and timber movement",
    "It uses more adhesive",
    "It avoids cutting a profile"
  ],
  "correct": 1,
  "explanation": "A scribed joint follows the moulded profile and tends to remain visually closed despite minor angle errors or movement.",
  "id": "site-carpentry-challenging-set2-a14-k24",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "K28",
  "concept": "K28 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "A long skirting run needs a lengthwise joint. Which arrangement generally gives the least visible and most durable result?",
  "options": [
    "A square butt joint placed in an unsupported gap",
    "A scarf or splayed splice positioned over secure backing",
    "Two pieces overlapped without fixing",
    "A joint directly beneath a doorway threshold"
  ],
  "correct": 1,
  "explanation": "A supported scarf or splayed splice increases fixing area and makes the joint less conspicuous.",
  "id": "site-carpentry-challenging-set2-a14-k28",
  "type": "Knowledge",
  "status": "approved"
}
]);

window.MCQQuestionBank.register('site-carpentry-v1-4',15,[
  {
    "ksb": "K25",
    "concept": "K25 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Before cutting a traditional roof rafter, what should be confirmed first?",
    "options": [
      "The roof pitch and construction drawings",
      "The gutter manufacturer's details",
      "The ceiling paint finish",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Rafter lengths and angles depend on the roof pitch and design. Always work from the approved drawings.",
    "id": "site-carpentry-approved-a15-k25",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K26",
    "concept": "K26 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "What is the main difference between a warm roof and a cold roof?",
    "options": [
      "The roof covering used",
      "The position of the insulation",
      "The timber grade",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "A warm roof places insulation above the structural deck, while a cold roof places insulation below it.",
    "id": "site-carpentry-approved-a15-k26",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K25",
    "concept": "K25 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Before altering a prefabricated roof truss to pass a service, what must happen?",
    "options": [
      "Cut the smallest member available",
      "Obtain an approved structural solution from the designer or truss manufacturer",
      "Add plywood each side after cutting",
      "Move the service and leave the cut concealed"
    ],
    "correct": 1,
    "explanation": "Trusses are engineered systems. Members must not be altered without an approved design because changes can compromise the whole roof structure.",
    "id": "site-carpentry-challenging-a15-k25",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K26",
    "concept": "K26 challenging applied question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "In a warm flat roof, where is the principal insulation layer normally positioned?",
    "options": [
      "Below the ceiling with a ventilated void above",
      "Above the structural deck as part of the warm-roof build-up",
      "Between firring pieces only with no control layer",
      "Directly beneath the waterproof covering without a specified system"
    ],
    "correct": 1,
    "explanation": "A warm roof places insulation above the deck within a designed build-up, keeping the deck warmer and controlling condensation when layers are installed correctly.",
    "id": "site-carpentry-challenging-a15-k26",
    "type": "Knowledge",
    "status": "approved"
  },
{
  "ksb": "K25",
  "concept": "K25 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "During a traditional cut roof, why must birdsmouth cuts not be made deeper than the design permits?",
  "options": [
    "They make the rafter too heavy",
    "They reduce the effective rafter section and may weaken it",
    "They prevent ridge boards being painted",
    "They increase ventilation"
  ],
  "correct": 1,
  "explanation": "Excessive notching reduces the structural section of the rafter and can compromise its capacity.",
  "id": "site-carpentry-challenging-set2-a15-k25",
  "type": "Knowledge",
  "status": "approved"
},
{
  "ksb": "K26",
  "concept": "K26 alternative challenging question",
  "difficulty": "Challenging",
  "style": "workplace-scenario",
  "question": "What is the key distinction between warm and cold flat-roof insulation arrangements?",
  "options": [
    "Warm roofs always use metal decking",
    "Warm-roof insulation is generally above the structural deck, while cold-roof insulation is below with a ventilated void where required",
    "Cold roofs do not need moisture control",
    "Warm roofs cannot use waterproof coverings"
  ],
  "correct": 1,
  "explanation": "The insulation position and associated condensation-control strategy distinguish warm and cold roof constructions.",
  "id": "site-carpentry-challenging-set2-a15-k26",
  "type": "Knowledge",
  "status": "approved"
}
]);

window.MCQQuestionBank.register("architectural-joiner-st0264-v1-4",1,[
  {
    "ksb": "K1",
    "concept": "K1 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A cable runs across a busy workshop access route. What is the safest immediate action?",
    "options": [
      "Cover it with timber offcuts",
      "Reroute it or use an approved cable protector",
      "Mark it with warning tape only",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Trailing cables create trip and electrical hazards. They should be rerouted or protected with suitable equipment, not improvised materials.",
    "id": "architectural-joiner-approved-a1-k1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K2",
    "concept": "K2 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "You are sanding MDF at a fixed machine. Which control best reduces dust exposure?",
    "options": [
      "Safety glasses and an open door",
      "RPE without extraction",
      "Effective LEV with suitable RPE",
      "I don't know"
    ],
    "correct": 2,
    "explanation": "LEV removes dust at source. Suitable, correctly fitted RPE provides additional protection where the assessment requires it.",
    "id": "architectural-joiner-approved-a1-k2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K3",
    "concept": "K3 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "The method statement does not cover the machine setup being used. What should happen?",
    "options": [
      "Stop and have the safe system reviewed",
      "Continue if an experienced joiner agrees",
      "Use the machine at a slower feed rate",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "The risk assessment and method statement must match the actual task and equipment before work starts.",
    "id": "architectural-joiner-approved-a1-k3",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B1",
    "concept": "B1 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "You notice a damaged guard on a workshop machine. What should you do?",
    "options": [
      "Use the machine only for small components",
      "Remove it from use and report the defect",
      "Ask another worker to watch the blade",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "A defective guard can expose moving cutters or blades. The machine must be isolated, removed from use and reported.",
    "id": "architectural-joiner-approved-a1-b1",
    "type": "Behaviour",
    "status": "approved"
  }
,
  {
    "ksb": "S1",
    "concept": "S1 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A joiner is asked to use a portable router with a damaged cable because the job is urgent. What action demonstrates compliance with health and safety requirements?",
    "options": [
      "Use it through an RCD for this one cut",
      "Tape the cable and keep it clear of the bench",
      "Remove it from use, report it and obtain serviceable equipment",
      "Ask a colleague to hold the cable away from the cutter"
    ],
    "correct": 2,
    "explanation": "Damaged electrical equipment must be removed from use and reported; urgency does not justify bypassing safety requirements.",
    "id": "architectural-joiner-challenging-a1-s1",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "S2",
    "concept": "S2 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Machining hardwood creates fine airborne dust despite effective extraction. What is the most appropriate additional control?",
    "options": [
      "Wear any disposable mask available",
      "Use task-suitable, face-fit-tested RPE and confirm the LEV is operating correctly",
      "Open the workshop doors and reduce the feed speed",
      "Wear safety glasses instead of respiratory protection"
    ],
    "correct": 1,
    "explanation": "RPE must be suitable and correctly fitted, while LEV should be checked because extraction is the primary source control.",
    "id": "architectural-joiner-challenging-a1-s2",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "K1",
    "concept": "K1 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A joiner must cut material near an area where asbestos-containing board may be present. What is the correct decision?",
    "options": [
      "Proceed carefully without disturbing the board",
      "Dampen the area and use a dust mask",
      "Stop work and follow the asbestos management and reporting procedure",
      "Cover the suspected board with plywood and continue"
    ],
    "correct": 2,
    "explanation": "Suspected asbestos must not be disturbed. Work should stop until the register, assessment and authorised procedure confirm it is safe.",
    "id": "architectural-joiner-challenging-a1-k1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K2",
    "concept": "K2 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why is LEV generally more effective than relying only on RPE during repeated timber machining?",
    "options": [
      "LEV makes hearing protection unnecessary",
      "LEV captures contaminant close to its source before it spreads through the breathing zone",
      "LEV prevents all contact with rotating machinery",
      "LEV removes the need for routine inspection"
    ],
    "correct": 1,
    "explanation": "LEV controls dust at source; RPE is normally an additional control rather than the sole control for significant dust generation.",
    "id": "architectural-joiner-challenging-a1-k2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K3",
    "concept": "K3 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A toolbox talk identifies a new hazard that is absent from the current method statement. What should happen before work continues?",
    "options": [
      "Record it after the shift",
      "Rely on the verbal toolbox talk alone",
      "Review and amend the risk assessment and method statement, then brief those affected",
      "Allow only experienced workers to continue"
    ],
    "correct": 2,
    "explanation": "Safe systems must reflect the actual hazards and controls, and affected workers must understand the revised arrangements.",
    "id": "architectural-joiner-challenging-a1-k3",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B1",
    "concept": "B1 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A colleague appears exhausted and repeatedly makes setup errors at a spindle moulder. What response best puts health, safety and wellbeing first?",
    "options": [
      "Complete the setup for them without discussion",
      "Tell them to work more slowly",
      "Stop the unsafe activity, raise the concern appropriately and help them access support",
      "Ignore it unless an accident occurs"
    ],
    "correct": 2,
    "explanation": "Wellbeing concerns that affect safe performance should be addressed promptly through supportive reporting and appropriate assistance.",
    "id": "architectural-joiner-challenging-a1-b1",
    "type": "Behaviour",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("architectural-joiner-st0264-v1-4",2,[
  {
    "ksb": "K4",
    "concept": "K4 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Which method best reduces waste when manufacturing repeated joinery components?",
    "options": [
      "Leave extra length on every component",
      "Prepare an optimised cutting list before machining",
      "Machine each component from a new length",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "An optimised cutting list makes efficient use of stock lengths and reduces avoidable offcuts and remanufacture.",
    "id": "architectural-joiner-approved-a2-k4",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K7",
    "concept": "K7 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A fire-door detail conflicts with the manufacturer's installation instructions. What should happen?",
    "options": [
      "Follow the detail because it is on the drawing",
      "Use whichever method gives the neatest finish",
      "Clarify the conflict before manufacture or installation",
      "I don't know"
    ],
    "correct": 2,
    "explanation": "Fire-door work must comply with the approved design, test evidence and manufacturer's instructions. Conflicts require clarification.",
    "id": "architectural-joiner-approved-a2-k7",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K40",
    "concept": "K40 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Which payment is normally deducted from an employee's wages through PAYE?",
    "options": [
      "Income Tax",
      "VAT",
      "Corporation Tax",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Employees normally pay Income Tax and National Insurance through PAYE. Self-employed workers have different reporting responsibilities.",
    "id": "architectural-joiner-approved-a2-k40",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B2",
    "concept": "B2 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Usable hardwood offcuts remain after machining. What is the best action?",
    "options": [
      "Put them in general waste",
      "Store suitable pieces for reuse",
      "Burn them with other timber waste",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Reusing suitable offcuts reduces waste, cost and demand for new timber while maintaining the required quality.",
    "id": "architectural-joiner-approved-a2-b2",
    "type": "Behaviour",
    "status": "approved"
  }
,
  {
    "ksb": "S3",
    "concept": "S3 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Offcuts include clean untreated timber, MDF and solvent-contaminated cloths. How should they be managed?",
    "options": [
      "Place all items in the timber recycling skip",
      "Burn clean timber and bin the remainder",
      "Segregate each waste stream and use authorised storage and disposal routes",
      "Mix them together if the total volume is small"
    ],
    "correct": 2,
    "explanation": "Different materials and hazardous wastes require separate, authorised reuse, recycling or disposal arrangements.",
    "id": "architectural-joiner-challenging-a2-s3",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "S4",
    "concept": "S4 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A window specification conflicts with a current fire-safety requirement. What should the joiner do?",
    "options": [
      "Follow the drawing because it was issued first",
      "Alter the detail using personal judgement",
      "Stop and seek clarification through the approved technical route before manufacture",
      "Manufacture it and record the conflict on delivery"
    ],
    "correct": 2,
    "explanation": "Conflicts with regulations or standards must be resolved before manufacture, not improvised or deferred.",
    "id": "architectural-joiner-challenging-a2-s4",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "K4",
    "concept": "K4 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Which purchasing decision best supports sustainable forestry without compromising specification?",
    "options": [
      "Choose the cheapest imported timber",
      "Use certified timber of the required grade and optimise cutting to reduce waste",
      "Replace all solid timber with plastic",
      "Order extra material to avoid a second delivery"
    ],
    "correct": 1,
    "explanation": "Certified, correctly graded timber and efficient cutting reduce environmental impact while maintaining required performance.",
    "id": "architectural-joiner-challenging-a2-k4",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K7",
    "concept": "K7 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A manufactured door set is intended for a fire-resisting opening. Which source should govern its construction and installation?",
    "options": [
      "A similar door in another building",
      "The relevant regulations, test evidence, manufacturer instructions and project specification",
      "The workshop supervisor’s preferred detail",
      "A general-purpose joinery textbook alone"
    ],
    "correct": 1,
    "explanation": "Fire performance depends on the tested system and compliance with relevant regulations, standards and specified details.",
    "id": "architectural-joiner-challenging-a2-k7",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K40",
    "concept": "K40 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A self-employed joiner prices work without allowing for tax, insurance or business overheads. What is the main risk?",
    "options": [
      "The quotation will always be rejected",
      "Turnover may appear healthy while the work is financially unsustainable and obligations are unmet",
      "The customer automatically becomes the employer",
      "VAT must be charged on every first job"
    ],
    "correct": 1,
    "explanation": "Self-employment requires realistic costing and compliance with tax, insurance and business obligations.",
    "id": "architectural-joiner-challenging-a2-k40",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B2",
    "concept": "B2 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A cutting list can be nested to save one board, but it requires reorganising the machining sequence. What behaviour best reflects environmental responsibility?",
    "options": [
      "Use the original layout to save planning time",
      "Optimise the cutting plan where safe and practical, and segregate remaining waste",
      "Order another board as contingency",
      "Discard short reusable offcuts immediately"
    ],
    "correct": 1,
    "explanation": "Resource-efficient planning reduces waste while maintaining safe and effective production.",
    "id": "architectural-joiner-challenging-a2-b2",
    "type": "Behaviour",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("architectural-joiner-st0264-v1-4",3,[
  {
    "ksb": "K5",
    "concept": "K5 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why must a timber door frame be isolated from a damp masonry opening?",
    "options": [
      "To improve screw holding",
      "To reduce moisture passing into the timber",
      "To keep the frame perfectly square",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Timber can absorb moisture from damp masonry, causing swelling, staining and decay. Suitable separation and protection are required.",
    "id": "architectural-joiner-approved-a3-k5",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K6",
    "concept": "K6 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A digital model and workshop drawing show different dimensions. What should you use?",
    "options": [
      "The latest authorised information after clarification",
      "The workshop drawing because it is printed",
      "The digital model because it is electronic",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Neither format automatically takes priority. The latest authorised revision must be confirmed before manufacture begins.",
    "id": "architectural-joiner-approved-a3-k6",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K8",
    "concept": "K8 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A written dimension conflicts with a scaled measurement on a drawing. Which normally takes priority?",
    "options": [
      "The scaled measurement",
      "The written dimension",
      "The dimension using the least material",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Written dimensions normally take priority because drawings can be printed or displayed at a different scale.",
    "id": "architectural-joiner-approved-a3-k8",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B4",
    "concept": "B4 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "You are offered training on unfamiliar CNC or fixed machinery. What should you do?",
    "options": [
      "Attend and develop your competence",
      "Decline until the machine becomes compulsory",
      "Watch another worker instead of training",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Taking suitable training opportunities improves competence and supports safe use of new equipment and methods.",
    "id": "architectural-joiner-approved-a3-b4",
    "type": "Behaviour",
    "status": "approved"
  }
,
  {
    "ksb": "S5",
    "concept": "S5 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Before assembling large frames, what is the best way to prepare the work area?",
    "options": [
      "Stack components beside the emergency exit",
      "Clear access routes, check supports and handling space, and position protection before starting",
      "Begin assembly and move obstructions as required",
      "Use the floor because it provides the largest surface"
    ],
    "correct": 1,
    "explanation": "A planned, clear and protected work area reduces handling, trip and damage risks.",
    "id": "architectural-joiner-challenging-a3-s5",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "S6",
    "concept": "S6 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A drawing dimension conflicts with the written specification. What should the joiner do before marking out?",
    "options": [
      "Use the larger dimension",
      "Average the two values",
      "Raise a technical query and work only from confirmed information",
      "Follow whichever document was printed most recently"
    ],
    "correct": 2,
    "explanation": "Conflicting information must be clarified through the controlled project process before manufacture.",
    "id": "architectural-joiner-challenging-a3-s6",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "K5",
    "concept": "K5 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why can sealing an internal timber lining against a cold external wall create a defect?",
    "options": [
      "It always weakens the timber grain",
      "It may restrict moisture movement and create concealed condensation if the wall build-up is not understood",
      "It causes all fixings to corrode immediately",
      "It increases the fire resistance beyond the design"
    ],
    "correct": 1,
    "explanation": "Changes to insulation, air and moisture layers can shift condensation risk and damage the building fabric.",
    "id": "architectural-joiner-challenging-a3-k5",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K6",
    "concept": "K6 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "What is the main benefit of checking a digital model before producing setting-out details?",
    "options": [
      "It removes the need to verify dimensions on site",
      "It can reveal interfaces, clashes and coordinated dimensions, subject to document control",
      "It guarantees the model is contractually correct",
      "It permits unapproved design changes"
    ],
    "correct": 1,
    "explanation": "Digital models aid coordination, but information still requires status checks and verification.",
    "id": "architectural-joiner-challenging-a3-k6",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K8",
    "concept": "K8 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A drawing is marked “for information” rather than “for construction.” What does this mean for manufacture?",
    "options": [
      "It may be used if dimensions appear complete",
      "It should not be used as authorised production information",
      "Only timber dimensions may be taken from it",
      "It becomes valid after verbal approval from a colleague"
    ],
    "correct": 1,
    "explanation": "Document status controls whether information is approved for manufacture or installation.",
    "id": "architectural-joiner-challenging-a3-k8",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B4",
    "concept": "B4 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A new CNC process is being introduced, but the joiner has only used manual machinery. What is the best response?",
    "options": [
      "Attempt the process using existing knowledge",
      "Avoid the task permanently",
      "Seek training and supervised practice before operating independently",
      "Ask a trained colleague to sign the work off afterwards"
    ],
    "correct": 2,
    "explanation": "Learning and supervised development should precede independent use of unfamiliar processes or equipment.",
    "id": "architectural-joiner-challenging-a3-b4",
    "type": "Behaviour",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("architectural-joiner-st0264-v1-4",4,[
  {
    "ksb": "K9",
    "concept": "K9 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Which material is most suitable for a stable, painted internal joinery panel?",
    "options": [
      "Unseasoned softwood boards",
      "Moisture-resistant MDF where specified",
      "External carcassing timber",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Where permitted, moisture-resistant MDF provides a stable, smooth surface suitable for painted internal joinery.",
    "id": "architectural-joiner-approved-a4-k9",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K10",
    "concept": "K10 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Timber remains damp, darkens and becomes soft near a leaking opening. What is most likely?",
    "options": [
      "Dry rot",
      "Insect attack",
      "Wet rot",
      "I don't know"
    ],
    "correct": 2,
    "explanation": "Wet rot develops where timber remains persistently damp. The moisture source must be corrected before repair.",
    "id": "architectural-joiner-approved-a4-k10",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K12",
    "concept": "K12 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why should a cutting list be completed before selecting timber stock?",
    "options": [
      "To reduce waste and confirm required sizes",
      "To avoid checking the drawings",
      "To remove the need for quality checks",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "A cutting list confirms finished sizes, quantities and allowances so suitable stock can be selected efficiently.",
    "id": "architectural-joiner-approved-a4-k12",
    "type": "Knowledge",
    "status": "approved"
  }
,
  {
    "ksb": "S7",
    "concept": "S7 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A cutting list requires twelve identical rails from stock containing several defects. What is the best estimating approach?",
    "options": [
      "Divide total rail length by board length only",
      "Allow for saw kerfs, defects, machining allowance and usable yield before ordering",
      "Order exactly the net finished length",
      "Add a fixed 50% waste allowance to every job"
    ],
    "correct": 1,
    "explanation": "Accurate estimation considers real material yield, defects, machining and cutting losses.",
    "id": "architectural-joiner-challenging-a4-s7",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "K9",
    "concept": "K9 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why is quarter-sawn timber often selected for components where dimensional stability is important?",
    "options": [
      "It is always cheaper than flat-sawn timber",
      "Its growth-ring orientation generally reduces width movement and cupping",
      "It contains no natural defects",
      "It requires no moisture conditioning"
    ],
    "correct": 1,
    "explanation": "Quarter-sawn boards generally move less across their width and are less prone to cupping.",
    "id": "architectural-joiner-challenging-a4-k9",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K10",
    "concept": "K10 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A timber component has cuboidal cracking, darkened wood and remains brittle after drying. Which defect is most likely?",
    "options": [
      "Wet rot",
      "Dry rot",
      "Blue stain only",
      "Resin bleed"
    ],
    "correct": 1,
    "explanation": "Cuboidal cracking and brittle decay are characteristic indicators associated with dry rot, requiring investigation of moisture and spread.",
    "id": "architectural-joiner-challenging-a4-k10",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K12",
    "concept": "K12 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why should a cutting list distinguish finished sizes from sawn sizes?",
    "options": [
      "To reduce the number of components",
      "To ensure machining allowances are included before material is ordered and cut",
      "To avoid identifying timber species",
      "To eliminate the need for tolerances"
    ],
    "correct": 1,
    "explanation": "Sawn stock must include sufficient allowance to achieve the specified finished dimensions after machining.",
    "id": "architectural-joiner-challenging-a4-k12",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("architectural-joiner-st0264-v1-4",5,[
  {
    "ksb": "K14",
    "concept": "K14 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Which tool checks whether adjoining component faces are at 90 degrees?",
    "options": [
      "Sliding bevel",
      "Try square",
      "Marking gauge",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "A try square is used to mark and check right angles on timber components.",
    "id": "architectural-joiner-approved-a5-k14",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K15",
    "concept": "K15 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A chisel edge is sharp but has a rounded bevel. What is the likely problem?",
    "options": [
      "It will cut more deeply",
      "It will be harder to control accurately",
      "It will prevent the timber splitting",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "A rounded bevel changes the cutting geometry and makes accurate, controlled paring more difficult.",
    "id": "architectural-joiner-approved-a5-k15",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K17",
    "concept": "K17 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Before changing a router cutter, what must you do first?",
    "options": [
      "Lower the speed setting",
      "Remove the battery or isolate the power",
      "Fit the extraction hose",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "The tool must be isolated before changing cutters or carrying out adjustments to prevent accidental start-up.",
    "id": "architectural-joiner-approved-a5-k17",
    "type": "Knowledge",
    "status": "approved"
  }
,
  {
    "ksb": "S9",
    "concept": "S9 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A chisel is required for paring a shoulder close to a finished face. Which method is safest and most controlled?",
    "options": [
      "Strike it hard with a metal hammer",
      "Use a sharp chisel with both hands behind the cutting edge and controlled pressure",
      "Hold the work by hand and cut towards the body",
      "Use a blunt chisel to reduce the chance of slipping"
    ],
    "correct": 1,
    "explanation": "Sharp tools, secure work and hands kept behind the cutting edge provide controlled and safer paring.",
    "id": "architectural-joiner-challenging-a5-s9",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "S10",
    "concept": "S10 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Before plunging a router into a workpiece, what setup is most important?",
    "options": [
      "Start the motor before fitting the cutter",
      "Confirm the cutter is correctly secured, depth is set, work is clamped and guarding/extraction are effective",
      "Hold the workpiece against the bench by hand",
      "Increase speed after the cutter enters the timber"
    ],
    "correct": 1,
    "explanation": "Correct cutter security, settings, workholding, guarding and extraction are essential before routing.",
    "id": "architectural-joiner-challenging-a5-s10",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "S11",
    "concept": "S11 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A plane iron produces a polished edge but leaves repeated ridges. What maintenance action is most appropriate?",
    "options": [
      "Increase the depth of cut",
      "Flatten and sharpen the cutting edge, then reset the cap iron and lateral adjustment",
      "Oil the sole without removing the iron",
      "Round over the corners of the blade heavily"
    ],
    "correct": 1,
    "explanation": "Ridges commonly indicate an uneven or damaged edge or poor setup; sharpening and correct adjustment restore performance.",
    "id": "architectural-joiner-challenging-a5-s11",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "K14",
    "concept": "K14 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why should a marking gauge pin project only enough to score the timber?",
    "options": [
      "A long pin improves accuracy on all grain directions",
      "Excess projection can follow grain, tear fibres and reduce control",
      "A short pin prevents the fence contacting the face edge",
      "Projection has no effect if the stock is hardwood"
    ],
    "correct": 1,
    "explanation": "Minimal projection gives a controlled, accurate line and reduces grain-following and tearing.",
    "id": "architectural-joiner-challenging-a5-k14",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K15",
    "concept": "K15 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why is a consistent sharpening angle important on a bench chisel?",
    "options": [
      "It guarantees the chisel never becomes blunt",
      "It balances edge strength with cutting performance for the intended work",
      "It changes the timber moisture content",
      "It removes the need to flatten the back"
    ],
    "correct": 1,
    "explanation": "The bevel angle affects both edge durability and cutting ease; the back must also be suitably flat.",
    "id": "architectural-joiner-challenging-a5-k15",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K17",
    "concept": "K17 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A portable circular saw consistently burns the cut and wanders. Which combination is most likely?",
    "options": [
      "A sharp correct blade and slow feed",
      "A blunt or unsuitable blade, poor setup or excessive feed pressure",
      "Low timber moisture content only",
      "An overlong extension lead with the saw unplugged"
    ],
    "correct": 1,
    "explanation": "Blade condition/type, alignment and feed technique are primary causes of burning and wandering.",
    "id": "architectural-joiner-challenging-a5-k17",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("architectural-joiner-st0264-v1-4",6,[
  {
    "ksb": "K16",
    "concept": "K16 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why is a jig preferable when routing several identical housings?",
    "options": [
      "It removes the need to mark datum faces",
      "It improves repeatability and controls cutter position",
      "It allows any cutter size to be used",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "A correctly made jig controls the tool consistently, improving accuracy and repeatability across multiple components.",
    "id": "architectural-joiner-approved-a6-k16",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K29",
    "concept": "K29 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A laser level is knocked during setting out. What should you do before continuing?",
    "options": [
      "Recheck its accuracy or calibration",
      "Continue if the line still looks level",
      "Increase the laser brightness",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "An impact may affect accuracy. The laser must be checked before its readings are relied upon.",
    "id": "architectural-joiner-approved-a6-k29",
    "type": "Knowledge",
    "status": "approved"
  }
,
  {
    "ksb": "S12",
    "concept": "S12 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A drilling jig will be used for fifty identical components. What feature most improves repeatable accuracy?",
    "options": [
      "A pencil centreline only",
      "Positive location stops and a durable guide bush referenced from consistent faces",
      "A larger drill than the finished hole",
      "Clamping the jig in a different position each time"
    ],
    "correct": 1,
    "explanation": "Stops and guide bushes locate each component consistently and control tool position over repeated use.",
    "id": "architectural-joiner-challenging-a6-s12",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "K16",
    "concept": "K16 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why should a jig be trialled on scrap before production?",
    "options": [
      "To wear in the cutter",
      "To verify location, clearance, sequence and finished accuracy without risking production material",
      "To avoid recording dimensions",
      "To replace the need for inspection"
    ],
    "correct": 1,
    "explanation": "A trial confirms the jig and process produce the required result safely before valuable components are machined.",
    "id": "architectural-joiner-challenging-a6-k16",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K29",
    "concept": "K29 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A laser level is knocked over during setup but appears undamaged. What should happen before relying on it?",
    "options": [
      "Continue because the beam still lights",
      "Check its calibration against a known reference and remove it from use if accuracy is uncertain",
      "Adjust the work to match the beam",
      "Store it for one hour to reset automatically"
    ],
    "correct": 1,
    "explanation": "Impact can affect calibration even without visible damage, so accuracy must be verified before use.",
    "id": "architectural-joiner-challenging-a6-k29",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("architectural-joiner-st0264-v1-4",7,[
  {
    "ksb": "K13",
    "concept": "K13 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A drawing detail is unclear before manufacture. What should you do?",
    "options": [
      "Use a previous job as the pattern",
      "Clarify it with the appropriate person",
      "Choose the easiest construction method",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Unclear information should be clarified before work starts to prevent incorrect manufacture, waste and delay.",
    "id": "architectural-joiner-approved-a7-k13",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K18",
    "concept": "K18 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Another worker needs the spindle moulder while your setup is incomplete. What is the best response?",
    "options": [
      "Coordinate the work and agree a safe sequence",
      "Leave your setup in place and walk away",
      "Allow them to adjust your guards and cutters",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Good teamwork requires clear coordination so machinery remains safely set up and production can continue efficiently.",
    "id": "architectural-joiner-approved-a7-k18",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K19",
    "concept": "K19 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A colleague is repeatedly excluded because of their background. What should you do?",
    "options": [
      "Ignore it unless they make a complaint",
      "Support them and report inappropriate behaviour",
      "Tell them to avoid the people involved",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Exclusion and discrimination should be challenged appropriately or reported through the correct workplace procedure.",
    "id": "architectural-joiner-approved-a7-k19",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K20",
    "concept": "K20 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A colleague's behaviour changes and you are concerned about their wellbeing. What should you do?",
    "options": [
      "Ask if they are okay and signpost support",
      "Discuss it with the whole workshop",
      "Ignore it because it is personal",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "A respectful conversation and appropriate signposting can help, while maintaining privacy and professional boundaries.",
    "id": "architectural-joiner-approved-a7-k20",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B3",
    "concept": "B3 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A new apprentice is being mocked for asking questions. What is the best action?",
    "options": [
      "Tell them to stop asking in front of others",
      "Support them and challenge or report the behaviour",
      "Wait until their review meeting",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "An inclusive workplace allows people to learn without harassment. Inappropriate behaviour should be challenged or reported.",
    "id": "architectural-joiner-approved-a7-b3",
    "type": "Behaviour",
    "status": "approved"
  },
  {
    "ksb": "B5",
    "concept": "B5 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A delayed component will affect the installation team. What should you do?",
    "options": [
      "Coordinate with the wider team and agree priorities",
      "Finish your own batch before telling anyone",
      "Send an unfinished component to save time",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Early coordination helps the wider team manage safety, quality and programme impacts.",
    "id": "architectural-joiner-approved-a7-b5",
    "type": "Behaviour",
    "status": "approved"
  }
,
  {
    "ksb": "S8",
    "concept": "S8 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A drawing issue is being explained to a customer unfamiliar with joinery terms. What is the best approach?",
    "options": [
      "Use technical abbreviations to show expertise",
      "Explain the effect in plain language, using essential terms only and checking understanding",
      "Avoid discussing the issue until manufacture is complete",
      "Send the drawing without explanation"
    ],
    "correct": 1,
    "explanation": "Communication should be adapted to the audience while remaining accurate and confirming understanding.",
    "id": "architectural-joiner-challenging-a7-s8",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "S13",
    "concept": "S13 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A colleague says workload is affecting sleep and concentration. What should the joiner do?",
    "options": [
      "Diagnose the condition",
      "Listen, encourage use of appropriate workplace or external support, and escalate immediate safety concerns",
      "Promise the issue will remain secret in all circumstances",
      "Tell them everyone experiences the same pressure"
    ],
    "correct": 1,
    "explanation": "Supportive listening and signposting are appropriate; urgent safety concerns may require escalation.",
    "id": "architectural-joiner-challenging-a7-s13",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "K13",
    "concept": "K13 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "When is precise construction terminology most important?",
    "options": [
      "When discussing colour preferences with a customer",
      "When communicating dimensions, tolerances and technical requirements to the production team",
      "During an informal lunch break",
      "When avoiding written records"
    ],
    "correct": 1,
    "explanation": "Technical terms reduce ambiguity when communicating production requirements to competent colleagues.",
    "id": "architectural-joiner-challenging-a7-k13",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K18",
    "concept": "K18 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why should the workshop team coordinate machining and assembly sequences?",
    "options": [
      "To ensure every worker performs the same task",
      "To avoid bottlenecks, conflicting use of equipment and incomplete components reaching assembly",
      "To remove individual responsibility",
      "To eliminate the need for quality checks"
    ],
    "correct": 1,
    "explanation": "Coordination supports safe flow, resource availability and completion of components in the required order.",
    "id": "architectural-joiner-challenging-a7-k18",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K19",
    "concept": "K19 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Which action best supports equity rather than simply treating everyone identically?",
    "options": [
      "Give all workers exactly the same equipment regardless of need",
      "Provide reasonable adjustments that enable individuals to participate safely and effectively",
      "Exclude anyone who requires an adjustment from machinery work",
      "Lower quality standards for selected workers"
    ],
    "correct": 1,
    "explanation": "Equity addresses barriers through appropriate adjustments while maintaining legitimate standards.",
    "id": "architectural-joiner-challenging-a7-k19",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K20",
    "concept": "K20 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Which sign most strongly indicates that a wellbeing concern may be affecting workshop safety?",
    "options": [
      "A worker prefers a different radio station",
      "Persistent fatigue, reduced concentration and repeated unusual mistakes",
      "A request for annual leave",
      "A change of lunch choice"
    ],
    "correct": 1,
    "explanation": "Changes in concentration and repeated errors can indicate a wellbeing issue with direct safety implications.",
    "id": "architectural-joiner-challenging-a7-k20",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B3",
    "concept": "B3 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A team member is repeatedly excluded from technical discussions because English is not their first language. What is the best response?",
    "options": [
      "Accept it because meetings must be quick",
      "Use inclusive communication, ensure they can contribute and challenge the exclusion appropriately",
      "Give them only non-technical work",
      "Ask them to obtain information afterwards"
    ],
    "correct": 1,
    "explanation": "Inclusive practice removes communication barriers and ensures fair participation in relevant work decisions.",
    "id": "architectural-joiner-challenging-a7-b3",
    "type": "Behaviour",
    "status": "approved"
  },
  {
    "ksb": "B5",
    "concept": "B5 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Assembly is falling behind because machined components are arriving out of sequence. What team-focused action is best?",
    "options": [
      "Concentrate only on personal output",
      "Coordinate priorities with machining and assembly colleagues to recover the shared programme safely",
      "Skip inspections to increase speed",
      "Blame the previous shift in the job record"
    ],
    "correct": 1,
    "explanation": "Team focus means coordinating across the wider production process rather than optimising one task in isolation.",
    "id": "architectural-joiner-challenging-a7-b5",
    "type": "Behaviour",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("architectural-joiner-st0264-v1-4",8,[
  {
    "ksb": "K32",
    "concept": "K32 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why should all joinery components be marked from the same face side and face edge?",
    "options": [
      "To reduce the amount of marking",
      "To keep measurements from a consistent datum",
      "To make the pencil lines easier to remove",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Using common datum faces prevents errors caused by measuring from uneven or differently sized surfaces.",
    "id": "architectural-joiner-approved-a8-k32",
    "type": "Knowledge",
    "status": "approved"
  }
,
  {
    "ksb": "S23",
    "concept": "S23 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A setting rod shows accumulated dimensions for several components. How should the joiner reduce cumulative error?",
    "options": [
      "Mark each dimension from the previous mark",
      "Reference critical dimensions from a common datum and verify the overall size",
      "Use a thicker pencil line",
      "Add machining allowance after assembly"
    ],
    "correct": 1,
    "explanation": "Common datums prevent small marking errors from accumulating across multiple components.",
    "id": "architectural-joiner-challenging-a8-s23",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "K32",
    "concept": "K32 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "What is the likely effect of marking mortices from different face edges on paired components?",
    "options": [
      "The joints will self-align during cramping",
      "The components may be mirrored or offset, causing poor alignment and incorrect overall geometry",
      "Only the surface finish will change",
      "The timber will become less stable"
    ],
    "correct": 1,
    "explanation": "Consistent face-side and face-edge references are essential for corresponding joints and accurate assembly.",
    "id": "architectural-joiner-challenging-a8-k32",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("architectural-joiner-st0264-v1-4",9,[
  {
    "ksb": "K11",
    "concept": "K11 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Which product is most suitable for filling a small defect in painted internal joinery?",
    "options": [
      "Silicone sealant",
      "Two-part wood filler",
      "Expanding foam",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "A suitable wood filler can be shaped, sanded and finished to restore a minor defect in painted timber.",
    "id": "architectural-joiner-approved-a9-k11",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K33",
    "concept": "K33 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "What is the main risk if mortise-and-tenon shoulders do not close during assembly?",
    "options": [
      "The joint can finish out of square and show gaps",
      "The adhesive will cure too quickly",
      "The tenon will become stronger",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Closed, accurate shoulders help locate the joint, maintain squareness and provide a clean finished appearance.",
    "id": "architectural-joiner-approved-a9-k33",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K35",
    "concept": "K35 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "When is a biscuit joint most useful in joinery manufacture?",
    "options": [
      "For carrying major structural loads alone",
      "For aligning and joining boards or components",
      "For replacing all mechanical fixings in fire doors",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Biscuits are commonly used to align and join components, often with adhesive, but are not a universal structural fixing.",
    "id": "architectural-joiner-approved-a9-k35",
    "type": "Knowledge",
    "status": "approved"
  }
,
  {
    "ksb": "S24",
    "concept": "S24 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A mortice-and-tenon frame must resist racking. Which production choice is most important?",
    "options": [
      "Make the tenon as thin as possible",
      "Produce accurately fitting shoulders and proportion the joint without excessively weakening either member",
      "Leave gaps for extra adhesive",
      "Cut the mortice across the full width of the stile"
    ],
    "correct": 1,
    "explanation": "Sound proportions and tight shoulders transfer load and maintain frame geometry without unduly weakening members.",
    "id": "architectural-joiner-challenging-a9-s24",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "S25",
    "concept": "S25 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "When using biscuits to align a wide panel glue-up, what is the correct practice?",
    "options": [
      "Use biscuits to replace all edge preparation",
      "Cut matching slots from consistent reference faces and apply the specified adhesive and clamping pressure",
      "Make one slot deeper so the panel can move",
      "Fit dry biscuits permanently without adhesive"
    ],
    "correct": 1,
    "explanation": "Matching reference faces, correct adhesive and controlled cramping produce alignment and bond performance.",
    "id": "architectural-joiner-challenging-a9-s25",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "K11",
    "concept": "K11 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why must preservative compatibility be checked before applying a decorative finish?",
    "options": [
      "Preservatives always prevent paint adhesion",
      "Some treatments can affect adhesion, drying or appearance, so manufacturer guidance must be followed",
      "Decorative finishes make preservatives unnecessary",
      "Compatibility matters only outdoors"
    ],
    "correct": 1,
    "explanation": "Chemical compatibility can affect the performance of subsequent fillers, sealants and finishes.",
    "id": "architectural-joiner-challenging-a9-k11",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K33",
    "concept": "K33 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why are dovetails effective in a drawer corner?",
    "options": [
      "They rely entirely on adhesive",
      "Their interlocking shape resists withdrawal in the direction of the main load",
      "They require no accurate marking",
      "They allow unlimited timber movement"
    ],
    "correct": 1,
    "explanation": "The geometry mechanically resists pulling apart, while accurate fitting and adhesive complete the joint.",
    "id": "architectural-joiner-challenging-a9-k33",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K35",
    "concept": "K35 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "When are dowels preferable to biscuits for a small framed joint?",
    "options": [
      "When precise positional reinforcement is required within limited edge width",
      "Whenever no drilling equipment is available",
      "When the joint must remain completely unglued",
      "Only when joining end grain to glass"
    ],
    "correct": 0,
    "explanation": "Dowels can provide accurate alignment and reinforcement where biscuit dimensions or slotting are unsuitable.",
    "id": "architectural-joiner-challenging-a9-k35",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("architectural-joiner-st0264-v1-4",10,[
  {
    "ksb": "K34",
    "concept": "K34 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Before gluing a right-angled timber window, which check is most important?",
    "options": [
      "The frame components are dry assembled and diagonals match",
      "The glazing beads are already painted",
      "The ironmongery has been fitted",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "A dry assembly and equal diagonal check confirm the window is square and the joints fit before adhesive is applied.",
    "id": "architectural-joiner-approved-a10-k34",
    "type": "Knowledge",
    "status": "approved"
  }
,
  {
    "ksb": "S26",
    "concept": "S26 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "During dry assembly of a casement, diagonal measurements differ. What should happen before gluing?",
    "options": [
      "Increase hinge clearance",
      "Correct the component or joint accuracy until the frame is square and meets tolerance",
      "Force it square with glazing beads after finishing",
      "Plane the outside edges after glazing"
    ],
    "correct": 1,
    "explanation": "Squareness should be corrected during dry assembly; later forcing or trimming can distort rebates and operation.",
    "id": "architectural-joiner-challenging-a10-s26",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "K34",
    "concept": "K34 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why must glazing rebates have correct depth and edge cover?",
    "options": [
      "Only to reduce machining time",
      "To accommodate the specified glazing system, drainage and sealant while retaining the unit safely",
      "To make the sash heavier",
      "To eliminate all need for beads"
    ],
    "correct": 1,
    "explanation": "Rebate geometry is part of the tested and specified glazing arrangement, affecting retention, sealing and drainage.",
    "id": "architectural-joiner-challenging-a10-k34",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("architectural-joiner-st0264-v1-4",11,[
  {
    "ksb": "K36",
    "concept": "K36 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A door lining is assembled square but twists when lifted. What should be checked?",
    "options": [
      "The architrave moulding profile",
      "The timber straightness and temporary bracing",
      "The hinge screw colour",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Straight components and suitable temporary bracing help keep a lining square and free from twist during handling and installation.",
    "id": "architectural-joiner-approved-a11-k36",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K39",
    "concept": "K39 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why should hinge recesses be cut to a consistent depth?",
    "options": [
      "To keep the door correctly positioned and hinges fully supported",
      "To make the screw heads easier to paint",
      "To increase the door's fire rating automatically",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Consistent recess depth keeps hinges flush and supported, helping the door hang accurately without binding.",
    "id": "architectural-joiner-approved-a11-k39",
    "type": "Knowledge",
    "status": "approved"
  }
,
  {
    "ksb": "S27",
    "concept": "S27 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A door lining is assembled accurately but the opening is out of plumb. What is the correct manufacturing response?",
    "options": [
      "Manufacture the lining out of square to match the opening",
      "Keep the product to confirmed specification and report the opening discrepancy for resolution",
      "Reduce the head width without approval",
      "Ignore the issue because installation will correct it"
    ],
    "correct": 1,
    "explanation": "Manufacture should follow confirmed information; site discrepancies require controlled clarification rather than unapproved alteration.",
    "id": "architectural-joiner-challenging-a11-s27",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "K36",
    "concept": "K36 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why are horns sometimes left on a manufactured door frame until installation?",
    "options": [
      "They permanently increase opening width",
      "They protect and stabilise the frame during handling and installation before being trimmed as specified",
      "They replace all installation fixings",
      "They identify the hinge side only"
    ],
    "correct": 1,
    "explanation": "Horns can protect joints and help maintain frame shape during transport and fitting.",
    "id": "architectural-joiner-challenging-a11-k36",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K39",
    "concept": "K39 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why should hinge recesses be consistent in depth across a door set?",
    "options": [
      "To make the screws easier to paint",
      "Unequal depths can twist hinge alignment, alter clearances and impair operation",
      "To increase door mass",
      "To eliminate the need for pilot holes"
    ],
    "correct": 1,
    "explanation": "Consistent recesses position hinge leaves correctly and maintain alignment and clearances.",
    "id": "architectural-joiner-challenging-a11-k39",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("architectural-joiner-st0264-v1-4",12,[
  {
    "ksb": "K36",
    "concept": "K36 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A door lining is assembled square but twists when lifted. What should be checked?",
    "options": [
      "The architrave moulding profile",
      "The timber straightness and temporary bracing",
      "The hinge screw colour",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Straight components and suitable temporary bracing help keep a lining square and free from twist during handling and installation.",
    "id": "architectural-joiner-approved-a12-k36",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K37",
    "concept": "K37 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Before assembling a timber door, why should component moisture and straightness be checked?",
    "options": [
      "To reduce the number of clamps needed",
      "To limit later distortion and joint movement",
      "To make adhesive set faster",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Unsuitable moisture content or distorted components can cause twist, gaps and joint failure after manufacture.",
    "id": "architectural-joiner-approved-a12-k37",
    "type": "Knowledge",
    "status": "approved"
  }
,
  {
    "ksb": "S27",
    "concept": "S27 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A straight-flight stair string has a knot crossing the narrowest section of a housing. What should the joiner do?",
    "options": [
      "Use it if the knot is filled",
      "Assess against specification and grading requirements, then reject or reposition the component if strength is compromised",
      "Increase the housing depth",
      "Hide the knot against the wall"
    ],
    "correct": 1,
    "explanation": "Critical stair components must meet material and structural requirements; defects cannot simply be concealed.",
    "id": "architectural-joiner-challenging-a12-s27",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "S28",
    "concept": "S28 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "When producing repeated spindles for a balustrade, how should consistency be controlled?",
    "options": [
      "Mark each spindle independently by eye",
      "Use verified templates or jigs, controlled machine settings and sample checks throughout production",
      "Finish all spindles before measuring any",
      "Allow variation because sanding will correct it"
    ],
    "correct": 1,
    "explanation": "Controlled references and periodic checks prevent drift across repeated components.",
    "id": "architectural-joiner-challenging-a12-s28",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "K36",
    "concept": "K36 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why must tread and riser housings in stair strings be set out from a common pitch line?",
    "options": [
      "To reduce timber moisture movement",
      "To maintain consistent rise, going and stair geometry across the flight",
      "To make the strings interchangeable with doors",
      "To avoid using a setting rod"
    ],
    "correct": 1,
    "explanation": "The pitch line provides the common geometric reference needed for consistent stair dimensions.",
    "id": "architectural-joiner-challenging-a12-k36",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K37",
    "concept": "K37 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A moulding profile must match an existing sample. What is the best manufacturing approach?",
    "options": [
      "Select the nearest cutter and sand until it looks similar",
      "Record the profile accurately, confirm dimensions and use suitable tooling or a controlled multi-stage process",
      "Increase the timber thickness and leave it unfinished",
      "Copy it freehand onto each component"
    ],
    "correct": 1,
    "explanation": "Accurate capture and controlled tooling are required for repeatable matching profiles.",
    "id": "architectural-joiner-challenging-a12-k37",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("architectural-joiner-st0264-v1-4",13,[
  {
    "ksb": "K37",
    "concept": "K37 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Before assembling a timber door, why should component moisture and straightness be checked?",
    "options": [
      "To reduce the number of clamps needed",
      "To limit later distortion and joint movement",
      "To make adhesive set faster",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Unsuitable moisture content or distorted components can cause twist, gaps and joint failure after manufacture.",
    "id": "architectural-joiner-approved-a13-k37",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K30",
    "concept": "K30 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A fire-door leaf requires trimming beyond the manufacturer's allowance. What should happen?",
    "options": [
      "Trim it equally from both edges",
      "Stop and obtain an approved solution",
      "Increase the intumescent strip size",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Excessive trimming can invalidate the fire-door evidence. The manufacturer's limits and approved design must be followed.",
    "id": "architectural-joiner-approved-a13-k30",
    "type": "Knowledge",
    "status": "approved"
  }
,
  {
    "ksb": "S28",
    "concept": "S28 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A timber door is cramped square, but one stile bows after pressure is applied. What should be done?",
    "options": [
      "Add more pressure until it straightens",
      "Release and diagnose component straightness, joint fit and cramping balance before proceeding",
      "Plane the bow out after finishing",
      "Fit heavier hinges to correct it"
    ],
    "correct": 1,
    "explanation": "Excess or uneven pressure can distort assembly; the cause must be corrected before the adhesive cures.",
    "id": "architectural-joiner-challenging-a13-s28",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "S29",
    "concept": "S29 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "When fitting a mortice lock, how should weakening of the door stile be minimised?",
    "options": [
      "Cut the pocket larger than the case for adjustment",
      "Mark accurately, use the specified lock and remove only the material required while maintaining edge distances",
      "Drill through both faces with the largest available bit",
      "Position the lock beside an existing major joint"
    ],
    "correct": 1,
    "explanation": "Accurate minimal removal and correct positioning preserve the stile and door performance.",
    "id": "architectural-joiner-challenging-a13-s29",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "K37",
    "concept": "K37 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why should door components be conditioned to the intended service environment before final machining and assembly?",
    "options": [
      "To make timber permanently waterproof",
      "To reduce dimensional change after manufacture that could affect clearances and joints",
      "To increase adhesive open time indefinitely",
      "To remove the need for sealing"
    ],
    "correct": 1,
    "explanation": "Moisture equilibration reduces later movement that can cause binding, gaps or joint stress.",
    "id": "architectural-joiner-challenging-a13-k37",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K30",
    "concept": "K30 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why must intumescent seals and ironmongery match the fire-door evidence?",
    "options": [
      "Any seal of the same colour performs identically",
      "Fire performance applies to the tested or assessed doorset configuration, including compatible components and positions",
      "Only the door leaf affects fire resistance",
      "Ironmongery may be changed after installation without review"
    ],
    "correct": 1,
    "explanation": "A fire door is an assembly; unverified substitutions or positions can invalidate its demonstrated performance.",
    "id": "architectural-joiner-challenging-a13-k30",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("architectural-joiner-st0264-v1-4",14,[
  {
    "ksb": "K37",
    "concept": "K37 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Before assembling a timber door, why should component moisture and straightness be checked?",
    "options": [
      "To reduce the number of clamps needed",
      "To limit later distortion and joint movement",
      "To make adhesive set faster",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Unsuitable moisture content or distorted components can cause twist, gaps and joint failure after manufacture.",
    "id": "architectural-joiner-approved-a14-k37",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K38",
    "concept": "K38 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why should end grain receive extra attention before applying a clear finish?",
    "options": [
      "It absorbs finish more readily than face grain",
      "It cannot be sanded after machining",
      "It always contains preservative",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "End grain is more absorbent and may darken or finish unevenly unless it is prepared and coated correctly.",
    "id": "architectural-joiner-approved-a14-k38",
    "type": "Knowledge",
    "status": "approved"
  }
,
  {
    "ksb": "S28",
    "concept": "S28 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A wall unit carcass is square before the back is fixed. What method best preserves squareness?",
    "options": [
      "Fix the back from one corner without rechecking",
      "Confirm equal diagonals, hold the carcass securely and fix the back in a controlled sequence",
      "Remove all cramps first",
      "Fit doors before the back"
    ],
    "correct": 1,
    "explanation": "The back stabilises the carcass, so squareness must be verified and maintained during fixing.",
    "id": "architectural-joiner-challenging-a14-s28",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "K37",
    "concept": "K37 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why should edging and lippings be selected with movement and finishing in mind?",
    "options": [
      "Their only purpose is to conceal fixings",
      "Different materials and grain orientations can move or finish differently, affecting flatness and appearance",
      "They always eliminate the need for sealing",
      "Thicker lippings automatically improve fire performance"
    ],
    "correct": 1,
    "explanation": "Compatibility of materials, moisture movement and finish affects the long-term quality of manufactured units.",
    "id": "architectural-joiner-challenging-a14-k37",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K38",
    "concept": "K38 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "After sanding, an oiled surface shows dark swirl marks. What is the most likely cause?",
    "options": [
      "The oil is too transparent",
      "Previous coarse sanding scratches were not removed before moving through finer grades",
      "The timber was planed with the grain",
      "The final abrasive was too fine to leave any mark"
    ],
    "correct": 1,
    "explanation": "Coarse scratches become more visible under finish; each abrasive stage must remove marks from the previous stage.",
    "id": "architectural-joiner-challenging-a14-k38",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("architectural-joiner-st0264-v1-4",15,[
  {
    "ksb": "K31",
    "concept": "K31 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Before starting a planer and thicknesser, which check is essential?",
    "options": [
      "The extraction, guards and emergency stop are serviceable",
      "The outfeed timber is already stacked",
      "The machine is set to maximum feed speed",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Fixed machinery must have effective guarding, extraction and emergency controls before operation.",
    "id": "architectural-joiner-approved-a15-k31",
    "type": "Knowledge",
    "status": "approved"
  }
,
  {
    "ksb": "S30",
    "concept": "S30 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Before operating a thicknesser after a blade change, what sequence is most appropriate?",
    "options": [
      "Start production immediately at minimum depth",
      "Complete authorised setup and guard checks, test run safely, machine a sample and verify dimensions before production",
      "Remove extraction to hear unusual noise",
      "Feed two components together to test capacity"
    ],
    "correct": 1,
    "explanation": "Post-maintenance checks, guarded test operation and sample verification are required before production use.",
    "id": "architectural-joiner-challenging-a15-s30",
    "type": "Skill",
    "status": "approved"
  },
  {
    "ksb": "K31",
    "concept": "K31 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why must the bridge guard on a surface planer be adjusted close to the workpiece?",
    "options": [
      "To increase cutter speed",
      "To minimise exposed cutter block while allowing the stock to pass safely",
      "To press the timber flat instead of using correct technique",
      "To replace the need for push blocks"
    ],
    "correct": 1,
    "explanation": "The guard should expose only the minimum cutter area required; other controls and safe techniques remain necessary.",
    "id": "architectural-joiner-challenging-a15-k31",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("property-maintenance-operative-st0171-v1-1",1,[
  {
    "ksb": "K3",
    "concept": "K3 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A chemical cleaner has no readable label. What should you do?",
    "options": [
      "Use a small amount to test it",
      "Ask a colleague what it probably is",
      "Do not use it until identified and COSHH information is available",
      "I don't know"
    ],
    "correct": 2,
    "explanation": "Unidentified substances must not be used. The product and its COSHH controls must be confirmed before handling or applying it.",
    "id": "pmo-approved-a1-k3",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K4",
    "concept": "K4 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A repair requires work above a busy entrance. What control is most important?",
    "options": [
      "Finish during the quietest ten minutes",
      "Use barriers and control access below the work",
      "Ask people to walk through quickly",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "The area below work at height must be controlled to protect building users from falling tools, materials and debris.",
    "id": "pmo-approved-a1-k4",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B2",
    "concept": "B2 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A customer asks you to skip barriers for a quick repair. What should you do?",
    "options": [
      "Agree if they remain nearby",
      "Use the required controls before starting",
      "Start while another worker watches the area",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Health and safety controls must not be removed for convenience. The area should be made safe before work begins.",
    "id": "pmo-approved-a1-b2",
    "type": "Behaviour",
    "status": "approved"
  },
  {
    "ksb": "K3",
    "concept": "K3 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "An operative must use a solvent cleaner above shoulder height. Which combination of controls best reflects their legal responsibilities?",
    "options": [
      "Wear gloves and continue because PPE is the main control",
      "Check COSHH information, reduce exposure, use suitable access equipment and wear specified PPE",
      "Open a nearby window and rely on the product label",
      "Ask a colleague to hold the steps while the cleaner is applied"
    ],
    "correct": 1,
    "explanation": "The operative must follow COSHH and work-at-height controls, use suitable equipment and apply PPE only as part of the wider control measures.",
    "id": "pmo-challenging-a1-k3",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K4",
    "concept": "K4 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A risk assessment lists dust extraction as mandatory, but the extractor is unavailable. What should the operative do?",
    "options": [
      "Wear a disposable mask and continue",
      "Reduce the cutting time and continue",
      "Stop and obtain the specified control or have the assessment reviewed",
      "Ask another operative to stand clear while cutting"
    ],
    "correct": 2,
    "explanation": "A required control cannot simply be replaced informally. Work should stop until equivalent controls are authorised through a revised assessment or method.",
    "id": "pmo-challenging-a1-k4",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("property-maintenance-operative-st0171-v1-1",2,[
  {
    "ksb": "K1",
    "concept": "K1 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A leaking tap is reported repeatedly. Which approach is planned preventative maintenance?",
    "options": [
      "Replace it only after complete failure",
      "Inspect and service similar taps on a schedule",
      "Wait for another customer complaint",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Planned preventative maintenance uses scheduled inspection and servicing to reduce breakdowns. Reactive maintenance responds after a fault has occurred.",
    "id": "pmo-approved-a2-k1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K2",
    "concept": "K2 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Before drilling into a wall in an older building, what must be checked first?",
    "options": [
      "The likely construction and hidden services",
      "Whether the wall has recently been painted",
      "The nearest available drill bit size",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Building age and construction can indicate hidden services, asbestos-containing materials or structural risks. These must be identified before work starts.",
    "id": "pmo-approved-a2-k2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K6",
    "concept": "K6 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Before repairing a ceiling in an occupied room, what should be done?",
    "options": [
      "Protect the area, isolate access and use suitable equipment",
      "Move only items directly beneath the defect",
      "Start work and warn people as they enter",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "The work area must be protected and controlled before work begins, including safe access equipment and protection for occupants and finishes.",
    "id": "pmo-approved-a2-k6",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B3",
    "concept": "B3 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "You notice a small defect after declaring your repair complete. What should you do?",
    "options": [
      "Correct and report it rather than leave it",
      "Wait to see whether the customer notices",
      "Remove the defect from the job record",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Taking responsibility includes checking work, correcting defects and keeping records accurate rather than passing the problem on.",
    "id": "pmo-approved-a2-b3",
    "type": "Behaviour",
    "status": "approved"
  },
  {
    "ksb": "K1",
    "concept": "K1 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A hospital replaces fan belts every 12 months because failure records show they typically deteriorate after 15 months. What best explains this approach?",
    "options": [
      "It is reactive maintenance because the belts have not yet failed",
      "It is planned preventative maintenance based on condition and failure history",
      "It is corrective maintenance because replacement is mandatory after inspection",
      "It is emergency maintenance because hospital services are critical"
    ],
    "correct": 1,
    "explanation": "PPM uses planned intervals or condition data to reduce the likelihood of failure. Reactive maintenance begins after a defect or breakdown is reported.",
    "id": "pmo-challenging-a2-k1",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K2",
    "concept": "K2 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "While fixing a wall lining in a 1960s residential block, the operative finds an unfamiliar board around a service riser. What is the most appropriate response?",
    "options": [
      "Cut a small sample with a hand saw to identify the material",
      "Assume it is plasterboard because it is inside a residential building",
      "Stop work, protect the area and check the asbestos and building information",
      "Remove the board carefully because maintenance work is non-structural"
    ],
    "correct": 2,
    "explanation": "Older buildings may contain asbestos-containing materials and fire-resisting elements. Work must stop until the material and its safety function are confirmed.",
    "id": "pmo-challenging-a2-k2",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K6",
    "concept": "K6 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A corridor ceiling repair is planned in an occupied care home. Which arrangement best protects building users?",
    "options": [
      "Work from steps during a quiet period and move when residents approach",
      "Create a controlled exclusion zone, protect surfaces and use suitable access equipment",
      "Ask a member of care staff to warn residents while work continues",
      "Place tools against the wall so the corridor remains partly open"
    ],
    "correct": 1,
    "explanation": "Occupied premises require controlled access, suitable work-at-height equipment, protection of adjacent areas and consideration of vulnerable users.",
    "id": "pmo-challenging-a2-k6",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("property-maintenance-operative-st0171-v1-1",3,[
  {
    "ksb": "K5",
    "concept": "K5 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A proposed repair could affect a fire-resisting wall. What should happen first?",
    "options": [
      "Use the quickest matching material",
      "Check the approved specification and seek authorised guidance",
      "Complete the repair and photograph it afterwards",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Work affecting fire safety must follow approved information and regulatory requirements. The operative must not make unauthorised substitutions.",
    "id": "pmo-approved-a3-k5",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K23",
    "concept": "K23 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A replacement component has several similar versions. Which source should confirm the correct one?",
    "options": [
      "The latest specification, asset data or manufacturer's information",
      "A photograph from a previous job",
      "The cheapest supplier listing",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Technical and asset information should be used to identify compatible, compliant components rather than relying on appearance or price.",
    "id": "pmo-approved-a3-k23",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K30",
    "concept": "K30 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A colleague makes an offensive comment about another worker. What should you do?",
    "options": [
      "Ignore it unless the worker complains",
      "Challenge or report it through the correct procedure",
      "Repeat it privately to check whether others agree",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Employees have responsibilities to support a respectful, inclusive workplace. Inappropriate behaviour should be challenged safely or reported.",
    "id": "pmo-approved-a3-k30",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B5",
    "concept": "B5 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A new colleague is being excluded from team discussions. What should you do?",
    "options": [
      "Include them and challenge inappropriate exclusion",
      "Wait for the supervisor to notice",
      "Tell them to speak only when asked",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Inclusive behaviour means ensuring colleagues can contribute and addressing exclusion respectfully through appropriate channels.",
    "id": "pmo-approved-a3-b5",
    "type": "Behaviour",
    "status": "approved"
  },
  {
    "ksb": "K5",
    "concept": "K5 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A repair is proposed to a fire-resisting compartment wall in a high-rise residential building. Which action is most appropriate?",
    "options": [
      "Use any material with a similar thickness",
      "Follow the approved fire-stopping specification and escalate any uncertainty",
      "Complete the repair and rely on the final visual inspection",
      "Use the product previously used elsewhere in the building"
    ],
    "correct": 1,
    "explanation": "Work affecting fire safety must follow approved designs, product evidence and competent oversight, particularly in higher-risk buildings.",
    "id": "pmo-challenging-a3-k5",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K23",
    "concept": "K23 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A manufacturer has revised the installation instructions for a replacement valve. Which information should the operative follow?",
    "options": [
      "The instructions supplied with the oldest valve on site",
      "The latest approved manufacturer information that matches the exact product",
      "A previous job sheet showing how another operative fitted one",
      "A supplier's generic online description"
    ],
    "correct": 1,
    "explanation": "Current product-specific technical literature is the authoritative source, subject to the job specification and organisational controls.",
    "id": "pmo-challenging-a3-k23",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K30",
    "concept": "K30 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A vulnerable resident discloses information suggesting possible abuse. What is the operative's responsibility?",
    "options": [
      "Investigate by questioning neighbours",
      "Promise confidentiality and keep the information private",
      "Record and report the concern promptly through the organisation's safeguarding procedure",
      "Wait for physical evidence before reporting"
    ],
    "correct": 2,
    "explanation": "Safeguarding concerns must be reported through the approved process. Operatives should not investigate or promise secrecy.",
    "id": "pmo-challenging-a3-k30",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("property-maintenance-operative-st0171-v1-1",4,[
  {
    "ksb": "K7",
    "concept": "K7 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A power tool guard does not return fully after use. What should you do?",
    "options": [
      "Lubricate it and continue",
      "Hold it back manually while cutting",
      "Remove the tool from use and report the defect",
      "I don't know"
    ],
    "correct": 2,
    "explanation": "Defective guards make equipment unsafe. The tool should be isolated, labelled if required and reported for repair or replacement.",
    "id": "pmo-approved-a4-k7",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K8",
    "concept": "K8 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "After isolating an electrical circuit, what confirms it is safe to work near?",
    "options": [
      "The switch is in the off position",
      "A suitable tester proves the circuit dead",
      "The equipment display has gone blank",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Safe isolation requires proving the circuit dead with an appropriate tester, not relying only on switches, labels or displays.",
    "id": "pmo-approved-a4-k8",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K7",
    "concept": "K7 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A circular saw starts normally but its lower guard closes slowly. What is the correct decision?",
    "options": [
      "Use it only for short cuts",
      "Apply lubricant and test it on waste timber",
      "Remove it from service and report the defect",
      "Hold the guard clear manually until the cut begins"
    ],
    "correct": 2,
    "explanation": "A defective guard is a critical safety failure. The tool must not be used until repaired and confirmed safe.",
    "id": "pmo-challenging-a4-k7",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K8",
    "concept": "K8 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "After switching off and locking an electrical isolator, what should happen before work begins on the circuit?",
    "options": [
      "Check that connected equipment has stopped",
      "Prove the tester, test for dead, then re-prove the tester",
      "Wait five minutes for stored electricity to disappear",
      "Confirm the circuit number on the distribution-board schedule"
    ],
    "correct": 1,
    "explanation": "Safe isolation includes proving the voltage indicator, testing the circuit is dead and proving the indicator again.",
    "id": "pmo-challenging-a4-k8",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("property-maintenance-operative-st0171-v1-1",5,[
  {
    "ksb": "K9",
    "concept": "K9 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A fire door closer no longer shuts the door fully. What is the correct action?",
    "options": [
      "Wedge the door open until replacement parts arrive",
      "Adjust or report it promptly under the maintenance procedure",
      "Remove the closer so the door moves freely",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Fire doors must close effectively. A defective closer should be dealt with promptly through the correct maintenance and reporting procedure.",
    "id": "pmo-approved-a5-k9",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K31",
    "concept": "K31 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why should an operative record CPD and new training?",
    "options": [
      "To show competence development and recognise limits of authority",
      "To replace all workplace supervision",
      "To allow work on any system without approval",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "CPD records show how competence is maintained and developed, while helping operatives understand when specialist support or authorisation is required.",
    "id": "pmo-approved-a5-k31",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B6",
    "concept": "B6 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "You are offered training on equipment you rarely use. What is the best response?",
    "options": [
      "Attend if it supports your role and competence",
      "Decline because another trade usually uses it",
      "Use the equipment first and train later",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Seeking relevant development improves competence and helps operatives understand safe limits, new methods and future responsibilities.",
    "id": "pmo-approved-a5-b6",
    "type": "Behaviour",
    "status": "approved"
  },
  {
    "ksb": "K9",
    "concept": "K9 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A weekly emergency-light test shows one fitting does not illuminate. What is the best response?",
    "options": [
      "Record the defect and arrange prompt corrective action under the site procedure",
      "Replace the lamp only after the next full-duration test",
      "Remove the fitting from the test record until repaired",
      "Leave a temporary torch nearby and mark the test as passed"
    ],
    "correct": 0,
    "explanation": "Emergency systems must be tested, failures recorded and corrective action initiated promptly to maintain safe escape arrangements.",
    "id": "pmo-challenging-a5-k9",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("property-maintenance-operative-st0171-v1-1",6,[
  {
    "ksb": "K10",
    "concept": "K10 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Before replacing a faulty tap, how should the water supply be controlled?",
    "options": [
      "Close the correct isolation valve and confirm flow has stopped",
      "Open all nearby taps before finding the valve",
      "Rely on the building's main stop tap being closed",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "The correct supply must be isolated and checked before dismantling components. This prevents flooding and confirms the isolation is effective.",
    "id": "pmo-approved-a6-k10",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K11",
    "concept": "K11 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A sink drains slowly but the trap is clear. What should be checked next?",
    "options": [
      "The hot-water temperature",
      "The waste pipe for restriction or poor fall",
      "The tap aerator",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "If the trap is clear, the waste pipe may be partially blocked or incorrectly graded, both of which can restrict drainage.",
    "id": "pmo-approved-a6-k11",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K12",
    "concept": "K12 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why should little-used outlets be flushed as part of water hygiene controls?",
    "options": [
      "To increase mains pressure",
      "To prevent stagnation that may encourage bacterial growth",
      "To remove all limescale from the system",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Stagnant water can support bacterial growth, including Legionella. Flushing should follow the building's water hygiene procedure.",
    "id": "pmo-approved-a6-k12",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K10",
    "concept": "K10 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A basin tap is to be replaced in a multi-storey building. Which sequence best limits water damage?",
    "options": [
      "Close the main stopcock, remove the tap and reopen it slowly",
      "Identify the local isolation, verify it works, relieve pressure and control residual water",
      "Open all taps in the building before isolating the supply",
      "Drain the entire cold-water storage system regardless of the pipe arrangement"
    ],
    "correct": 1,
    "explanation": "The correct local isolation should be identified and tested, pressure relieved and residual water safely contained before dismantling.",
    "id": "pmo-challenging-a6-k10",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K11",
    "concept": "K11 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Several ground-floor appliances discharge slowly, but upper-floor fittings operate normally. What should be investigated first?",
    "options": [
      "A blockage in the shared below-ground drain serving the ground floor",
      "Low incoming mains pressure",
      "A fault in the roof ventilation system",
      "Excessive hot-water temperature"
    ],
    "correct": 0,
    "explanation": "A shared pattern of slow discharge at low level commonly indicates restriction in the branch or below-ground drain downstream of those fittings.",
    "id": "pmo-challenging-a6-k11",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K12",
    "concept": "K12 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Why is routinely flushing little-used outlets an important water-hygiene control?",
    "options": [
      "It increases mains pressure throughout the building",
      "It prevents scale forming in every type of pipe",
      "It reduces stagnation that can support Legionella growth",
      "It removes the need for temperature monitoring"
    ],
    "correct": 2,
    "explanation": "Low-use outlets can allow stagnant water and favourable bacterial conditions. Flushing is one control within a wider water-safety plan.",
    "id": "pmo-challenging-a6-k12",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("property-maintenance-operative-st0171-v1-1",7,[
  {
    "ksb": "K13",
    "concept": "K13 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A room remains cold although the heating is on. What should be checked first?",
    "options": [
      "The system controls and whether heat is reaching the emitter",
      "The colour of the wall finish",
      "The external drainage system",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Basic diagnosis starts with controls, settings and whether the system is delivering heat before components are replaced.",
    "id": "pmo-approved-a7-k13",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K25",
    "concept": "K25 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "The same repair fails repeatedly. What best supports continuous improvement?",
    "options": [
      "Repeat the repair using more material",
      "Record the failure, investigate the cause and change the method",
      "Allocate the task to a different operative without review",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Continuous improvement relies on evidence, root-cause review and controlled changes, rather than repeatedly treating the same symptom.",
    "id": "pmo-approved-a7-k25",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K13",
    "concept": "K13 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A building management system repeatedly calls for heating while rooms are already above set temperature. Which component should be checked first?",
    "options": [
      "The fire alarm sounder circuit",
      "The relevant temperature sensor and its control signal",
      "The incoming water stop valve",
      "The emergency-light battery"
    ],
    "correct": 1,
    "explanation": "Environmental controls rely on accurate sensors and control signals. Incorrect feedback can cause unnecessary heating and energy use.",
    "id": "pmo-challenging-a7-k13",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("property-maintenance-operative-st0171-v1-1",8,[
  {
    "ksb": "K14",
    "concept": "K14 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A double-glazed unit is misted between the panes. What has most likely failed?",
    "options": [
      "The window handle",
      "The sealed glazing unit",
      "The external sill",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Moisture between panes usually indicates failure of the sealed unit, allowing the insulating cavity to lose its seal.",
    "id": "pmo-approved-a8-k14",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K27",
    "concept": "K27 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "How should a technical fault be explained to a resident?",
    "options": [
      "Use trade terminology throughout",
      "Use clear everyday language and confirm understanding",
      "Avoid explaining it until the repair is complete",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Communication should suit the audience. Clear language and checking understanding help residents know what is happening and why.",
    "id": "pmo-approved-a8-k27",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K28",
    "concept": "K28 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A repair cannot be completed during the first visit. What should the customer receive?",
    "options": [
      "A realistic update on the reason and next steps",
      "A promise that it will be completed the next morning",
      "No information until parts arrive",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Good customer service includes honest, timely updates about progress, limitations and agreed next steps without making unsupported promises.",
    "id": "pmo-approved-a8-k28",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K14",
    "concept": "K14 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A fire door has been eased because it was binding, but a 7 mm gap now exists at the head. Why is this a concern?",
    "options": [
      "It may allow excessive smoke and fire spread and no longer meet the required doorset performance",
      "It will cause the closer to operate too quickly",
      "It will reduce the acoustic rating only",
      "It will make the hinges wear more slowly"
    ],
    "correct": 0,
    "explanation": "Fire doors rely on controlled gaps, compatible components and correct installation. Excessive gaps can undermine tested fire and smoke performance.",
    "id": "pmo-challenging-a8-k14",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K28",
    "concept": "K28 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A repair cannot be completed because a specialist part is unavailable. Which response provides the best customer service?",
    "options": [
      "Close the job and wait for the customer to contact the office",
      "Explain the issue, make the situation safe, record the next action and provide a realistic update route",
      "Give an estimated completion date without checking availability",
      "Tell the customer that procurement is not the operative's responsibility"
    ],
    "correct": 1,
    "explanation": "Good customer service keeps the customer informed, manages expectations honestly and records the agreed next steps.",
    "id": "pmo-challenging-a8-k28",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("property-maintenance-operative-st0171-v1-1",9,[
  {
    "ksb": "K15",
    "concept": "K15 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A repaired plaster patch keeps showing through the finish. What is the likely cause?",
    "options": [
      "The repair was not feathered, dried and sealed correctly",
      "The final coat was applied with a wide brush",
      "The room was ventilated after painting",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Poor preparation, uneven edges, retained moisture or inadequate sealing can leave a patch visible through the final decoration.",
    "id": "pmo-approved-a9-k15",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K16",
    "concept": "K16 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Paint is peeling from a previously glossy surface. What was most likely missed?",
    "options": [
      "A second finishing coat",
      "Adequate cleaning and keying before painting",
      "A darker colour underneath",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Smooth or contaminated surfaces need cleaning and suitable abrasion or preparation so the new coating can bond properly.",
    "id": "pmo-approved-a9-k16",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K26",
    "concept": "K26 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Usable timber is left after a repair. What is the best environmental action?",
    "options": [
      "Place it in mixed waste to clear the area",
      "Reuse or segregate it through the approved waste system",
      "Burn it if the site is quiet",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Suitable materials should be reused where possible or segregated for authorised recycling. Waste must follow site and legal controls.",
    "id": "pmo-approved-a9-k26",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K15",
    "concept": "K15 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A repaired plaster patch repeatedly cracks around its edge. Which cause is most likely?",
    "options": [
      "The final coat was polished too early",
      "The background was not stabilised or the repair edges were poorly prepared",
      "The room was decorated with matt paint",
      "The patch was mixed in a clean container"
    ],
    "correct": 1,
    "explanation": "Recurring edge cracks often result from movement, loose backgrounds, poor bonding or inadequate preparation rather than the decorative finish.",
    "id": "pmo-challenging-a9-k15",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K16",
    "concept": "K16 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "New paint is blistering on a previously sound wall. Moisture readings are high. What should happen before repainting?",
    "options": [
      "Apply a thicker topcoat to seal the surface",
      "Remove blisters, identify and correct the moisture source, then allow the wall to dry",
      "Use a faster-drying solvent paint",
      "Sand the blisters flat and apply stain block immediately"
    ],
    "correct": 1,
    "explanation": "The underlying moisture defect must be corrected and the substrate allowed to reach a suitable condition before redecorating.",
    "id": "pmo-challenging-a9-k16",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("property-maintenance-operative-st0171-v1-1",10,[
  {
    "ksb": "K17",
    "concept": "K17 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Several replacement wall tiles sound hollow when tapped. What is the likely issue?",
    "options": [
      "The grout colour is too light",
      "Insufficient adhesive coverage behind the tiles",
      "The tiles were cut with a wet saw",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Hollow areas commonly indicate poor adhesive contact or coverage, which can reduce support and lead to loose or cracked tiles.",
    "id": "pmo-approved-a10-k17",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K18",
    "concept": "K18 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A laminate floor is lifting along one wall. What should be checked first?",
    "options": [
      "Whether an adequate expansion gap was left",
      "Whether the underlay is the correct colour",
      "Whether the boards were laid towards the window",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Laminate needs perimeter expansion space. If restrained, normal movement can cause boards to lift or peak.",
    "id": "pmo-approved-a10-k18",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K17",
    "concept": "K17 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Several replacement wall tiles sound hollow shortly after installation. What is the most likely explanation?",
    "options": [
      "The grout joints were too narrow",
      "Adhesive coverage or background preparation was inadequate",
      "The tiles were cut with a wet cutter",
      "The spacers were removed before grouting"
    ],
    "correct": 1,
    "explanation": "Hollow areas indicate insufficient adhesive contact or poor bonding, often caused by inadequate preparation or incorrect application.",
    "id": "pmo-challenging-a10-k17",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K18",
    "concept": "K18 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A newly repaired resilient floor joint opens after two days. Which factor should be checked first?",
    "options": [
      "Whether the material was acclimatised and fitted at the correct temperature",
      "Whether the skirting was painted before the repair",
      "Whether a darker adhesive was used",
      "Whether the room was vacuumed after installation"
    ],
    "correct": 0,
    "explanation": "Flooring materials can expand or contract with temperature and moisture. Acclimatisation and correct fitting conditions are essential.",
    "id": "pmo-challenging-a10-k18",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("property-maintenance-operative-st0171-v1-1",11,[
  {
    "ksb": "K19",
    "concept": "K19 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Pointing has failed again shortly after repair. What is the most likely cause?",
    "options": [
      "The joints were prepared poorly or the mortar was unsuitable",
      "The bricks were cleaned after completion",
      "The wall contains stretcher bond",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Durable repointing depends on removing loose material, preparing the joints and using a compatible mortar suited to the masonry and exposure.",
    "id": "pmo-approved-a11-k19",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K29",
    "concept": "K29 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A repair reveals a fault outside your competence. What should you do?",
    "options": [
      "Continue carefully to avoid delaying the job",
      "Make the area safe and refer it to the correct trade",
      "Ask the customer whether they want you to try",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Operatives must work within their competence. The issue should be made safe, recorded and passed to an appropriately competent person.",
    "id": "pmo-approved-a11-k29",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K19",
    "concept": "K19 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Hard cement mortar has been used to repoint soft historic brickwork, and brick faces are now spalling. What is the most likely reason?",
    "options": [
      "The mortar is too permeable and releases moisture too quickly",
      "The mortar is stronger and less permeable than the bricks, forcing moisture through the masonry units",
      "The joints were too deeply recessed",
      "The bricks were laid in stretcher bond"
    ],
    "correct": 1,
    "explanation": "An incompatible dense mortar can trap moisture and concentrate evaporation through softer bricks, causing face damage during wetting and freezing.",
    "id": "pmo-challenging-a11-k19",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K29",
    "concept": "K29 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "During a ceiling repair, the operative identifies damaged electrical cabling above the board. What should happen?",
    "options": [
      "Cover the cable and complete the plaster repair",
      "Make the area safe and refer the electrical fault to an authorised competent person",
      "Wrap the cable with tape because it is hidden",
      "Ask the customer whether they want the cable replaced"
    ],
    "correct": 1,
    "explanation": "Property maintenance operatives must recognise trade boundaries, make the situation safe and coordinate with the appropriate competent trade.",
    "id": "pmo-challenging-a11-k29",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("property-maintenance-operative-st0171-v1-1",12,[
  {
    "ksb": "K20",
    "concept": "K20 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A roof leak appears only during wind-driven rain. What should be inspected first?",
    "options": [
      "The loft insulation thickness",
      "Junctions, flashings and displaced coverings on the exposed side",
      "The ceiling decoration below",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Wind-driven rain commonly enters at damaged coverings, laps, abutments and flashings. Inspection should focus on likely entry points safely.",
    "id": "pmo-approved-a12-k20",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K25",
    "concept": "K25 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "The same repair fails repeatedly. What best supports continuous improvement?",
    "options": [
      "Repeat the repair using more material",
      "Record the failure, investigate the cause and change the method",
      "Allocate the task to a different operative without review",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Continuous improvement relies on evidence, root-cause review and controlled changes, rather than repeatedly treating the same symptom.",
    "id": "pmo-approved-a12-k25",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B4",
    "concept": "B4 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Your repair affects another trade's work later that day. What should you do?",
    "options": [
      "Complete it without interrupting them",
      "Coordinate timing and requirements with the wider team",
      "Leave instructions beside the work area",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Team-focused working requires timely coordination so work remains safe, efficient and compatible with other trades' activities.",
    "id": "pmo-approved-a12-b4",
    "type": "Behaviour",
    "status": "approved"
  },
  {
    "ksb": "K20",
    "concept": "K20 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A temporary roof repair is required after storm damage. Which principle is most important?",
    "options": [
      "Make the covering completely permanent using any available material",
      "Prevent water entry without creating unsafe loading or concealing damage that needs full repair",
      "Seal the internal ceiling because it is easier to access",
      "Remove surrounding coverings until replacement materials arrive"
    ],
    "correct": 1,
    "explanation": "Temporary repairs should safely reduce further damage while preserving access and information for a competent permanent repair.",
    "id": "pmo-challenging-a12-k20",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K25",
    "concept": "K25 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "Repeat call-backs show that repaired door closers fail within three months. Which action best demonstrates continuous improvement?",
    "options": [
      "Increase the number of spare closers held in stock",
      "Analyse failure records, installation methods and product suitability, then trial and review corrective changes",
      "Ask operatives to complete repairs more quickly",
      "Replace only the units that customers complain about"
    ],
    "correct": 1,
    "explanation": "Continuous improvement uses evidence and root-cause analysis to change processes or products and then checks whether performance improves.",
    "id": "pmo-challenging-a12-k25",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("property-maintenance-operative-st0171-v1-1",13,[
  {
    "ksb": "K21",
    "concept": "K21 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A timber fence post is decayed at ground level. Which repair is most reliable?",
    "options": [
      "Fix a new board across the damaged area",
      "Replace or correctly support the failed post",
      "Paint the exposed decay with preservative only",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Decay at ground level affects the post's structural support. The failed section must be replaced or repaired with an approved support system.",
    "id": "pmo-approved-a13-k21",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K27",
    "concept": "K27 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "How should a technical fault be explained to a resident?",
    "options": [
      "Use trade terminology throughout",
      "Use clear everyday language and confirm understanding",
      "Avoid explaining it until the repair is complete",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Communication should suit the audience. Clear language and checking understanding help residents know what is happening and why.",
    "id": "pmo-approved-a13-k27",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K21",
    "concept": "K21 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A metal railing post is loose because corrosion has expanded within its concrete fixing pocket. What repair is most appropriate?",
    "options": [
      "Paint over the corrosion and tighten the top rail",
      "Remove defective material, treat or replace the post and reinstate the fixing with a suitable system",
      "Pack the gap with timber wedges",
      "Add a second coat of gloss paint around the base"
    ],
    "correct": 1,
    "explanation": "The failed fixing and corrosion must be addressed structurally; surface treatment alone will not restore secure support.",
    "id": "pmo-challenging-a13-k21",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K27",
    "concept": "K27 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "How should an operative explain a failed thermostatic valve to a resident and report it to an engineer?",
    "options": [
      "Use identical technical language for both audiences",
      "Use clear everyday language for the resident and precise industry terminology in the technical report",
      "Avoid explaining the cause to the resident",
      "Use only photographs because written descriptions may be misunderstood"
    ],
    "correct": 1,
    "explanation": "Communication should be adapted to the audience while remaining accurate: plain language for customers and appropriate technical detail for specialists.",
    "id": "pmo-challenging-a13-k27",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("property-maintenance-operative-st0171-v1-1",14,[
  {
    "ksb": "K22",
    "concept": "K22 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Paving repeatedly ponds after rain. What should be checked before replacing slabs?",
    "options": [
      "The paving colour and joint width",
      "Falls, levels and drainage outlets",
      "The number of people using the path",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Persistent ponding usually relates to inadequate falls, settlement or blocked drainage. The cause should be diagnosed before relaying finishes.",
    "id": "pmo-approved-a14-k22",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K26",
    "concept": "K26 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Usable timber is left after a repair. What is the best environmental action?",
    "options": [
      "Place it in mixed waste to clear the area",
      "Reuse or segregate it through the approved waste system",
      "Burn it if the site is quiet",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Suitable materials should be reused where possible or segregated for authorised recycling. Waste must follow site and legal controls.",
    "id": "pmo-approved-a14-k26",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "B1",
    "concept": "B1 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "You have reusable materials left after a repair. What should you do?",
    "options": [
      "Keep suitable items for approved reuse and segregate the rest",
      "Put everything into general waste",
      "Leave them for the customer to dispose of",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "Sustainable behaviour means preventing waste, reusing suitable materials and following the approved recycling and disposal arrangements.",
    "id": "pmo-approved-a14-b1",
    "type": "Behaviour",
    "status": "approved"
  },
  {
    "ksb": "K22",
    "concept": "K22 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A paved path has settled repeatedly above a service trench. What is the most likely underlying cause?",
    "options": [
      "The paving slabs are too light in colour",
      "The trench backfill was inadequately compacted",
      "The joints contain too much sand",
      "The path has insufficient surface texture"
    ],
    "correct": 1,
    "explanation": "Repeated settlement over a trench commonly indicates poor compaction or unsuitable backfill beneath the paving.",
    "id": "pmo-challenging-a14-k22",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K26",
    "concept": "K26 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A contractor offers to remove mixed construction waste but cannot provide evidence of authorisation. What should the operative do?",
    "options": [
      "Use the contractor if the price is lower",
      "Allow collection if the waste is non-hazardous",
      "Use only an authorised waste carrier and complete the required transfer records",
      "Ask the contractor to separate the waste after leaving site"
    ],
    "correct": 2,
    "explanation": "Waste must be transferred only to appropriately authorised carriers, with correct classification and documentation.",
    "id": "pmo-challenging-a14-k26",
    "type": "Knowledge",
    "status": "approved"
  }
]);

window.MCQQuestionBank.register("property-maintenance-operative-st0171-v1-1",15,[
  {
    "ksb": "K24",
    "concept": "K24 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "A maintenance record contains a tenant's personal details. How should it be handled?",
    "options": [
      "Share it with anyone helping on the repair",
      "Store and send it only through authorised secure systems",
      "Photograph it on a personal phone for convenience",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Personal data must be limited to authorised use and protected through approved systems in line with data protection requirements.",
    "id": "pmo-approved-a15-k24",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K25",
    "concept": "K25 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "The same repair fails repeatedly. What best supports continuous improvement?",
    "options": [
      "Repeat the repair using more material",
      "Record the failure, investigate the cause and change the method",
      "Allocate the task to a different operative without review",
      "I don't know"
    ],
    "correct": 1,
    "explanation": "Continuous improvement relies on evidence, root-cause review and controlled changes, rather than repeatedly treating the same symptom.",
    "id": "pmo-approved-a15-k25",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K31",
    "concept": "K31 approved question",
    "difficulty": "Standard",
    "style": "workplace-scenario",
    "question": "Why should an operative record CPD and new training?",
    "options": [
      "To show competence development and recognise limits of authority",
      "To replace all workplace supervision",
      "To allow work on any system without approval",
      "I don't know"
    ],
    "correct": 0,
    "explanation": "CPD records show how competence is maintained and developed, while helping operatives understand when specialist support or authorisation is required.",
    "id": "pmo-approved-a15-k31",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K24",
    "concept": "K24 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "A job record contains photographs taken inside an occupied home. What is the safest way to manage them?",
    "options": [
      "Store them on a personal phone until the job is signed off",
      "Upload only necessary images to the authorised secure system and delete local copies as required",
      "Send them to the team through a personal messaging group",
      "Keep every image indefinitely in case it becomes useful"
    ],
    "correct": 1,
    "explanation": "Only necessary data should be captured and stored through authorised secure systems, with retention and deletion handled under data-protection procedures.",
    "id": "pmo-challenging-a15-k24",
    "type": "Knowledge",
    "status": "approved"
  },
  {
    "ksb": "K31",
    "concept": "K31 challenging question",
    "difficulty": "Challenging",
    "style": "workplace-scenario",
    "question": "An operative has watched an online course about testing fire alarms but has not been assessed or authorised. What does CPD allow them to do?",
    "options": [
      "Carry out any fire-alarm test because the course counts as competence",
      "Use the learning to improve awareness while continuing to work only within assessed competence and authority",
      "Sign off fire-alarm certificates under supervision",
      "Train colleagues immediately because the material is current"
    ],
    "correct": 1,
    "explanation": "CPD develops knowledge but does not automatically grant competence or authority. Work limits remain until training, assessment and authorisation are complete.",
    "id": "pmo-challenging-a15-k31",
    "type": "Knowledge",
    "status": "approved"
  }
]);
