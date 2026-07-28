'use strict';

const COURSES={
 'site-carpentry-v1-4':{
  id:'site-carpentry-v1-4',name:'Site Carpentry',standard:'ST0264',version:'1.4',level:'2',
  assignments:[
   {n:1,title:'Health & Safety',ksbs:[['S1','Follow health and safety procedures'],['S2','Use PPE, RPE and LEV correctly'],['K1','Health and safety legislation'],['K2','Safety control equipment'],['K3','Safe systems of work'],['B1','Prioritise health and safety']]},
   {n:2,title:'Standards, Regulations & Sustainability',ksbs:[['S3','Follow environmental procedures'],['S4','Follow industry regulations'],['K4','Sustainable working practices'],['K7','Building standards and regulations'],['K40','Employment and business basics'],['B2','Work sustainably']]},
   {n:3,title:'Preparation & Drawings',ksbs:[['S5','Prepare a safe working area'],['S6','Interpret drawings and specifications'],['K5','Building construction principles'],['K6','Digital design principles'],['K8','Read drawings and specifications'],['B4','Develop skills and knowledge']]},
   {n:4,title:'Estimates & Materials',ksbs:[['S7','Estimate materials and cutting lists'],['S16','Size timber from tables'],['K9','Timber types and properties'],['K10','Timber decay and repairs'],['K12','Material estimating techniques']]},
   {n:5,title:'Tools & Equipment',ksbs:[['S9','Use hand tools safely'],['S10','Use power tools safely'],['S11','Maintain and sharpen hand tools'],['K14','Hand tool techniques'],['K15','Tool maintenance techniques'],['K17','Power tool techniques']]},
   {n:6,title:'Jigs & Levels',ksbs:[['S12','Produce woodworking jigs'],['S19','Use laser levels'],['K16','Jig construction techniques'],['K29','Laser level operation']]},
   {n:7,title:'Communication & Teamwork',ksbs:[['S8','Communicate using construction terminology'],['S13','Support wellbeing'],['K13','Construction communication'],['K18','Effective teamwork'],['K19','Equality, diversity and inclusion'],['K20','Mental health awareness'],['B3','Promote inclusion'],['B5','Work effectively in teams']]},
   {n:8,title:'Structural & Partition Walls',ksbs:[['S14','Construct structural and partition walls'],['S15','Install structural fixings'],['K22','Structural fixings and timber sizing']]},
   {n:9,title:'Floor Joists & Coverings',ksbs:[['S14','Install floor joists and coverings'],['K27','Floor joist installation techniques']]},
   {n:10,title:'Service Encasement & Cladding',ksbs:[['S17','Install service encasements and cladding'],['K28','Encasement and cladding techniques']]},
   {n:11,title:'Wall & Floor Units',ksbs:[['S17','Install wall and floor units'],['S20','Form timber connections'],['K11','Carpentry products and ironmongery'],['K28','Wall and floor unit installation']]},
   {n:12,title:'Stairs, Handrails & Spindles',ksbs:[['S14','Construct straight flights of stairs'],['S17','Install handrails and spindles'],['K21','Measure and fit stair components'],['K27','Stair installation techniques'],['K28','Handrail and spindle installation']]},
   {n:13,title:'Doors & Windows',ksbs:[['S17','Install internal and external doors'],['S21','Measure, cut, hinge and recess doors'],['K28','Door installation techniques']]},
   {n:14,title:'Skirting & Architrave',ksbs:[['S17','Install skirting and architraves'],['S22','Splice and scribe timber'],['K24','Timber splicing and scribing'],['K28','Skirting and architrave installation']]},
   {n:15,title:'Roofing',ksbs:[['S18','Construct pitched and trussed roofs'],['K25','Pitched roof installation'],['K26','Warm and cold flat roof systems']]}
  ]
 },
 'bricklayer-st0095-v1-2':{
  id:'bricklayer-st0095-v1-2',name:'Bricklayer',standard:'ST0095',version:'1.2',level:'2',
  assignments:[
   {n:1,title:'Health & Safety',ksbs:[['S1','Comply with health and safety regulations, standards, and guidance.'],['S2','Identify and use personal protective equipment (PPE).'],['K1','Health and safety regulations, CoSHH, fire safety, asbestos, manual handling, signage, working at height, electrical safety, RPE and dust suppression.'],['K2','Safety control equipment and correct use of PPE.'],['K3','Safe systems of work including inductions, toolbox talks, risk assessments, method statements and hazard identification.'],['B1','Put health, safety and wellbeing first.']]},
   {n:2,title:'Standards, Regulations & Sustainability',ksbs:[['S3','Comply with environmental and sustainability requirements and segregate resources for reuse, recycling and disposal.'],['S4','Comply with industry regulations, standards, and guidance.'],['K4','Environmental impact, efficient resource use, recycling, reuse, contamination prevention and safe waste disposal.'],['K5','Sustainability considerations including thermal qualities, airtightness and ventilation.'],['K7','British Standards, building regulations and warranty provider standards.'],['B2','Consider the environment when using resources and carrying out processes.']]},
   {n:3,title:'Preparation & Drawings',ksbs:[['S5','Read and interpret information from drawings and specifications.'],['S7','Prepare and maintain a safe working area.'],['K10','Interpret and extract relevant information from drawings and specifications.'],['K9','Modern methods of construction including precast components, profiles, frame and cladding systems and masonry supports.'],['K11','Basic principles of digital design and modelling systems.']]},
   {n:4,title:'Estimates & Materials',ksbs:[['S6','Estimate and select bricks, blocks, mortar, wall ties, insulation and other required resources.'],['K8','Materials and characteristics including masonry units, mortar, DPC, ties, lintels, fire stopping and insulation.'],['K6','Building principles including foundations, walls, roofs, floors, services, insulation and moisture, air and fire protection.'],['K12','Simple resource estimation for masonry units, mortar, ties, DPCs, trays and lintels.']]},
   {n:5,title:'Tools & Equipment',ksbs:[['S8','Select and use hand tools.'],['S9','Maintain and store hand tools.'],['K13','Use, maintenance and storage of bricklaying hand tools.'],['K14','Use and limitations of disc cutters, mixers and drills.'],['B1','Put health, safety and wellbeing first.']]},
   {n:6,title:'Cavity Walling',ksbs:[['S10','Set out a brick and block cavity wall with an opening to given tolerances.'],['S11','Construct a cavity wall with return and opening, lintel, soldiers, sill, closure, insulation, fire stopping, cavity tray, DPC and weep holes.'],['K21','Cavity wall setting out using openings, levels, profiles, gauge rods and squares.'],['K22','Cavity wall construction, openings, ties, insulation, DPCs, trays, weep holes, lintels and fire stopping.'],['B3','Take ownership of given work.']]},
   {n:7,title:'Jointing & Mixing Mortar',ksbs:[['S12','Apply half round, flush, weather struck and recessed joint finishes.'],['S14','Gauge and hand mix mortar to ratio.'],['K17','Joint finishes: half round, flush, weather struck and recessed.'],['K19','Principles of expansion joints.'],['K20','Mortar ratios, silos, pre-mixed mortar, gauging, hand and mechanical mixing.']]},
   {n:8,title:'Solid Walling',ksbs:[['S13','Set out and construct a simple brick solid wall with capping.'],['K15','English, Flemish, garden wall and broken bonds.'],['K16','Solid wall setting out, construction and capping methods.'],['K18','Decorative walling and piers including projecting and contrasting brick, piers and banding.'],['K23','Brick-on-edge and soldier course setting out and construction.']]},
   {n:9,title:'Repair & Protection',ksbs:[['S16','Carry out a simple repair such as replacing damaged bricks.'],['K24','Construction defects and repair methods.'],['S17','Protect materials and finished work.'],['K25','Protection from frost, water and construction damage.'],['B3','Take ownership of given work.']]},
   {n:10,title:'Communication & Teamwork',ksbs:[['S18','Communicate verbally using construction terminology.'],['S20','Apply team-working principles to own work and the wider build team.'],['K26','Verbal communication techniques and construction terminology.'],['K27','Principles of good team working.'],['B6','Team-focus to meet team goals and consider the wider build team.'],['B5','Seek learning and development opportunities.']]},
   {n:11,title:'EDI & Wellbeing',ksbs:[['S19','Follow equity, diversity and inclusion guidance.'],['S21','Identify wellbeing support available to self and others.'],['K28','Inclusion, equity and diversity in the workplace.'],['K31','Mental and physical wellbeing and how to access support.'],['B4','Contribute to an inclusive and diverse culture.']]},
   {n:12,title:'Raked Walling & Cutting',ksbs:[['S22','Construct a brick wall with a raking cut, such as a gable or garden wall.'],['S15','Measure and cut bricks and blocks using hand tools to given tolerances.'],['K30','Setting out and construction techniques for brick walls with raking cuts.'],['K29','Methods of cutting bricks and blocks using hand tools.'],['B2','Consider the environment when using resources and carrying out processes.']]}
  ]
 },
 'architectural-joiner-st0264-v1-4':{
  id:'architectural-joiner-st0264-v1-4',name:'Architectural Joiner',standard:'ST0264',version:'1.4',level:'2',
  assignments:[
   {n:1,title:'Health & Safety',ksbs:[['S1','Comply with health and safety regulations, standards and guidance.'],['S2','Identify and use PPE, RPE, dust suppression and LEV.'],['K1','Health and safety regulations, CoSHH, fire safety, asbestos awareness, manual handling, PUWER, electrical safety and workplace hazards.'],['K2','Selection and use of PPE, RPE, LEV and other safety control equipment.'],['K3','Safe systems of work including inductions, toolbox talks, risk assessments, method statements and hazard identification.'],['B1','Put health, safety and wellbeing first.']]},
   {n:2,title:'Standards, Regulations & Sustainability',ksbs:[['S3','Comply with environmental and sustainability requirements and segregate resources for reuse, recycling and disposal.'],['S4','Comply with relevant industry regulations, standards and guidance.'],['K4','Efficient resource use, recycling, reuse, waste disposal and sustainable forestry.'],['K7','British standards, building regulations and warranty-provider standards relevant to joinery.'],['K40','Employment types, small-business start-up principles and tax.'],['B2','Consider the environment when using resources and carrying out processes.']]},
   {n:3,title:'Preparation & Drawings',ksbs:[['S5','Prepare and maintain a safe working area.'],['S6','Interpret and use information from drawings and specifications.'],['K5','Building principles and modern construction methods relevant to joinery installation and manufacture.'],['K6','Basic principles of digital design and modelling systems.'],['K8','Interpret and extract relevant information from drawings and specifications.'],['B4','Seek learning and development opportunities.']]},
   {n:4,title:'Estimates & Materials',ksbs:[['S7','Estimate required materials and produce an accurate cutting list.'],['K9','Characteristics and uses of hardwood, softwood, boards, laminated timber and carcassing.'],['K10','Timber moisture, wet rot, dry rot, insect attack and suitable repair methods.'],['K12','Estimate timber lengths, fixings and other materials and produce cutting lists.']]},
   {n:5,title:'Tools & Equipment',ksbs:[['S9','Select, use and store joinery hand tools.'],['S10','Select, use and store portable power tools.'],['S11','Maintain and sharpen hand tools.'],['K14','Use and storage of chisels, planes, saws, hammers, squares, bevels, gauges and levels.'],['K15','Hand-tool maintenance and sharpening techniques.'],['K17','Use and storage of circular saws, drills, planers, routers, sanders, multifunction tools and nail guns.']]},
   {n:6,title:'Jigs and Levels',ksbs:[['S12','Produce accurate jigs for repeatable joinery work.'],['K16','Jig design and production techniques.'],['K29','Use, calibrate and store laser levels safely and accurately.']]},
   {n:7,title:'Communication & Teamwork',ksbs:[['S8','Communicate verbally using appropriate construction and joinery terminology.'],['S13','Identify wellbeing support available to self and others.'],['K13','Effective verbal communication techniques and construction terminology.'],['K18','Principles of effective team working.'],['K19','Inclusion, equity and diversity in the workplace.'],['K20','Mental and physical wellbeing and how to access support.'],['B3','Contribute to an inclusive and diverse culture.'],['B5','Work with the wider team to meet shared goals.']]},
   {n:8,title:'Setting Out',ksbs:[['S23','Produce setting-out details and rods and mark out timber joinery products accurately.'],['K32','Setting-out and marking-out techniques and the effects of marking errors on joinery manufacture.']]},
   {n:9,title:'Joints and Connections',ksbs:[['S24','Produce dovetail, bridle, mortise-and-tenon and halving joints.'],['S25','Form joinery connections using dowels, biscuits, staples and adhesives.'],['K11','Uses of mastics, preservatives, wood fillers, plastics and ironmongery in joinery products.'],['K33','Types and production methods for dovetail, mortise-and-tenon, bridle and halving joints.'],['K35','Joinery connection methods using dowels, biscuits, staples and adhesives.']]},
   {n:10,title:'Windows',ksbs:[['S26','Manufacture and assemble a timber window with casement, glazing rebates and associated ironmongery.'],['K34','Manufacture and assembly techniques for standard right-angled timber windows.']]},
   {n:11,title:'Door Frames & Linings',ksbs:[['S27','Manufacture and assemble timber door frames and linings.'],['K36','Manufacture and assembly techniques for timber door frames and linings.'],['K39','Select and install appropriate ironmongery for frames and linings.']]},
   {n:12,title:'Staircases',ksbs:[['S27','Manufacture and assemble a straight timber staircase.'],['S28','Manufacture staircase spindles and balustrade components as second-fix joinery products.'],['K36','Manufacture and assembly techniques for straight timber staircases.'],['K37','Second-fix manufacture techniques relevant to staircase components, mouldings and associated timber products.']]},
   {n:13,title:'Timber Doors',ksbs:[['S28','Manufacture and assemble timber doors as second-fix joinery products.'],['S29','Fit door locks, handles, hinges and latches accurately.'],['K37','Manufacture and assembly techniques for timber doors.'],['K30','Requirements of compliant fire-door assemblies.']]},
   {n:14,title:'Wall & Floor Units',ksbs:[['S28','Manufacture and assemble timber wall and floor units.'],['K37','Manufacture and assembly techniques for timber wall and floor units.'],['K38','Finish manufactured timber products by sanding, painting, waxing, polishing, oiling or applying preservative.']]},
   {n:15,title:'Machinery',ksbs:[['S30','Inspect, prepare and operate fixed joinery machinery safely.'],['K31','Safe inspection, preparation and operation of crosscut saws, band saws, planers, thicknessers and mortisers.']]}
  ]
 }
 , 'property-maintenance-operative-st0171-v1-1':{
  id:'property-maintenance-operative-st0171-v1-1',name:'Property Maintenance Operative',standard:'ST0171',version:'1.1',level:'2',
  assignments:[
   {n:1,title:'Health & Safety',ksbs:[
    ['K3','Health and safety regulations, relevance to the occupation and the operative’s responsibilities. Health and Safety at Work Act Control of Substances Hazardous to Health (COSHH). Manual handling. Personal Protective Equipment (PPE). Working at height. Safety equipment: guards, signage, fire extinguishers.'],
    ['K4','Risks and hazards associated with property maintenance activities, and their mitigation using risk assessment.'],
    ['S3','Comply with statutory health and safety regulations and requirements.'],
    ['S4','Comply with risk assessments, and organise the workplace, to safeguard themselves and the property.'],
    ['B2','Prioritise and promote health and safety.']
   ]},
   {n:2,title:'Planning & Preparing Maintenance Work',ksbs:[
    ['K1','The principles and requirements of planned preventative maintenance (PPM) and reactive maintenance.'],
    ['K2','The range of building types and characteristic uses, their common methods of construction and typical defects, and the impact that property maintenance operations may have on building safety.'],
    ['K6','Importance of establishing a safe and tidy work area, using appropriate access equipment, providing protection to adjacent areas, and consideration for the safety of other property users.'],
    ['S1','Plan the sequence of work required to carry out routine property maintenance operations.'],
    ['S6','Uses safe working practices when carrying out property maintenance tasks including the use of PPE, signage, barriers, access equipment and ensuring work area is prepared and reinstated.'],
    ['B3','Takes responsibility for completion of own work.']
   ]},
   {n:3,title:'Regulations, Materials & Technical Information',ksbs:[
    ['K5','Key regulatory and legislative requirements (including building regulations, the building safety bill, and BSI Flex 8670), and an awareness of how these apply to varying property types, and their impact on property maintenance operatives’ responsibilities.'],
    ['K23','Technical sources of information and data used in property maintenance operations.'],
    ['K30','The rights and responsibilities of an employee and employer and an awareness of equality, diversity and inclusion, safeguarding and prevent.'],
    ['S2','Identify and select the appropriate materials and components for property maintenance tasks, ensuring these are compliant with relevant regulatory requirements and manufacturer’s specifications.'],
    ['S5','Comply with key regulatory and legislative requirements, including building regulations.'],
    ['B5','Contribute to equality, diverse and inclusive culture.']
   ]},
   {n:4,title:'Tools, Equipment & Safe Isolation',ksbs:[
    ['K7','Common hand and power tools and equipment used in routine property maintenance tasks and how to use safely.'],
    ['K8','The common components of electrical and electronic systems, how to safely isolate electrical supplies and the procedures for correctly reporting identified faults.'],
    ['S7','Select, and use work tools and equipment for property maintenance tasks, applying all safeguards, and ensuring the correct functioning of equipment.'],
    ['S8','Safely isolate and secure electrical or electronic supplies prior to performing property maintenance operations.']
   ]},
   {n:5,title:'Emergency Systems & Routine Testing',ksbs:[
    ['K9','The common forms of emergency equipment and signage, their importance within buildings and the preventative and possible corrective maintenance required.'],
    ['K31','The purpose of continuing professional development (CPD) and how this supports them to understand their limits for personal authority and competence.'],
    ['S9','Apply and implement routine emergency system checks, testing and routine maintenance, identifying and reporting faults as required.'],
    ['S25','Escalates issues beyond their level of competence and authority.'],
    ['B6','Seek learning and development opportunities.']
   ]},
   {n:6,title:'Plumbing & Drainage Repairs',ksbs:[
    ['K10','The principles and components of plumbing systems, how to safely isolate, store and drain down water supplies to diagnose faults and clear blockages.'],
    ['K11','The principles and components of common above and below ground drainage systems, the issues that poor drainage can have on properties and how to diagnose faults and clear blockages.'],
    ['K12','The principles of good water hygiene to preserve and maintain the health of water systems within buildings and how these are checked and legally certified to minimise water hygiene and legionella risks.'],
    ['S10','Perform maintenance and repairs to plumbing systems, including fault identification, safe isolation of supply, replacing components and clearing blockages.'],
    ['S11','Perform maintenance and repairs to external drainage systems, including clearing blockages and replacing components.']
   ]},
   {n:7,title:'Environmental & Energy Systems',ksbs:[
    ['K13','The principles and components of common environmental and energy management systems and their methods of operation.'],
    ['K25','The purpose of quality assurance and continuous improvement and how these improve commonly occurring faults or inefficiencies.'],
    ['S12','Perform maintenance and repairs to environmental and energy management systems, including fault identification, safe isolation of supply, replacing components.'],
    ['S21','Inspect own work, ensuring it is delivered to the given specifications.']
   ]},
   {n:8,title:'Windows, Doors & Glazing Repairs',ksbs:[
    ['K14','The common defects found in windows, doors, and glazing systems, the characteristics, uses and limitations of the materials and components used within them, and how these are used to meet statutory regulations.'],
    ['K27','Methods of communication and when to use industry terminology to match the style to the audience.'],
    ['K28','The importance of customer service to their organisation, how to provide feedback to ensure customers are informed of property maintenance.'],
    ['S13','Use carpentry and joinery skills to perform repairs to windows, doors and glazing units, and their associated fittings.'],
    ['S24','Provide customer feedback whilst maintaining customer service.']
   ]},
   {n:9,title:'Plastering, Painting & Decorating Repairs',ksbs:[
    ['K15','The common types of materials and processes used to prepare, repair and finish plaster defects.'],
    ['K16','The common causes of painting and decorating defects, and the types of materials, chemicals and processes used in painting and decorating activities. How paints and chemicals are stored and disposed of safely.'],
    ['K26','Environmental regulations and requirements: Environmental Protection Act, safe disposal of waste, minimising waste (re-use and re-cycle), waste contractors permit, energy efficiency, and contribution to net zero outcomes.'],
    ['S14','Perform repairs to plastered surfaces, including surface preparation, fixing and mixing materials and compounds.'],
    ['S15','Use painting and decorating skills to prepare surfaces for decoration, apply paint using brushes and rollers, and complete sealing activities using gun appliances.']
   ]},
   {n:10,title:'Wall & Floor Finishes',ksbs:[
    ['K17','The common causes of tiling defects and the types of materials and processes used in tiling activities.'],
    ['K18','The common causes of flooring defects and the types of materials and processes used in flooring repairs.'],
    ['S16','Perform tiling repairs, including setting out, surface preparation and cutting around obstacles.'],
    ['S17','Perform flooring repairs, including setting out, surface preparation and cutting around obstacles.']
   ]},
   {n:11,title:'Masonry Repairs',ksbs:[
    ['K19','The common forms of masonry and damp proofing defects, materials and processes used in masonry repair activities: Mixing mortars, replacing defective pointing, laying and bonding of masonry, coping repairs and damp-proofing.'],
    ['K29','The roles and responsibilities of property maintenance operatives and the purpose and inter-dependencies of other trade operatives.'],
    ['S18','Perform planned, responsive or temporary repairs to buildings or their immediate surroundings, attending to minor defects within either masonry, roofing, fencing or railing, groundwork or landscaping.']
   ]},
   {n:12,title:'Roofing Repairs',ksbs:[
    ['K20','The common types of roof structures, defects and the types of materials and processes used in remedial and temporary repair.'],
    ['K25','The purpose of quality assurance and continuous improvement and how these improve commonly occurring faults or inefficiencies.'],
    ['S18','Perform planned, responsive or temporary repairs to buildings or their immediate surroundings, attending to minor defects within either masonry, roofing, fencing or railing, groundwork or landscaping.'],
    ['S21','Inspect own work, ensuring it is delivered to the given specifications.'],
    ['B4','Team focuses to meet goals.']
   ]},
   {n:13,title:'Fencing & Railing Repairs',ksbs:[
    ['K21','The common types of fencing and railing systems, their typical defects, and the types of materials and processes used in repairs.'],
    ['K27','Methods of communication and when to use industry terminology to match the style to the audience.'],
    ['S18','Perform planned, responsive or temporary repairs to buildings or their immediate surroundings, attending to minor defects within either masonry, roofing, fencing or railing, groundwork or landscaping.'],
    ['S23','Use and adapt communication methods for different situations and when, working with colleagues and stakeholders, using industry terminology as appropriate.']
   ]},
   {n:14,title:'Groundwork & Landscaping Repairs',ksbs:[
    ['K22','The common types of groundwork and landscaping systems, their typical defects and the types of materials and processes used in remedial repair.'],
    ['K26','Environmental regulations and requirements: Environmental Protection Act, safe disposal of waste, minimising waste (re-use and re-cycle), waste contractors permit, energy efficiency, and contribution to net zero outcomes.'],
    ['S18','Perform planned, responsive or temporary repairs to buildings or their immediate surroundings, attending to minor defects within either masonry, roofing, fencing or railing, groundwork or landscaping.'],
    ['S22','Comply with environmental regulations and procedures. Segregate resources for reuse, recycling and disposal.'],
    ['B1','Prioritise and promote sustainable working practices.']
   ]},
   {n:15,title:'Quality, Reporting & Professional Practice',ksbs:[
    ['K24','The methods to record information and data via written and digital means and the importance of data protection and security.'],
    ['K25','The purpose of quality assurance and continuous improvement and how these improve commonly occurring faults or inefficiencies.'],
    ['K31','The purpose of continuing professional development (CPD) and how this supports them to understand their limits for personal authority and competence.'],
    ['S19','Select and use technical literature and other sources of information and data to address property maintenance problems.'],
    ['S20','Record and report information, using digital and written techniques.']
   ]}
  ]
 }
, 'trowel-nvq-6570-05':{
  id:'trowel-nvq-6570-05',name:'Level 3 NVQ Diploma in Trowel Occupations',standard:'6570-05',version:'1.1',level:'3',nvqUnits:true,
  assignments:[
   {n:1,unit:'102',optional:false,title:'Conforming to general health, safety and welfare in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3 • 1.4 • 1.5 • 1.6 • 1.7 • 1.8',LO2:'2.1 • 2.2 • 2.3 • 2.4 • 2.5 • 2.6',LO3:'3.1 • 3.2 • 3.3 • 3.4 • 3.5 • 3.6 • 3.7 • 3.8',LO4:'4.1 • 4.2 • 4.3',LO5:'5.1 • 5.2'},ksbs:[['LO1','Comply with all workplace health, safety and welfare legislation requirements.'],['LO2','Recognise hazards associated with the workplace that have not been previously controlled and report them in accordance with organisational procedures.'],['LO3','Comply with organisational policies and procedures to contribute to health, safety and welfare.'],['LO4','Work responsibly to contribute to workplace health, safety and welfare whilst carrying out work in the relevant occupational area.'],['LO5','Comply with and support all organisational security arrangements and approved procedures.']]},
   {n:2,unit:'234',optional:false,title:'Erecting masonry cladding in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3 • 1.4',LO2:'2.1 • 2.2 • 2.3',LO3:'3.1 • 3.2 • 3.3 • 3.4 • 3.5',LO4:'4.1 • 4.2 • 4.3 • 4.4 • 4.5 • 4.6 • 4.7',LO5:'5.1 • 5.2 • 5.3 • 5.4 • 5.5',LO6:'6.1 • 6.2',LO7:'7.1 • 7.2 • 7.3 • 7.4 • 7.5 • 7.6 • 7.7'},ksbs:[['LO1','Interpret the given information relating to the work and resources when erecting masonry cladding.'],['LO2','Know how to comply with relevant legislation and official guidance when erecting masonry cladding.'],['LO3','Maintain safe and healthy working practices when erecting masonry cladding.'],['LO4','Select the required quantity and quality of resources for the methods of work to erect masonry cladding.'],['LO5','Minimise the risk of damage to the work and surrounding area when erecting masonry cladding.'],['LO6','Complete the work within the allocated time when erecting masonry cladding.'],['LO7','Comply with the given contract information to erect masonry cladding to the required specification.']]},
   {n:3,unit:'235',optional:false,title:'Erecting masonry structures in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3 • 1.4',LO2:'2.1 • 2.2 • 2.3',LO3:'3.1 • 3.2 • 3.3 • 3.4 • 3.5',LO4:'4.1 • 4.2 • 4.3 • 4.4 • 4.5 • 4.6 • 4.7',LO5:'5.1 • 5.2 • 5.3 • 5.4 • 5.5',LO6:'6.1 • 6.2',LO7:'7.1 • 7.2 • 7.3 • 7.4 • 7.5 • 7.6 • 7.7'},ksbs:[['LO1','Interpret the given information relating to the work and resources when erecting masonry structures.'],['LO2','Know how to comply with relevant legislation and official guidance when erecting masonry structures.'],['LO3','Maintain safe and healthy working practices when erecting masonry structures.'],['LO4','Select the required quantity and quality of resources for the methods of work to erect masonry structures.'],['LO5','Minimise the risk of damage to the work and surrounding area when erecting masonry structures.'],['LO6','Complete the work within the allocated time when erecting masonry structures.'],['LO7','Comply with the given contract information to erect masonry structures to the required specification.']]},
   {n:4,unit:'303',optional:false,title:'Confirming the occupational method of work in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3 • 1.4',LO2:'2.1 • 2.2',LO3:'3.1 • 3.2 • 3.3 • 3.4 • 3.5',LO4:'4.1 • 4.2 • 4.3 • 4.4'},ksbs:[['LO1','Assess available project data accurately to determine the occupational method of work.'],['LO2','Obtain additional information from alternative sources where the available project data is insufficient.'],['LO3','Identify work methods that make best use of resources and meet project, statutory and contractual requirements.'],['LO4','Confirm and communicate the selected work method to relevant personnel.']]},
   {n:5,unit:'300',optional:false,title:'Confirming work activities and resources for an occupational work area in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3 • 1.4 • 1.5',LO2:'2.1 • 2.2 • 2.3 • 2.4 • 2.5',LO3:'3.1 • 3.2 • 3.3 • 3.4 • 3.5',LO4:'4.1 • 4.2 • 4.3 • 4.4 • 4.5',LO5:'5.1 • 5.2 • 5.3 • 5.4 • 5.5'},ksbs:[['LO1','Identify work activities, assess required resources and plan the sequence of work.'],['LO2','Obtain clarification and advice where the resources required are not available.'],['LO3','Evaluate the work activities and the requirements of any significant external factors against the project requirements.'],['LO4','Identify work activities which influence each other and make the best use of resources.'],['LO5','Identify changed circumstances that require alterations to the work programme and justify them to decision makers.']]},
   {n:6,unit:'313',optional:false,title:'Erect masonry to form architectural and decorative structures in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3 • 1.4',LO2:'2.1 • 2.2 • 2.3',LO3:'3.1 • 3.2 • 3.3 • 3.4 • 3.5',LO4:'4.1 • 4.2 • 4.3 • 4.4 • 4.5 • 4.6 • 4.7',LO5:'5.1 • 5.2 • 5.3 • 5.4 • 5.5',LO6:'6.1 • 6.2',LO7:'7.1 • 7.2 • 7.3 • 7.4 • 7.5 • 7.6 • 7.7'},ksbs:[['LO1','Interpret the given information relating to the work and resources when erecting masonry to form architectural and decorative structures.'],['LO2','Know how to comply with relevant legislation and official guidance when erecting architectural and decorative masonry.'],['LO3','Maintain safe and healthy working practices when erecting architectural and decorative masonry.'],['LO4','Select the required quantity and quality of resources for the methods of work.'],['LO5','Minimise the risk of damage to the work and surrounding area.'],['LO6','Complete the work within the allocated time.'],['LO7','Comply with the given contract information to erect architectural and decorative masonry to the required specification.']]},
   {n:7,unit:'502',optional:false,title:'Developing and maintaining good occupational working relationships in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3',LO2:'2.1 • 2.2 • 2.3 • 2.4',LO3:'3.1 • 3.2 • 3.3',LO4:'4.1 • 4.2 • 4.3',LO5:'5.1 • 5.2'},ksbs:[['LO1','Develop, maintain and encourage working relationships to promote goodwill and trust.'],['LO2','Inform relevant people about work activities with an appropriate level of detail and urgency.'],['LO3','Offer advice and help to relevant people about work activities and encourage questions, clarification and comments.'],['LO4','Clarify proposals with relevant people and discuss alternative suggestions.'],['LO5','Resolve differences of opinion in ways that minimise offence and maintain goodwill, trust and respect.']]},
   {n:8,unit:'701',optional:false,title:'Setting out to form masonry structures in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3 • 1.4',LO2:'2.1 • 2.2 • 2.3',LO3:'3.1 • 3.2 • 3.3 • 3.4 • 3.5',LO4:'4.1 • 4.2 • 4.3 • 4.4 • 4.5 • 4.6 • 4.7',LO5:'5.1 • 5.2 • 5.3 • 5.4 • 5.5',LO6:'6.1 • 6.2',LO7:'7.1 • 7.2 • 7.3 • 7.4 • 7.5 • 7.6'},ksbs:[['LO1','Interpret the given information relating to the work and resources when setting out masonry structures.'],['LO2','Know how to comply with relevant legislation and official guidance when setting out masonry structures.'],['LO3','Maintain safe and healthy working practices when setting out masonry structures.'],['LO4','Select the required quantity and quality of resources for the methods of work.'],['LO5','Minimise the risk of damage to the work and surrounding area.'],['LO6','Complete the work within the allocated time.'],['LO7','Comply with the given contract information to set out masonry structures to the required specification.']]},
   {n:9,unit:'',optional:true,selectOptional:true,title:'Select an optional unit',criteria:{},ksbs:[]}
  ],
  optionalUnits:[
   {n:9,unit:'238',optional:true,title:'Erecting thin joint masonry structures in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3 • 1.4',LO2:'2.1 • 2.2 • 2.3',LO3:'3.1 • 3.2 • 3.3 • 3.4 • 3.5',LO4:'4.1 • 4.2 • 4.3 • 4.4 • 4.5 • 4.6 • 4.7',LO5:'5.1 • 5.2 • 5.3 • 5.4 • 5.5',LO6:'6.1 • 6.2',LO7:'7.1 • 7.2 • 7.3 • 7.4 • 7.5 • 7.6 • 7.7'},ksbs:[['LO1','Interpret the given information relating to the work and resources when erecting thin joint masonry structures.'],['LO2','Know how to comply with relevant legislation and official guidance.'],['LO3','Maintain safe and healthy working practices.'],['LO4','Select the required quantity and quality of resources.'],['LO5','Minimise the risk of damage to the work and surrounding area.'],['LO6','Complete the work within the allocated time.'],['LO7','Comply with the given contract information to erect thin joint masonry structures to the required specification.']]},
   {n:9,unit:'690',optional:true,title:'Repairing and maintaining masonry structures in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3 • 1.4',LO2:'2.1 • 2.2 • 2.3',LO3:'3.1 • 3.2 • 3.3 • 3.4 • 3.5',LO4:'4.1 • 4.2 • 4.3 • 4.4 • 4.5 • 4.6 • 4.7',LO5:'5.1 • 5.2 • 5.3 • 5.4 • 5.5',LO6:'6.1 • 6.2',LO7:'7.1 • 7.2 • 7.3 • 7.4 • 7.5 • 7.6 • 7.7'},ksbs:[['LO1','Interpret the given information relating to the work and resources when repairing and maintaining masonry structures.'],['LO2','Know how to comply with relevant legislation and official guidance.'],['LO3','Maintain safe and healthy working practices.'],['LO4','Select the required quantity and quality of resources.'],['LO5','Minimise the risk of damage to the work and surrounding area.'],['LO6','Complete the work within the allocated time.'],['LO7','Comply with the given contract information to repair and maintain masonry structures to the required specification.']]},
   {n:9,unit:'828',optional:true,title:'Installing and forming specialist masonry elements in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3 • 1.4',LO2:'2.1 • 2.2 • 2.3',LO3:'3.1 • 3.2 • 3.3 • 3.4 • 3.5',LO4:'4.1 • 4.2 • 4.3 • 4.4 • 4.5 • 4.6 • 4.7',LO5:'5.1 • 5.2 • 5.3 • 5.4 • 5.5',LO6:'6.1 • 6.2',LO7:'7.1 • 7.2 • 7.3 • 7.4 • 7.5 • 7.6 • 7.7'},ksbs:[['LO1','Interpret the given information relating to the work and resources when installing and forming specialist masonry elements.'],['LO2','Know how to comply with relevant legislation and official guidance.'],['LO3','Maintain safe and healthy working practices.'],['LO4','Select the required quantity and quality of resources.'],['LO5','Minimise the risk of damage to the work and surrounding area.'],['LO6','Complete the work within the allocated time.'],['LO7','Comply with the given contract information to install and form specialist masonry elements to the required specification.']]},
   {n:9,unit:'837',optional:true,title:'Installing drainage in the workplace',criteria:{LO1:'1.1 • 1.2 • 1.3 • 1.4',LO2:'2.1 • 2.2 • 2.3',LO3:'3.1 • 3.2 • 3.3 • 3.4 • 3.5',LO4:'4.1 • 4.2 • 4.3 • 4.4 • 4.5 • 4.6 • 4.7',LO5:'5.1 • 5.2 • 5.3 • 5.4 • 5.5',LO6:'6.1 • 6.2',LO7:'7.1 • 7.2 • 7.3 • 7.4 • 7.5 • 7.6 • 7.7'},ksbs:[['LO1','Interpret the given information relating to the work and resources when installing drainage.'],['LO2','Know how to comply with relevant legislation and official guidance when installing drainage.'],['LO3','Maintain safe and healthy working practices when installing drainage.'],['LO4','Select the required quantity and quality of resources for the methods of work.'],['LO5','Minimise the risk of damage to the work and surrounding area.'],['LO6','Complete the work within the allocated time.'],['LO7','Comply with the given contract information to install drainage to the required specification.']]}
  ]
 }


};

// Short learner-facing prompt titles. Full KSB wording remains unchanged for
// assessment scoring, evidence records, version history and PDF generation.
const LEARNER_PROMPTS={
 'bricklayer-st0095-v1-2':{
  1:{S1:'Safe working',S2:'PPE & RPE',K1:'Site hazards',K2:'Safety equipment',K3:'Safe systems',B1:'Health & wellbeing'},
  2:{S3:'Waste management',S4:'Industry standards',K4:'Environmental impact',K5:'Building performance',K7:'Building regulations',B2:'Sustainable working'},
  3:{S5:'Read drawings',S7:'Prepare workspace',K10:'Drawing details',K9:'Modern construction',K11:'Digital design'},
  4:{S6:'Estimate resources',K8:'Masonry materials',K6:'Building principles',K12:'Quantity calculations'},
  5:{S8:'Use hand tools',S9:'Maintain tools',K13:'Hand tools',K14:'Power tools',B1:'Safe tool use'},
  6:{S10:'Set out cavity',S11:'Build cavity wall',K21:'Cavity setting out',K22:'Cavity components',B3:'Own your work'},
  7:{S12:'Joint finishes',S14:'Mix mortar',K17:'Joint types',K19:'Expansion joints',K20:'Mortar ratios'},
  8:{S13:'Build solid wall',K15:'Brick bonds',K16:'Wall construction',K18:'Decorative brickwork',K23:'Edge courses'},
  9:{S16:'Repair brickwork',K24:'Defects & repairs',S17:'Protect work',K25:'Weather protection',B3:'Own your work'},
  10:{S18:'Site communication',S20:'Team working',K26:'Construction terms',K27:'Good teamwork',B6:'Team goals',B5:'Keep developing'},
  11:{S19:'Follow EDI',S21:'Wellbeing support',K28:'Inclusive workplace',K31:'Mental wellbeing',B4:'Support inclusion'},
  12:{S22:'Raking cuts',S15:'Cut bricks',K30:'Raked walling',K29:'Hand cutting',B2:'Reduce waste'}
 },
 'architectural-joiner-st0264-v1-4':{
  1:{S1:'Safe working',S2:'PPE & RPE',K1:'Workshop hazards',K2:'Safety equipment',K3:'Safe systems',B1:'Health & wellbeing'},
  2:{S3:'Waste management',S4:'Industry standards',K4:'Sustainable timber',K7:'Building regulations',K40:'Employment basics',B2:'Sustainable working'},
  3:{S5:'Prepare workspace',S6:'Read drawings',K5:'Building methods',K6:'Digital design',K8:'Drawing details',B4:'Keep developing'},
  4:{S7:'Cutting lists',K9:'Timber types',K10:'Timber defects',K12:'Material estimates'},
  5:{S9:'Use hand tools',S10:'Use power tools',S11:'Sharpen tools',K14:'Hand tools',K15:'Tool maintenance',K17:'Power tools'},
  6:{S12:'Produce jigs',K16:'Jig techniques',K29:'Laser levels'},
  7:{S8:'Site communication',S13:'Wellbeing support',K13:'Construction terms',K18:'Good teamwork',K19:'Inclusive workplace',K20:'Mental wellbeing',B3:'Support inclusion',B5:'Team goals'},
  8:{S23:'Setting out',K32:'Marking accuracy'},
  9:{S24:'Timber joints',S25:'Joinery connections',K11:'Joinery products',K33:'Joint techniques',K35:'Connection methods'},
  10:{S26:'Make windows',K34:'Window assembly'},
  11:{S27:'Frames & linings',K36:'Frame assembly',K39:'Fit ironmongery'},
  12:{S27:'Make staircases',S28:'Spindles & balustrades',K36:'Stair assembly',K37:'Second-fix products'},
  13:{S28:'Make timber doors',S29:'Fit door ironmongery',K37:'Door assembly',K30:'Fire doors'},
  14:{S28:'Make fitted units',K37:'Unit assembly',K38:'Timber finishes'},
  15:{S30:'Operate machinery',K31:'Machine safety'}
 }
 , 'property-maintenance-operative-st0171-v1-1':{
  1:{K3:'Safety law',K4:'Risk assessment',S3:'Follow safety rules',S4:'Control workplace risks',B2:'Promote safety'},
  2:{K1:'Planned & reactive work',K2:'Buildings & defects',K6:'Prepare work area',S1:'Plan work sequence',S6:'Set up safely',B3:'Complete own work'},
  3:{K5:'Building regulations',K23:'Technical information',K30:'Workplace responsibilities',S2:'Select correct materials',S5:'Meet regulations',B5:'Support inclusion'},
  4:{K7:'Tools & equipment',K8:'Electrical systems',S7:'Use tools safely',S8:'Isolate supplies safely'},
  5:{K9:'Emergency systems',K31:'Limits & development',S9:'Test emergency systems',S25:'Escalate faults',B6:'Keep developing'},
  6:{K10:'Plumbing systems',K11:'Drainage systems',K12:'Water hygiene',S10:'Repair plumbing',S11:'Repair drainage'},
  7:{K13:'Energy systems',K25:'Quality improvement',S12:'Repair energy systems',S21:'Inspect finished work'},
  8:{K14:'Doors & glazing defects',K27:'Adapt communication',K28:'Customer service',S13:'Repair doors & windows',S24:'Customer handover'},
  9:{K15:'Plaster defects',K16:'Decorating defects',K26:'Environmental duties',S14:'Repair plaster',S15:'Prepare & decorate'},
  10:{K17:'Tiling defects',K18:'Flooring defects',S16:'Repair tiling',S17:'Repair flooring'},
  11:{K19:'Masonry defects',K29:'Trade responsibilities',S18:'Repair masonry'},
  12:{K20:'Roof defects',K25:'Quality checks',S18:'Repair roofing',S21:'Inspect repair',B4:'Work as team'},
  13:{K21:'Fencing defects',K27:'Trade communication',S18:'Repair fencing',S23:'Communicate with others'},
  14:{K22:'Groundwork defects',K26:'Environmental duties',S18:'Repair groundworks',S22:'Reuse & recycle',B1:'Work sustainably'},
  15:{K24:'Record information',K25:'Quality improvement',K31:'Professional development',S19:'Use technical guidance',S20:'Report completed work'}
 }

};
function learnerPromptTitle(assignmentNumber,code,fallback){
 return LEARNER_PROMPTS[COURSE.id]?.[assignmentNumber]?.[code]||fallback;
}

const APP_VERSION='1.3.13';
let ACTIVE_COURSE_ID='trowel-nvq-6570-05';
let COURSE=COURSES[ACTIVE_COURSE_ID];

const app=document.getElementById('app');
const toastEl=document.getElementById('toast');
let state={view:'home',assignment:null,section:null,profile:null,data:{},dev:false,academySearch:''};
let db;

function uid(){return crypto.randomUUID?crypto.randomUUID():Date.now().toString(36)+Math.random().toString(36).slice(2)}
function today(){return new Intl.DateTimeFormat('en-GB',{day:'2-digit',month:'2-digit',year:'numeric'}).format(new Date())}
function esc(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function toast(msg){toastEl.textContent=msg;toastEl.classList.add('show');setTimeout(()=>toastEl.classList.remove('show'),1900)}
function key(a,s){return `${COURSE.id}:${a}:${s}`}
function legacyKey(a,s){return `${a}:${s}`}
function sectionData(a,s){return state.data[key(a,s)]||{draft:blankSection(s),versions:[]}}
function blankSection(s){
 const base={id:uid(),submitted:false,date:'',signature:'',createdAt:Date.now()};
 if(s==='practical')return {...base,tutor:'',activity:'',scores:{},feedbackSummary:'',feedbackDevelopment:'',feedback:'',photos:[]};
 if(s==='photos')return {...base,photos:[]};
 if(s==='statement')return {...base,text:''};
 return {...base,tab:'statement',type:'Witness testimony',personName:'',role:'',organisation:'',activity:'',scores:{},feedbackSummary:'',feedbackDevelopment:'',feedback:'',files:[]};
}
function optionalSelectionKey(){return `${COURSE.id}:optionalUnitSelection`}
function selectedOptionalUnitNumber(){return String(state.data[optionalSelectionKey()]||'')}
function selectedOptionalUnit(){const number=selectedOptionalUnitNumber();return (COURSE.optionalUnits||[]).find(a=>String(a.unit)===number)||null}
function assignment(n){
 const base=COURSE.assignments.find(a=>a.n===n);
 if(base?.selectOptional){const selected=selectedOptionalUnit();return selected?{...selected,n:base.n,optional:true,selectOptional:false}:{...base}}
 return base;
}
function courseAssignments(){return COURSE.assignments.map(a=>assignment(a.n))}

function current(a,s){return sectionData(a,s).draft}
function completed(a,s){return sectionData(a,s).versions.length>0}
function sectionHasEvidence(a,s){
 const sd=sectionData(a,s),d=sd.draft||{};
 if(sd.versions.length>0)return true;
 if(s==='practical')return !!(d.tutor||d.activity||d.signature||(d.photos||[]).length||Object.keys(d.scores||{}).length);
 if(s==='photos')return !!((d.photos||[]).length||d.signature);
 if(s==='statement')return !!((d.text||'').trim()||d.signature);
 return !!(d.personName||d.role||d.organisation||d.activity||d.signature||(d.files||[]).length||Object.keys(d.scores||{}).length);
}
function sectionStatus(a,s){if(!sectionHasEvidence(a,s))return 'none';return sectionReadyForPack(a,s)?'complete':'incomplete'}
function latestVersion(a,s){const versions=sectionData(a,s).versions;return versions.length?versions[versions.length-1]:null}
function skillCriteriaFor(a){
 const skills=a.ksbs.filter(([code])=>String(code).toUpperCase().startsWith('S'));
 return skills.map(([code,summary])=>({code,summary,criteria:buildSkillCriteria(summary)}));
}
function buildSkillCriteria(summary){
 const text=String(summary||'').replace(/[.]+$/,'').trim();
 const lower=text.toLowerCase();
 const action=text.charAt(0).toLowerCase()+text.slice(1);
 let prep='Selected the correct tools, equipment and materials needed to '+action+'.';
 let method='Used an appropriate sequence and working method to '+action+'.';
 let accuracy='Completed the work accurately and in line with the drawing, specification or required tolerance.';
 let quality='Checked the finished work, corrected defects and left it to the required quality standard.';
 if(/health|safety|ppe|rpe|lev|safe working/.test(lower)){prep='Identified the main hazards and selected the correct PPE, RPE and control measures.';method='Followed the safe system of work and used tools, equipment and controls correctly.';accuracy='Applied the relevant safety requirements consistently throughout the activity.';quality='Maintained good housekeeping, protected others and left the work area safe.'}
 else if(/communicat|team|wellbeing|inclusion|equity|diversity/.test(lower)){prep='Identified who needed information, support or involvement before starting the activity.';method='Used clear, appropriate communication and worked constructively with others.';accuracy='Shared accurate information using suitable trade terminology and checked understanding.';quality='Responded professionally, supported the team and reflected on how communication could improve.'}
 else if(/interpret|drawing|specification|digital design/.test(lower)){prep='Selected the correct drawing, specification or digital information for the task.';method='Extracted the relevant dimensions, symbols, notes and construction requirements.';accuracy='Transferred the information accurately into the practical work or setting-out process.';quality='Cross-checked the completed work against the source information and corrected discrepancies.'}
 else if(/estimate|select.*material|resource|cutting list|size timber/.test(lower)){prep='Identified the materials, quantities and specification required for the task.';method='Used an appropriate estimating, measuring or selection method.';accuracy='Calculated or selected resources accurately with suitable allowances for waste and cutting.';quality='Checked the result against the task requirements and justified the final selection.'}
 else if(/tool|equipment|maintain|sharpen/.test(lower)){prep='Selected tools and equipment that were suitable, serviceable and safe for the task.';method='Set up and used each tool correctly, following manufacturer and workplace guidance.';accuracy='Controlled the tools accurately to achieve the required dimensions and finish.';quality='Checked, cleaned, maintained and stored the tools correctly after use.'}
 else if(/set out|measure|level|laser|mark out/.test(lower)){prep='Selected suitable measuring, marking and setting-out equipment.';method='Established accurate datum points, lines, levels, centres or profiles in the correct sequence.';accuracy='Checked all dimensions, angles, levels and tolerances throughout the work.';quality='Verified the completed setting out against the drawing or specification before work continued.'}
 else if(/construct|build|install|fit|form|produce|apply|mix|repair|cut|splice|scribe/.test(lower)){prep='Selected and prepared the correct tools, equipment, materials and work area for this skill.';method='Used the correct practical sequence and trade technique to '+action+'.';accuracy='Maintained the required measurements, alignment, tolerances and component positioning.';quality='Checked workmanship, finish and compliance with the specification, correcting defects where needed.'}
 else if(/environment|sustainab|recycl|waste/.test(lower)){prep='Identified the environmental controls and resource requirements before starting.';method='Used materials efficiently and followed the correct reuse, recycling and disposal procedures.';accuracy='Segregated resources correctly and prevented contamination or avoidable waste.';quality='Left the area compliant, tidy and with environmental impacts minimised.'}
 return [prep,method,accuracy,quality];
}
function practicalScoreKeys(a){return skillCriteriaFor(a).flatMap(s=>s.criteria.map((_,i)=>`${s.code}::${i+1}`))}
function practicalPercentageScore(a,d){const keys=practicalScoreKeys(a);if(!keys.length)return 0;const hasNew=keys.some(k=>d?.scores?.[k]);if(!hasNew){const old=skillCriteriaFor(a).map(s=>s.code);const achieved=old.reduce((sum,k)=>sum+(+d?.scores?.[k]||0),0);return old.length?Math.round((achieved/(old.length*5))*100):0}const achieved=keys.reduce((sum,k)=>sum+(+d?.scores?.[k]||0),0);return Math.round((achieved/(keys.length*5))*100)}
function percentageScore(a,d){const max=a.ksbs.length*5;if(!max)return 0;const achieved=a.ksbs.reduce((sum,[code])=>sum+(+d?.scores?.[code]||0),0);return Math.round((achieved/max)*100)}
function gradeForPercentage(p){return p>=90?'Distinction':p>=80?'Merit':p>=70?'Pass':'Fail'}
function assessmentPassed(a,d,isPractical=false){return !!d&&(isPractical?practicalPercentageScore(a,d):percentageScore(a,d))>=70}
function sectionReadyForPack(n,s){const latest=latestVersion(n,s);if(!latest)return false;if(s==='practical')return assessmentPassed(assignment(n),latest,true);if(s==='supporting'&&latest.tab!=='files')return assessmentPassed(assignment(n),latest);return true}
function packStatusKey(n){return `${COURSE.id}:packStatus:${n}`}
function assignmentRPL(n){return !!state.data[packStatusKey(n)]?.rpl}
function assignmentComplete(n){return assignmentRPL(n)||['practical','photos','statement','supporting'].every(s=>sectionReadyForPack(n,s))}
function packDownloaded(n){return !!state.data[packStatusKey(n)]?.downloaded}
function packUploaded(n){return !!state.data[packStatusKey(n)]?.uploaded}
function assignmentSubmitted(n){return assignmentRPL(n)||packUploaded(n)}
function clampPct(n){return Math.max(0,Math.min(100,Math.round(Number(n)||0)))}
function courseTimePercent(){
 const start=state.profile?.courseStartDate,end=state.profile?.plannedEndDate;if(!start||!end)return null;
 const a=new Date(`${start}T00:00:00`),b=new Date(`${end}T00:00:00`),now=new Date();
 if(!Number.isFinite(a.getTime())||!Number.isFinite(b.getTime())||b<=a)return null;
 return clampPct(((now-a)/(b-a))*100);
}
function assignmentHasAnyEvidence(n){
 return ['practical','photos','statement','supporting'].some(s=>sectionHasEvidence(n,s));
}
function courseProgressStats(){
 const total=courseAssignments().length||1;
 const evidencePerAssignment=4;
 const evidenceTotal=total*evidencePerAssignment;
 const submitted=courseAssignments().filter(a=>assignmentSubmitted(a.n)).length;
 const evidenceStarted=courseAssignments().reduce((count,a)=>count+(assignmentRPL(a.n)?4:['practical','photos','statement','supporting'].filter(s=>sectionHasEvidence(a.n,s)).length),0);
 const green=clampPct(submitted/total*100);
 const yellow=clampPct(evidenceStarted/evidenceTotal*100);
 const red=courseTimePercent();
 let label='Add course dates',tone='neutral',difference=null;
 if(red!==null){difference=Math.max(green,yellow)-red;if(green>red+5){label='Ahead of target';tone='ahead'}else if(green>=red-5||yellow>=red){label='On target';tone='target'}else{label='Behind target';tone='behind'}}
 return {total,evidenceTotal,completed:submitted,ready:evidenceStarted,submitted,evidenceStarted,green,yellow,red,label,tone,difference};
}
function formatDateInput(value){if(!value)return 'Not added';const d=new Date(`${value}T00:00:00`);return Number.isFinite(d.getTime())?new Intl.DateTimeFormat('en-GB',{day:'2-digit',month:'2-digit',year:'numeric'}).format(d):value}

async function openDB(){
 return new Promise((resolve,reject)=>{const r=indexedDB.open('ApprenticePlusDB',1);r.onupgradeneeded=()=>{const d=r.result;if(!d.objectStoreNames.contains('store'))d.createObjectStore('store')};r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)});
}
async function getStore(k){return new Promise((res,rej)=>{const r=db.transaction('store').objectStore('store').get(k);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
async function putStore(k,v){return new Promise((res,rej)=>{const r=db.transaction('store','readwrite').objectStore('store').put(v,k);r.onsuccess=()=>res();r.onerror=()=>rej(r.error)})}
async function load(){
 state.profile=await getStore('profile')||null;
 state.data=await getStore('data')||{};
 state.dev=!!(await getStore('dev'));
 ACTIVE_COURSE_ID=await getStore('activeCourse')||'site-carpentry-v1-4';
 if(!COURSES[ACTIVE_COURSE_ID])ACTIVE_COURSE_ID='site-carpentry-v1-4';
 COURSE=COURSES[ACTIVE_COURSE_ID];
 // Migration safety: copy old Site Carpentry keys into course-scoped keys. Never delete legacy records.
 let migrated=false;
 Object.keys(state.data).forEach(k=>{if(/^\d+:(practical|photos|statement|supporting)$/.test(k)){const nk=`site-carpentry-v1-4:${k}`;if(state.data[nk]===undefined){state.data[nk]=state.data[k];migrated=true}}});
 if(migrated)await saveData();
 render();if(!state.profile)showOnboarding()
}
async function saveData(){await putStore('data',state.data)}
async function saveProfile(){await putStore('profile',state.profile)}

function shell(content){const active=state.view==='academy'||state.view==='library'?'academy':'course';return `<main class="shell"><header class="topbar"><div class="brand"><div class="logo"><img src="logo-apprentice-plus.png" alt="Apprentice+ logo"></div><div><h1>Apprentice+</h1><p class="subtitle">Your evidence, organised</p></div></div>${state.profile?`<span class="pill">${esc(state.profile.fullName.split(' ')[0]||'Learner')}</span>`:''}</header>${content}<nav class="bottom-nav no-print" aria-label="Main navigation"><button class="bottom-nav-item ${active==='course'?'active':''}" data-nav="course" aria-label="Course"><span>▣</span><strong>Course</strong></button><button class="bottom-nav-item ${active==='academy'?'active':''}" data-nav="academy" aria-label="Academy"><span>⌂</span><strong>Academy</strong></button></nav></main>`}
function courseHeader(){const p=courseProgressStats(),red=p.red??0;return `<section class="course-card"><div class="course-summary"><div class="course-copy"><div class="course-title-row"><h2>${COURSE.name}</h2><span class="target-status ${p.tone}">${p.label}</span></div><div class="meta"><span class="pill">${COURSE.standard}</span><span class="pill">Version ${COURSE.version}</span><span class="pill">Level ${COURSE.level}</span><span class="pill green">${courseAssignments().length} evidence packs</span></div></div><button class="progress-rings" id="courseProgressBtn" aria-label="Open course progress details" style="--green:${p.green*3.6}deg;--yellow:${p.yellow*3.6}deg;--red:${red*3.6}deg"><span class="ring ring-green"></span><span class="ring ring-yellow"></span><span class="ring ring-red"></span><strong>${p.green}%</strong></button></div></section>`}
function render(){if(state.view==='home')renderHome();else if(state.view==='assignment')renderAssignment();else if(state.view==='academy')renderAcademy();else if(state.view==='library')renderKnowledgeLibrary();else renderSection()}

function courseRevisionTopics(){
 const seen=new Map();
 courseAssignments().forEach(a=>a.ksbs.forEach(([code,text])=>{
  if(!seen.has(code))seen.set(code,{code,title:learnerPromptTitle(a.n,code,text),assignments:[]});
  const topic=seen.get(code);if(!topic.assignments.some(x=>x.n===a.n))topic.assignments.push({n:a.n,title:a.title});
 }));
 return [...seen.values()];
}
function renderAcademy(){
 app.innerHTML=shell(`<section class="academy-hero"><div class="number">${esc(COURSE.name)}</div><h2>Academy</h2><p>Personalised revision and learning to help improve practical skills and prepare for EPA.</p></section><section class="academy-grid"><article class="academy-card recommended"><div class="academy-icon">↗</div><div><h3>Targeted Revision</h3><p>Revision topics identified from Practical Assessments, Witness Testimonies and Employer Statements.</p></div><div class="academy-stats"><span><strong>0</strong>Revision Topics</span><span><strong>0</strong>Improvement Required</span><span><strong>0</strong>Further Development</span></div><div class="academy-empty">Complete assessed evidence to receive personalised targeted revision.</div><button class="btn secondary" disabled>View Targeted Revision</button></article><article class="academy-card library"><div class="academy-icon">▤</div><div><h3>Knowledge Library</h3><p>Browse revision topics available for your selected apprenticeship.</p></div><div class="library-summary"><strong>${courseRevisionTopics().length}</strong><span>course topics ready to populate</span></div><button class="btn" id="openLibrary">Open Knowledge Library</button></article></section>`);
 document.getElementById('openLibrary').onclick=()=>{state.view='library';state.academySearch='';render()};
}
function renderKnowledgeLibrary(){
 const topics=courseRevisionTopics();
 const q=String(state.academySearch||'').trim().toLowerCase();
 const assignments=courseAssignments().map(a=>{const items=a.ksbs.map(([code,text])=>({code,title:learnerPromptTitle(a.n,code,text)})).filter(t=>!q||t.title.toLowerCase().includes(q)||a.title.toLowerCase().includes(q));return {...a,topics:items}}).filter(a=>a.topics.length);
 app.innerHTML=shell(`<button class="back no-print" id="academyBack">← Academy</button><section class="library-head"><div class="number">${esc(COURSE.name)} · ${esc(COURSE.standard)}</div><h2>Knowledge Library</h2><p class="muted">Revision topics are created automatically from the selected course data, so future courses will appear here without changing the Academy.</p><div class="field academy-search"><label for="academySearch">Search revision topics</label><input class="input" id="academySearch" value="${esc(state.academySearch||'')}" placeholder="Search topics or assignments..."></div></section><section class="revision-assignment-list">${assignments.length?assignments.map(a=>`<details class="revision-assignment" ${q?'open':''}><summary><span><small>Assignment ${a.n}</small><strong>${esc(a.title)}</strong></span><span class="topic-count">${a.topics.length}</span></summary><div class="revision-topic-list">${a.topics.map(t=>`<article class="revision-topic"><div><h3>${esc(t.title)}</h3><p>Teaching content ready to be added.</p></div><span class="status-pill">Coming soon</span></article>`).join('')}</div></details>`).join(''):`<section class="card panel"><h3>No matching revision topics</h3><p class="muted" style="margin-top:6px">Try another search.</p></section>`}</section>`);
 document.getElementById('academyBack').onclick=()=>{state.view='academy';render()};
 const search=document.getElementById('academySearch');search.oninput=()=>{state.academySearch=search.value;renderKnowledgeLibrary();const next=document.getElementById('academySearch');next.focus();next.setSelectionRange(next.value.length,next.value.length)};
}

function renderHome(){
 const done=courseAssignments().filter(a=>assignmentComplete(a.n)).length;
 app.innerHTML=shell(`${courseHeader()}<div class="section-heading"><div><h2>${COURSE.nvqUnits?'Evidence Packs':'Assignments'}</h2><p class="muted">${done} of ${courseAssignments().length} complete</p></div></div><section class="assignment-list">${courseAssignments().map(a=>{
  const sts=[['🛠','practical'],['📷','photos'],['📝','statement'],['✉️','supporting']];
  const needsOptional=!!a.selectOptional;const packNumber=COURSE.nvqUnits?(needsOptional?'Evidence Pack 9 · Optional Unit':`Evidence Pack ${a.n} · Unit ${a.unit}${a.optional?' · Optional':''}`):`Assignment ${a.n}`;const packTitle=needsOptional?'Select one of Units 238, 690, 828 or 837':a.title;
  return `<button class="assignment-card ${assignmentComplete(a.n)?'complete':''} ${assignmentSubmitted(a.n)?'submitted':''} ${assignmentRPL(a.n)?'rpl':''}" data-open="${a.n}">${assignmentRPL(a.n)?'<span class="submitted-ribbon rpl-ribbon">RPL</span>':packUploaded(a.n)?'<span class="submitted-ribbon">SUBMITTED</span>':''}<div class="assignment-head"><div><div class="number">${packNumber}</div><h3>${esc(packTitle)}</h3></div><span class="status-pill ${assignmentComplete(a.n)?'done':''}">${assignmentRPL(a.n)?'Completed by RPL':packUploaded(a.n)?'Submitted':assignmentComplete(a.n)?'Evidence ready':'In progress'}</span></div><div class="icons">${sts.map(([i,s])=>{const status=assignmentRPL(a.n)?'complete':sectionStatus(a.n,s);return `<div class="icon-state ${status==='complete'?'done':status==='incomplete'?'warning':''}">${i} ${status==='complete'?'✓':status==='incomplete'?'!':'○'}</div>`}).join('')}</div><div class="ksb-row">${needsOptional?'<span class="ksb-mini">Choose unit</span>':a.ksbs.map(k=>`<span class="ksb-mini">${k[0]}</span>`).join('')}</div></button>`}).join('')}</section><div class="developer"><button class="link-button" id="developerBtn">Developer Mode</button><div class="app-version">App version ${APP_VERSION}</div></div>`);
 document.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>{state.assignment=+b.dataset.open;state.view='assignment';render()});
 document.getElementById('developerBtn').onclick=showDeveloper;
 const progressBtn=document.getElementById('courseProgressBtn');if(progressBtn)progressBtn.onclick=showCourseProgress;
}
function showCourseProgress(){const p=courseProgressStats(),red=p.red;app.insertAdjacentHTML('beforeend',`<div class="modal" id="progressModal"><div class="modal-card progress-modal"><h2>${p.label}</h2><p class="muted">Course progress compared with planned time on programme.</p><div class="progress-detail-list"><div><span class="legend-dot green-dot"></span><strong>Submitted</strong><span>${p.submitted} / ${p.total} (${p.green}%)</span></div><div><span class="legend-dot yellow-dot"></span><strong>Evidence added</strong><span>${p.evidenceStarted} / ${p.evidenceTotal} (${p.yellow}%)</span></div><div><span class="legend-dot red-dot"></span><strong>Time elapsed</strong><span>${red===null?'Add course dates':`${red}%`}</span></div></div><div class="disclaimer"><strong>Review status</strong><br>${p.label==='Ahead of target'?'Submitted work is more than 5% ahead of elapsed course time.':p.label==='On target'?'Submitted work is close to the planned point, or evidence activity is keeping pace with elapsed course time.':p.label==='Behind target'?'Submitted work and evidence activity are both behind elapsed course time.':'Add a course start date and planned end date to calculate progress against target.'}</div><div class="date-summary"><span>Start: ${formatDateInput(state.profile?.courseStartDate)}</span><span>Planned end: ${formatDateInput(state.profile?.plannedEndDate)}</span></div><div class="btn-row"><button class="btn secondary" id="editCourseDates">Edit course dates</button><button class="btn" id="closeProgress">Close</button></div></div></div>`);document.getElementById('closeProgress').onclick=()=>document.getElementById('progressModal').remove();document.getElementById('editCourseDates').onclick=()=>{document.getElementById('progressModal').remove();showOnboarding(true)}}

function renderOptionalUnitSelection(){
 const choices=COURSE.optionalUnits||[];
 app.innerHTML=shell(`<button class="back no-print" id="back">← Evidence Packs</button><div class="assignment-title"><div class="number">Evidence Pack 9 · Optional Unit</div><h2>Select your optional unit</h2><p class="muted">Choose the one optional unit you will complete. Your selection is saved on this device.</p></div><section class="card panel"><div class="panel-body"><div class="optional-unit-list">${choices.map(u=>`<label class="optional-unit-choice"><input type="radio" name="optionalUnit" value="${esc(u.unit)}"><span><strong>Unit ${esc(u.unit)}</strong><small>${esc(u.title)}</small></span></label>`).join('')}</div><div class="disclaimer"><strong>Important</strong><br>Once confirmed, this unit becomes Evidence Pack 9 and the other optional units are hidden. A tutor can reset the selection in Developer Mode before evidence is added.</div></div><div class="btn-row"><button class="btn" id="confirmOptional" disabled>Confirm optional unit</button></div></section>`);
 document.getElementById('back').onclick=()=>{state.view='home';render()};
 const confirm=document.getElementById('confirmOptional');
 document.querySelectorAll('input[name="optionalUnit"]').forEach(r=>r.onchange=()=>{confirm.disabled=false});
 confirm.onclick=async()=>{const chosen=document.querySelector('input[name="optionalUnit"]:checked');if(!chosen)return;const unit=choices.find(u=>String(u.unit)===chosen.value);if(!unit)return;if(!window.confirm(`Select Unit ${unit.unit} — ${unit.title}? This choice will be saved as Evidence Pack 9.`))return;state.data[optionalSelectionKey()]=String(unit.unit);await saveData();state.assignment=9;render();toast(`Unit ${unit.unit} selected`)};
}

function renderAssignment(){const a=assignment(state.assignment);if(a?.selectOptional){renderOptionalUnitSelection();return}const tiles=[['practical','🛠️',COURSE.nvqUnits?'Assessor observation':'Practical assessment','Tutor score sheet + 3 finished-product photos'],['photos','📷','Photos','Exactly 6 landscape photos'],['statement','📝','Statement','Type or dictate'],['supporting','✉️','Supporting evidence','Statement or documents']];
 const ready=assignmentComplete(a.n),practical=latestVersion(a.n,'practical'),support=latestVersion(a.n,'supporting'),status=state.data[packStatusKey(a.n)]||{};
 const blockers=[];if(!practical)blockers.push('Complete the Practical Assessment');else if(!assessmentPassed(a,practical,true))blockers.push(`Latest Practical Assessment is ${practicalPercentageScore(a,practical)}% — Fail`);if(!latestVersion(a.n,'photos'))blockers.push('Submit Photos');if(!latestVersion(a.n,'statement'))blockers.push('Submit the Learner Statement');if(!support)blockers.push('Submit Supporting Evidence');else if(support.tab!=='files'&&!assessmentPassed(a,support))blockers.push(`Latest ${support.type||'Witness / employer statement'} is ${percentageScore(a,support)}% — Fail`);
 const uploadText=status.uploaded?'Evidence pack submitted':status.downloaded?'Evidence pack downloaded — upload it to your portfolio':'Evidence pack ready to download';
 const rpl=assignmentRPL(a.n);
 app.innerHTML=shell(`<button class="back no-print" id="back">← ${COURSE.nvqUnits?'Evidence Packs':'Assignments'}</button><div class="assignment-title">${rpl?'<span class="submitted-ribbon rpl-ribbon page-ribbon">RPL</span>':status.uploaded?'<span class="submitted-ribbon page-ribbon">SUBMITTED</span>':''}<div class="number">${COURSE.nvqUnits?`Evidence Pack ${a.n} · Unit ${a.unit}${a.optional?' · Optional':''}`:`Assignment ${a.n}`}</div><h2>${esc(a.title)}</h2><div class="ksb-row">${a.ksbs.map(k=>`<span class="ksb-mini">${k[0]} · ${esc(learnerPromptTitle(a.n,k[0],k[1]))}</span>`).join('')}</div></div><section class="evidence-grid">${tiles.map(([s,i,t,d])=>{const sd=sectionData(a.n,s),latest=latestVersion(a.n,s);let label=rpl?'Completed through RPL':sd.versions.length?`${sd.versions.length} saved attempt${sd.versions.length>1?'s':''}`:d;let stateName=rpl?'complete':sectionStatus(a.n,s),cls=stateName==='complete'?'done':stateName==='incomplete'?'warning':'';if(!rpl&&latest&&(s==='practical'||(s==='supporting'&&latest.tab!=='files'))){const pct=s==='practical'?practicalPercentageScore(a,latest):percentageScore(a,latest);label=`${pct}% — ${gradeForPercentage(pct)} · Attempt ${sd.versions.length}`}return `<button class="evidence-tile ${cls}" data-section="${s}">${s==='practical'?'<span class="submitted-ribbon assessor-ribbon tile-ribbon">ASSESSOR ONLY</span>':''}<div class="tile-icon">${i}</div><h3>${t}</h3><p>${sectionReadyForPack(a.n,s)?'✓ ':''}${label}</p></button>`}).join('')}</section><section class="card download-card ${(ready||rpl)?'complete':''}"><h3>${rpl?'Assignment completed through RPL':ready?uploadText:'Evidence pack not ready'}</h3><p class="muted" style="margin-top:5px">${rpl?'This assignment has been recognised as prior learning and counts as fully completed in course progress.':ready?(status.uploaded?'The latest evidence pack has been confirmed as uploaded. Adding a new evidence attempt will require a new download and upload.':status.downloaded?'Open your saved portfolio website, upload the latest PDF, then confirm the upload below.':'Create the latest PDF before uploading it to your portfolio.'):esc(blockers.join(' · '))}</p>${rpl?'':`<div class="btn-row"><button class="btn" id="download" ${ready?'':'disabled'}>${status.downloaded?'Download Updated PDF':'Download / Save PDF'}</button>${ready&&status.downloaded?'<button class="btn secondary" id="openPortfolio">Open Portfolio</button><button class="btn" id="confirmUpload">Confirm Upload</button>':''}</div>`}</section>`);
 document.getElementById('back').onclick=()=>{state.view='home';render()};document.querySelectorAll('[data-section]').forEach(b=>b.onclick=()=>{state.section=b.dataset.section;state.view='section';render()});document.getElementById('download').onclick=()=>downloadPack(a.n);
 const open=document.getElementById('openPortfolio');if(open)open.onclick=()=>openPortfolioSite();const confirmBtn=document.getElementById('confirmUpload');if(confirmBtn)confirmBtn.onclick=()=>confirmPackUpload(a.n);
}

function outcomeCards(a,mode='prompt'){return `<div class="outcome-list">${a.ksbs.map(([code,text])=>`<article class="outcome-card"><div class="outcome-code">Learning Outcome ${esc(code.replace('LO',''))}</div><strong>${esc(text)}</strong><div class="criteria-numbers">Criteria: ${esc(a.criteria?.[code]||'')}</div></article>`).join('')}</div>`}
function nvqTickRows(a,d,readonly=false){return a.ksbs.map(([code,text])=>`<button type="button" class="outcome-tick ${+d.scores?.[code]===5?'achieved':''}" data-nvq-toggle="${code}" ${readonly?'disabled':''}><span class="tick-box">${+d.scores?.[code]===5?'✓':''}</span><span><small>Learning Outcome ${esc(code.replace('LO',''))}</small><strong>${esc(text)}</strong><em>Criteria: ${esc(a.criteria?.[code]||'')}</em></span></button>`).join('')}
function selectedNvqOutcomes(a,d){return a.ksbs.filter(([code])=>+d.scores?.[code]===5)}
function shortOutcomeText(text,max=18){const words=String(text||'').replace(/\s+/g,' ').trim().split(' ');return words.length>max?words.slice(0,max).join(' ')+'…':words.join(' ')}
const NVQ_OBSERVATION_DETAILS={
 '102':{
  LO1:'The learner complied with site rules and the relevant health, safety and welfare requirements, using the required PPE and following the agreed safe system of work throughout the activity.',
  LO2:'The learner remained alert to changing conditions, identified hazards that were not adequately controlled and reported or acted on them in accordance with organisational procedures.',
  LO3:'The learner followed the risk assessment and method statement, maintained suitable access and housekeeping, used work equipment correctly and protected both themselves and others from foreseeable harm.',
  LO4:'The learner worked responsibly within the limits of their authority, coordinated safely with others and took appropriate action when circumstances affected the planned activity.',
  LO5:'The learner complied with site security arrangements, controlled access to the work area and followed the approved procedures for tools, materials, information and personal belongings.'
 },
 '234':{
  LO1:'The learner interpreted the drawings, specification and manufacturer information before confirming the cladding layout, support details, openings, movement provision and required finish.',
  LO2:'The learner applied the relevant legislation, site procedures and technical guidance, including requirements affecting access equipment, manual handling, cutting, dust control and structural restraint.',
  LO3:'The learner maintained a safe work area, used the appropriate PPE and RPE, controlled cutting operations and handled units and mortar without creating unnecessary risk to others.',
  LO4:'The learner selected cladding units, mortar, ties, fixings, insulation and ancillary components of the correct type, quantity and condition for the specified system.',
  LO5:'Materials and completed work were protected from contamination, impact and adverse weather, and the learner kept cavities, interfaces and surrounding finishes free from avoidable damage.',
  LO6:'The activity was organised in a logical sequence and progressed within the allocated time without compromising safety, accuracy or quality.',
  LO7:'The learner erected the cladding to the specified line, level, gauge, bond and tolerances, correctly positioning restraints, movement joints, openings and interfaces before carrying out regular quality checks.'
 },
 '235':{
  LO1:'The learner interpreted the drawings, specifications and setting-out information before confirming dimensions, bond, openings, levels, structural details and the required sequence of work.',
  LO2:'The learner followed the relevant legislation, site procedures and technical guidance for access, lifting, cutting, mortar use, dust control and the stability of the masonry during construction.',
  LO3:'The learner maintained safe access and good housekeeping, used suitable PPE and RPE and organised materials and equipment so the activity could be completed without exposing others to avoidable risk.',
  LO4:'The learner selected bricks or blocks, mortar and ancillary components of the specified type and quality, checking quantities and condition before and during the work.',
  LO5:'Materials, adjacent surfaces and completed masonry were protected from impact, contamination and weather, with waste and surplus mortar controlled as the work progressed.',
  LO6:'The learner planned the sequence effectively and completed the observed work within the allocated time while maintaining the required standard.',
  LO7:'The masonry was erected to the required bond, gauge, line, level and plumb, with openings and components correctly positioned. The learner checked dimensions and alignment regularly and corrected minor deviations promptly.'
 },
 '303':{
  LO1:'The learner reviewed the available drawings, specifications, programme information, site conditions and resource requirements to determine an appropriate occupational method of work.',
  LO2:'Where information was incomplete or unclear, the learner identified the gap and obtained suitable clarification from the relevant source before committing to the work method.',
  LO3:'The learner compared practical work methods and selected an approach that made effective use of labour, materials and equipment while meeting statutory, contractual, environmental and quality requirements.',
  LO4:'The selected method was explained clearly to the relevant people, including the sequence, controls, responsibilities and any points requiring coordination or further confirmation.'
 },
 '300':{
  LO1:'The learner identified the work activities, assessed the labour, materials, tools and access requirements and arranged the work in a practical sequence.',
  LO2:'The learner recognised where required resources or information were unavailable and sought appropriate clarification or advice rather than proceeding on an unsupported assumption.',
  LO3:'The learner evaluated site restrictions, interfaces, weather, programme demands and other external factors against the project requirements before confirming the plan.',
  LO4:'Activities that affected one another were coordinated so that resources were used efficiently and disruption, delay and unnecessary handling were reduced.',
  LO5:'The learner recognised changed circumstances, considered their effect on the programme and communicated a justified alteration to the appropriate decision maker.'
 },
 '313':{
  LO1:'The learner interpreted the drawings, details and specification to establish the required geometry, bond, profiles, dimensions, features and finish for the architectural or decorative masonry.',
  LO2:'The learner applied the relevant legislation, site procedures and technical guidance, including controls for cutting, handling, access, dust and the temporary stability of detailed work.',
  LO3:'The work area was kept safe and orderly, with suitable PPE and RPE used and materials, templates and cutting equipment positioned to avoid unnecessary risk.',
  LO4:'The learner selected matching masonry units, mortar, templates and ancillary materials of the correct quality and quantity, rejecting unsuitable items before use.',
  LO5:'Exposed arrises, finished faces, adjacent work and prepared units were protected from damage, staining and adverse weather throughout the activity.',
  LO6:'The learner sequenced the detailed work efficiently and achieved the planned output within the allocated time without lowering the standard of finish.',
  LO7:'The feature was constructed to the required profile, bond, gauge, line, level and tolerances. Cuts, angles, projections and joint finishes were checked frequently and adjusted to maintain a consistent appearance.'
 },
 '502':{
  LO1:'The learner communicated respectfully and reliably with colleagues and other trades, helping to maintain goodwill, trust and productive working relationships.',
  LO2:'Relevant people were given clear and timely information about the work, its progress, risks, dependencies and any matters requiring action.',
  LO3:'The learner offered appropriate help and technical advice, encouraged questions and checked that information had been understood rather than assumed.',
  LO4:'Proposals and alternative suggestions were discussed constructively, with the learner listening to other viewpoints and clarifying the practical implications.',
  LO5:'Any differences of opinion were handled calmly and professionally, focusing on the work requirement while preserving respect and cooperation.'
 },
 '701':{
  LO1:'The learner interpreted the drawings, dimensions, specification and site information before establishing the required wall positions, openings, datum levels and reference points.',
  LO2:'The learner followed the relevant legislation, site procedures and technical guidance for access, measuring equipment, manual handling and safe working around the setting-out area.',
  LO3:'The learner maintained a clear and controlled work area, used suitable PPE and handled profiles, lines, levels and measuring equipment safely throughout the activity.',
  LO4:'The learner selected appropriate profiles, pins, lines, tapes, levels and marking equipment, checking that each item was suitable, serviceable and sufficiently accurate for the task.',
  LO5:'Existing surfaces, setting-out marks, equipment and the surrounding area were protected from avoidable damage or disturbance while the work was completed.',
  LO6:'The setting-out sequence was planned effectively and completed within the allocated time, with checks built into the activity rather than left until the end.',
  LO7:'The learner established and transferred datum points, set profiles and lines and checked dimensions, offsets, levels, squareness and diagonals against the contract information. Minor discrepancies were identified and corrected before masonry work commenced.'
 },
 '238':{
  LO1:'The learner interpreted the drawings, specification and manufacturer guidance before confirming the thin-joint layout, unit sizes, openings, levels and sequence of construction.',
  LO2:'The learner followed the relevant legislation, site rules and system guidance for access, lifting, cutting, dust control, adhesive use and temporary stability.',
  LO3:'The work area was maintained safely, with suitable PPE and RPE used and cutting, mixing and handling operations controlled to protect the learner and others.',
  LO4:'The learner selected compatible blocks, thin-joint mortar or adhesive, applicators, reinforcement and ancillary components in the required quantity and condition.',
  LO5:'Units, prepared surfaces and completed work were protected from moisture, contamination, impact and weather, and adhesive was applied without excessive waste.',
  LO6:'The system was erected in an efficient sequence and the observed work was completed within the allocated time.',
  LO7:'The learner established a level base course and erected the thin-joint masonry to the required line, level, plumb, bond and joint thickness, checking dimensions and correcting deviations as work progressed.'
 },
 '690':{
  LO1:'The learner interpreted the repair information and inspected the existing masonry to identify the defect, likely cause, extent of work and required finish before starting.',
  LO2:'The learner followed the relevant legislation, site procedures and technical guidance for access, isolation, removal work, dust control, waste and the stability of retained masonry.',
  LO3:'The repair area was made safe and controlled, with appropriate PPE and RPE used and loose or unstable material dealt with without exposing others to avoidable risk.',
  LO4:'The learner selected replacement units, mortar and repair materials that were compatible in size, strength, colour and performance with the existing construction.',
  LO5:'Sound masonry and adjacent finishes were protected during removal and reinstatement, with dust, debris and staining controlled throughout the activity.',
  LO6:'The learner organised the repair efficiently and completed the observed work within the allocated time.',
  LO7:'Defective material was removed carefully and the masonry reinstated to match the required bond, alignment, profile and joint finish. The learner checked the repair for stability, appearance and compliance with the specification.'
 },
 '828':{
  LO1:'The learner interpreted the drawings, schedules and specialist details to confirm the element type, location, dimensions, support, interfaces and required finish.',
  LO2:'The learner applied the relevant legislation, site procedures and manufacturer guidance for lifting, access, fixing, cutting, temporary support and structural safety.',
  LO3:'The work area and lifting or installation operations were controlled safely, with suitable PPE used and clear communication maintained with everyone involved.',
  LO4:'The learner selected the specified specialist units, supports, fixings, reinforcement, mortar and ancillary components, checking compatibility and condition before installation.',
  LO5:'Specialist components, adjacent work and finished surfaces were protected from impact, distortion, contamination and weather during handling and installation.',
  LO6:'The installation was planned and coordinated effectively and the observed activity was completed within the allocated time.',
  LO7:'The specialist element was positioned, supported, fixed and finished in accordance with the contract information. The learner checked dimensions, line, level, bearing, alignment and interfaces before confirming completion.'
 },
 '837':{
  LO1:'The learner interpreted the drainage drawings and specification to confirm the route, pipe sizes, levels, gradients, access points, connections and sequence of work.',
  LO2:'The learner followed the relevant legislation, site procedures and technical guidance for excavation, underground services, manual handling, hygiene, bedding and testing.',
  LO3:'The work area was kept safe and controlled, with excavations, access and materials managed appropriately and suitable PPE used throughout the activity.',
  LO4:'The learner selected pipes, fittings, chambers, bedding and surround materials of the correct type, size, quantity and condition for the specified installation.',
  LO5:'Pipes, fittings, existing services and surrounding surfaces were protected from damage and contamination, and open ends were kept clean during the work.',
  LO6:'The installation was sequenced efficiently and the observed work was completed within the allocated time.',
  LO7:'The learner prepared the formation, installed bedding and laid the drainage to the specified line and fall, making sound connections and carrying out checks for alignment, gradient, cleanliness and effective flow.'
 }
};

function generateNvqNarrative(a,d,perspective='assessor'){
 const selected=selectedNvqOutcomes(a,d);if(!selected.length)return'';
 const learner=(state.profile?.fullName||'the learner').trim(),first=learner.split(/\s+/)[0]||'The learner';
 const activity=(d.activity||'the planned workplace activity').trim();
 const outcomeList=selected.map(([code,text])=>`Learning Outcome ${code.replace('LO','')}: ${shortOutcomeText(text)}`);
 const listed=outcomeList.length===1?outcomeList[0]:outcomeList.length===2?`${outcomeList[0]} and ${outcomeList[1]}`:`${outcomeList.slice(0,-1).join('; ')}; and ${outcomeList.at(-1)}`;
 const detailMap=NVQ_OBSERVATION_DETAILS[String(a.unit)]||{};
 const evidence=selected.map(([code])=>detailMap[code]).filter(Boolean);
 const evidenceText=evidence.length?evidence.join(' '):`${first} followed the relevant workplace procedures, selected suitable resources, maintained safe working practices and checked the work as the activity progressed.`;
 if(perspective==='witness')return `I witnessed ${learner} carrying out ${activity}. The evidence I personally observed covered ${listed}.\n\n${evidenceText}\n\n${first} communicated appropriately with those affected by the work and responded constructively when checks, clarification or minor adjustments were required. These actions were completed during the activity and were not left until the end. The work seen was carried out in a controlled and responsible manner, with appropriate attention to safety, quality, efficiency and the protection of surrounding work.\n\nThis testimony is based on my direct observation of the activity. In my opinion, the selected learning outcomes were demonstrated in normal workplace conditions and the evidence is relevant, current and representative of ${first}'s workplace performance.`;
 return `I observed ${learner} carrying out ${activity}. The assessment evidence observed covered ${listed}.\n\n${evidenceText}\n\n${first} worked methodically, communicated appropriately with those affected by the task and responded correctly where checks, clarification or minor adjustments were required. Quality checks were completed as the work progressed, allowing any discrepancy to be addressed before it affected subsequent work. The activity was completed in a controlled and responsible manner with suitable attention to safety, quality, efficiency and the needs of others in the workplace.\n\nBased on my direct observation and professional judgement, the selected learning outcomes were demonstrated in normal workplace conditions. The evidence is valid, authentic, current and sufficient to support the assessment decision.`;
}

function scoreRows(a,d,readonly=false){return skillCriteriaFor(a).map(skill=>`<div class="skill-assessment"><div class="skill-heading"><span>${esc(skill.code)}</span><strong>${esc(skill.summary)}</strong></div>${skill.criteria.map((criterion,i)=>{const key=`${skill.code}::${i+1}`;return `<div class="score-card criterion-row"><div class="criterion-text"><small>Practical mark ${i+1}</small>${esc(criterion)}</div><div class="score-buttons">${[1,2,3,4,5].map(n=>`<button type="button" class="score-button ${+d.scores[key]===n?'active':''}" data-score-code="${key}" data-score="${n}" ${readonly?'disabled':''}>${n}</button>`).join('')}</div></div>`}).join('')}</div>`).join('')}
function ksbsScoreRows(a,d,readonly=false){return a.ksbs.map(([code,summary])=>`<div class="score-card"><strong>${code} — ${esc(learnerPromptTitle(a.n,code,summary))}</strong><div class="score-buttons">${[1,2,3,4,5].map(n=>`<button type="button" class="score-button ${+d.scores[code]===n?'active':''}" data-score-code="${code}" data-score="${n}" ${readonly?'disabled':''}>${n}</button>`).join('')}</div></div>`).join('')}
function totalScore(a,d,practical=false){const pct=practical?practicalPercentageScore(a,d):percentageScore(a,d);return `${pct}% — ${gradeForPercentage(pct)}`}
function scoreBadge(a,d){const pct=percentageScore(a,d),grade=gradeForPercentage(pct);return `<span class="status-pill ${pct>=70?'done':''}">${pct}% — ${grade}</span>`}
function feedbackTitles(a,d,practical=false){
 const rows=practical
  ?skillCriteriaFor(a).flatMap(skill=>skill.criteria.map((_,i)=>({title:learnerPromptTitle(a.n,skill.code,skill.summary),score:+d.scores?.[`${skill.code}::${i+1}`]||0})))
  :a.ksbs.map(([code,summary])=>({title:learnerPromptTitle(a.n,code,summary),score:+d.scores?.[code]||0}));
 const unique=items=>[...new Set(items.map(x=>x.title).filter(Boolean))];
 return {strengths:unique(rows.filter(x=>x.score>=4)),development:unique(rows.filter(x=>x.score>=1&&x.score<=3))};
}
function joinFeedbackTitles(items){if(!items.length)return'';if(items.length===1)return items[0];if(items.length===2)return `${items[0]} and ${items[1]}`;return `${items.slice(0,-1).join(', ')} and ${items.at(-1)}`}
function assessmentTypeName(type,practical=false){if(practical)return'practical assessment';return String(type||'witness testimony').toLowerCase()}
function generateFeedbackSections(a,d,practical=false){
 const type=assessmentTypeName(d.type,practical),titles=feedbackTitles(a,d,practical),strengths=joinFeedbackTitles(titles.strengths),development=joinFeedbackTitles(titles.development);
 let summary='';
 if(strengths)summary=`The ${type} identified a good standard in ${strengths}. These areas were scored at four or five and demonstrated secure performance against the assessed requirements. The learner should continue applying the same level of care, consistency and professional judgement when completing similar workplace activities and future assessments.`;
 else summary=`No assessed criteria received a score of four or five in this ${type}. The assessment has nevertheless established a clear starting point for development. The learner should use the recorded scores, assessor guidance and further supervised practice to build confidence and demonstrate a stronger standard during the next assessment attempt.`;
 let areas='';
 if(development)areas=`Further development is required in ${development}. These areas received scores between one and three and should be addressed through the related Targeted Revision activities. The learner should then practise the relevant knowledge or skills in the workplace before completing another ${practical?'Practical Assessment':'assessment'} to demonstrate measurable improvement.`;
 else areas=`No assessed criteria received a score between one and three, so no specific development areas were identified from this ${type}. The learner should maintain the current standard, continue practising the assessed requirements and use Targeted Revision whenever a future assessment identifies a lower score or a new area requiring improvement.`;
 return {summary,areas};
}
function additionalCommentsHeading(d,practical=false){if(practical)return"Practical Assessor's Additional Comments";return d.type==='Employer statement'?"Employer's Additional Comments":"Witness's Additional Comments"}
function additionalCommentsPlaceholder(d,practical=false){if(practical)return'Record observations specific to this practical assessment, including good practice, progress since previous assessments or recommendations for future development.';if(d.type==='Employer statement')return"Record observations about the learner's workplace performance, including strengths, areas for development or recommendations for future progress.";return'Record workplace observations, examples of good performance or recommendations based on the work witnessed.'}
function generatedFeedbackHTML(d,practical=false){return `<div class="generated-feedback-note">This feedback has been generated automatically from the assessment scores and is intended to provide guidance. Please add your own comments below where appropriate.</div><div class="field"><label>Assessment Summary</label><textarea class="generated-feedback-text" readonly placeholder="Select scores and generate feedback...">${esc(d.feedbackSummary||'')}</textarea></div><div class="field"><label>Areas for Development</label><textarea class="generated-feedback-text" readonly placeholder="Select scores and generate feedback...">${esc(d.feedbackDevelopment||'')}</textarea></div><div class="field"><label>${esc(additionalCommentsHeading(d,practical))}</label><textarea class="autosave" data-field="feedback" placeholder="${esc(additionalCommentsPlaceholder(d,practical))}">${esc(d.feedback||'')}</textarea></div><button type="button" class="btn secondary" id="generateFeedback">Generate from scores</button>`}
function signatureHTML(d,locked,requiredBy='Apprentice',allowSavedLearner=true){return `<div class="field"><label>${esc(requiredBy)} signature required</label>${d.signature?`<img class="sig-preview" src="${d.signature}" alt="${esc(requiredBy)} signature">`:locked?`<p class="muted">No ${esc(requiredBy.toLowerCase())} signature saved</p>`:`<canvas class="signature-pad" id="signaturePad"></canvas><div class="btn-row"><button type="button" class="btn secondary" id="clearSignature">Clear signature</button>${allowSavedLearner?'<button type="button" class="btn secondary" id="useProfileSignature">Use saved apprentice signature</button>':''}</div>`}<div class="date-line">Date: ${d.date||today()}</div></div>`}
function lockedTop(version,section){return `<div class="locked-banner"><span>🔒 Submitted version ${version}</span><button class="btn secondary retake" id="retake">Create new version</button></div>`}

function renderSection(){const a=assignment(state.assignment),s=state.section,sd=sectionData(a.n,s),d=sd.draft;const locked=d.submitted;let body='';
 if(s==='practical')body=practicalPage(a,d,locked,sd);
 if(s==='photos')body=photosPage(a,d,locked,sd);
 if(s==='statement')body=statementPage(a,d,locked,sd);
 if(s==='supporting')body=supportingPage(a,d,locked,sd);
 app.innerHTML=shell(`<button class="back no-print" id="back">← ${COURSE.nvqUnits?`Unit ${a.unit}`:`Assignment ${a.n}`}</button><div class="assignment-title"><div class="number">${COURSE.nvqUnits?`Unit ${a.unit}`:`Assignment ${a.n}`}</div><h2>${sectionTitle(s)}</h2><p class="muted">${esc(a.title)}</p></div>${body}`);
 document.getElementById('back').onclick=()=>{state.view='assignment';render()};bindSection(a,s,sd,d,locked);
}
function sectionTitle(s){return({practical:'🛠️ Practical assessment',photos:'📷 Photos',statement:'📝 Learner statement',supporting:'✉️ Supporting evidence'})[s]}
function versionHistory(sd,s){if(!sd.versions.length)return'';const a=assignment(state.assignment);return `<section class="card panel versions"><h3>Saved attempts</h3>${sd.versions.slice().reverse().map((v,i)=>{const result=(s==='practical'||(s==='supporting'&&v.tab!=='files'))?(()=>{const pct=s==='practical'?practicalPercentageScore(a,v):percentageScore(a,v);return `<div class="muted">${pct}% — ${gradeForPercentage(pct)}</div>`})():'';return `<div class="version-item"><div><strong>Attempt ${sd.versions.length-i}</strong><div class="muted">Submitted ${esc(v.date||'')}</div>${result}</div><button class="btn secondary" data-view-version="${sd.versions.length-1-i}">Open</button></div>`}).join('')}</section>`}
function practicalPage(a,d,locked,sd){if(COURSE.nvqUnits)return nvqObservationPage(a,d,locked,sd);d.photos=d.photos||[];const slots=[0,1,2].map(i=>{const p=d.photos[i];return `<button type="button" class="practical-photo-slot ${p?'filled':''}" data-practical-slot="${i}" aria-label="${p?'Open practical photo '+(i+1):'Add practical photo '+(i+1)}">${p?`<img src="${p.data}" alt="Practical evidence photo ${i+1}"><span>Photo ${i+1}</span>`:`<span class="camera-mark">📷</span><span>Photo ${i+1}</span>`}</button>`}).join('');return `<div class="locked-wrap ${locked?'read-only':''}">${locked?lockedTop(sd.versions.length,'practical'):''}<section class="card panel assessor-only-panel"><span class="submitted-ribbon assessor-ribbon page-ribbon">ASSESSOR ONLY</span><div class="panel-body"><div class="field"><label>Tutor / assessor name</label><input class="input autosave" data-field="tutor" value="${esc(d.tutor)}"></div><div class="field"><label>Activity assessed</label><textarea class="autosave" data-field="activity">${esc(d.activity)}</textarea></div><div class="field"><label>Practical task evidence — 3 landscape photos required</label><p class="help">Tap a space to add a clear overall photo, a key detail and a quality check of the finished product.</p><div class="practical-photo-row">${slots}</div></div><div class="field"><label>Skill criteria — 1 below standard, 5 excellent</label><p class="help">Fail 0–69% · Pass 70–79% · Merit 80–89% · Distinction 90–100%</p><div class="score-list">${scoreRows(a,d,locked)}</div><div class="score-total">Overall result: <span id="scoreTotal">${totalScore(a,d,true)}</span></div></div>${generatedFeedbackHTML(d,true)}${signatureHTML(d,locked,'Tutor / assessor',false)}</div>${locked?'':`<div class="btn-row"><button class="btn" id="submitSection" ${!canSubmit(a,'practical',d)?'disabled':''}>Submit and lock assessment</button></div>`}</section></div>${versionHistory(sd,'practical')}`}

function nvqObservationPage(a,d,locked,sd){return `<div class="locked-wrap ${locked?'read-only':''}">${locked?lockedTop(sd.versions.length,'practical'):''}<section class="card panel assessor-only-panel"><span class="submitted-ribbon assessor-ribbon page-ribbon">ASSESSOR ONLY</span><div class="panel-body"><div class="field"><label>Assessor name</label><input class="input autosave" data-field="tutor" value="${esc(d.tutor)}"></div><div class="field"><label>Activity observed</label><textarea class="autosave" data-field="activity">${esc(d.activity)}</textarea></div><div class="field"><label>Learning outcomes observed</label><p class="help">Tick only the learning outcomes demonstrated during this observation. They do not all need to be selected.</p><div class="outcome-ticks">${nvqTickRows(a,d,locked)}</div></div><div class="field"><label>Editable observation</label><textarea class="autosave" data-field="feedback" id="nvqNarrative" placeholder="Tick at least one learning outcome to create an observation...">${esc(d.feedback||'')}</textarea><p class="help">Generated from the selected outcomes and written from the assessor's point of view. Edit it before submitting.</p>${locked?'':`<button type="button" class="btn secondary" id="generateNvqNarrative">Generate observation</button>`}</div>${signatureHTML(d,locked,'Assessor',false)}</div>${locked?'':`<div class="btn-row"><button class="btn" id="submitSection" ${!canSubmit(a,'practical',d)?'disabled':''}>Submit and lock observation</button></div>`}</section></div>${versionHistory(sd,'practical')}`}
function photosPage(a,d,locked,sd){d.photos=d.photos||[];const prompts=COURSE.nvqUnits?`<h3>Photo prompts</h3><p class="help">Use the learning outcomes below to guide the photographic evidence.</p>${outcomeCards(a,'photos')}`:'';return `<div class="locked-wrap ${locked?'read-only':''}">${locked?lockedTop(sd.versions.length,'photos'):''}<section class="card panel"><div class="panel-body">${prompts}<div class="upload-box"><h3>${d.photos.length} of 6 photos added</h3><p class="muted">Exactly 6 landscape photos are required. New images are automatically centre-cropped to 16:9.</p>${locked||d.photos.length>=6?'':`<div class="btn-row" style="justify-content:center"><label class="btn">📷 Camera<input class="hide" id="cameraInput" type="file" accept="image/*" capture="environment"></label><label class="btn secondary">🖼 Gallery<input class="hide" id="galleryInput" type="file" accept="image/*" multiple></label></div>`}</div><div class="gallery landscape-gallery">${d.photos.map((p,i)=>`<div class="thumb"><img src="${p.data}" alt="Evidence photo ${i+1}">${locked?'':`<button class="remove" data-remove-photo="${i}">×</button>`}</div>`).join('')}</div>${signatureHTML(d,locked,'Apprentice',true)}</div>${locked?'':`<div class="btn-row"><button class="btn" id="submitSection" ${!canSubmit(a,'photos',d)?'disabled':''}>Submit and lock photos</button></div>`}</section></div>${versionHistory(sd,'photos')}`}

function statementPage(a,d,locked,sd){const covered=coverage(a,d.text);return `<div class="locked-wrap ${locked?'read-only':''}">${locked?lockedTop(sd.versions.length,'statement'):''}<section class="card panel"><div class="panel-body"><h3>${COURSE.nvqUnits?'Learning outcome prompts':'KSB subjects to cover'}</h3>${COURSE.nvqUnits?outcomeCards(a,'statement'):`<div class="prompt-list" id="prompts">${a.ksbs.map(([c,s])=>`<span class="ksb-chip ${covered[c]?'covered':''}" data-prompt="${c}">${esc(learnerPromptTitle(a.n,c,s))}</span>`).join('')}</div>`}<div class="field"><label>Your statement — minimum 100 words</label><textarea class="autosave" id="statementText" data-field="text" placeholder="Explain what you did, how you did it and what you learned...">${esc(d.text)}</textarea><div class="help"><span id="wordCount">${wordCount(d.text)}</span> / 100 words minimum. Use your phone keyboard microphone to dictate.</div></div>${signatureHTML(d,locked,'Apprentice',true)}</div>${locked?'':`<div class="btn-row"><button class="btn" id="submitSection" ${!statementReady(a,d)?'disabled':''}>Submit and lock statement</button></div>`}</section></div>${versionHistory(sd,'statement')}`}
function supportingPage(a,d,locked,sd){const statementTab=d.tab!=='files';return `<div class="locked-wrap ${locked?'read-only':''}">${locked?lockedTop(sd.versions.length,'supporting'):''}<section class="card panel"><div class="panel-body"><div class="tabs"><button class="tab ${statementTab?'active':''}" data-tab="statement">Witness / employer</button><button class="tab ${!statementTab?'active':''}" data-tab="files">Certificates / RAMS / other</button></div>${statementTab?supportStatement(a,d,locked):supportFiles(d,locked)}${statementTab?signatureHTML(d,locked,'Witness / employer',false):''}</div>${locked?'':`<div class="btn-row"><button class="btn" id="submitSection" ${!supportReady(a,d)?'disabled':''}>Submit and lock supporting evidence</button></div>`}</section></div>${versionHistory(sd,'supporting')}`}
function supportStatement(a,d,locked){return `<div class="field"><label>Statement type</label><select class="autosave" data-field="type"><option ${d.type==='Witness testimony'?'selected':''}>Witness testimony</option><option ${d.type==='Employer statement'?'selected':''}>Employer statement</option></select></div><div class="field"><label>Witness / employer name</label><input class="input autosave" data-field="personName" value="${esc(d.personName)}"></div><div class="field"><label>Job role</label><input class="input autosave" data-field="role" value="${esc(d.role)}"></div><div class="field"><label>Organisation</label><input class="input autosave" data-field="organisation" value="${esc(d.organisation)}"></div><div class="field"><label>Activity observed</label><textarea class="autosave" data-field="activity">${esc(d.activity)}</textarea></div><div class="field"><label>${COURSE.nvqUnits?'Learning outcomes witnessed':'KSB scores'}</label>${COURSE.nvqUnits?`<p class="help">Tick only the learning outcomes personally witnessed. They do not all need to be selected.</p><div class="outcome-ticks">${nvqTickRows(a,d,locked)}</div>`:`<p class="help">Fail 0–69% · Pass 70–79% · Merit 80–89% · Distinction 90–100%</p><div class="score-list">${ksbsScoreRows(a,d,locked)}</div><div class="score-total">Overall result: <span id="scoreTotal">${totalScore(a,d)}</span></div>`}</div>${COURSE.nvqUnits?`<div class="field"><label>Editable witness testimony</label><textarea class="autosave" data-field="feedback" id="nvqNarrative" placeholder="Tick at least one learning outcome to create a testimony...">${esc(d.feedback||'')}</textarea><p class="help">Generated from the selected outcomes and written from the witness's point of view. Edit it before submitting.</p>${locked?'':`<button type="button" class="btn secondary" id="generateNvqNarrative">Generate testimony</button>`}</div>`:generatedFeedbackHTML(d,false)}`}
function supportFiles(d,locked){return `<div class="upload-box"><h3>Additional evidence</h3><p class="muted"><strong>Photos:</strong> Certificates, RAMS, drawings, delivery notes and other documents.<br><strong>Videos:</strong> Discussions, demonstrations, behaviours, toolbox talks and manufacturer training.</p>${locked?'':`<div class="btn-row" style="justify-content:center"><label class="btn">📷 Camera<input class="hide" id="supportCameraInput" type="file" accept="image/*" capture="environment"></label><label class="btn secondary">🎥 Camcorder<input class="hide" id="supportVideoInput" type="file" accept="video/*" capture="environment"></label><label class="btn secondary">🖼 Gallery<input class="hide" id="supportGalleryInput" type="file" accept="image/*,video/*" multiple></label></div>`}</div><div class="file-list">${d.files.map((f,i)=>supportFileCard(f,i,locked)).join('')}</div>`}
function supportFileCard(f,i,locked){const isImage=(f.type||'').startsWith('image/'),isVideo=(f.type||'').startsWith('video/'),displayName=(f.evidenceName||'').trim();let preview='';if(isImage&&f.data)preview=`<img src="${f.data}" alt="${esc(displayName||f.name)}" style="width:100%;max-height:220px;object-fit:contain;border-radius:12px;margin-bottom:10px">`;if(isVideo&&f.data)preview=`<video controls preload="metadata" poster="${f.thumbnail||''}" style="width:100%;max-height:240px;border-radius:12px;margin-bottom:10px"><source src="${f.data}" type="${esc(f.type)}"></video>`;return `<div class="file-card" style="display:block">${preview}${locked?`<div><strong>${esc(displayName||f.name)}</strong><div class="muted">Original file: ${esc(f.name)}</div></div>`:`<div class="field" style="margin-bottom:10px"><label>Evidence name (required)</label><input class="input support-file-name" data-file-index="${i}" value="${esc(f.evidenceName||'')}" placeholder="For example: Site induction certificate"></div><div class="muted" style="margin-bottom:10px">Original file: ${esc(f.name)}</div>`}<div style="display:flex;align-items:center;justify-content:space-between;gap:10px"><span>${isImage?'🖼️ Image':isVideo?'🎥 Video':'📄 File'}</span>${locked&&isVideo?`<button class="btn secondary" data-download-file="${i}">Open / save video</button>`:''}${locked?'':`<button class="btn danger" data-remove-file="${i}">Remove</button>`}</div></div>`}

function bindSection(a,s,sd,d,locked){
 document.querySelectorAll('.autosave').forEach(el=>el.oninput=async()=>{d[el.dataset.field]=el.value;await commit(a.n,s,sd);if(s==='statement')updateStatement(a,d);updateSectionSubmit(a,s,d)});
 document.querySelectorAll('[data-score-code]').forEach(b=>b.onclick=async()=>{d.scores[b.dataset.scoreCode]=+b.dataset.score;await commit(a.n,s,sd);renderSection()});
 document.querySelectorAll('[data-nvq-toggle]').forEach(b=>b.onclick=async()=>{const code=b.dataset.nvqToggle;d.scores=d.scores||{};d.scores[code]=+d.scores[code]===5?0:5;d.feedback=generateNvqNarrative(a,d,s==='practical'?'assessor':'witness');await commit(a.n,s,sd);renderSection()});
 const ng=document.getElementById('generateNvqNarrative');if(ng)ng.onclick=async()=>{d.feedback=generateNvqNarrative(a,d,s==='practical'?'assessor':'witness');if(!d.feedback)return toast('Select at least one learning outcome');await commit(a.n,s,sd);renderSection()};
 const gf=document.getElementById('generateFeedback');if(gf)gf.onclick=async()=>{const generated=generateFeedbackSections(a,d,s==='practical');d.feedbackSummary=generated.summary;d.feedbackDevelopment=generated.areas;await commit(a.n,s,sd);renderSection()};
 document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=async()=>{d.tab=b.dataset.tab;await commit(a.n,s,sd);renderSection()});
 if(!locked)setupSignature(a.n,s,sd,d);
 const cam=document.getElementById('cameraInput'),gal=document.getElementById('galleryInput');if(cam)cam.onchange=e=>addPhotos(e.target.files,a.n,s,sd,d);if(gal)gal.onchange=e=>addPhotos(e.target.files,a.n,s,sd,d);
 document.querySelectorAll('[data-practical-slot]').forEach(b=>b.onclick=()=>showPracticalPhotoModal(a.n,s,sd,d,+b.dataset.practicalSlot,locked));
 document.querySelectorAll('[data-remove-photo]').forEach(b=>b.onclick=async()=>{d.photos.splice(+b.dataset.removePhoto,1);await commit(a.n,s,sd);renderSection()});
 const supportCam=document.getElementById('supportCameraInput'),supportVid=document.getElementById('supportVideoInput'),supportGal=document.getElementById('supportGalleryInput');
 if(supportCam)supportCam.onchange=e=>addSupportingFiles(e.target.files,a.n,s,sd,d,'image');
 if(supportVid)supportVid.onchange=e=>addSupportingFiles(e.target.files,a.n,s,sd,d,'video');
 if(supportGal)supportGal.onchange=e=>addSupportingFiles(e.target.files,a.n,s,sd,d,'media');
 document.querySelectorAll('.support-file-name').forEach(el=>el.oninput=async()=>{const f=d.files[+el.dataset.fileIndex];if(!f)return;f.evidenceName=el.value;await commit(a.n,s,sd);updateSectionSubmit(a,s,d)});
 document.querySelectorAll('[data-download-file]').forEach(b=>b.onclick=()=>downloadStoredFile(d.files[+b.dataset.downloadFile]));
 document.querySelectorAll('[data-remove-file]').forEach(b=>b.onclick=async()=>{d.files.splice(+b.dataset.removeFile,1);await commit(a.n,s,sd);renderSection()});
 const sub=document.getElementById('submitSection');if(sub)sub.onclick=()=>submitSection(a,s,sd,d);
 const retake=document.getElementById('retake');if(retake)retake.onclick=async()=>{sd.draft=blankSection(s);await commit(a.n,s,sd);renderSection();toast('New blank version created')};
 document.querySelectorAll('[data-view-version]').forEach(b=>b.onclick=async()=>{sd.draft=structuredClone(sd.versions[+b.dataset.viewVersion]);await commit(a.n,s,sd);renderSection()});
}
async function commit(n,s,sd){state.data[key(n,s)]=sd;await saveData()}
function setupSignature(n,s,sd,d){const c=document.getElementById('signaturePad');if(!c)return;const ctx=c.getContext('2d');let draw=false;function resize(){const ratio=devicePixelRatio||1,cw=c.clientWidth,ch=c.clientHeight;c.width=cw*ratio;c.height=ch*ratio;ctx.scale(ratio,ratio);ctx.lineWidth=2.3;ctx.lineCap='round';ctx.strokeStyle='#102326'}resize();
 const pos=e=>{const r=c.getBoundingClientRect(),p=e.touches?e.touches[0]:e;return{x:p.clientX-r.left,y:p.clientY-r.top}};const start=e=>{draw=true;const p=pos(e);ctx.beginPath();ctx.moveTo(p.x,p.y);e.preventDefault()};const move=e=>{if(!draw)return;const p=pos(e);ctx.lineTo(p.x,p.y);ctx.stroke();e.preventDefault()};const end=async()=>{if(!draw)return;draw=false;d.signature=c.toDataURL('image/png');await commit(n,s,sd);const a=assignment(n);updateSectionSubmit(a,s,d)};c.addEventListener('pointerdown',start);c.addEventListener('pointermove',move);window.addEventListener('pointerup',end);
 const clr=document.getElementById('clearSignature');if(clr)clr.onclick=async()=>{ctx.clearRect(0,0,c.width,c.height);d.signature='';await commit(n,s,sd);const a=assignment(n);updateSectionSubmit(a,s,d)};const use=document.getElementById('useProfileSignature');if(use)use.onclick=async()=>{if(!state.profile.signature)return toast('No saved learner signature');d.signature=state.profile.signature;await commit(n,s,sd);renderSection()};}
async function addPhotos(files,n,s,sd,d){d.photos=d.photos||[];const remaining=Math.max(0,6-d.photos.length);let added=0;for(const f of [...files].slice(0,remaining)){if(!f.type.startsWith('image/'))continue;const data=await compressLandscapeImage(f);d.photos.push({name:f.name,data});added++}await commit(n,s,sd);renderSection();toast(added?`${added} landscape photo${added===1?'':'s'} autosaved`:'Six photos are already added')}
function compressLandscapeImage(file){return new Promise((res,rej)=>{const r=new FileReader;r.onload=()=>{const img=new Image();img.onload=()=>{const ratio=16/9,srcRatio=img.width/img.height;let sx=0,sy=0,sw=img.width,sh=img.height;if(srcRatio>ratio){sw=img.height*ratio;sx=(img.width-sw)/2}else{sh=img.width/ratio;sy=(img.height-sh)/2}const width=Math.min(1400,Math.round(sw)),height=Math.round(width/ratio),c=document.createElement('canvas');c.width=width;c.height=height;c.getContext('2d').drawImage(img,sx,sy,sw,sh,0,0,width,height);res(c.toDataURL('image/jpeg',.8))};img.onerror=rej;img.src=r.result};r.onerror=rej;r.readAsDataURL(file)})}
function showPracticalPhotoModal(n,s,sd,d,index,locked){const existing=d.photos?.[index];app.insertAdjacentHTML('beforeend',`<div class="modal" id="practicalPhotoModal"><div class="modal-card"><h2>${existing?'Practical Evidence Photo':'Add Practical Evidence'}</h2>${existing?`<img class="photo-preview" src="${existing.data}" alt="Practical evidence photo ${index+1}">`:'<p class="muted">Add 3 landscape photos of the finished product and important details: an overall view, a key detail and a quality check.</p>'}<div class="btn-row">${locked?'<button class="btn" id="closePracticalPhoto">Close</button>':`<label class="btn">📷 Camera<input class="hide" id="practicalCameraInput" type="file" accept="image/*" capture="environment"></label><label class="btn secondary">🖼 Gallery<input class="hide" id="practicalGalleryInput" type="file" accept="image/*"></label>${existing?'<button class="btn danger" id="removePracticalPhoto">Remove</button>':''}<button class="btn secondary" id="closePracticalPhoto">Cancel</button>`}</div></div></div>`);const modal=document.getElementById('practicalPhotoModal');document.getElementById('closePracticalPhoto').onclick=()=>modal.remove();if(locked)return;const add=async files=>{const f=[...files][0];if(!f||!f.type.startsWith('image/'))return;const data=await compressLandscapeImage(f);d.photos=d.photos||[];d.photos[index]={name:f.name,data};await commit(n,s,sd);modal.remove();renderSection();toast('Practical photo autosaved')};document.getElementById('practicalCameraInput').onchange=e=>add(e.target.files);document.getElementById('practicalGalleryInput').onchange=e=>add(e.target.files);const remove=document.getElementById('removePracticalPhoto');if(remove)remove.onclick=async()=>{d.photos.splice(index,1);await commit(n,s,sd);modal.remove();renderSection();toast('Practical photo removed')}}
async function addSupportingFiles(files,n,s,sd,d,mode='media'){let added=0;for(const f of [...files]){const isImage=f.type.startsWith('image/'),isVideo=f.type.startsWith('video/');if(mode==='image'&&!isImage)continue;if(mode==='video'&&!isVideo)continue;if(!isImage&&!isVideo)continue;try{const data=isImage?await compressLandscapeImage(f):await fileToData(f),thumbnail=isVideo?await createVideoThumbnail(data):'';d.files.push({name:f.name||`${isVideo?'video':'image'}-${Date.now()}`,evidenceName:'',type:f.type||`${isVideo?'video':'image'}/*`,size:f.size,data,thumbnail});added++}catch(e){console.error('Supporting media could not be added',e)}}await commit(n,s,sd);renderSection();toast(added?`${added} supporting file${added===1?'':'s'} autosaved`:'No supported files selected')}
function fileToData(f){return new Promise((res,rej)=>{const r=new FileReader;r.onload=()=>res(r.result);r.onerror=rej;r.readAsDataURL(f)})}
function createVideoThumbnail(src){return new Promise(resolve=>{const v=document.createElement('video');v.muted=true;v.playsInline=true;v.preload='metadata';const done=()=>{try{const c=document.createElement('canvas'),max=720,scale=Math.min(1,max/Math.max(v.videoWidth||1,v.videoHeight||1));c.width=Math.max(1,Math.round((v.videoWidth||640)*scale));c.height=Math.max(1,Math.round((v.videoHeight||360)*scale));c.getContext('2d').drawImage(v,0,0,c.width,c.height);resolve(c.toDataURL('image/jpeg',.72))}catch{resolve('')}finally{v.removeAttribute('src');v.load()}};v.onloadeddata=()=>{try{v.currentTime=Math.min(.25,Math.max(0,(v.duration||1)/10))}catch{done()}};v.onseeked=done;v.onerror=()=>resolve('');v.src=src})}
function downloadStoredFile(f){if(!f?.data)return toast('Video file unavailable');const a=document.createElement('a');a.href=f.data;a.download=evidenceDownloadName(f);document.body.appendChild(a);a.click();a.remove()}
function evidenceDownloadName(f){const original=String(f?.name||''),dot=original.lastIndexOf('.'),ext=dot>0?original.slice(dot):'',title=String(f?.evidenceName||'Supporting evidence').trim().replace(/[\\/:*?"<>|]/g,'-').replace(/^\.+/,'').replace(/\s+/g,' ').slice(0,120)||'Supporting evidence';return title+ext}
function wordCount(t){return t.trim()?t.trim().split(/\s+/).length:0}
function coverage(a,text){const words=text.toLowerCase();const common=new Set(['and','the','using','use','work','working','to','of','a','an','in','with','from']);const out={};a.ksbs.forEach(([c,s])=>{const keys=s.toLowerCase().split(/[^a-z0-9]+/).filter(w=>w.length>3&&!common.has(w));out[c]=keys.some(w=>words.includes(w))});return out}
function statementReady(a,d){const cov=coverage(a,d.text);return wordCount(d.text)>=100&&(COURSE.nvqUnits||Object.values(cov).every(Boolean))&&!!d.signature}
function updateStatement(a,d){const cov=coverage(a,d.text);document.querySelectorAll('[data-prompt]').forEach(x=>x.classList.toggle('covered',!!cov[x.dataset.prompt]));const wc=document.getElementById('wordCount');if(wc)wc.textContent=wordCount(d.text);const b=document.getElementById('submitSection');if(b)b.disabled=!statementReady(a,d)}
function supportReady(a,d){if(d.tab==='files')return d.files.length>0&&d.files.every(f=>(f.evidenceName||'').trim());if(COURSE.nvqUnits)return !!(d.personName&&d.activity&&d.feedback?.trim()&&d.signature&&selectedNvqOutcomes(a,d).length);return !!(d.personName&&d.activity&&d.signature&&a.ksbs.every(([c])=>+d.scores[c]>=1))}
function updateSubmit(a,d){const b=document.getElementById('submitSection');if(b)b.disabled=!supportReady(a,d)}
function updateSectionSubmit(a,s,d){const b=document.getElementById('submitSection');if(b)b.disabled=!canSubmit(a,s,d)}
function canSubmit(a,s,d){if(COURSE.nvqUnits&&s==='practical')return !!(d.tutor&&d.activity&&d.feedback?.trim()&&d.signature&&selectedNvqOutcomes(a,d).length);if(s==='practical')return !!(d.tutor&&d.activity&&d.signature&&(d.photos||[]).length===3&&practicalScoreKeys(a).every(k=>+d.scores[k]>=1));if(s==='photos')return (d.photos||[]).length===6&&!!d.signature;if(s==='statement')return statementReady(a,d);return supportReady(a,d)}
async function submitSection(a,s,sd,d){if(!canSubmit(a,s,d))return toast('Complete all required fields first');d.submitted=true;d.date=today();const frozen=structuredClone(d);sd.versions.push(frozen);sd.draft=frozen;await commit(a.n,s,sd);const pack=state.data[packStatusKey(a.n)];if(pack?.uploaded){state.data[packStatusKey(a.n)]={...pack,downloaded:false,uploaded:false,changedAt:new Date().toISOString()};await saveData()}renderSection();const assessed=!COURSE.nvqUnits&&(s==='practical'||(s==='supporting'&&d.tab!=='files'));toast(assessed?`Attempt submitted: ${totalScore(a,d,s==='practical')}`:'Submitted and locked')}

function showOnboarding(editMode=false){
 const selectedCourse=COURSES[ACTIVE_COURSE_ID]||COURSES['site-carpentry-v1-4'];
 const title=editMode?'Learner profile':'Welcome to Apprentice+';
 app.insertAdjacentHTML('beforeend',`<div class="modal" id="onboard"><div class="modal-card"><h2>${title}</h2><p class="muted">Enter the learner details used across evidence packs and progress reviews.</p><div class="field"><label>Course</label><select class="input" id="obCourse">${Object.values(COURSES).map(c=>`<option value="${c.id}" ${c.id===selectedCourse.id?'selected':''}>${c.name} ${c.version} (${c.standard})</option>`).join('')}</select></div><div class="field"><label>Full name</label><input class="input" id="obName" value="${esc(state.profile?.fullName||'')}"></div><div class="field"><label>Employer</label><input class="input" id="obEmployer" value="${esc(state.profile?.employer||'')}"></div><div class="field"><label>Mentor / assessor</label><input class="input" id="obMentor" value="${esc(state.profile?.mentor||'')}"></div><div class="field"><label>Portfolio website address</label><input class="input" id="obPortfolioUrl" type="url" inputmode="url" placeholder="https://..." value="${esc(state.profile?.portfolioUrl||'')}"><p class="help">Used by the Open Portfolio button. Nothing is uploaded automatically.</p></div><div class="date-grid"><div class="field"><label>Course start date</label><input class="input" id="obStartDate" type="date" value="${esc(state.profile?.courseStartDate||'')}"></div><div class="field"><label>Planned end date</label><input class="input" id="obEndDate" type="date" value="${esc(state.profile?.plannedEndDate||'')}"></div></div><div class="field"><label>Learner signature</label><canvas class="signature-pad" id="obSig"></canvas><button class="btn secondary" id="obClear" type="button">Clear</button></div><div class="disclaimer"><strong>Local storage notice</strong><br>All evidence is saved locally on this device and browser. Nothing is saved online or uploaded automatically. Clearing browser data or changing devices may remove evidence. Download completed packs and upload them to your official portfolio.</div><label class="checkbox"><input type="checkbox" id="obAccept" ${editMode?'checked':''}> <span>I understand and accept the local storage notice.</span></label><div class="btn-row"><button class="btn" id="obSave">${editMode?'Save changes':'Save and continue'}</button>${editMode?'<button class="btn secondary" id="obCancel">Cancel</button>':''}</div></div></div>`);
 setupOnboardSig(editMode);
 if(editMode)document.getElementById('obCancel').onclick=()=>document.getElementById('onboard').remove();
}
function setupOnboardSig(editMode=false){
 const c=document.getElementById('obSig'),ctx=c.getContext('2d');let drawing=false,sig=state.profile?.signature||'';const ratio=devicePixelRatio||1;c.width=c.clientWidth*ratio;c.height=c.clientHeight*ratio;ctx.scale(ratio,ratio);ctx.lineWidth=2.3;ctx.lineCap='round';
 if(sig){const img=new Image();img.onload=()=>ctx.drawImage(img,0,0,c.clientWidth,c.clientHeight);img.src=sig}
 const p=e=>{const r=c.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top}};c.onpointerdown=e=>{drawing=true;const q=p(e);ctx.beginPath();ctx.moveTo(q.x,q.y)};c.onpointermove=e=>{if(!drawing)return;const q=p(e);ctx.lineTo(q.x,q.y);ctx.stroke()};window.addEventListener('pointerup',()=>{if(drawing){drawing=false;sig=c.toDataURL()}});document.getElementById('obClear').onclick=()=>{ctx.clearRect(0,0,c.width,c.height);sig=''};document.getElementById('obSave').onclick=async()=>{const courseId=document.getElementById('obCourse').value,fullName=document.getElementById('obName').value.trim(),employer=document.getElementById('obEmployer').value.trim(),mentor=document.getElementById('obMentor').value.trim(),portfolioUrl=document.getElementById('obPortfolioUrl').value.trim(),courseStartDate=document.getElementById('obStartDate').value,plannedEndDate=document.getElementById('obEndDate').value,ok=document.getElementById('obAccept').checked;if(!COURSES[courseId]||!fullName||!employer||!mentor||!portfolioUrl||!/^https?:\/\//i.test(portfolioUrl)||!courseStartDate||!plannedEndDate||!sig||!ok)return toast('Complete all details, course dates, signature and acceptance');if(new Date(`${plannedEndDate}T00:00:00`)<=new Date(`${courseStartDate}T00:00:00`))return toast('Planned end date must be after the start date');ACTIVE_COURSE_ID=courseId;COURSE=COURSES[courseId];state.assignment=null;state.section=null;state.view='home';state.profile={...state.profile,fullName,employer,mentor,portfolioUrl,courseStartDate,plannedEndDate,signature:sig};await putStore('activeCourse',courseId);await saveProfile();document.getElementById('onboard').remove();render();toast(editMode?'Learner profile updated':'Profile and course saved locally')}
}
function showDeveloper(){app.insertAdjacentHTML('beforeend',`<div class="modal" id="devModal"><div class="modal-card"><h2>Developer Mode</h2>${state.dev?developerPanel():`<p class="muted">Enter the developer code.</p><div class="field"><input class="input" id="devCode" inputmode="numeric" type="password"></div><button class="btn" id="unlockDev">Unlock</button>`}<button class="btn secondary" id="closeDev" style="margin-top:10px">Close</button></div></div>`);document.getElementById('closeDev').onclick=()=>document.getElementById('devModal').remove();if(!state.dev)document.getElementById('unlockDev').onclick=async()=>{if(document.getElementById('devCode').value!=='1984')return toast('Incorrect code');state.dev=true;await putStore('dev',true);document.getElementById('devModal').remove();showDeveloper()};else bindDeveloper()}
function developerPanel(){const rplItems=courseAssignments().filter(a=>assignmentRPL(a.n));return `<div class="disclaimer"><strong>Active course</strong><br>${COURSE.name} · ${COURSE.standard} · Version ${COURSE.version} · Level ${COURSE.level}</div><div class="field"><label>Change course</label><select class="input" id="courseSelect">${Object.values(COURSES).map(c=>`<option value="${c.id}" ${c.id===COURSE.id?'selected':''}>${c.name} ${c.version} (${c.standard})</option>`).join('')}</select></div><div class="divider"></div><h3>Recognition of Prior Learning (RPL)</h3><p class="help">Instantly complete an assignment. It will show a red RPL ribbon and count as a full completion in both progress rings.</p><div class="field"><label>Select assignment</label><select class="input" id="rplAssignment">${courseAssignments().map(a=>`<option value="${a.n}" ${assignmentRPL(a.n)?'disabled':''}>Assignment ${a.n} — ${esc(a.title)}${assignmentRPL(a.n)?' (RPL)':''}</option>`).join('')}</select></div><button class="btn danger" id="markRpl">Mark assignment as RPL</button>${rplItems.length?`<div class="rpl-list">${rplItems.map(a=>`<div class="rpl-item"><span><strong>Assignment ${a.n}</strong><br>${esc(a.title)}</span><button class="btn secondary remove-rpl" data-rpl-remove="${a.n}">Remove RPL</button></div>`).join('')}</div>`:''}${selectedOptionalUnit()?`<div class="divider"></div><h3>Optional unit</h3><p class="help">Evidence Pack 9 is currently Unit ${esc(selectedOptionalUnit().unit)} — ${esc(selectedOptionalUnit().title)}.</p><button class="btn secondary" id="resetOptionalUnit">Reset optional unit selection</button>`:''}<div class="divider"></div><div class="btn-row"><button class="btn" id="applyCourse">Open selected course</button><button class="btn secondary" id="editProfile">Edit learner details</button><button class="btn secondary" id="exportBackup">Export complete backup</button><label class="btn secondary">Restore backup<input type="file" accept="application/json" class="hide" id="restoreBackup"></label><button class="btn danger" id="resetEvidence">Reset current course evidence</button><button class="btn secondary" id="lockDev">Lock Developer Mode</button></div>`}
function bindDeveloper(){

 document.getElementById('markRpl').onclick=async()=>{const n=Number(document.getElementById('rplAssignment').value);const a=assignment(n);if(!a)return;if(!confirm(`Mark Assignment ${n} — ${a.title} as completed through RPL?`))return;state.data[packStatusKey(n)]={...(state.data[packStatusKey(n)]||{}),rpl:true,rplAt:new Date().toISOString(),uploaded:false,downloaded:false};await saveData();document.getElementById('devModal').remove();render();toast(`Assignment ${n} completed through RPL`)};
 document.querySelectorAll('[data-rpl-remove]').forEach(btn=>btn.onclick=async()=>{const n=Number(btn.dataset.rplRemove),a=assignment(n);if(!confirm(`Remove RPL completion from Assignment ${n} — ${a?.title||''}?`))return;const status={...(state.data[packStatusKey(n)]||{})};delete status.rpl;delete status.rplAt;state.data[packStatusKey(n)]=status;await saveData();document.getElementById('devModal').remove();render();toast(`RPL removed from Assignment ${n}`)});
 const resetOptional=document.getElementById('resetOptionalUnit');if(resetOptional)resetOptional.onclick=async()=>{const hasEvidence=['practical','photos','statement','supporting'].some(section=>sectionHasEvidence(9,section));if(hasEvidence)return toast('Remove Evidence Pack 9 evidence before changing the optional unit');if(!window.confirm('Reset the optional unit selection?'))return;delete state.data[optionalSelectionKey()];await saveData();document.getElementById('devModal').remove();state.view='home';render();toast('Optional unit selection reset')};
 document.getElementById('applyCourse').onclick=async()=>{const id=document.getElementById('courseSelect').value;if(!COURSES[id])return;ACTIVE_COURSE_ID=id;COURSE=COURSES[id];state.assignment=null;state.section=null;state.view='home';await putStore('activeCourse',id);document.getElementById('devModal').remove();render();toast(`${COURSE.name} opened`)};
 document.getElementById('editProfile').onclick=()=>{document.getElementById('devModal').remove();showOnboarding(true)};
 document.getElementById('exportBackup').onclick=()=>downloadJSON({app:'Apprentice+',schemaVersion:2,activeCourse:COURSE.id,courses:Object.keys(COURSES),profile:state.profile,data:state.data,exported:new Date().toISOString()},'apprentice-plus-complete-backup.json');
 document.getElementById('restoreBackup').onchange=async e=>{try{const obj=JSON.parse(await e.target.files[0].text());if(!obj.profile||!obj.data)throw Error();state.profile=obj.profile;state.data={...state.data,...obj.data};if(obj.activeCourse&&COURSES[obj.activeCourse]){ACTIVE_COURSE_ID=obj.activeCourse;COURSE=COURSES[ACTIVE_COURSE_ID];await putStore('activeCourse',ACTIVE_COURSE_ID)}await saveProfile();await saveData();document.getElementById('devModal').remove();render();toast('Backup restored without deleting existing records')}catch{toast('Invalid backup file')}};
 document.getElementById('resetEvidence').onclick=async()=>{if(!confirm(`Delete locally saved evidence for ${COURSE.name} only? Other courses will be preserved. This cannot be undone.`))return;const prefix=`${COURSE.id}:`;Object.keys(state.data).filter(k=>k.startsWith(prefix)).forEach(k=>delete state.data[k]);await saveData();document.getElementById('devModal').remove();render();toast(`${COURSE.name} evidence reset`)};
 document.getElementById('lockDev').onclick=async()=>{state.dev=false;await putStore('dev',false);document.getElementById('devModal').remove();toast('Developer Mode locked')}
}
function downloadJSON(obj,name){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(obj,null,2)],{type:'application/json'}));a.download=name;a.click();URL.revokeObjectURL(a.href)}

async function downloadPack(n){
 const a=assignment(n);if(!window.generateEvidencePackPDF)return toast('PDF generator unavailable');
 const sections={};['practical','photos','statement','supporting'].forEach(s=>sections[s]=sectionData(n,s).versions.map(v=>structuredClone(v)));
 try{toast('Creating PDF...');await generateEvidencePackPDF({course:COURSE,assignment:a,profile:state.profile,sections});state.data[packStatusKey(n)]={downloaded:true,uploaded:false,downloadedAt:new Date().toISOString()};await saveData();render();toast('PDF downloaded — upload it to your portfolio')}
 catch(e){console.error(e);toast('Unable to create PDF')}
}

function normalisePortfolioUrl(url){const value=String(url||'').trim();return /^https?:\/\//i.test(value)?value:''}
function openPortfolioSite(){const url=normalisePortfolioUrl(state.profile?.portfolioUrl);if(!url)return toast('Add a valid portfolio website address in Learner Details');window.open(url,'_blank','noopener,noreferrer')}
async function confirmPackUpload(n){const status=state.data[packStatusKey(n)]||{};if(!status.downloaded)return toast('Download the latest PDF first');if(!confirm('Confirm that you uploaded the latest evidence pack to your portfolio.'))return;state.data[packStatusKey(n)]={...status,uploaded:true,uploadedAt:new Date().toISOString()};await saveData();render();toast('Assignment marked as submitted')}

async function createUpdateSafetyBackup(){
 const key=`updateSafetyBackup:${APP_VERSION}`;
 const existing=await getStore(key);
 if(existing)return;
 await putStore(key,{app:'Apprentice+',appVersion:APP_VERSION,created:new Date().toISOString(),activeCourse:ACTIVE_COURSE_ID,profile:structuredClone(state.profile),data:structuredClone(state.data)});
}
async function registerAutoUpdater(){
 if(!('serviceWorker'in navigator))return;
 let reloading=false;
 navigator.serviceWorker.addEventListener('controllerchange',()=>{
  if(reloading)return;
  reloading=true;
  window.location.reload();
 });
 const registration=await navigator.serviceWorker.register('./service-worker.js',{updateViaCache:'none'});
 await registration.update().catch(()=>{});
 document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')registration.update().catch(()=>{})});
 window.setInterval(()=>registration.update().catch(()=>{}),60*60*1000);
}
app.addEventListener('click',e=>{const nav=e.target.closest('[data-nav]');if(!nav)return;const target=nav.dataset.nav;if(target==='academy'){state.view='academy';state.assignment=null;state.section=null}else{state.view='home';state.assignment=null;state.section=null}render();window.scrollTo({top:0,behavior:'smooth'})});

(async()=>{db=await openDB();await load();await createUpdateSafetyBackup();await registerAutoUpdater()})().catch(e=>{console.error(e);app.innerHTML=shell(`<section class="card panel"><h2>Unable to open local storage</h2><p class="muted">Check that private browsing is off and reload the app.</p></section>`)})


// v1.3.9 Targeted Revision Engine
const TR_STORAGE_KEY='apprenticeplus.targetedRevision';
function getTargetedRevisions(){try{return JSON.parse(localStorage.getItem(TR_STORAGE_KEY)||'[]')}catch(e){return[]}}
function saveTargetedRevisions(items){localStorage.setItem(TR_STORAGE_KEY,JSON.stringify(items))}
function updateTargetedRevision({title,assignment,source,score}){
 if(score>3)return;
 const priority=score===1?'Critical':score===2?'High':'Medium';
 const items=getTargetedRevisions();
 const i=items.findIndex(r=>r.title===title&&r.assignment===assignment);
 const now=new Date().toISOString();
 if(i>=0){
   items[i]={...items[i],source,latestScore:score,priority,status:'Reopened',updated:now};
 }else{
   items.push({title,assignment,source,latestScore:score,priority,status:'Not Started',created:now});
 }
 saveTargetedRevisions(items);
}
