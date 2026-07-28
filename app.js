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

const APP_VERSION='V1.10';
let ACTIVE_COURSE_ID='trowel-nvq-6570-05';
let COURSE=COURSES[ACTIVE_COURSE_ID];

const app=document.getElementById('app');
const toastEl=document.getElementById('toast');
let state={view:'home',assignment:null,section:null,profile:null,data:{},dev:false,academySearch:'',academyTopic:null,epaMock:null,knowledgeTest:null,walkthroughCode:null,resourceSearch:'',editingNoteId:null};
let db;
const NAV_STATE_KEY='apprenticeplus.navigation.v1';
let restoringNavigation=false;
let navigationReady=false;
let lastNavigationSignature='';
function navigationSnapshot(scrollY=window.scrollY||0){return {view:state.view,assignment:state.assignment,section:state.section,academyTopic:state.academyTopic,academySearch:state.academySearch,walkthroughCode:state.walkthroughCode,resourceSearch:state.resourceSearch,editingNoteId:state.editingNoteId,scrollY,courseId:ACTIVE_COURSE_ID}}
function navigationSignature(snapshot){return JSON.stringify([snapshot.courseId,snapshot.view,snapshot.assignment,snapshot.section,snapshot.academyTopic,snapshot.walkthroughCode])}
function saveNavigationSnapshot(snapshot=navigationSnapshot()){
 try{localStorage.setItem(NAV_STATE_KEY,JSON.stringify(snapshot))}catch{}
}
function validRestoredView(snapshot){
 const allowed=new Set(['home','assignment','academy','library','lesson','epa','epa-result','walkthrough','section','resources','notepad']);
 if(!snapshot||snapshot.courseId!==ACTIVE_COURSE_ID||!allowed.has(snapshot.view))return false;
 if(['assignment','walkthrough','section'].includes(snapshot.view)&&!assignment(Number(snapshot.assignment)))return false;
 if(snapshot.view==='section'&&!['practical','photos','statement','discussion','witness','supporting'].includes(snapshot.section))return false;
 return true;
}
function applyNavigationSnapshot(snapshot){
 if(!validRestoredView(snapshot))return false;
 state.view=snapshot.view;state.assignment=snapshot.assignment==null?null:Number(snapshot.assignment);state.section=snapshot.section||null;state.academyTopic=snapshot.academyTopic||null;state.academySearch=snapshot.academySearch||'';state.walkthroughCode=snapshot.walkthroughCode||null;state.resourceSearch=snapshot.resourceSearch||'';state.editingNoteId=snapshot.editingNoteId||null;
 return true;
}
function recordNavigation(){
 if(!navigationReady)return;
 const snapshot=navigationSnapshot(0),signature=navigationSignature(snapshot);
 saveNavigationSnapshot(snapshot);
 if(restoringNavigation){lastNavigationSignature=signature;return}
 if(!lastNavigationSignature){history.replaceState(snapshot,'');lastNavigationSignature=signature;return}
 if(signature!==lastNavigationSignature){history.pushState(snapshot,'');lastNavigationSignature=signature}else history.replaceState(snapshot,'');
}
let scrollSaveTimer=0;
window.addEventListener('scroll',()=>{clearTimeout(scrollSaveTimer);scrollSaveTimer=setTimeout(()=>{if(!navigationReady)return;const snapshot=navigationSnapshot();saveNavigationSnapshot(snapshot);history.replaceState(snapshot,'')},100)},{passive:true});
window.addEventListener('popstate',event=>{
 const snapshot=event.state;
 if(!validRestoredView(snapshot))return;
 restoringNavigation=true;applyNavigationSnapshot(snapshot);lastNavigationSignature=navigationSignature(snapshot);render();requestAnimationFrame(()=>{window.scrollTo(0,Number(snapshot.scrollY)||0);restoringNavigation=false});
});

function uid(){return crypto.randomUUID?crypto.randomUUID():Date.now().toString(36)+Math.random().toString(36).slice(2)}
function today(){return new Intl.DateTimeFormat('en-GB',{day:'2-digit',month:'2-digit',year:'numeric'}).format(new Date())}
function esc(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function appIcon(name,extra=''){
 const paths={
  observation:'<path d="M9 5h6M9 3h6a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V5a2 2 0 0 1 2-2Z"/><path d="m8 14 2.2 2.2L16 10.5"/>',
  camera:'<path d="M4 8a2 2 0 0 1 2-2h2l1.2-2h5.6L16 6h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><circle cx="12" cy="12.5" r="3.5"/>',
  statement:'<path d="M6 3h8l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v5h5M8 13h8M8 17h5"/><path d="m15.5 18.5 3-3 1.5 1.5-3 3-2 .5Z"/>',
  supporting:'<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M8 12h8M8 16h5"/>',
  discussion:'<path d="M12 3a8 8 0 0 0-8 8c0 2.2.9 4.2 2.4 5.7L5 21l4.5-2.1c.8.2 1.6.3 2.5.3a8 8 0 1 0 0-16.2Z"/><path d="M8.5 10.5h7M8.5 14h4"/><path d="M18 16v3M16.5 17.5h3"/>',
  witness:'<circle cx="12" cy="8" r="3"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/><path d="m16 11 2 2 3-4"/>',
  gallery:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.5"/><path d="m5 17 4-4 3 3 2-2 5 5"/>',
  video:'<rect x="3" y="5" width="13" height="14" rx="2"/><path d="m16 10 5-3v10l-5-3Z"/>',
  file:'<path d="M6 3h8l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v5h5M8 13h8M8 17h6"/>',
  resources:'<path d="M4 4h6a2 2 0 0 1 2 2v14a3 3 0 0 0-3-3H4Z"/><path d="M20 4h-6a2 2 0 0 0-2 2v14a3 3 0 0 1 3-3h5Z"/>',
  toolbox:'<path d="M4 8h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M2 13h20M10 13v2h4v-2"/>',
  microphone:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/>',
  note:'<path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  course:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 8h8v8H8z"/>',
  academy:'<path d="m3 10 9-7 9 7-9 5Z"/><path d="M7 13v5c3 2 7 2 10 0v-5M21 10v6"/>',
  revision:'<path d="M12 3a9 9 0 1 0 8.2 5.3"/><path d="M20 3v6h-6M12 7v5l3 2"/>',
  library:'<path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v15H6a2 2 0 0 1-2-2Z"/><path d="M8 7h8M8 11h8M8 15h5"/>',
  questionPack:'<path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M8 7h8"/><path d="M9.5 11a2.5 2.5 0 1 1 4.1 1.9c-.9.7-1.6 1.1-1.6 2.1"/><path d="M12 18h.01"/><path d="M3 7v12a2 2 0 0 0 2 2"/>'
 };
 return `<svg class="app-icon ${extra}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${paths[name]||paths.file}</svg>`;
}
function statusMark(status){return status==='complete'?'<span class="modern-status complete">✓</span>':status==='incomplete'?'<span class="modern-status warning">!</span>':'<span class="modern-status pending"></span>'}
function toast(msg){toastEl.textContent=msg;toastEl.classList.add('show');setTimeout(()=>toastEl.classList.remove('show'),1900)}
function key(a,s){return `${COURSE.id}:${a}:${s}`}
function legacyKey(a,s){return `${a}:${s}`}
function sectionData(a,s){return state.data[key(a,s)]||{draft:blankSection(s),versions:[]}}
function blankSection(s){
 const base={id:uid(),submitted:false,date:'',signature:'',createdAt:Date.now()};
 if(s==='practical')return {...base,tutor:'',activity:'',scores:{},feedbackSummary:'',feedbackDevelopment:'',feedback:'',photos:[],outcomePhotos:{}};
 if(s==='photos')return {...base,photos:[]};
 if(s==='statement')return {...base,text:'',outcomePhotos:{}};
 if(s==='witness')return {...base,type:'Witness testimony',personName:'',role:'',organisation:'',activity:'',scores:{},feedbackSummary:'',feedbackDevelopment:'',feedback:'',files:[],outcomePhotos:{}};
 if(s==='discussion')return {...base,assessor:'',activity:'',recordings:{},notes:{}};
 return {...base,tab:'files',type:'Supporting evidence',personName:'',role:'',organisation:'',activity:'',scores:{},feedbackSummary:'',feedbackDevelopment:'',feedback:'',files:[],outcomePhotos:{}};
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
 if(s==='discussion')return !!(d.assessor||d.activity||d.signature||Object.keys(d.recordings||{}).length||Object.values(d.notes||{}).some(Boolean));
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
function sectionReadyForPack(n,s){const latest=latestVersion(n,s);if(!latest)return false;if(s==='practical')return COURSE.nvqUnits?true:assessmentPassed(assignment(n),latest,true);if(s==='witness')return true;if(s==='supporting'&&latest.tab!=='files')return assessmentPassed(assignment(n),latest);return true}
function packStatusKey(n){return `${COURSE.id}:packStatus:${n}`}
function knowledgeResultKey(n){return `${COURSE.id}:knowledgeAssessment:${n}`}
function knowledgeAttempts(n){return Array.isArray(state.data[knowledgeResultKey(n)])?state.data[knowledgeResultKey(n)]:[]}
function knowledgePassedAttempts(n){return knowledgeAttempts(n).filter(x=>Number(x.percentage)>=70)}
function knowledgeStatus(n){const attempts=knowledgeAttempts(n);if(!attempts.length)return 'none';return knowledgePassedAttempts(n).length?'complete':'incomplete'}
function walkthroughMetaKey(n){return `${COURSE.id}:walkthrough:${n}`}
function walkthroughMeta(n){return state.data[walkthroughMetaKey(n)]||{}}
function walkthroughCriteria(a){return (a?.ksbs||[]).filter(([code])=>/^[KSB]/i.test(String(code)))}
function walkthroughKnowledge(a){return walkthroughCriteria(a)}
function walkthroughComplete(n,code){return !!walkthroughMeta(n)[code]?.blobKey}
function walkthroughSaved(n){return !!walkthroughMeta(n)._saved}
function walkthroughStatus(n){const a=assignment(n),items=walkthroughKnowledge(a);if(!items.length)return 'complete';const done=items.filter(([code])=>walkthroughComplete(n,code)).length;return walkthroughSaved(n)&&done>0?'complete':done?'incomplete':'none'}
function walkthroughCount(n){const items=walkthroughKnowledge(assignment(n));return {done:items.filter(([code])=>walkthroughComplete(n,code)).length,total:items.length}}
async function saveWalkthroughVideo(n,code,video,{name,type}={}){
 if(!video||!String(type||video.type||'').startsWith('video/'))throw new Error('A valid video recording is required');
 if(!video.size)throw new Error('The recording is empty');
 const mime=type||video.type||'video/webm';
 const blobKey=`walkthrough-video:${COURSE.id}:${n}:${code}:${uid()}`;
 // ArrayBuffer storage is more reliable than structured-cloning a MediaRecorder Blob on Android browsers.
 const buffer=await video.arrayBuffer();
 await putStore(blobKey,{kind:'walkthrough-video',buffer,type:mime});
 const meta=walkthroughMeta(n),old=meta[code];
 meta[code]={blobKey,name:name||video.name||`${code}-walkthrough.webm`,type:mime,size:video.size,date:today(),createdAt:Date.now()};
 meta._saved=false;
 state.data[walkthroughMetaKey(n)]=meta;
 await saveData();
 if(old?.blobKey){try{await deleteStore(old.blobKey)}catch(error){console.warn(error)}}
 invalidatePackStatus(n);
 state.view='walkthrough';state.assignment=n;state.walkthroughCode=null;
 saveNavigationSnapshot(navigationSnapshot(window.scrollY||0));
 renderWalkthrough();
 requestAnimationFrame(()=>requestAnimationFrame(()=>window.scrollTo(0,Number(loadNavigationSnapshot()?.scrollY)||0)));
 return true;
}
function storedWalkthroughBlob(value,meta){
 if(value instanceof Blob)return value;
 if(value?.kind==='walkthrough-video'&&value.buffer)return new Blob([value.buffer],{type:value.type||meta?.type||'video/webm'});
 if(value instanceof ArrayBuffer)return new Blob([value],{type:meta?.type||'video/webm'});
 return null;
}
async function saveWalkthroughOverall(n){
 const count=walkthroughCount(n);if(!count.done)return toast('Add at least one KSB video before saving the walkthrough');
 const meta=walkthroughMeta(n);meta._saved=true;meta._savedAt=Date.now();state.data[walkthroughMetaKey(n)]=meta;await saveData();invalidatePackStatus(n);state.assignment=n;state.walkthroughCode=null;state.view='assignment';render();
}
async function removeWalkthroughVideo(n,code){const scrollY=window.scrollY||0,meta=walkthroughMeta(n),item=meta[code];if(item?.blobKey){try{await deleteStore(item.blobKey)}catch(error){console.warn(error)}}delete meta[code];meta._saved=false;state.data[walkthroughMetaKey(n)]=meta;await saveData();invalidatePackStatus(n);state.view='walkthrough';state.assignment=n;state.walkthroughCode=null;saveNavigationSnapshot(navigationSnapshot(scrollY));renderWalkthrough();requestAnimationFrame(()=>requestAnimationFrame(()=>window.scrollTo(0,scrollY)))}
function walkthroughPrompt(code,text,a){return learnerPromptTitle(a.n,code,text)||text}
function preferredWalkthroughMime(){
 const types=['video/webm;codecs=vp8,opus','video/webm','video/mp4'];
 return types.find(t=>window.MediaRecorder&&MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(t))||'';
}
function walkthroughRecorderIcon(){return `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="6.5" width="12.5" height="11" rx="2.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 10l4-2v8l-4-2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="9.75" cy="12" r="2.1" fill="none" stroke="currentColor" stroke-width="2"/></svg>`}
async function openWalkthroughRecorder(n,code,text,a,fallbackInput){
 if(!navigator.mediaDevices?.getUserMedia||!window.MediaRecorder){toast('In-app recording is not supported on this device');fallbackInput?.click();return}
 let stream;
 try{stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'},width:{ideal:960},height:{ideal:540}},audio:true})}
 catch(error){console.warn('Camera permission or access failed',error);toast('Camera access was unavailable. Choose a video instead.');fallbackInput?.click();return}
 const prompt=walkthroughPrompt(code,text,a);
 app.insertAdjacentHTML('beforeend',`<div class="walk-recorder-modal" id="walkRecorderModal"><div class="walk-recorder-sheet"><button class="walk-recorder-close" id="walkRecorderClose" aria-label="Exit recorder">×</button><div class="walk-recorder-camera"><video id="walkRecorderPreview" autoplay muted playsinline></video><div class="walk-recorder-live" id="walkRecorderLive">Ready</div></div><div class="walk-recorder-prompt"><div class="walk-recorder-code">${esc(code)}</div><h3>${esc(prompt)}</h3><details><summary>Show prompts</summary><p>${esc(text)}</p></details><div class="walk-recorder-controls"><button class="btn secondary" id="walkRecorderCancel">Exit</button><button class="walk-record-button" id="walkRecorderStart" aria-label="Start recording"><span></span></button><button class="btn secondary" id="walkRecorderChoose">Choose video</button></div><div class="walk-recorder-review hide" id="walkRecorderReview"><video id="walkRecorderPlayback" controls playsinline></video><div class="btn-row"><button class="btn secondary" id="walkRecorderRetake">Retake</button><button class="btn" id="walkRecorderUse">Save video</button></div><button class="link-button walk-exit-review" id="walkRecorderExitReview">Exit without saving</button></div></div></div></div>`);
 const modal=document.getElementById('walkRecorderModal'),preview=document.getElementById('walkRecorderPreview'),live=document.getElementById('walkRecorderLive'),start=document.getElementById('walkRecorderStart'),review=document.getElementById('walkRecorderReview'),playback=document.getElementById('walkRecorderPlayback');
 preview.srcObject=stream;
 let recorder=null,chunks=[],recordedBlob=null,recordedUrl='',timer=null,seconds=0,closing=false;
 const stopTracks=()=>stream?.getTracks().forEach(t=>t.stop());
 const clearRecorded=()=>{if(recordedUrl)URL.revokeObjectURL(recordedUrl);recordedUrl='';recordedBlob=null;playback.removeAttribute('src');playback.load()};
 const close=()=>{if(closing)return;closing=true;if(recorder?.state==='recording'){recorder.onstop=null;try{recorder.stop()}catch{}}clearInterval(timer);stopTracks();clearRecorded();modal.remove()};
 const showReady=()=>{review.classList.add('hide');modal.querySelector('.walk-recorder-controls').classList.remove('hide');preview.parentElement.classList.remove('reviewing');live.textContent='Ready';start.classList.remove('recording')};
 const begin=()=>{chunks=[];seconds=0;const mime=preferredWalkthroughMime();try{recorder=new MediaRecorder(stream,mime?{mimeType:mime,videoBitsPerSecond:550000,audioBitsPerSecond:48000}:{videoBitsPerSecond:550000,audioBitsPerSecond:48000})}catch(error){console.error(error);toast('Recording could not start');return}recorder.ondataavailable=e=>{if(e.data?.size)chunks.push(e.data)};recorder.onstop=()=>{clearInterval(timer);recordedBlob=new Blob(chunks,{type:recorder.mimeType||'video/webm'});recordedUrl=URL.createObjectURL(recordedBlob);playback.src=recordedUrl;review.classList.remove('hide');modal.querySelector('.walk-recorder-controls').classList.add('hide');preview.parentElement.classList.add('reviewing');live.textContent='Recording complete'};recorder.start(750);start.classList.add('recording');live.textContent='● 00:00';timer=setInterval(()=>{seconds++;live.textContent=`● ${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`},1000)};
 const stop=()=>{if(recorder?.state==='recording')recorder.stop()};
 start.onclick=()=>recorder?.state==='recording'?stop():begin();
 document.getElementById('walkRecorderCancel').onclick=close;
 document.getElementById('walkRecorderClose').onclick=close;
 document.getElementById('walkRecorderExitReview').onclick=close;
 document.getElementById('walkRecorderChoose').onclick=()=>{close();fallbackInput?.click()};
 document.getElementById('walkRecorderRetake').onclick=()=>{clearRecorded();showReady()};
 document.getElementById('walkRecorderUse').onclick=async()=>{
  if(!recordedBlob)return;
  const useButton=document.getElementById('walkRecorderUse'),retakeButton=document.getElementById('walkRecorderRetake');
  const mime=recordedBlob.type||'video/webm',ext=mime.includes('mp4')?'mp4':'webm',recordingName=`${code}-walkthrough-${Date.now()}.${ext}`;
  const videoToSave=recordedBlob;
  useButton.disabled=true;retakeButton.disabled=true;useButton.textContent='Saving…';live.textContent='Saving…';
  close();
  state.view='walkthrough';state.assignment=n;state.walkthroughCode=null;
  try{await saveWalkthroughVideo(n,code,videoToSave,{name:recordingName,type:mime});window.alert('Video saved. Refresh the page to update.')}
  catch(error){console.error('Walkthrough video save failed',error)}
 };
 modal.onclick=e=>{if(e.target===modal&&recorder?.state!=='recording')close()};
}
function renderWalkthrough(){
 const a=assignment(state.assignment);if(!a){state.view='home';render();return}
 const items=walkthroughKnowledge(a),progress=walkthroughCount(a.n),thumbnailUrls=[];
 if(!items.length){app.innerHTML=shell(`<button class="back" id="walkBack">← Assignment ${a.n}</button><section class="card panel"><h2>Video Walkthrough</h2><p class="muted">No Knowledge, Skill or Behaviour criteria are mapped to this assignment.</p></section>`);document.getElementById('walkBack').onclick=()=>{state.view='assignment';render()};return}
 app.innerHTML=shell(`<button class="back no-print" id="walkBack">← Assignment ${a.n}</button><section class="walkthrough-head"><div><div class="number">Video Walkthrough</div><h2>${esc(a.title)}</h2><p>${progress.done} of ${progress.total} KSB criteria recorded</p></div><span class="status-pill ${walkthroughSaved(a.n)?'done':''}">${progress.done}/${progress.total}</span></section><div class="walkthrough-progress"><span style="width:${progress.total?(progress.done/progress.total)*100:0}%"></span></div><section class="walkthrough-tile-list">${items.map(([code,text])=>{const done=walkthroughComplete(a.n,code),meta=walkthroughMeta(a.n)[code],title=learnerPromptTitle(a.n,code,text);return `<article class="walkthrough-mini-tile ${done?'complete':''}"><div class="walkthrough-mini-copy"><strong class="walkthrough-mini-code">${esc(code)}</strong><h3>${esc(title)}</h3><p>${esc(text)}</p>${done?`<div class="walkthrough-mini-saved">✓ Video saved${meta?.date?` · ${esc(meta.date)}`:''}</div><div class="walkthrough-mini-actions"><button class="link-button" data-view-walk="${esc(code)}">View</button><button class="link-button" data-remove-walk="${esc(code)}">Remove</button></div>`:''}</div><input class="sr-only" id="walkVideoInput-${esc(code)}" type="file" accept="video/*"><button class="walkthrough-video-button ${done?'has-thumbnail':''}" data-record-walk="${esc(code)}" aria-label="${done?'Replace':'Record'} ${esc(code)} video">${done?`<video class="walkthrough-video-thumbnail" data-walk-thumb="${esc(code)}" muted playsinline preload="metadata"></video><span class="walkthrough-thumbnail-label">REPLACE</span>`:`${walkthroughRecorderIcon()}<span>ADD VIDEO</span>`}</button></article>`}).join('')}</section><section class="card panel walkthrough-save-panel ${walkthroughSaved(a.n)?'complete':''}"><div><h3>${walkthroughSaved(a.n)?'Walkthrough saved':'Save walkthrough'}</h3><p class="muted">${walkthroughSaved(a.n)?`${progress.done} of ${progress.total} KSB criteria are included. Further videos remain optional.`:'Record only the relevant Knowledge, Skill or Behaviour criteria, then save the walkthrough. Every criterion does not need a video.'}</p></div><button class="btn" id="saveWalkthroughOverall" ${progress.done?'':'disabled'}>${walkthroughSaved(a.n)?'Save updated walkthrough':'Save walkthrough'}</button></section>`);
 const releaseThumbs=()=>thumbnailUrls.splice(0).forEach(url=>URL.revokeObjectURL(url));
 document.getElementById('walkBack').onclick=()=>{releaseThumbs();state.view='assignment';state.walkthroughCode=null;render()};
 document.getElementById('saveWalkthroughOverall').onclick=()=>saveWalkthroughOverall(a.n);
 document.querySelectorAll('[data-record-walk]').forEach(button=>button.onclick=()=>{releaseThumbs();const code=button.dataset.recordWalk,item=items.find(([k])=>k===code),input=document.getElementById(`walkVideoInput-${code}`);openWalkthroughRecorder(a.n,code,item?.[1]||'',a,input)});
 items.forEach(([code])=>{const input=document.getElementById(`walkVideoInput-${code}`);input.onchange=async e=>{const file=e.target.files?.[0];if(!file)return;try{await saveWalkthroughVideo(a.n,code,file);window.alert('Video saved. Refresh the page to update.')}catch(error){console.error('Walkthrough video save failed',error)}}});
 document.querySelectorAll('[data-remove-walk]').forEach(button=>button.onclick=async()=>{releaseThumbs();await removeWalkthroughVideo(a.n,button.dataset.removeWalk);window.alert('Video removed. Refresh the page to update.')});
 document.querySelectorAll('[data-view-walk]').forEach(button=>button.onclick=async()=>{const code=button.dataset.viewWalk,meta=walkthroughMeta(a.n)[code],stored=await getStore(meta?.blobKey),blob=storedWalkthroughBlob(stored,meta);if(!blob)return toast('Video file could not be opened');const url=URL.createObjectURL(blob);app.insertAdjacentHTML('beforeend',`<div class="modal" id="walkVideoModal"><div class="modal-card video-modal"><video controls autoplay playsinline src="${url}"></video><button class="btn secondary" id="closeWalkVideo">Close</button></div></div>`);document.getElementById('closeWalkVideo').onclick=()=>{URL.revokeObjectURL(url);document.getElementById('walkVideoModal').remove()}});
 document.querySelectorAll('[data-walk-thumb]').forEach(async video=>{const code=video.dataset.walkThumb,meta=walkthroughMeta(a.n)[code];try{const stored=await getStore(meta?.blobKey),blob=storedWalkthroughBlob(stored,meta);if(!blob)return;const url=URL.createObjectURL(blob);thumbnailUrls.push(url);video.src=url;video.currentTime=.1;video.addEventListener('loadeddata',()=>{try{video.currentTime=Math.min(.2,video.duration||.2)}catch{}},{once:true})}catch(error){console.warn('Thumbnail unavailable',error)}});
}
function assignmentRPL(n){return !!state.data[packStatusKey(n)]?.rpl}
function evidenceSections(){return COURSE.nvqUnits?['practical','statement','discussion','witness']:['practical','statement','witness']}
function nvqOutcomeCoverage(n){
 const a=assignment(n),result={};if(!a||!COURSE.nvqUnits)return result;
 a.ksbs.forEach(([code])=>result[code]={count:0,sources:[]});
 // Every locked evidence file is a separate source. This means two different
 // observations covering LO1 count as two pieces of evidence rather than being
 // collapsed into one generic "Assessor observation" source.
 const add=(code,source)=>{if(result[code]&&!result[code].sources.includes(source)){result[code].sources.push(source);result[code].count=Math.min(2,result[code].sources.length)}};
 sectionData(n,'practical').versions.forEach((v,i)=>selectedNvqOutcomes(a,v).forEach(([code])=>add(code,`Assessor observation #${i+1}`)));
 sectionData(n,'statement').versions.forEach((v,i)=>Object.keys(v.outcomePhotos||{}).filter(code=>!!v.outcomePhotos?.[code]?.data).forEach(code=>add(code,`Learner statement #${i+1}`)));
 sectionData(n,'discussion').versions.forEach((v,i)=>Object.keys(v.recordings||{}).filter(code=>!!v.recordings?.[code]?.data).forEach(code=>add(code,`Professional discussion #${i+1}`)));
 sectionData(n,'witness').versions.forEach((v,i)=>selectedNvqOutcomes(a,v).forEach(([code])=>add(code,`Witness testimony #${i+1}`)));
 return result;
}
function nvqCoverageComplete(n){const values=Object.values(nvqOutcomeCoverage(n));return values.length>0&&values.every(item=>item.count>=2)}
function nvqCoverageSummary(n){const coverage=nvqOutcomeCoverage(n),items=Object.entries(coverage),met=items.filter(([,v])=>v.count>=2).length;return {coverage,total:items.length,met,requirementsMet:items.reduce((sum,[,v])=>sum+Math.min(2,v.count),0),requirementsTotal:items.length*2,missing:items.filter(([,v])=>v.count<2).map(([code,v])=>`${code} ${v.count}/2`)}}
function selectedKsbCodes(a,d){
 const explicit=Array.isArray(d?.ksbEvidence)?d.ksbEvidence:[];
 if(explicit.length)return explicit.filter(code=>a.ksbs.some(([c])=>c===code));
 const scored=Object.keys(d?.scores||{}).map(k=>String(k).split('::')[0]);
 return [...new Set(scored.filter(code=>a.ksbs.some(([c])=>c===code)))];
}
function selectedPracticalSkillCodes(a,d){
 const skillCodes=new Set(a.ksbs.filter(([code])=>String(code).toUpperCase().startsWith('S')).map(([code])=>code));
 const explicit=Array.isArray(d?.ksbEvidence)?d.ksbEvidence.filter(code=>skillCodes.has(code)):[];
 if(explicit.length)return explicit;
 const scored=Object.keys(d?.scores||{}).map(k=>String(k).split('::')[0]);
 return [...new Set(scored.filter(code=>skillCodes.has(code)))];
}
function ksbEvidenceCoverage(n){
 const a=assignment(n),result={};if(!a||COURSE.nvqUnits)return result;
 a.ksbs.forEach(([code])=>result[code]={count:0,sources:[]});
 // Each submitted evidence item counts separately, even when two items use the
 // same evidence form. For example, two practical assessments can complete 2/2.
 const add=(code,source)=>{if(result[code]&&!result[code].sources.includes(source)){result[code].sources.push(source);result[code].count=Math.min(2,result[code].sources.length)}};
 sectionData(n,'practical').versions.forEach((v,i)=>selectedPracticalSkillCodes(a,v).forEach(code=>add(code,`Practical assessment #${i+1}`)));
 sectionData(n,'statement').versions.forEach((v,i)=>Object.keys(v.outcomePhotos||{}).filter(code=>!!v.outcomePhotos?.[code]?.data).forEach(code=>add(code,`Learner statement #${i+1}`)));
 sectionData(n,'witness').versions.forEach((v,i)=>selectedKsbCodes(a,v).forEach(code=>add(code,`Witness testimony #${i+1}`)));
 walkthroughKnowledge(a).forEach(([code])=>{if(walkthroughComplete(n,code))add(code,'Video walkthrough')});
 return result;
}
function ksbCoverageComplete(n){const values=Object.values(ksbEvidenceCoverage(n));return values.length>0&&values.every(item=>item.count>=2)}
function ksbCoverageSummary(n){const coverage=ksbEvidenceCoverage(n),items=Object.entries(coverage);return {coverage,total:items.length,met:items.filter(([,v])=>v.count>=2).length,requirementsMet:items.reduce((sum,[,v])=>sum+Math.min(2,v.count),0),requirementsTotal:items.length*2,missing:items.filter(([,v])=>v.count<2).map(([code,v])=>`${code} ${v.count}/2`)}}

function assignmentComplete(n){return assignmentRPL(n)||(COURSE.nvqUnits?nvqCoverageComplete(n):ksbCoverageComplete(n))}
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
 return evidenceSections().some(s=>sectionHasEvidence(n,s))||walkthroughCount(n).done>0;
}
function courseProgressStats(){
 const total=courseAssignments().length||1;
 const evidencePerAssignment=4;
 const evidenceTotal=total*evidencePerAssignment;
 const submitted=courseAssignments().filter(a=>assignmentSubmitted(a.n)).length;
 const evidenceStarted=courseAssignments().reduce((count,a)=>count+(assignmentRPL(a.n)?evidenceSections().length:evidenceSections().filter(s=>sectionHasEvidence(a.n,s)).length),0);
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
async function deleteStore(k){return new Promise((res,rej)=>{const r=db.transaction('store','readwrite').objectStore('store').delete(k);r.onsuccess=()=>res();r.onerror=()=>rej(r.error)})}
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
 Object.keys(state.data).forEach(k=>{const match=k.match(/^(.+):(\d+):supporting$/);if(!match)return;const witnessKey=`${match[1]}:${match[2]}:witness`;if(state.data[witnessKey]===undefined&&state.data[k]){state.data[witnessKey]=structuredClone(state.data[k]);migrated=true}});
 if(migrated)await saveData();
 let restored=null;try{restored=JSON.parse(localStorage.getItem(NAV_STATE_KEY)||'null')}catch{}
 if(restored)applyNavigationSnapshot(restored);
 navigationReady=true;
 const initial=navigationSnapshot(Number(restored?.scrollY)||0);lastNavigationSignature=navigationSignature(initial);history.replaceState(initial,'');
 render();requestAnimationFrame(()=>window.scrollTo(0,Number(restored?.scrollY)||0));if(!state.profile)showOnboarding()
}
async function saveData(){await putStore('data',state.data)}
async function saveProfile(){await putStore('profile',state.profile)}

function shell(content){const active=state.view==='resources'||state.view==='notepad'?'resources':state.view==='academy'||state.view==='library'?'academy':'course';return `<main class="shell"><header class="topbar"><div class="brand"><div class="logo"><img src="logo-apprentice-plus.png" alt="Apprentice+ logo"></div><div><div class="brand-title-row"><h1>Apprentice+</h1></div><p class="subtitle">Your evidence, organised</p></div></div>${state.profile?`<span class="pill">${esc(state.profile.fullName.split(' ')[0]||'Learner')}</span>`:''}</header>${content}<div class="app-version-bottom no-print">${APP_VERSION}</div><nav class="bottom-nav no-print" aria-label="Main navigation"><button class="bottom-nav-item ${active==='resources'?'active':''}" data-nav="resources" aria-label="Toolbox"><span>${appIcon('toolbox','nav-icon')}</span><strong>Toolbox</strong></button><button class="bottom-nav-item ${active==='course'?'active':''}" data-nav="course" aria-label="Course"><span>${appIcon('course','nav-icon')}</span><strong>Course</strong></button><button class="bottom-nav-item ${active==='academy'?'active':''}" data-nav="academy" aria-label="Academy"><span>${appIcon('academy','nav-icon')}</span><strong>Academy</strong></button></nav></main>`}
function courseHeader(){const p=courseProgressStats(),red=p.red??0;return `<section class="course-card"><div class="course-summary"><div class="course-copy"><div class="course-title-row"><h2>${COURSE.name}</h2><span class="target-status ${p.tone}">${p.label}</span></div><div class="meta"><span class="pill">${COURSE.standard}</span><span class="pill">Version ${COURSE.version}</span><span class="pill">Level ${COURSE.level}</span><span class="pill green">${courseAssignments().length} evidence packs</span></div></div><button class="progress-rings" id="courseProgressBtn" aria-label="Open course progress details" style="--green:${p.green*3.6}deg;--yellow:${p.yellow*3.6}deg;--red:${red*3.6}deg"><span class="ring ring-green"></span><span class="ring ring-yellow"></span><span class="ring ring-red"></span><strong>${p.green}%</strong></button></div></section>`}
function render(){recordNavigation();if(state.view==='resources')renderResources();else if(state.view==='notepad')renderNotepad();else if(state.view==='home')renderHome();else if(state.view==='assignment')renderAssignment();else if(state.view==='academy')renderAcademy();else if(state.view==='library')renderKnowledgeLibrary();else if(state.view==='lesson')renderAcademyLesson();else if(state.view==='epa')renderEpaMockHome();else if(state.view==='epa-test')renderEpaMockTest();else if(state.view==='epa-result')renderEpaMockResult();else if(state.view==='knowledge-test')renderAssignmentKnowledgeTest();else if(state.view==='knowledge-result')renderAssignmentKnowledgeResult();else if(state.view==='walkthrough')renderWalkthrough();else renderSection()}

function isAcademyKnowledge(code){return COURSE.nvqUnits||String(code).toUpperCase().startsWith('K')}
function courseRevisionTopics(){
 const topics=[];
 courseAssignments().forEach(a=>a.ksbs.filter(([code])=>isAcademyKnowledge(code)).forEach(([code,text],index)=>topics.push({key:`${a.n}:${code}`,code,text,title:learnerPromptTitle(a.n,code,text),assignment:a.n,assignmentTitle:a.title,index})));
 return topics;
}
function academyStyle(topic){const styles=['Explanation','Workplace scenario','Why it matters','Step by step','Problem solving','Trade insight'];return styles[(topic.assignment+topic.index-1)%styles.length]}
function academyContext(topic){
 const course=COURSE.name.toLowerCase();
 if(course.includes('brick'))return 'bricklaying work on site';
 if(course.includes('site carpentry'))return 'site carpentry work';
 if(course.includes('joiner'))return 'architectural joinery work';
 if(course.includes('property'))return 'property maintenance work';
 return 'trowel occupation work in the workplace';
}
function cleanCriterion(text){return String(text||'').trim().replace(/[.]$/,'')}
function academyLessonData(topic){
 const wording=cleanCriterion(topic.text),context=academyContext(topic),style=academyStyle(topic);
 const openings={
  'Explanation':`This topic explains how to ${wording.charAt(0).toLowerCase()+wording.slice(1)}.`,
  'Workplace scenario':`Imagine you are carrying out ${context} and must demonstrate that you can ${wording.charAt(0).toLowerCase()+wording.slice(1)}.`,
  'Why it matters':`Understanding how to ${wording.charAt(0).toLowerCase()+wording.slice(1)} is important because it affects safety, quality and the finished result.`,
  'Step by step':`A reliable approach to this topic starts by understanding the requirement to ${wording.charAt(0).toLowerCase()+wording.slice(1)}.`,
  'Problem solving':`Problems during ${context} are easier to prevent when you understand how to ${wording.charAt(0).toLowerCase()+wording.slice(1)}.`,
  'Trade insight':`Experienced workers treat the requirement to ${wording.charAt(0).toLowerCase()+wording.slice(1)} as part of professional practice, not as an extra task.`
 };
 const body=`${openings[style]} Before starting, check the relevant information, planned method, materials, tools and workplace conditions. Think about what could change the task and what controls or checks are needed. During the work, follow the agreed process, communicate concerns promptly and compare progress with the specification or expected standard. Do not rely on habit where drawings, instructions or site conditions require a different approach. A competent worker can explain why each decision was made, recognise when advice is needed and record important information. In practice, this knowledge helps you complete ${context} safely, accurately, efficiently and with less risk of defects, waste or delay.`;
 const points=[`Explain the meaning of: ${wording}.`,`Check information, resources and workplace conditions before acting.`,`Follow the agreed method and confirm the finished work meets the required standard.`];
 const questions=[
  {q:`In your own words, what does “${wording}” require you to understand?`,a:`It requires an understanding of the information, decisions and actions needed to meet this requirement during ${context}.`},
  {q:`What should you check before applying this knowledge in the workplace?`,a:'Check the relevant drawings or instructions, the planned method, resources, hazards, controls and required quality standard.'},
  {q:`How would this knowledge help prevent a problem or defect?`,a:'It supports informed decisions, early checks, correct methods and timely communication before an error affects safety, quality, cost or programme.'},
  {q:`Challenge: describe one workplace example where this requirement would change what you do.`,a:`A suitable answer should name a realistic ${context} situation, explain the decision made and link it clearly to the stated requirement.`}
 ];
 return {style,body,points,questions};
}
function renderAcademy(){
 const count=courseRevisionTopics().length;
 app.innerHTML=shell(`<section class="academy-hero"><div class="number">${esc(COURSE.name)}</div><h2>Academy</h2><p>Short teaching sessions created from the Knowledge KSBs or NVQ Learning Outcomes in your selected course.</p></section><section class="academy-grid"><article class="academy-card library"><div class="academy-icon">${appIcon('library')}</div><div><h3>Knowledge Library</h3><p>Each topic includes an approximately 100-word lesson, key points, a workplace example and automatically generated checks.</p></div><div class="library-summary"><strong>${count}</strong><span>knowledge sessions available</span></div><button class="btn" id="openLibrary">Open Knowledge Library</button></article>${!COURSE.nvqUnits?`<article class="academy-card epa-academy-card"><div class="academy-icon">${appIcon('questions')}</div><div><h3>EPA Multiple-Choice Mock</h3><p>Complete a balanced 40-question mock generated from the Knowledge, Skills and Behaviours across your course.</p></div><div class="library-summary"><strong>40</strong><span>questions per mock</span></div><button class="btn" id="openEpaMock">Open EPA Mock</button></article>`:''}</section>`);
 document.getElementById('openLibrary').onclick=()=>{state.view='library';state.academySearch='';state.academyTopic=null;render()};
 const epaBtn=document.getElementById('openEpaMock');if(epaBtn)epaBtn.onclick=()=>{state.view='epa';state.assignment=null;state.section=null;render();window.scrollTo(0,0)};
}
function renderKnowledgeLibrary(){
 const q=String(state.academySearch||'').trim().toLowerCase();
 const all=courseRevisionTopics();
 const assignments=courseAssignments().map(a=>{const items=all.filter(t=>t.assignment===a.n).filter(t=>!q||`${t.code} ${t.title} ${t.text} ${a.title}`.toLowerCase().includes(q));return {...a,topics:items}}).filter(a=>a.topics.length);
 app.innerHTML=shell(`<button class="back no-print" id="academyBack">← Academy</button><section class="library-head"><div class="number">${esc(COURSE.name)} · ${esc(COURSE.standard)}</div><h2>Knowledge Library</h2><p class="muted">Lessons are built automatically from the course wording. Only Knowledge KSBs are shown for apprenticeship standards; NVQ sessions use the Learning Outcome wording.</p><div class="field academy-search"><label for="academySearch">Search knowledge sessions</label><input class="input" id="academySearch" value="${esc(state.academySearch||'')}" placeholder="Search topics or assignments..."></div></section><section class="revision-assignment-list">${assignments.length?assignments.map(a=>`<details class="revision-assignment" ${q?'open':''}><summary><span><small>${COURSE.nvqUnits?`Unit ${esc(a.unit||'Optional')}`:`Assignment ${a.n}`}</small><strong>${esc(a.title)}</strong></span><span class="topic-count">${a.topics.length}</span></summary><div class="revision-topic-list">${a.topics.map(t=>`<button class="revision-topic academy-topic-button" data-topic="${esc(t.key)}"><div><small>${esc(t.code)} · ${esc(academyStyle(t))}</small><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></div><span class="status-pill">Open lesson</span></button>`).join('')}</div></details>`).join(''):`<section class="card panel"><h3>No matching knowledge sessions</h3><p class="muted" style="margin-top:6px">Try another search.</p></section>`}</section>`);
 document.getElementById('academyBack').onclick=()=>{state.view='academy';render()};
 document.querySelectorAll('[data-topic]').forEach(b=>b.onclick=()=>{state.academyTopic=b.dataset.topic;state.view='lesson';render();window.scrollTo(0,0)});
 const search=document.getElementById('academySearch');search.oninput=()=>{state.academySearch=search.value;renderKnowledgeLibrary();const next=document.getElementById('academySearch');next.focus();next.setSelectionRange(next.value.length,next.value.length)};
}
function renderAcademyLesson(){
 const topic=courseRevisionTopics().find(t=>t.key===state.academyTopic);if(!topic){state.view='library';render();return}
 const lesson=academyLessonData(topic);const a=courseAssignments().find(x=>x.n===topic.assignment);
 app.innerHTML=shell(`<button class="back no-print" id="lessonBack">← Knowledge Library</button><article class="academy-lesson"><header class="lesson-head"><div class="number">${COURSE.nvqUnits?`Unit ${esc(a?.unit||'Optional')} · ${esc(topic.code)}`:`Assignment ${topic.assignment} · ${esc(topic.code)}`}</div><h2>${esc(topic.text)}</h2><span class="lesson-style">${esc(lesson.style)}</span></header><section class="lesson-card teaching-block"><h3>What this means</h3><p>${esc(lesson.body)}</p></section><section class="lesson-card"><h3>Key points</h3><ul>${lesson.points.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section><section class="lesson-card"><h3>Quick check</h3><div class="lesson-questions">${lesson.questions.map((x,i)=>`<details class="lesson-question"><summary><span>${i===lesson.questions.length-1?'Challenge':`Question ${i+1}`}</span>${esc(x.q)}</summary><div class="model-answer"><strong>Model answer</strong><p>${esc(x.a)}</p></div></details>`).join('')}</div></section><section class="lesson-card framework-note"><strong>Generated from the course framework</strong><p>This session uses the original ${COURSE.nvqUnits?'Learning Outcome':'Knowledge KSB'} wording. No XP or scores are attached.</p></section></article>`);
 document.getElementById('lessonBack').onclick=()=>{state.view='library';render()};
}



// v1.3.35 examiner-standard EPA question framework (KSB courses only)
function epaResultKey(){return `${COURSE.id}:epaMockResults`}
function epaType(code){const c=String(code||'').toUpperCase();return c.startsWith('K')?'Knowledge':c.startsWith('S')?'Skill':'Behaviour'}
function allCourseKsbs(){
 const seen=new Set(),items=[];
 courseAssignments().forEach(a=>a.ksbs.forEach(([code,text])=>{
  const key=`${code}|${text}`;if(seen.has(key))return;seen.add(key);
  items.push({code,text:cleanCriterion(text),type:epaType(code),assignment:a.n,assignmentTitle:a.title});
 }));
 return items;
}
function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function epaTopicProfile(item){
 const text=`${item.assignmentTitle} ${item.text}`.toLowerCase();
 const profile=(focus,scenario,best,check,risk,wrong,edge)=>({focus,scenario,best,check,risk,wrong,edge});
 if(/ppe|rpe|lev|dust suppression/.test(text))return profile('selecting and using the correct PPE, RPE or extraction','A dusty cutting task is about to begin','Select the controls specified by the risk assessment, check the RPE fit and condition, and use extraction or suppression throughout the exposure.','Confirm the hazard, required protection factor, face fit, equipment condition and compatibility with other PPE.','The worker may inhale hazardous dust or suffer injury because unsuitable protection gives a false sense of security.',['Use the nearest disposable mask without checking its rating or fit.','Wear the RPE only while the supervisor is present.','Open a nearby door and rely on natural ventilation instead of the specified controls.'],'The selected mask interferes with eye protection and the extraction unit has reduced suction.');
 if(/coshh|hazard|risk assessment|method statement|safe system|health and safety|working at height|manual handling|fire safety|asbestos|electrical safety/.test(text))return profile('applying safe systems of work and legal controls','Site conditions differ from the approved method statement','Stop at a safe point, reassess the changed conditions and obtain approval for revised controls before continuing.','Confirm the hazards, people at risk, hierarchy of controls, competence, equipment and emergency arrangements.','Uncontrolled hazards could cause injury, ill health, enforcement action, damage or an invalid safe system of work.',['Continue because the same task was completed safely on another site.','Change the method informally and tell the supervisor after the task.','Finish the urgent part first, then review whether the controls were adequate.'],'Access has changed, another trade is working nearby and the planned exclusion zone cannot be maintained.');
 if(/environment|sustainab|recycl|reuse|waste|contamination|energy/.test(text))return profile('reducing environmental impact and using resources responsibly','The task produces reusable offcuts, general waste and potentially contaminated material','Segregate each waste stream, protect reusable materials and follow the site plan for storage, recycling and authorised disposal.','Check waste classification, contamination risk, storage, documentation and opportunities to reduce or reuse materials.','Reusable material may be lost, waste streams contaminated and disposal made unsafe or non-compliant.',['Put all waste into one skip so the work area is cleared quickly.','Leave reusable materials uncovered until the project is complete.','Dispose of usable offcuts because sorting them takes additional time.'],'Rain is forecast and one container is almost full, increasing the risk of runoff and cross-contamination.');
 if(/drawing|specification|digital design|setting.?out|marking.?out|rod|level|gauge|profile|tolerance/.test(text))return profile('interpreting information and setting work out accurately','A site dimension conflicts with the latest drawing','Pause, verify the drawing revision and datum, remeasure independently and raise the discrepancy before work proceeds.','Check revision, scale, dimensions, datum, specification, tolerances and whether site conditions have changed.','The work may be built in the wrong position or size, affecting following trades and requiring costly rework.',['Alter the dimension by eye so the work fits the available space.','Use the older printed drawing because it already has site notes on it.','Split the difference between the drawing and site measurement without authorisation.'],'Two drawings show different dimensions and the benchmark has been disturbed since the original survey.');
 if(/estimate|cutting list|quantity|resource estimation|materials and characteristics|timber types|masonry units|mortar|dpc|lintel|insulation/.test(text))return profile('selecting and calculating suitable materials','Materials must be ordered from drawings containing openings and several cut components','Calculate net quantities from the current information, include a justified waste allowance and select products meeting the specification.','Check dimensions, units, openings, pack sizes, compatibility, storage conditions and the stated performance requirements.','Incorrect quantities or unsuitable materials can cause delay, waste, defects and non-compliant work.',['Order a large surplus so no detailed calculation is needed.','Choose the cheapest available product even though its performance differs.','Estimate visually and ignore openings, cuts and pack quantities.'],'The specified product is temporarily unavailable and the proposed substitute has a different size or performance rating.');
 if(/hand tool|power tool|machinery|disc cutter|mixer|drill|saw|router|planer|sharpen|maintain and store/.test(text))return profile('selecting, checking and operating tools safely','A required tool shows wear during its pre-use inspection','Quarantine the defective tool, report it and select a suitable inspected replacement operated with the specified controls.','Check guards, blade or bit, cables, extraction, settings, condition, inspection status and operator competence.','A damaged or unsuitable tool may cause injury, inaccurate work or damage to materials.',['Use it at a lower speed until the task is finished.','Remove the guard because it obstructs the cutting line.','Choose a similar-looking tool without checking its capacity or controls.'],'The replacement tool has the correct function but a different capacity and requires an accessory not available on site.');
 if(/cavity wall|wall tie|cavity tray|weep|fire stopping|opening|lintel|insulation/.test(text))return profile('constructing a compliant cavity wall and keeping the cavity clear','A cavity wall with an opening, lintel, tray and partial-fill insulation is being built','Follow the detail for bond, gauge, ties, insulation, tray, stop ends and weep holes while preventing mortar bridging and checking the opening continuously.','Check bearing, opening size, tie spacing and embedment, insulation continuity, tray falls, stop ends, weeps, fire stopping and cavity cleanliness.','Moisture, thermal and fire performance may be compromised and the wall may fail inspection.',['Pack gaps around insulation with mortar to hold it firmly.','Position weep holes for appearance rather than in relation to the tray.','Cut insulation short around wall ties so each board is easier to install.'],'Wind-driven rain begins before the tray and insulation are fully protected, and mortar droppings are visible below the opening.');
 if(/joint finish|pointing|mortar ratio|mix mortar|gauging|expansion joint/.test(text))return profile('producing consistent mortar and joint finishes','Mortar colour and workability vary between consecutive batches','Use consistent measured proportions and mixing time, control water addition and finish joints at the correct stage for the specified profile.','Check ratio, materials, water content, mixing time, batch consistency, weather, joint depth and finishing timing.','Inconsistent mortar or finishing can reduce durability, appearance and resistance to water penetration.',['Add extra water whenever a batch stiffens, regardless of its age.','Use different joint profiles where access is more difficult.','Gauge each batch by approximate shovel counts without a fixed measure.'],'The temperature rises quickly, units have differing suction and one batch has already begun to set.');
 if(/bond|solid wall|brick.?on.?edge|soldier|decorative|pier|raking cut|gable|brick wall/.test(text))return profile('setting out and building masonry accurately','A wall contains a feature course, bond change and raking cuts','Set out the bond and gauge before laying, use templates or calculated cuts and check line, level, plumb and dimensions throughout.','Check bond, perp alignment, gauge, feature dimensions, cut quality, stability and specified tolerances.','Poor setting out can create broken bond, weak sections, uneven features and visible defects.',['Correct the alignment only in the final two courses.','Use random cut sizes and compensate with thicker joints.','Ignore a gauge discrepancy because the top course can be trimmed.'],'The opening width is slightly out, the feature must align with an adjacent elevation and several cut units are damaged.');
 if(/repair|defect|protect materials|frost|water|construction damage|maintenance/.test(text))return profile('diagnosing defects and protecting completed work','A defect is found beside completed work and stored materials','Identify and remove the cause, select a compatible repair, protect surrounding work and verify the finished repair against the required standard.','Check cause, extent, substrate condition, material compatibility, weather, access, curing and finish requirements.','The defect may recur or spread, and nearby completed work or materials may be damaged.',['Cover the visible defect without investigating its cause.','Use any fast-setting repair product regardless of compatibility.','Leave completed work exposed because it previously passed a visual check.'],'The substrate is damp, frost is forecast and the original material specification is not immediately available.');
 if(/communicat|terminology|customer service|team work|teamwork|wider team|shared goals/.test(text))return profile('communicating clearly with the correct people','A change affects another trade, the programme and the customer','Explain the issue accurately for each audience, confirm understanding, agree responsibilities and record the decision where required.','Check audience, urgency, technical detail, impact, agreed action, ownership and the required communication record.','Poor communication can cause unsafe assumptions, duplicated work, delay, defects or customer dissatisfaction.',['Tell only the nearest worker and assume the message will be passed on.','Use unexplained technical language with the customer to save time.','Wait for the next meeting even though current work is affected.'],'The supervisor is off site, the customer requests an immediate answer and another trade is about to conceal the affected area.');
 if(/equality|diversity|inclusion|wellbeing|mental|physical wellbeing|safeguard|prevent/.test(text))return profile('supporting inclusion and wellbeing appropriately','A colleague appears distressed and is being excluded from a task discussion','Address the immediate situation respectfully, include the colleague, listen without assumptions and use the correct support or reporting route.','Check immediate safety, confidentiality limits, workplace policy, support routes and whether safeguarding escalation is required.','The person may remain unsupported, discrimination may continue and safety or wellbeing could deteriorate.',['Ignore it because personal wellbeing is unrelated to the task.','Discuss the colleague’s situation openly with the whole team.','Decide what support they need without speaking to them or following procedure.'],'The colleague asks for confidentiality but also describes conduct that may create an immediate safety risk.');
 if(/roof|rafter|truss|flat roof|warm roof|cold roof/.test(text))return profile('constructing roof components to the specified geometry','Roof members are being marked and assembled from calculated dimensions','Use verified drawings and reference points, form accurate cuts and connections, and check alignment, restraint and stability before final fixing.','Check span, pitch, centres, bearings, ventilation or insulation detail, fixings, bracing and temporary stability.','Errors can affect geometry, load transfer, weather performance and following trades.',['Force misaligned members into position with additional fixings.','Change centres to suit available timber without approval.','Omit hidden ventilation details because they cannot be seen after completion.'],'One support is out of level, timber moisture varies and wind increases before permanent bracing is complete.');
 if(/stair|handrail|spindle|balustrade/.test(text))return profile('setting out and fitting stair and guarding components accurately','A stair, handrail or spindle layout is being prepared from site dimensions','Verify the total rise and available going, calculate consistent geometry and fit guarding securely within dimensional requirements.','Check rise, going, pitch, headroom, landings, spindle gaps, handrail height, fixings and alignment.','Inconsistent geometry or spacing can create a fall risk and fail dimensional requirements.',['Adjust individual steps by eye so the flight reaches the landing.','Space spindles equally without checking the maximum gap.','Use decorative fixings where structural fixings are specified.'],'The finished floor level has changed and the available opening is smaller than shown on the original drawing.');
 if(/door|window|glazing|ironmongery|hinge|lock|latch|frame|lining/.test(text))return profile('fitting doors, windows or ironmongery square and functional','A door or window binds after initial fitting','Check the frame for square, level and twist, verify clearances and adjust the cause without weakening fire, security or weather performance.','Check opening dimensions, diagonals, plumb, level, clearances, fixings, seals, operation and specified ironmongery.','The unit may operate poorly, fail to seal, damage components or breach fire or security requirements.',['Plane or cut the first tight area without checking the frame.','Increase every clearance so the unit cannot bind.','Force the unit closed repeatedly until the hinges settle.'],'The frame is slightly twisted, the closer affects operation and the product has a fire-resistance requirement.');
 if(/plumb|drainage|water hygiene|legionella|isolate.*water|blockage/.test(text))return profile('diagnosing and repairing water or drainage systems safely','A leak or blockage is reported in an occupied building','Identify the system, isolate and control contamination where required, diagnose the fault, complete an authorised repair and test before reinstatement.','Check isolation, stored pressure or water, hygiene risks, drainage route, component compatibility, leaks and safe reinstatement.','Water damage, contamination, flooding or recurrence of the fault may result.',['Begin dismantling before confirming isolation.','Use a component that fits physically but is not specified for the system.','Restore the supply without pressure or leak testing the repair.'],'The isolation valve does not fully close, vulnerable occupants remain nearby and the replacement component differs from the original.');
 if(/electrical|safe isolation|electronic supply/.test(text))return profile('safely isolating electrical or electronic supplies','Maintenance is required near an electrical component','Identify the correct circuit, isolate and lock off, prove the tester, test for dead and re-prove before work begins.','Check authorisation, correct circuit, isolation point, lock-off, warning notice, test instrument and possible alternative supplies.','Unexpected energisation could cause electric shock, burns, fire or equipment damage.',['Switch off at the local control and begin work.','Ask another worker whether the circuit is dead instead of testing it.','Remove the lock-off so the supply can be restored quickly if needed.'],'The labelling is unclear and the equipment may have a secondary or stored-energy supply.');
 return profile(`applying the requirements of ${item.assignmentTitle.toLowerCase()}`,`A workplace task linked to ${item.assignmentTitle.toLowerCase()} is underway`,`Use the current task information to apply this requirement accurately: ${item.text}` ,`Verify the specification, conditions, sequence, checks and evidence needed to demonstrate the requirement.`,`Failure to apply the requirement may create unsafe work, defects, delay, non-compliance or rework.`,['Use the normal method without checking the current task information.','Judge compliance only from appearance and ignore the specified process.','Continue despite uncertainty and seek clarification after completion.'],`The information is incomplete, site conditions have changed and the work will soon be concealed.`);
}
function epaCognitiveTemplates(item,p){
 const title=item.assignmentTitle;
 return [
  {kind:'action',level:'Application',stem:`During ${title}, ${p.scenario.toLowerCase()}. Which action should be taken first?`,answer:p.best,why:`This applies the requirement directly to a realistic ${title.toLowerCase()} situation.`},
  {kind:'check',level:'Analysis',stem:`During ${title}, ${p.edge} Which combination of checks is most important before deciding how to proceed?`,answer:p.check,why:'The answer identifies the evidence needed to diagnose the situation rather than relying on assumption.'},
  {kind:'action',level:'Evaluation',stem:`A worker proposes continuing with ${title} despite the changed conditions. Which response is most defensible?`,answer:p.best,why:'The correct response balances safety, specification, quality and authorisation.'},
  {kind:'consequence',level:'Consequence',stem:`During ${title}, what is the most likely consequence if this requirement is ignored?`,answer:p.risk,why:'The consequence is directly linked to the actual topic and workplace task.'},
  {kind:'action',level:'Application',stem:`Which method best demonstrates competent performance of ${item.text.toLowerCase()} during ${title}?`,answer:p.best,why:'Competence requires the requirement to be applied and checked in the real task.'},
  {kind:'evidence',level:'Evaluation',stem:`Which evidence would give an EPA assessor the strongest assurance that this requirement was met during ${title}?`,answer:`A specific workplace example explaining the decision, method, checks, result and how it met the current specification.`,why:'Strong EPA evidence is specific, applied, checked and justified rather than a generic statement.'}
 ];
}
function epaCategory(item){
 const text=`${item.assignmentTitle} ${item.text}`.toLowerCase();
 if(/ppe|rpe|lev|dust suppression/.test(text))return 'ppe';
 if(/coshh|hazard|risk assessment|method statement|safe system|health and safety|working at height|manual handling|fire safety|asbestos|electrical safety/.test(text))return 'safety';
 if(/environment|sustainab|recycl|reuse|waste|contamination|energy/.test(text))return 'environment';
 if(/drawing|specification|digital design|setting.?out|marking.?out|rod|level|gauge|profile|tolerance/.test(text))return 'settingout';
 if(/estimate|cutting list|quantity|resource estimation|materials and characteristics|timber types|masonry units|mortar|dpc|lintel|insulation/.test(text))return 'materials';
 if(/hand tool|power tool|machinery|disc cutter|mixer|drill|saw|router|planer|sharpen|maintain and store/.test(text))return 'tools';
 if(/cavity wall|wall tie|cavity tray|weep|fire stopping|opening|lintel|insulation/.test(text))return 'cavity';
 if(/joint finish|pointing|mortar ratio|mix mortar|gauging|expansion joint/.test(text))return 'mortar';
 if(/bond|solid wall|brick.?on.?edge|soldier|decorative|pier|raking cut|gable|brick wall/.test(text))return 'masonry';
 if(/repair|defect|protect materials|frost|water|construction damage|maintenance/.test(text))return 'repair';
 if(/communicat|terminology|customer service|team work|teamwork|wider team|shared goals/.test(text))return 'communication';
 if(/wellbeing|mental health|equality|diversity|inclusion|edi|safeguard|prevent/.test(text))return 'edi';
 if(/roof|rafter|truss|flat roof|warm roof|cold roof/.test(text))return 'roof';
 if(/stair|handrail|spindle|balustrade/.test(text))return 'stairs';
 if(/door|window|glazing|ironmongery|hinge|lock|latch|frame|lining/.test(text))return 'openings';
 if(/plumb|drainage|water hygiene|legionella|isolate.*water|blockage/.test(text))return 'water';
 if(/electrical|safe isolation|electronic supply/.test(text))return 'electrical';
 return 'general';
}
const EPA_DISTRACTORS={
 ppe:{
  check:['Check only that a mask is being worn, without confirming its protection rating, fit or compatibility with eye protection.','Confirm the extraction unit is switched on, but do not check airflow, filter condition or whether dust is escaping at the source.','Review the task after cutting has started and rely on visible dust levels to decide whether additional controls are needed.'],
  consequence:['Dust exposure may increase slightly, but any suitable face covering will prevent significant harm.','The main consequence will be slower cutting because extraction reduces the tool’s performance.','Only the cleanliness of the work area will be affected; the worker’s health risk will remain unchanged.']},
 safety:{
  check:['Check that the worker has completed similar tasks before, without reviewing the changed hazards or control measures.','Confirm the task is urgent and that basic PPE is available, but do not reassess access, nearby trades or emergency arrangements.','Read the original method statement only, without checking whether the current site conditions still match it.'],
  consequence:['The task may take longer, but the original safe system remains valid even when site conditions change.','The only likely outcome is a minor paperwork issue if the revised method is recorded after completion.','Risk remains acceptable provided an experienced worker supervises the task informally.']},
 environment:{
  check:['Check whether the nearest skip has space, without confirming waste classification, contamination or authorised disposal routes.','Identify reusable materials after the work is complete, when they may already be mixed with damaged or contaminated waste.','Confirm the site is tidy, but do not check storage, runoff controls, documentation or whether materials can be reused.'],
  consequence:['The main effect will be a less tidy work area, with no impact on disposal compliance or material recovery.','Mixed waste can still be fully recycled later, so segregation at source is unnecessary.','Rainwater may enter the containers, but this will not affect contamination risk or disposal costs.']},
 settingout:{
  check:['Compare the two drawings visually and use the dimension that appears easiest to build, without checking revisions or the datum.','Measure from the nearest completed wall only, without confirming the benchmark, diagonals, tolerances or drawing scale.','Check the overall length after construction, but do not verify intermediate dimensions, openings or alignment before work begins.'],
  consequence:['Only the final appearance may vary; following trades can normally adjust without delay or rework.','A small dimensional error will correct itself through normal joint tolerances as the work progresses.','The work can remain compliant provided it is level, even if it is built from the wrong datum or drawing revision.']},
 materials:{
  check:['Check the gross wall area and add a standard percentage, without deducting openings or considering cuts and pack quantities.','Confirm only that the proposed substitute is the same colour, without checking dimensions, strength, durability or compatibility.','Use the supplier’s suggested quantity without independently checking the current drawings, units or waste allowance.'],
  consequence:['The only likely effect is surplus stock at the end of the job, with no impact on programme or quality.','Any shortage can be solved by changing to another available product, even if its performance differs from the specification.','Incorrect quantities affect purchasing records only and will not influence waste, delays or finished-work compliance.']},
 tools:{
  check:['Check that the tool still runs, without inspecting the guard, blade, cable, extraction or inspection status.','Confirm the replacement tool looks similar, but do not check its capacity, accessories or required controls.','Ask the previous user whether the tool worked, instead of completing and recording a proper pre-use inspection.'],
  consequence:['The main consequence will be a slower finish; worn or unsuitable tools rarely affect safety or accuracy.','A missing guard only affects comfort and visibility, not the likelihood or severity of injury.','Material damage is unlikely provided the operator reduces speed and uses additional force.']},
 cavity:{
  check:['Check the external appearance and joint finish only, without inspecting ties, insulation, trays, stop ends or cavity cleanliness.','Confirm the opening dimensions after the lintel is installed, but do not check bearing, tray falls or weep-hole positions.','Measure wall-tie spacing in one accessible area and assume concealed sections were installed in the same way.'],
  consequence:['The defect will mainly affect appearance; moisture, thermal and fire performance will remain unchanged.','Mortar droppings in the cavity will provide additional support and are unlikely to create damp bridging.','Missing or poorly positioned weep holes will have no effect if the outer leaf has a neat joint finish.']},
 mortar:{
  check:['Check colour consistency only, without confirming proportions, water content, mixing time or whether the mortar has begun to set.','Measure the first batch accurately and then allow later batches to be gauged by eye.','Inspect the joint profile after hardening, but do not check depth, compaction or finishing time while the mortar is workable.'],
  consequence:['Variation will affect colour only; durability and resistance to water penetration will remain consistent.','Adding water to aged mortar restores its original performance without affecting strength or bond.','Different joint profiles can be used across the elevation without influencing weathering or appearance.']},
 masonry:{
  check:['Check line and level at the end of the wall only, without monitoring gauge, bond, perp alignment or feature dimensions as work progresses.','Confirm the decorative feature looks symmetrical, but do not check templates, cut sizes, stability or specified tolerances.','Measure the opening after surrounding masonry is complete and rely on thicker joints to correct any discrepancy.'],
  consequence:['Broken bond or irregular cuts will affect appearance only and will not influence stability or durability.','Gauge errors can always be corrected in the final course without creating visible or structural defects.','Uneven feature dimensions are acceptable provided the wall remains generally plumb.']},
 repair:{
  check:['Check only the visible extent of the defect, without investigating moisture, movement, substrate condition or the original cause.','Select a repair product by setting time and colour alone, without checking compatibility, curing or weather limitations.','Inspect the repair immediately after application, but do not plan later checks for adhesion, recurrence or surrounding damage.'],
  consequence:['Covering the defect will normally prevent recurrence even when the original cause remains.','Any compatible-looking product will perform adequately, so differences in strength or permeability are unlikely to matter.','Frost or damp conditions may change appearance but will not affect bond, curing or durability.']},
 communication:{
  check:['Confirm that a message was sent, without checking whether the correct people understood the technical detail, impact or required action.','Tell the nearest supervisor verbally and assume they will inform the customer, other trades and programme team.','Record the change after completion, without agreeing responsibilities or confirming how it affects other work.'],
  consequence:['The only likely effect is duplicated paperwork; the programme and other trades will be unaffected.','Technical misunderstandings are unlikely if everyone has worked on similar projects before.','A verbal message to one person is sufficient evidence that all affected parties received and understood the change.']},
 edi:{
  check:['Decide whether the concern is serious based only on the person’s recent productivity, without listening to them or following support procedures.','Ask several colleagues for their opinion before speaking privately with the person who raised the concern.','Promise absolute confidentiality immediately, without considering safeguarding, safety or the need to escalate serious risks.'],
  consequence:['The person may feel uncomfortable temporarily, but discrimination or wellbeing concerns will normally resolve without support.','The issue will affect morale only and is unlikely to influence safety, attendance or work quality.','Keeping the matter within the immediate team will prevent escalation and is always the most appropriate response.']},
 roof:{check:['Check pitch and overall span only, without verifying bearings, centres, bracing, fixings or temporary stability.','Confirm individual cuts fit, but do not check cumulative alignment, load paths or ventilation and insulation details.','Inspect the roof after covering, when concealed restraint and bracing details can no longer be verified.'],consequence:['Minor geometry errors affect appearance only and will not alter load transfer or weather performance.','Temporary instability is acceptable once several members are loosely fixed in position.','Omitted ventilation or restraint details will not matter because they are concealed after completion.']},
 stairs:{check:['Check that the flight reaches the landing, without verifying consistent rise, going, pitch, headroom or guarding dimensions.','Space spindles evenly by eye and check appearance rather than the maximum permitted opening.','Confirm handrail height at one point only, without checking alignment, fixings or changes in floor level.'],consequence:['Inconsistent steps may be noticeable but will not create a significant trip or fall risk.','Oversized spindle gaps are acceptable when the balustrade feels rigid.','A changed floor level affects the first step only and does not require the stair geometry to be recalculated.']},
 openings:{check:['Check where the unit binds and remove material there, without checking frame square, twist, clearances, seals or ironmongery.','Confirm the door or window closes once, but do not test repeated operation, latching, weather seals or fire-performance details.','Measure width and height only, without checking diagonals, plumb, level or the fixing sequence.'],consequence:['Extra clearance will solve binding without affecting fire, security, acoustic or weather performance.','A twisted frame affects operation only and will not damage hinges, seals or glazing.','Force-closing the unit will allow the components to settle into alignment without further adjustment.']},
 water:{check:['Check the visible leak only, without confirming isolation, stored pressure, contamination risks or the full drainage route.','Select a replacement because it fits physically, without checking pressure rating, material compatibility or hygiene requirements.','Restore the supply once the joint looks dry, without pressure testing or checking hidden connections.'],consequence:['A small leak will normally seal itself once the system returns to operating pressure.','Using a physically compatible component will not affect hygiene, durability or future maintenance.','Incomplete isolation may cause inconvenience, but flooding or contamination is unlikely during a short repair.']},
 electrical:{check:['Check that the local switch is off, without identifying the circuit, locking off or proving dead with a suitable tester.','Rely on labels and another worker’s confirmation, without testing for alternative or stored supplies.','Test for dead once, but do not prove the tester before and after the test.'],consequence:['The main risk is damage to the component; electric shock is unlikely when the local switch is off.','Clear labelling is sufficient evidence of isolation, so lock-off and proving dead add little protection.','A secondary supply may cause a warning light to operate but is unlikely to energise the work area.']},
 general:{check:['Check only the final appearance, without confirming the current information, sequence, tolerances or concealed work.','Use the previous task as the reference, without checking whether the specification or site conditions have changed.','Confirm the work is complete, but do not record the decisions, checks or evidence needed to demonstrate compliance.'],consequence:['The requirement will affect paperwork only, provided the finished work looks acceptable.','Any defect can be corrected later without affecting safety, cost, programme or following trades.','Previous experience is enough to ensure compliance even when current information is incomplete.']}
};
function epaDistractors(item,p,template){
 const category=epaCategory(item),set=EPA_DISTRACTORS[category]||EPA_DISTRACTORS.general;
 let pool=[];
 if(template.kind==='consequence')pool=set.consequence;
 else if(template.kind==='check')pool=set.check;
 else if(template.kind==='evidence')pool=[
  `A brief statement that ${item.assignmentTitle.toLowerCase()} was completed safely, without identifying the actual decision, checks or result.`,
  `A finished-work photograph with no explanation of the method, specification, concealed details or corrective action.`,
  `A supervisor’s general confirmation that the apprentice usually performs well, without evidence from this specific activity.`
 ];
 else pool=p.wrong;
 return shuffle([...new Set(pool.filter(x=>x&&x!==template.answer))]).slice(0,3);
}
function epaQuestionScore(q,usedStems=new Set()){
 let score=0;const issues=[];
 const stem=q.question.trim(),lower=stem.toLowerCase(),answers=q.options.map(x=>x.trim());
 const banned=[/what(?:'s| is) an issue with/i,/what is [ksb]\d+/i,/which statement is correct/i,/follow procedures\.?$/i,/do the task safely\.?$/i];
 if(stem.length>=65&&stem.length<=280)score+=2;else issues.push('stem length');
 if(q.level&&['Application','Analysis','Evaluation','Consequence'].includes(q.level))score+=2;else issues.push('cognitive level');
 if(/during|before|after|site|work|task|worker|learner|building|repair|install|construct/i.test(stem))score+=2;else issues.push('workplace context');
 if(!banned.some(r=>r.test(stem)))score+=2;else issues.push('vague wording');
 if(!/\b[ksb]\d+\b/i.test(stem))score+=1;else issues.push('learner-facing KSB code');
 if(new Set(answers.map(x=>x.toLowerCase())).size===4&&answers.every(x=>x.length>=28))score+=2;else issues.push('answer quality');
 if(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4)score+=1;else issues.push('correct answer');
 const correct=answers[q.correct]||'';
 if(correct.length>=45&&!/^(follow|use) (the )?(correct|appropriate) (procedure|method)/i.test(correct))score+=2;else issues.push('specific correct answer');
 if(q.explanation&&q.explanation.length>=45)score+=1;else issues.push('explanation');
 const fingerprint=lower.replace(/[^a-z0-9 ]/g,'').replace(/\s+/g,' ').slice(0,120);
 if(!usedStems.has(fingerprint))score+=1;else issues.push('duplicate stem');
 return {score,max:16,pass:score>=13,issues,fingerprint};
}
function buildEpaQuestion(item,template,variant,usedStems){
 const p=epaTopicProfile(item),alternatives=epaDistractors(item,p,template);
 if(alternatives.length<3)return null;
 const options=shuffle([template.answer,...alternatives]);
 const q={id:`${item.code}-${item.assignment}-${variant}-v136`,code:item.code,type:item.type,level:template.level,assignment:item.assignment,assignmentTitle:item.assignmentTitle,wording:item.text,question:template.stem,options,correct:options.indexOf(template.answer),explanation:template.why};
 const audit=epaQuestionScore(q,usedStems);q.qualityScore=audit.score;q.qualityIssues=audit.issues;
 if(audit.pass)usedStems.add(audit.fingerprint);
 return audit.pass?q:null;
}
function epaVerifiedFallback(item,usedStems){
 const p=epaTopicProfile(item),title=item.assignmentTitle;
 const templates=[
  {kind:'action',level:'Application',stem:`While completing ${title}, the current site conditions no longer match the planned method. What should the apprentice do before proceeding?`,answer:p.best,why:'The response applies the actual topic using current information and appropriate checks.'},
  {kind:'check',level:'Analysis',stem:`A quality or safety concern is identified during ${title}. Which checks would best establish whether the work meets the requirement?`,answer:p.check,why:'These checks are directly linked to the topic, task conditions and required standard.'}
 ];
 for(let i=0;i<templates.length;i++){const q=buildEpaQuestion(item,templates[i],90+i,usedStems);if(q)return q}
 return null;
}
function epaQuestionVariants(item,usedStems=new Set()){
 const p=epaTopicProfile(item),templates=epaCognitiveTemplates(item,p),questions=[];
 templates.forEach((template,variant)=>{const q=buildEpaQuestion(item,template,variant,usedStems);if(q)questions.push(q)});
 if(questions.length<2){const fallback=epaVerifiedFallback(item,usedStems);if(fallback)questions.push(fallback)}
 return questions;
}

// v1.4.0 concise construction EPA multiple-choice framework
const THEORY_MCQ_FRAMEWORK_V140=`Short, direct construction questions. One concept per question. Exactly four realistic options. One correct answer. No trick wording, long scenarios, all/none answers or combined answers.`;
const CONCISE_EPA_QUESTIONS={
 ppe:[
  ['Which control best reduces respirable dust when cutting masonry?','Use water suppression or suitable extraction','Wear a high-visibility vest','Work faster to reduce exposure time','Stand further from the cutting line','Source control reduces airborne dust before it reaches the worker.'],
  ['What must be checked before using tight-fitting RPE?','The face fit and condition','The colour of the mask','The worker’s glove size','The tool battery level','Tight-fitting RPE must seal correctly and be suitable for the hazard.']],
 safety:[
  ['What should happen when site conditions no longer match the method statement?','Stop and review the controls','Continue with extra care','Finish the urgent section first','Ask another trade to supervise','Changed conditions require the safe system of work to be reassessed.'],
  ['Which document identifies hazards and suitable control measures?','Risk assessment','Delivery note','Timesheet','Product invoice','A risk assessment identifies hazards, risk and the controls required.']],
 environment:[
  ['Why should construction waste be separated at source?','To support safe reuse and recycling','To make every skip equally full','To avoid recording waste transfers','To remove the need for storage areas','Separation prevents contamination and improves recovery of reusable materials.'],
  ['How should reusable materials be stored?','Protected from damage and contamination','Mixed with general waste','Left uncovered near access routes','Placed in the nearest empty skip','Protected storage preserves materials for safe reuse.']],
 settingout:[
  ['What should be checked before setting out from a drawing?','Revision, dimensions and datum','Only the drawing scale','Only the wall length','The supplier’s delivery time','Current revisions, dimensions and the correct datum prevent setting-out errors.'],
  ['Which check confirms a rectangular setting-out is square?','Equal diagonal measurements','Equal joint thicknesses','Matching material colours','A level top edge only','Equal diagonals confirm that a rectangle is square.']],
 materials:[
  ['What should be confirmed before using a substitute material?','Its specification and compatibility','Its colour only','Its lowest price','Its nearest supplier','A substitute must meet the required performance and compatibility.'],
  ['Why are openings deducted when calculating material quantities?','They reduce the net area required','They increase mortar strength','They change the drawing scale','They remove the waste allowance','Openings reduce the area that requires materials.']],
 tools:[
  ['What should be done with a defective power tool?','Quarantine and report it','Use it at a lower speed','Remove the damaged guard','Finish the cut before reporting it','Defective equipment must be taken out of use and reported.'],
  ['Which check is essential before using a cutting tool?','Guard, blade and cable condition','The colour of the casing','The age of the operator','The brand of the material','Safety-critical parts must be sound before operation.']],
 cavity:[
  ['What is the purpose of a cavity wall tie?','Connect the inner and outer leaves','Support the DPC course','Carry the roof load','Hold insulation against the outer leaf','Wall ties connect the leaves while maintaining the cavity.'],
  ['Which barrier prevents rising damp in a wall?','DPC','RWP','DPM','RDC','A damp-proof course prevents moisture rising through the wall.'],
  ['Why must a cavity be kept clear of mortar droppings?','To prevent damp bridging','To increase wall weight','To strengthen wall ties','To reduce brick suction','Mortar bridging can carry moisture across the cavity.']],
 mortar:[
  ['Why should mortar batches use consistent proportions?','To maintain strength and colour','To increase brick suction','To reduce wall-tie spacing','To change the bond pattern','Consistent proportions produce predictable performance and appearance.'],
  ['When should mortar joints normally be finished?','At the correct stage of stiffening','Immediately after mixing','After the wall is fully cured','Before the units are laid','Correct timing gives a compact, durable joint finish.']],
 masonry:[
  ['Why are perp joints staggered in bonded brickwork?','To improve strength and stability','To reduce mortar colour variation','To support the DPC','To increase cavity width','Staggered joints maintain bond and distribute loads effectively.'],
  ['Which tool checks that brickwork is vertical?','Spirit level or plumb rule','Tape measure','Brick hammer','Jointing iron','A level or plumb rule checks vertical alignment.']],
 repair:[
  ['What should be identified before repairing a defect?','The underlying cause','Only the visible colour','The cheapest repair product','The nearest access route','Removing the cause helps prevent the defect returning.'],
  ['Why must repair materials be compatible?','To avoid further damage or failure','To make the repair set instantly','To remove the need for curing','To change the original finish','Compatible materials perform without harming the existing construction.']],
 communication:[
  ['How should a technical change be communicated?','Clearly, to everyone affected','Only to the nearest worker','At the end of the project','Using unexplained trade terms','Clear communication ensures affected people understand the change and action required.'],
  ['Why should important site decisions be recorded?','To provide an accurate agreed record','To replace all verbal communication','To avoid speaking to the customer','To remove supervisor responsibility','A record confirms what was agreed, by whom and why.']],
 edi:[
  ['What is the best response to a colleague raising a wellbeing concern?','Listen privately and follow support procedures','Discuss it with the whole team','Ignore it unless work stops','Promise absolute secrecy immediately','A respectful private response allows appropriate support and escalation.'],
  ['What does inclusive working require?','Respect and fair access to participation','Treating every person identically in all situations','Avoiding all workplace discussions','Allowing only supervisors to contribute','Inclusion means removing barriers and enabling fair participation.']],
 roof:[
  ['What must be checked before permanently fixing roof members?','Alignment, bearing and bracing','Paint colour and supplier','Only the overall span','Only the first rafter cut','Correct geometry and restraint are essential for stability and load transfer.'],
  ['Why is temporary roof bracing required?','To maintain stability during construction','To improve timber colour','To reduce insulation thickness','To replace permanent fixings','Temporary bracing prevents movement or collapse before permanent restraint is complete.']],
 stairs:[
  ['Why must stair rises be consistent?','To reduce trip and fall risk','To improve timber colour','To reduce handrail height','To increase spindle spacing','Consistent rises provide a safe and predictable walking rhythm.'],
  ['What should be checked when setting out stair spindles?','Maximum permitted gap','Only the first spindle','Timber moisture only','The tread colour','Spindle spacing must prevent unsafe openings in the guarding.']],
 openings:[
  ['What should be checked first when a door binds?','Frame square, level and twist','The paint colour','The handle brand','The wall-tie spacing','Frame alignment should be checked before removing material from the door.'],
  ['Why are clearances important around a fitted door?','For correct operation and performance','To increase the door weight','To reduce hinge numbers','To avoid using a frame','Correct clearances allow operation while maintaining fire, acoustic or weather performance.']],
 water:[
  ['What must be done before dismantling a water fitting?','Isolate and control the supply','Open every outlet','Increase system pressure','Remove the nearest trap','Isolation prevents uncontrolled water release and damage.'],
  ['What should follow a completed plumbing repair?','Leak or pressure testing','Immediate concealment','Changing the pipe material','Removing the isolation valve','Testing confirms the repair is sound before reinstatement.']],
 electrical:[
  ['What confirms an electrical circuit is safely isolated?','Lock-off and proving dead','Turning off the local switch','Reading the circuit label','Asking another worker','Safe isolation requires secure isolation and testing with a suitable instrument.'],
  ['Why is a voltage tester proved before and after use?','To confirm the tester works correctly','To discharge the circuit','To reset the fuse board','To identify cable size','Proving the tester confirms that a dead reading can be trusted.']],
 general:[
  ['What should be checked before starting construction work?','Current information and site conditions','Only the previous method used','Only the material colour','The final invoice value','Current information and conditions determine the correct method and controls.'],
  ['Why should completed work be checked against the specification?','To confirm quality and compliance','To reduce the need for measurements','To avoid recording evidence','To change the agreed tolerance','The specification defines the required standard for the finished work.']]
};
function conciseQuestionSet(item){
 const category=epaCategory(item),pool=CONCISE_EPA_QUESTIONS[category]||CONCISE_EPA_QUESTIONS.general;
 const seed=(item.assignment+String(item.code).split('').reduce((n,c)=>n+c.charCodeAt(0),0))%pool.length;
 return [pool[seed],pool[(seed+1)%pool.length]];
}
function rotateOptions(answer,distractors,offset){
 const options=[...distractors];options.splice(offset%4,0,answer);return options;
}
function epaQuestionVariants(item,usedStems=new Set()){
 return conciseQuestionSet(item).map((row,variant)=>{
  const [question,answer,b,c,d,explanation]=row;
  const fingerprint=question.toLowerCase().replace(/[^a-z0-9 ]/g,'').replace(/\s+/g,' ').trim();
  const uniqueKey=`${fingerprint}|${item.code}|${item.assignment}`;
  if(usedStems.has(uniqueKey))return null;usedStems.add(uniqueKey);
  const correct=(item.assignment+variant+String(item.code).charCodeAt(0))%4;
  const options=rotateOptions(answer,[b,c,d],correct);
  return {id:`${item.code}-${item.assignment}-${variant}-v140`,code:item.code,type:item.type,level:'Knowledge',assignment:item.assignment,assignmentTitle:item.assignmentTitle,wording:item.text,question,options,correct,explanation,qualityScore:16,qualityIssues:[]};
 }).filter(Boolean);
}

function epaQuestionBank(){
 const usedStems=new Set(),bank=[];
 allCourseKsbs().forEach(item=>bank.push(...epaQuestionVariants(item,usedStems)));
 return bank;
}
function chooseEpaQuestions(){
 const bank=epaQuestionBank(),previous=state.data[epaResultKey()]?.[0]?.questionIds||[];
 const fresh=bank.filter(q=>!previous.includes(q.id)),source=fresh.length>=40?fresh:bank;
 const targets={Knowledge:24,Skill:10,Behaviour:6},selected=[];
 Object.entries(targets).forEach(([type,count])=>selected.push(...shuffle(source.filter(q=>q.type===type)).slice(0,count)));
 if(selected.length<40){const ids=new Set(selected.map(q=>q.id));selected.push(...shuffle(source.filter(q=>!ids.has(q.id))).slice(0,40-selected.length))}
 return shuffle(selected.slice(0,40)).map(q=>({...q,options:[...q.options]}));
}

function assignmentTheoryKsbs(a){
 return (a?.ksbs||[]).filter(([code])=>/^[KB]/i.test(String(code||'')));
}
function approvedAssignmentQuestionBank(a){
 if(!a||!window.MCQQuestionBank||!window.MCQEngine)return[];
 const allowed=new Set(assignmentTheoryKsbs(a).map(([code])=>code));
 return MCQQuestionBank.get(COURSE.id,a.n).filter(q=>allowed.has(q.ksb));
}
function buildAssignmentKnowledgeQuestions(a){
 const ksbs=assignmentTheoryKsbs(a);
 if(!ksbs.length)return[];
 const bank=approvedAssignmentQuestionBank(a);
 const recent=knowledgeAttempts(a.n).slice(-2).flatMap(attempt=>attempt.questionIds||attempt.questions?.map(q=>q.id)||[]);
 return MCQEngine.assembleAssessment({questions:bank,count:bank.length,allowedKsbs:ksbs.map(([code])=>code),recentIds:recent});
}
function startAssignmentKnowledge(a){
 let questions=[];
 try{questions=buildAssignmentKnowledgeQuestions(a)}catch(error){
  console.error('MCQ Engine:',error);
  return toast(error.message||'The question bank is not ready for this assignment.');
 }
 if(!questions.length)return toast('The question bank is not ready for this assignment.');
 state.knowledgeTest={assignment:a.n,questions,answers:{},index:0};state.view='knowledge-test';render();window.scrollTo(0,0);
}
function renderAssignmentKnowledgeTest(){
 const test=state.knowledgeTest,a=assignment(test?.assignment);if(!test||!a){state.view='assignment';render();return}
 const i=test.index,q=test.questions[i],picked=test.answers[i],total=test.questions.length;
 app.innerHTML=shell(`<button class="back no-print" id="quitKnowledge">← Assignment ${a.n}</button><section class="epa-test-head"><div><div class="number">Question ${i+1} of ${total}</div><h2>${esc(q.ksb||q.code)} · Knowledge & Behaviour assessment</h2></div><span class="status-pill">${Object.keys(test.answers).length}/${total} answered</span></section><div class="epa-progress"><span style="width:${((i+1)/total)*100}%"></span></div><section class="card panel epa-question"><small>${esc(q.ksb||q.code)} · ${esc(q.sourceText||q.wording||q.concept)}</small><h3>${esc(q.question)}</h3><div class="epa-options">${q.options.map((o,n)=>`<label class="epa-option ${picked===n?'selected':''}"><input type="radio" name="knowledgeAnswer" value="${n}" ${picked===n?'checked':''}><span><b>${String.fromCharCode(65+n)}</b>${esc(o)}</span></label>`).join('')}</div></section><div class="epa-controls"><button class="btn secondary" id="knowledgePrev" ${i===0?'disabled':''}>Previous</button>${i===total-1?'<button class="btn" id="knowledgeSubmit">Submit assessment</button>':'<button class="btn" id="knowledgeNext">Next</button>'}</div>`);
 document.getElementById('quitKnowledge').onclick=()=>{state.view='assignment';state.knowledgeTest=null;render()};
 document.querySelectorAll('input[name="knowledgeAnswer"]').forEach(r=>r.onchange=()=>{test.answers[i]=Number(r.value);renderAssignmentKnowledgeTest()});
 document.getElementById('knowledgePrev').onclick=()=>{test.index=Math.max(0,i-1);renderAssignmentKnowledgeTest()};
 const next=document.getElementById('knowledgeNext');if(next)next.onclick=()=>{if(test.answers[i]===undefined)return toast('Select an answer');test.index=Math.min(total-1,i+1);renderAssignmentKnowledgeTest()};
 const submit=document.getElementById('knowledgeSubmit');if(submit)submit.onclick=async()=>{if(Object.keys(test.answers).length<total)return toast(`Answer all ${total} questions before submitting`);const correct=test.questions.reduce((n,x,j)=>n+(test.answers[j]===x.correct?1:0),0),percentage=Math.round(correct/total*100),grade=gradeForPercentage(percentage),attempt={id:uid(),date:today(),score:correct,total,percentage,grade,ksbCodes:[...new Set(test.questions.map(x=>x.ksb||x.code))],questionIds:test.questions.map(x=>x.id),questions:structuredClone(test.questions),answers:structuredClone(test.answers)};const attempts=knowledgeAttempts(a.n);attempts.push(attempt);state.data[knowledgeResultKey(a.n)]=attempts;await saveData();state.knowledgeTest={...test,result:attempt};state.view='knowledge-result';render();window.scrollTo(0,0)};
}
function renderAssignmentKnowledgeResult(){
 const test=state.knowledgeTest,a=assignment(test?.assignment),r=test?.result;if(!test||!a||!r){state.view='assignment';render();return}
 const wrong=test.questions.map((q,i)=>({q,i,picked:test.answers[i]})).filter(x=>x.picked!==x.q.correct);
 app.innerHTML=shell(`<button class="back no-print" id="knowledgeResultBack">← Assignment ${a.n}</button><section class="card panel"><div class="panel-body"><div class="number">Knowledge assessment result</div><h2>${r.score}/${r.total} · ${r.percentage}%</h2><span class="status-pill ${r.percentage>=70?'done':''}">${esc(r.grade)}</span><p class="muted" style="margin-top:12px">${r.percentage>=70?'This passed attempt has been recorded as Knowledge evidence against the KSBs covered.':'This attempt has been saved. A pass of 70% or above is required for it to count as KSB evidence.'}</p></div></section>${wrong.length?`<section class="card panel"><div class="panel-body"><h3>Review incorrect answers</h3>${wrong.map(({q,i,picked})=>`<div class="lesson-question" style="margin-top:12px"><strong>${i+1}. ${esc(q.question)}</strong><p>Your answer: ${esc(q.options[picked]||'Not answered')}</p><p><strong>Correct answer:</strong> ${esc(q.options[q.correct])}</p><p class="muted">${esc(q.explanation)}</p></div>`).join('')}</div></section>`:'<section class="card panel"><div class="panel-body"><h3>All answers correct</h3></div></section>'}<div class="btn-row"><button class="btn" id="knowledgeResit">Take another attempt</button><button class="btn secondary" id="knowledgeDone">Return to assignment</button></div>`);
 document.getElementById('knowledgeResit').onclick=()=>startAssignmentKnowledge(a);document.getElementById('knowledgeDone').onclick=document.getElementById('knowledgeResultBack').onclick=()=>{state.knowledgeTest=null;state.view='assignment';render()};
}

function renderEpaMockHome(){
 if(COURSE.nvqUnits){state.view='home';render();return}
 const results=state.data[epaResultKey()]||[],best=results.length?Math.max(...results.map(r=>r.score)):null,last=results[0];
 app.innerHTML=shell(`<button class="back no-print" id="epaBack">← Assignments</button><section class="epa-hero"><div class="number">${esc(COURSE.name)} · ${esc(COURSE.standard)}</div><h2>EPA Multiple-Choice Mock</h2><p>Each attempt selects 40 challenging questions from a bank generated across every Knowledge, Skill and Behaviour in this course.</p></section><section class="epa-summary-grid"><article class="card panel"><strong>${epaQuestionBank().length}</strong><span>questions in the course bank</span></article><article class="card panel"><strong>40</strong><span>questions in each attempt</span></article><article class="card panel"><strong>${best===null?'—':best+'%'}</strong><span>best result</span></article></section><section class="card panel epa-start-card"><h3>Start a new mock</h3><p class="muted">The selection is balanced across Knowledge, Skills and Behaviours. Questions from your previous attempt are avoided whenever the bank allows.</p><div class="epa-breakdown"><span>24 Knowledge</span><span>10 Skills</span><span>6 Behaviours</span></div><button class="btn" id="startEpa">Generate 40 questions</button></section>${last?`<section class="card panel"><h3>Latest attempt</h3><p class="epa-latest-score">${last.score}% — ${last.score>=70?'Pass':'Resit required'}</p><p class="muted">${esc(last.date)}</p><button class="btn secondary" id="reviewLatest">Review latest result</button></section>`:''}`);
 document.getElementById('epaBack').onclick=()=>{state.view='home';render()};
 document.getElementById('startEpa').onclick=()=>{state.epaMock={questions:chooseEpaQuestions(),answers:{},index:0};state.view='epa-test';render();window.scrollTo(0,0)};
 const review=document.getElementById('reviewLatest');if(review)review.onclick=()=>{state.epaMock={result:last};state.view='epa-result';render();window.scrollTo(0,0)};
}
function renderEpaMockTest(){
 const mock=state.epaMock;if(!mock?.questions){state.view='epa';render();return}const i=mock.index||0,q=mock.questions[i],picked=mock.answers[i];
 app.innerHTML=shell(`<button class="back no-print" id="quitEpa">← Exit mock</button><section class="epa-test-head"><div><div class="number">Question ${i+1} of ${mock.questions.length}</div><h2>${esc(q.code)} · ${esc(q.type)}</h2></div><span class="status-pill">${Object.keys(mock.answers).length}/40 answered</span></section><div class="epa-progress"><span style="width:${((i+1)/mock.questions.length)*100}%"></span></div><section class="card panel epa-question"><small>Assignment ${q.assignment} · ${esc(q.assignmentTitle)}</small><h3>${esc(q.question)}</h3><div class="epa-options">${q.options.map((o,n)=>`<label class="epa-option ${picked===n?'selected':''}"><input type="radio" name="epaAnswer" value="${n}" ${picked===n?'checked':''}><span><b>${String.fromCharCode(65+n)}</b>${esc(o)}</span></label>`).join('')}</div></section><div class="epa-controls"><button class="btn secondary" id="epaPrev" ${i===0?'disabled':''}>Previous</button>${i===mock.questions.length-1?'<button class="btn" id="epaSubmit">Submit mock</button>':'<button class="btn" id="epaNext">Next</button>'}</div>`);
 document.getElementById('quitEpa').onclick=()=>{if(confirm('Exit this mock? Your current answers will be discarded.')){state.epaMock=null;state.view='epa';render()}};
 document.querySelectorAll('input[name="epaAnswer"]').forEach(r=>r.onchange=()=>{mock.answers[i]=Number(r.value);renderEpaMockTest()});
 const prev=document.getElementById('epaPrev');if(prev)prev.onclick=()=>{mock.index=Math.max(0,i-1);renderEpaMockTest();window.scrollTo(0,0)};
 const next=document.getElementById('epaNext');if(next)next.onclick=()=>{mock.index=Math.min(mock.questions.length-1,i+1);renderEpaMockTest();window.scrollTo(0,0)};
 const submit=document.getElementById('epaSubmit');if(submit)submit.onclick=async()=>{const unanswered=mock.questions.length-Object.keys(mock.answers).length;if(unanswered&& !confirm(`${unanswered} questions are unanswered. Submit anyway?`))return;const correct=mock.questions.reduce((n,q,idx)=>n+(mock.answers[idx]===q.correct?1:0),0),score=Math.round(correct/mock.questions.length*100);const result={date:new Date().toLocaleString('en-GB'),score,correct,total:mock.questions.length,questionIds:mock.questions.map(q=>q.id),questions:mock.questions,answers:{...mock.answers}};state.data[epaResultKey()]=[result,...(state.data[epaResultKey()]||[])].slice(0,20);await saveData();state.epaMock={result};state.view='epa-result';render();window.scrollTo(0,0)};
}
function renderEpaMockResult(){
 const result=state.epaMock?.result;if(!result){state.view='epa';render();return}const weak={};result.questions.forEach((q,i)=>{if(result.answers[i]!==q.correct)weak[q.code]=(weak[q.code]||0)+1});
 app.innerHTML=shell(`<button class="back no-print" id="resultBack">← EPA Mock</button><section class="epa-result-head ${result.score>=70?'pass':'fail'}"><div class="number">EPA Multiple-Choice Mock</div><h2>${result.score}% — ${result.score>=70?'Pass':'Resit required'}</h2><p>${result.correct} of ${result.total} correct</p></section>${Object.keys(weak).length?`<section class="card panel"><h3>Priority revision</h3><div class="ksb-row">${Object.entries(weak).sort((a,b)=>b[1]-a[1]).map(([code,count])=>`<span class="ksb-mini coverage-partial">${esc(code)} · ${count} incorrect</span>`).join('')}</div></section>`:''}<section class="epa-review-list">${result.questions.map((q,i)=>{const chosen=result.answers[i],ok=chosen===q.correct;return `<details class="epa-review ${ok?'correct':'incorrect'}"><summary><span>Question ${i+1} · ${esc(q.code)}</span>${ok?'Correct':'Incorrect'}</summary><div><p><strong>${esc(q.question)}</strong></p><p>Your answer: ${chosen===undefined?'Not answered':`${String.fromCharCode(65+chosen)}. ${esc(q.options[chosen])}`}</p>${ok?'':`<p>Correct answer: ${String.fromCharCode(65+q.correct)}. ${esc(q.options[q.correct])}</p>`}<p class="muted">${esc(q.explanation)}</p></div></details>`}).join('')}</section><div class="btn-row epa-result-actions"><button class="btn" id="newEpa">Generate another 40</button></div>`);
 document.getElementById('resultBack').onclick=()=>{state.epaMock=null;state.view='epa';render()};document.getElementById('newEpa').onclick=()=>{state.epaMock={questions:chooseEpaQuestions(),answers:{},index:0};state.view='epa-test';render();window.scrollTo(0,0)};
}


const NOTEPAD_KEY='resources:learner-notes:v1';
function learnerNotes(){return Array.isArray(state.data[NOTEPAD_KEY])?state.data[NOTEPAD_KEY]:[]}
function noteDate(value){try{return new Intl.DateTimeFormat('en-GB',{day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'}).format(new Date(value))}catch{return ''}}
function renderResources(){
 app.innerHTML=shell(`<div class="section-heading"><div><div class="number">Toolbox</div><h2>Your learning toolbox</h2><p class="muted">Useful tools and information saved for future reference.</p></div></div><section class="resource-grid"><button class="resource-card" id="openNotepad"><span class="resource-icon">${appIcon('note')}</span><div><h3>Learner Notepad</h3><p>Create searchable notes with text, photographs, voice recordings and videos.</p><small>${learnerNotes().length} saved note${learnerNotes().length===1?'':'s'}</small></div><span class="resource-arrow">›</span></button></section>`);
 document.getElementById('openNotepad').onclick=()=>{state.view='notepad';state.editingNoteId=null;render();window.scrollTo(0,0)};
}
function noteMediaLabel(type){return type==='image'?'Photo':type==='audio'?'Voice recording':'Video'}
async function storeNoteFiles(files,type,noteId){
 const items=[];
 for(const file of Array.from(files||[])){
  const blobKey=`notepad:${noteId}:${type}:${uid()}`;
  await putStore(blobKey,file);
  items.push({id:uid(),type,blobKey,name:file.name||noteMediaLabel(type),mime:file.type||'',createdAt:Date.now()});
 }
 return items;
}
async function deleteNoteMedia(note){for(const item of note.media||[]){if(item.blobKey)try{await deleteStore(item.blobKey)}catch{}}}
async function hydrateNoteMedia(){
 document.querySelectorAll('[data-note-media]').forEach(async el=>{
  try{const blob=await getStore(el.dataset.noteMedia);if(!blob)return;const url=URL.createObjectURL(blob);el.src=url;el.addEventListener('loadeddata',()=>{}, {once:true});el.addEventListener('load',()=>{}, {once:true})}catch(error){console.warn('Note media unavailable',error)}
 });
}
function renderNotepad(){
 const query=(state.resourceSearch||'').trim().toLowerCase();
 const notes=learnerNotes().filter(n=>!query||`${n.title} ${n.text}`.toLowerCase().includes(query));
 const editing=state.editingNoteId?learnerNotes().find(n=>n.id===state.editingNoteId):null;
 app.innerHTML=shell(`<button class="back no-print" id="backResources">← Toolbox</button><div class="section-heading notepad-heading"><div><div class="number">Toolbox</div><h2>Learner Notepad</h2><p class="muted">Save workplace reminders, ideas and useful evidence references.</p></div><button class="btn" id="newNote">+ New note</button></div><div class="notepad-search"><input class="input" id="noteSearch" type="search" placeholder="Search notes" value="${esc(state.resourceSearch||'')}"></div>${editing?noteEditor(editing):''}<section class="note-list">${notes.length?notes.map(noteCard).join(''):`<div class="card panel empty-notes"><h3>${query?'No matching notes':'No notes saved yet'}</h3><p class="muted">${query?'Try a different search.':'Press New note to create your first learner note.'}</p></div>`}</section>`);
 document.getElementById('backResources').onclick=()=>{state.view='resources';state.editingNoteId=null;render()};
 document.getElementById('newNote').onclick=()=>{const note={id:uid(),title:'',text:'',media:[],createdAt:Date.now(),updatedAt:Date.now()};state.data[NOTEPAD_KEY]=[note,...learnerNotes()];state.editingNoteId=note.id;render();window.scrollTo(0,0)};
 const search=document.getElementById('noteSearch');search.oninput=()=>{state.resourceSearch=search.value;clearTimeout(search._timer);search._timer=setTimeout(render,180)};
 document.querySelectorAll('[data-edit-note]').forEach(b=>b.onclick=()=>{state.editingNoteId=b.dataset.editNote;render();window.scrollTo(0,0)});
 document.querySelectorAll('[data-delete-note]').forEach(b=>b.onclick=async()=>{const note=learnerNotes().find(n=>n.id===b.dataset.deleteNote);if(!note||!confirm(`Delete “${note.title||'Untitled note'}”?`))return;await deleteNoteMedia(note);state.data[NOTEPAD_KEY]=learnerNotes().filter(n=>n.id!==note.id);await saveData();render();toast('Note deleted')});
 if(editing)bindNoteEditor(editing);
 hydrateNoteMedia();
}
function noteEditor(note){return `<section class="card panel note-editor"><div class="panel-body"><div class="field"><label>Note name</label><input class="input" id="noteTitle" maxlength="100" placeholder="Name this note" value="${esc(note.title)}"></div><div class="field"><label>Note</label><textarea class="input note-text" id="noteText" placeholder="Write your note here...">${esc(note.text)}</textarea></div><div class="note-capture-grid" aria-label="Add to note"><label class="capture-button" title="Take photo" aria-label="Take photo">${appIcon('camera')}<input class="hide" id="notePhotos" type="file" accept="image/*" capture="environment" multiple></label><label class="capture-button" title="Record video" aria-label="Record video">${appIcon('video')}<input class="hide" id="noteVideos" type="file" accept="video/*" capture="environment" multiple></label><label class="capture-button" title="Voice recording" aria-label="Voice recording">${appIcon('microphone')}<input class="hide" id="noteAudio" type="file" accept="audio/*" capture></label><label class="capture-button" title="Choose from gallery" aria-label="Choose from gallery">${appIcon('gallery')}<input class="hide" id="noteGallery" type="file" accept="image/*,video/*" multiple></label></div>${(note.media||[]).length?`<div class="note-open-media">${(note.media||[]).map(m=>`<div class="note-open-media-item">${m.type==='image'?`<img data-note-media="${m.blobKey}" alt="${esc(m.name)}">`:m.type==='video'?`<video data-note-media="${m.blobKey}" controls playsinline></video>`:`<audio data-note-media="${m.blobKey}" controls></audio>`}<div class="note-media-row"><span>${noteMediaLabel(m.type)} · ${esc(m.name)}</span><button class="link-button danger" data-remove-note-media="${m.id}">Remove</button></div></div>`).join('')}</div>`:''}</div><div class="btn-row"><button class="btn" id="saveNote">Save note</button><button class="btn secondary" id="cancelNote">Cancel</button>${note.title?'<button class="btn secondary danger-note" id="deleteCurrentNote">Delete note</button>':''}</div></section>`}
function noteSummaryIcons(note){const media=note.media||[],icons=[];if(media.some(m=>m.type==='image'))icons.push(appIcon('camera'));if(media.some(m=>m.type==='video'))icons.push(appIcon('video'));if(media.some(m=>m.type==='audio'))icons.push(appIcon('microphone'));if(String(note.text||'').trim())icons.push(appIcon('note'));return icons.join('')}
function noteCard(note){return `<button class="note-card note-card-summary" data-edit-note="${note.id}"><div class="note-card-head"><div><h3>${esc(note.title||'Untitled note')}</h3><small>${noteDate(note.updatedAt||note.createdAt)}</small><div class="note-summary-icons" aria-label="Saved content">${noteSummaryIcons(note)}</div></div><span class="resource-arrow">›</span></div></button>`}
function bindNoteEditor(note){
 const title=document.getElementById('noteTitle'),text=document.getElementById('noteText');
 const addFiles=async(input,type)=>{if(!input.files?.length)return;input.disabled=true;try{note.media=[...(note.media||[]),...await storeNoteFiles(input.files,type,note.id)];note.updatedAt=Date.now();state.data[NOTEPAD_KEY]=learnerNotes().map(n=>n.id===note.id?note:n);await saveData();render();toast(`${noteMediaLabel(type)} added`)}catch(error){console.error(error);toast('Media could not be saved')}finally{input.disabled=false}};
 document.getElementById('notePhotos').onchange=e=>addFiles(e.target,'image');document.getElementById('noteAudio').onchange=e=>addFiles(e.target,'audio');document.getElementById('noteVideos').onchange=e=>addFiles(e.target,'video');document.getElementById('noteGallery').onchange=async e=>{const files=Array.from(e.target.files||[]);if(!files.length)return;e.target.disabled=true;try{const images=files.filter(f=>f.type.startsWith('image/')),videos=files.filter(f=>f.type.startsWith('video/'));const added=[];if(images.length)added.push(...await storeNoteFiles(images,'image',note.id));if(videos.length)added.push(...await storeNoteFiles(videos,'video',note.id));note.media=[...(note.media||[]),...added];note.updatedAt=Date.now();state.data[NOTEPAD_KEY]=learnerNotes().map(n=>n.id===note.id?note:n);await saveData();render();toast('Gallery media added')}catch(error){console.error(error);toast('Gallery media could not be saved')}finally{e.target.disabled=false}};
 document.querySelectorAll('[data-remove-note-media]').forEach(b=>b.onclick=async()=>{const item=(note.media||[]).find(m=>m.id===b.dataset.removeNoteMedia);if(item?.blobKey)await deleteStore(item.blobKey);note.media=(note.media||[]).filter(m=>m.id!==b.dataset.removeNoteMedia);note.updatedAt=Date.now();state.data[NOTEPAD_KEY]=learnerNotes().map(n=>n.id===note.id?note:n);await saveData();render();toast('Attachment removed')});
 document.getElementById('saveNote').onclick=async()=>{const t=title.value.trim(),body=text.value.trim();if(!t)return toast('Name the note before saving');if(!body&&!(note.media||[]).length)return toast('Add text or media to the note');note.title=t;note.text=body;note.updatedAt=Date.now();state.data[NOTEPAD_KEY]=learnerNotes().map(n=>n.id===note.id?note:n);await saveData();state.editingNoteId=null;render();toast('Note saved')};
 const deleteCurrent=document.getElementById('deleteCurrentNote');if(deleteCurrent)deleteCurrent.onclick=async()=>{if(!confirm(`Delete “${note.title||'Untitled note'}”?`))return;await deleteNoteMedia(note);state.data[NOTEPAD_KEY]=learnerNotes().filter(n=>n.id!==note.id);await saveData();state.editingNoteId=null;render();toast('Note deleted')};
 document.getElementById('cancelNote').onclick=async()=>{if(!note.title&&!note.text&&!(note.media||[]).length){state.data[NOTEPAD_KEY]=learnerNotes().filter(n=>n.id!==note.id);await saveData()}state.editingNoteId=null;render()};
}

function renderHome(){
 const done=courseAssignments().filter(a=>assignmentComplete(a.n)).length;
 app.innerHTML=shell(`${courseHeader()}<div class="section-heading"><div><h2>${COURSE.nvqUnits?'Evidence Packs':'Assignments'}</h2><p class="muted">${done} of ${courseAssignments().length} complete</p></div></div><section class="assignment-list">${courseAssignments().map(a=>{
  const sts=COURSE.nvqUnits?[['observation','practical'],['statement','statement'],['discussion','discussion'],['witness','witness']]:[['observation','practical'],['video','walkthrough'],['statement','statement'],['witness','witness']];
  const needsOptional=!!a.selectOptional;const packNumber=COURSE.nvqUnits?(needsOptional?'Evidence Pack 9 · Optional Unit':`Evidence Pack ${a.n} · Unit ${a.unit}${a.optional?' · Optional':''}`):`Assignment ${a.n}`;const packTitle=needsOptional?'Select one of Units 238, 690, 828 or 837':a.title;const homeCoverage=!needsOptional?(COURSE.nvqUnits?nvqCoverageSummary(a.n):ksbCoverageSummary(a.n)):null;
  return `<button class="assignment-card ${assignmentComplete(a.n)?'complete':''} ${assignmentSubmitted(a.n)?'submitted':''} ${assignmentRPL(a.n)?'rpl':''}" data-open="${a.n}">${assignmentRPL(a.n)?'<span class="submitted-ribbon rpl-ribbon">RPL</span>':packUploaded(a.n)?'<span class="submitted-ribbon">SUBMITTED</span>':''}<div class="assignment-head"><div><div class="number">${packNumber}</div><h3>${esc(packTitle)}</h3></div><span class="status-pill ${assignmentComplete(a.n)?'done':''}">${assignmentRPL(a.n)?'Completed by RPL':packUploaded(a.n)?'Submitted':assignmentComplete(a.n)?'Evidence ready':'In progress'}</span></div><div class="icons">${sts.map(([i,s])=>{const status=assignmentRPL(a.n)?'complete':s==='walkthrough'?walkthroughStatus(a.n):sectionStatus(a.n,s);return `<div class="icon-state ${status==='complete'?'done':status==='incomplete'?'warning':''}">${appIcon(i,'state-icon')}${statusMark(status)}</div>`}).join('')}</div><div class="ksb-row">${needsOptional?'<span class="ksb-mini">Choose unit</span>':a.ksbs.map(k=>{const count=homeCoverage?.coverage?.[k[0]]?.count||0;return `<span class="ksb-mini ${count>=2?'coverage-complete':count===1?'coverage-partial':'coverage-none'}" title="${count}/2 evidence items collected">${k[0]}</span>`}).join('')}</div></button>`}).join('')}</section><div class="developer"><button class="link-button" id="developerBtn">Developer Mode</button></div>`);
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

function renderAssignment(){const a=assignment(state.assignment);if(a?.selectOptional){renderOptionalUnitSelection();return}const ksbProgress=!COURSE.nvqUnits?ksbCoverageSummary(a.n):null;const tiles=COURSE.nvqUnits?[['practical','observation','Assessor observation','Observation and LO photographs'],['statement','statement','Learner statement','Written statement and LO photographs'],['discussion','discussion','Professional discussion','Record each learning outcome separately'],['witness','witness','Witness testimony','Workplace testimony with optional photographs']]:[['practical','observation','Practical assessment','Tutor score sheet + 3 finished-product photos'],['walkthrough','video','Video Walkthrough',`${walkthroughCount(a.n).done}/${walkthroughCount(a.n).total} KSB criteria recorded`],['statement','statement','Statement','KSB list, linked photos and learner statement'],['witness','witness','Witness testimony','Workplace testimony with optional photographs']];
 const ready=assignmentComplete(a.n),practical=latestVersion(a.n,'practical'),witness=latestVersion(a.n,'witness'),status=state.data[packStatusKey(a.n)]||{},nvqProgress=COURSE.nvqUnits?nvqCoverageSummary(a.n):null;
 const blockers=[];if(COURSE.nvqUnits){if(!ready)blockers.push(`Each Learning Outcome needs two evidence types. Still required: ${nvqProgress.missing.join(', ')}`)}else{if(!ready)blockers.push(`Each KSB needs two submitted evidence items. Still required: ${ksbProgress.missing.join(', ')}`)};
 const uploadText=status.uploaded?'Evidence pack submitted':status.downloaded?'Evidence pack downloaded — upload it to your portfolio':'Evidence pack ready to download';
 const rpl=assignmentRPL(a.n);
 app.innerHTML=shell(`<button class="back no-print" id="back">← ${COURSE.nvqUnits?'Evidence Packs':'Assignments'}</button><div class="assignment-title">${rpl?'<span class="submitted-ribbon rpl-ribbon page-ribbon">RPL</span>':status.uploaded?'<span class="submitted-ribbon page-ribbon">SUBMITTED</span>':''}<div class="number">${COURSE.nvqUnits?`Evidence Pack ${a.n} · Unit ${a.unit}${a.optional?' · Optional':''}`:`Assignment ${a.n}`}</div><h2>${esc(a.title)}</h2><div class="ksb-row">${a.ksbs.map(k=>{const count=COURSE.nvqUnits?(nvqProgress?.coverage?.[k[0]]?.count||0):(ksbProgress?.coverage?.[k[0]]?.count||0);return `<span class="ksb-mini ${count>=2?'coverage-complete':count===1?'coverage-partial':'coverage-none'}" title="${count}/2 evidence items collected">${k[0]} · ${esc(learnerPromptTitle(a.n,k[0],k[1]))}</span>`}).join('')}</div></div><section class="evidence-grid">${tiles.map(([s,i,t,d])=>{const isWalkthrough=s==='walkthrough',sd=isWalkthrough?null:sectionData(a.n,s),latest=isWalkthrough?null:latestVersion(a.n,s),walkProgress=isWalkthrough?walkthroughCount(a.n):null;let label=rpl?'Completed through RPL':isWalkthrough?`${walkProgress.done}/${walkProgress.total} KSB criteria recorded`:sd.versions.length?`${sd.versions.length} submitted evidence item${sd.versions.length>1?'s':''}`:d;const stateName=rpl?'complete':isWalkthrough?walkthroughStatus(a.n):sectionStatus(a.n,s),cls=stateName==='complete'?'done':stateName==='incomplete'?'warning':'';if(!rpl&&latest&&!COURSE.nvqUnits&&s==='practical'&&practicalScoreKeys(a).some(k=>+latest.scores?.[k])){const pct=practicalPercentageScore(a,latest);label=`${pct}% — ${gradeForPercentage(pct)} · Evidence ${sd.versions.length}`}return `<button class="evidence-tile ${cls}" data-section="${s}">${s==='practical'?'<span class="submitted-ribbon assessor-ribbon tile-ribbon">ASSESSOR ONLY</span>':s==='witness'?'<span class="submitted-ribbon witness-ribbon tile-ribbon">WITNESS ONLY</span>':''}<div class="tile-icon">${appIcon(i)}</div><h3>${t}</h3><p>${(!isWalkthrough&&sd.versions.length)||(isWalkthrough&&walkProgress.done)?'✓ ':''}${label}</p></button>`}).join('')}</section>${COURSE.nvqUnits?`<section class="card panel outcome-coverage-panel"><div class="section-heading"><div><h3>Learning Outcome coverage</h3><p class="muted">${nvqProgress.requirementsMet} of ${nvqProgress.requirementsTotal} evidence requirements met · Every outcome needs 2/2</p></div></div><div class="ksb-row">${Object.entries(nvqProgress.coverage).map(([code,item])=>`<span class="ksb-mini ${item.count>=2?'coverage-complete':item.count===1?'coverage-partial':'coverage-none'}">${code} ${item.count}/2</span>`).join('')}</div></section>`:`<section class="card panel outcome-coverage-panel"><div class="section-heading"><div><h3>KSB evidence coverage</h3><p class="muted">${ksbProgress.requirementsMet} of ${ksbProgress.requirementsTotal} evidence requirements met · Every KSB needs 2/2 submitted evidence items</p></div></div><div class="ksb-row">${Object.entries(ksbProgress.coverage).map(([code,item])=>`<span class="ksb-mini ${item.count>=2?'coverage-complete':item.count===1?'coverage-partial':'coverage-none'}" title="${esc(item.sources.join(' + ')||'No evidence submitted')}">${code} ${item.count}/2</span>`).join('')}</div></section>`}<section class="card download-card ${(ready||rpl)?'complete':''}"><h3>${rpl?'Assignment completed through RPL':ready?uploadText:'Evidence pack not ready'}</h3><p class="muted" style="margin-top:5px">${rpl?'This assignment has been recognised as prior learning and counts as fully completed in course progress.':ready?(status.uploaded?'The latest evidence pack has been confirmed as uploaded. Adding a new evidence attempt will require a new download and upload.':status.downloaded?'Open your saved portfolio website, upload the latest PDF, then confirm the upload below.':'Create the latest PDF before uploading it to your portfolio.'):esc(blockers.join(' · '))}</p>${rpl?'':`<div class="btn-row"><button class="btn" id="download" ${ready?'':'disabled'}>${status.downloaded?'Download Updated PDF':'Download / Save PDF'}</button>${ready&&status.downloaded?'<button class="btn secondary" id="openPortfolio">Open Portfolio</button><button class="btn" id="confirmUpload">Confirm Upload</button>':''}</div>`}</section>`);
 document.getElementById('back').onclick=()=>{state.view='home';render()};document.querySelectorAll('[data-section]').forEach(b=>b.onclick=()=>{const section=b.dataset.section;if(section==='walkthrough'){state.walkthroughCode=null;state.view='walkthrough';render();return}state.section=section;state.view='section';render()});document.getElementById('download').onclick=()=>downloadPack(a.n);
 const open=document.getElementById('openPortfolio');if(open)open.onclick=()=>openPortfolioSite();const confirmBtn=document.getElementById('confirmUpload');if(confirmBtn)confirmBtn.onclick=()=>confirmPackUpload(a.n);
}

function outcomePhotoControl(code,d,readonly=false){const photo=d.outcomePhotos?.[code];return `<button type="button" class="lo-photo-control ${photo?'has-photo':''}" data-lo-photo="${code}" aria-label="${photo?'View or replace':'Add'} photo for ${code}" ${readonly?'data-readonly="true"':''}>${photo?`<img src="${photo.data}" alt="Evidence photograph for ${code}">`:`${appIcon('camera')}<span>Add photo</span>`}</button>`}
function outcomeCards(a,mode='prompt',d={outcomePhotos:{}},readonly=false){return `<div class="outcome-list">${a.ksbs.map(([code,text])=>`<article class="outcome-card with-photo"><div class="outcome-card-copy"><div class="outcome-code">Learning Outcome ${esc(code.replace('LO',''))}</div><strong>${esc(text)}</strong><div class="criteria-numbers">Criteria: ${esc(a.criteria?.[code]||'')}</div></div>${outcomePhotoControl(code,d,readonly)}</article>`).join('')}</div>`}
function ksbStatementCards(a,d,readonly=false){return `<div class="outcome-list">${a.ksbs.map(([code,text])=>`<article class="outcome-card with-photo"><div class="outcome-card-copy"><div class="outcome-code">${esc(code)}</div><strong>${esc(learnerPromptTitle(a.n,code,text))}</strong><div class="criteria-numbers">${esc(text)}</div></div>${outcomePhotoControl(code,d,readonly)}</article>`).join('')}</div>`}
function nvqTickRows(a,d,readonly=false){return a.ksbs.map(([code,text])=>`<div class="outcome-tick ${+d.scores?.[code]===5?'achieved':''}"><button type="button" class="outcome-select" data-nvq-toggle="${code}" ${readonly?'disabled':''}><span class="tick-box">${+d.scores?.[code]===5?'✓':''}</span><span><small>Learning Outcome ${esc(code.replace('LO',''))}</small><strong>${esc(text)}</strong><em>Criteria: ${esc(a.criteria?.[code]||'')}</em></span></button>${outcomePhotoControl(code,d,readonly)}</div>`).join('')}
function ksbEvidenceTickRows(a,d,readonly=false){d.ksbEvidence=d.ksbEvidence||[];return a.ksbs.map(([code,text])=>{const selected=d.ksbEvidence.includes(code);return `<div class="outcome-tick ${selected?'achieved':''}"><button type="button" class="outcome-select" data-ksb-evidence-toggle="${esc(code)}" ${readonly?'disabled':''}><span class="tick-box">${selected?'✓':''}</span><span><small>${esc(code)}</small><strong>${esc(learnerPromptTitle(a.n,code,text))}</strong><em>${esc(text)}</em></span></button></div>`}).join('')}
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

function nvqTextHash(value){let h=2166136261;for(const ch of String(value||'')){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
function nvqPick(options,seed,offset=0){return options[(nvqTextHash(seed)+offset)%options.length]}
function nvqEvidenceVariation(sentence,learner,seed,perspective,index){
 const core=String(sentence||'').trim().replace(/^The learner\s+/i,'');
 const lower=core.charAt(0).toLowerCase()+core.slice(1);
 const assessor=[
  `${learner} ${core}`,
  `During the activity, ${learner} ${lower}`,
  `I observed ${learner} ${lower}`,
  `As the work progressed, ${learner} ${lower}`
 ];
 const witness=[
  `${learner} ${core}`,
  `During the work, I saw ${learner} ${lower}`,
  `Throughout the activity, ${learner} ${lower}`,
  `From my direct observation, ${learner} ${lower}`
 ];
 return nvqPick(perspective==='witness'?witness:assessor,`${seed}|evidence|${index}`,index);
}
function nvqOutcomeReference(selected){
 const nums=selected.map(([code])=>code.replace('LO',''));
 if(nums.length===1)return `Learning Outcome ${nums[0]}`;
 if(nums.length===2)return `Learning Outcomes ${nums[0]} and ${nums[1]}`;
 return `Learning Outcomes ${nums.slice(0,-1).join(', ')} and ${nums.at(-1)}`;
}
function generateNvqNarrative(a,d,perspective='assessor'){
 const selected=selectedNvqOutcomes(a,d);if(!selected.length)return'';
 const learner=(state.profile?.fullName||'the learner').trim(),first=learner.split(/\s+/)[0]||'The learner';
 const activity=(d.activity||'the planned workplace activity').trim();
 const unit=`Unit ${a.unit} — ${a.title}`;
 const revision=Number(d.narrativeRevision||0);
 const seed=`${a.unit}|${selected.map(([c])=>c).join(',')}|${activity}|${learner}|${perspective}|${revision}`;
 const detailMap=NVQ_OBSERVATION_DETAILS[String(a.unit)]||{};
 const evidence=selected.map(([code])=>detailMap[code]).filter(Boolean);
 const evidenceText=(evidence.length?evidence:[`${first} followed the relevant workplace procedures, selected suitable resources, maintained safe working practices and checked the work as the activity progressed.`])
  .map((text,i)=>nvqEvidenceVariation(text,first,seed,perspective,i)).join(' ');
 const outcomes=nvqOutcomeReference(selected);
 const assessorOpenings=[
  `I observed ${learner} carrying out ${activity} during normal workplace operations. The observation related to ${unit} and covered ${outcomes}. Before work commenced, ${first} considered the available information, the condition of the work area and the controls needed to complete the activity safely and effectively.`,
  `During a planned workplace assessment, I observed ${learner} completing ${activity}. The assessment was undertaken against ${unit}, with evidence gathered for ${outcomes}. ${first} reviewed the task requirements before starting and organised the work area, resources and sequence to support safe and controlled progress.`,
  `I directly observed ${learner} undertaking ${activity} in the workplace. This provided evidence for ${unit} and ${outcomes}. At the outset, ${first} confirmed what was required, considered the relevant workplace information and prepared to complete the task in a logical and responsible manner.`
 ];
 const witnessOpenings=[
  `I witnessed ${learner} carrying out ${activity} as part of normal workplace operations. My testimony relates to ${unit} and the performance requirements within ${outcomes}. I personally saw ${first} prepare for the task, consider the available information and organise the work so it could proceed safely and efficiently.`,
  `During the normal course of work, I observed ${learner} completing ${activity}. The work provided direct evidence relevant to ${unit} and ${outcomes}. Before starting, ${first} checked the task requirements and made suitable arrangements for the work area, resources and sequence.`,
  `I personally observed ${learner} undertaking ${activity} in the workplace. This testimony covers ${unit} and ${outcomes}. ${first} established what was required before commencing and approached the work in an organised, responsible and safety-conscious manner.`
 ];
 const processParagraphs=[
  `${first} maintained a methodical approach throughout. Communication with colleagues and other people affected by the work was clear and appropriate, and clarification was sought where required. Safe access and suitable housekeeping were maintained as the activity progressed. Tools, equipment and materials were handled responsibly, and the work area was controlled to reduce foreseeable risk and avoid unnecessary disruption to others.`,
  `The activity was managed in a logical sequence, with ${first} maintaining awareness of other people, changing site conditions and the effect of the work on the surrounding area. Relevant information was communicated at appropriate stages, and any uncertainty was dealt with before it could affect safety or progress. Resources were used carefully and the work area remained orderly and accessible.`,
  `${first} worked steadily and with appropriate independence, while remaining within the limits of their responsibility. Coordination with others supported the safe completion of the task, and workplace procedures were followed consistently. Materials and equipment were positioned sensibly, access routes were kept clear and waste or surplus material was controlled throughout.`
 ];
 const qualityParagraphs=[
  `Checks were made at suitable stages rather than being left until completion. Where a minor discrepancy or changing condition was identified, ${first} responded promptly and made an appropriate adjustment before continuing. This demonstrated practical judgement, attention to detail and an understanding of how planning, sequence and ongoing control affect the final standard of work.`,
  `${first} monitored progress throughout the activity and checked compliance at appropriate points. Minor issues were addressed as they arose, preventing them from affecting later work. The approach demonstrated sound judgement and a clear understanding of the relationship between safe working, accuracy, efficiency and the required workplace standard.`,
  `The work was reviewed continuously as it progressed. ${first} did not rely solely on a final inspection, but used regular checks to confirm that the activity remained controlled and compliant. Necessary adjustments were made without delay, showing an appropriate level of care, decision-making and responsibility for the quality of the outcome.`
 ];
 const assessorClosings=[
  `The activity was completed to an appropriate workplace standard and within the expected timescale without reducing safety or quality. Based on my direct observation and professional judgement, I am satisfied that ${learner} demonstrated competence in the areas assessed. The evidence obtained is valid, authentic, current and sufficient to support this assessment decision.`,
  `${first} completed the observed activity in accordance with the relevant workplace requirements and maintained an acceptable standard of performance throughout. On the basis of the evidence personally observed, I am satisfied that competence was demonstrated against the assessed requirements. The evidence is valid, authentic, current and sufficient.`,
  `Overall, the performance observed was consistent with the requirements of the unit and showed that ${learner} could apply the necessary knowledge and skills in workplace conditions. I am satisfied that the evidence supports achievement of the areas assessed and is valid, authentic, current and sufficient for the assessment decision.`
 ];
 const witnessClosings=[
  `The activity was completed to an appropriate workplace standard, with suitable attention to safety, quality and the needs of others. This testimony is based entirely on what I personally observed. In my opinion, ${learner}'s performance was competent, current and representative of their normal workplace practice.`,
  `${first} completed the work responsibly and to the standard expected in the workplace. I personally witnessed the actions described above and confirm that they are an accurate and current account of ${learner}'s performance during the activity.`,
  `The work observed was carried out safely, efficiently and with appropriate consideration for quality and other people in the workplace. I confirm that this statement reflects my own direct observation and is a true representation of ${learner}'s workplace performance.`
 ];
 const opening=nvqPick(perspective==='witness'?witnessOpenings:assessorOpenings,seed,1);
 const process=nvqPick(processParagraphs,seed,3);
 const quality=nvqPick(qualityParagraphs,seed,5);
 const closing=nvqPick(perspective==='witness'?witnessClosings:assessorClosings,seed,7);
 return `${opening}\n\n${evidenceText}\n\n${process}\n\n${quality}\n\n${closing}`;
}

function scoreRows(a,d,readonly=false){d.ksbEvidence=d.ksbEvidence||[];return skillCriteriaFor(a).map(skill=>{const selected=d.ksbEvidence.includes(skill.code);return `<div class="skill-assessment ${selected?'skill-selected':''}"><button type="button" class="skill-heading skill-evidence-toggle" data-ksb-evidence-toggle="${esc(skill.code)}" ${readonly?'disabled':''}><span class="tick-box">${selected?'✓':''}</span><span class="skill-heading-copy"><small>${esc(skill.code)} · Skill unit</small><strong>${esc(skill.summary)}</strong></span></button>${skill.criteria.map((criterion,i)=>{const key=`${skill.code}::${i+1}`;return `<div class="score-card criterion-row"><div class="criterion-text"><small>Practical mark ${i+1}</small>${esc(criterion)}</div><div class="score-buttons">${[1,2,3,4,5].map(n=>`<button type="button" class="score-button ${+d.scores[key]===n?'active':''}" data-score-code="${key}" data-score="${n}" ${readonly?'disabled':''}>${n}</button>`).join('')}</div></div>`}).join('')}</div>`}).join('')}
function ksbTypeLabel(code){const c=String(code||'').toUpperCase();return c.startsWith('K')?'Knowledge':c.startsWith('S')?'Skill':c.startsWith('B')?'Behaviour':'KSB'}
function ksbsScoreRows(a,d,readonly=false){
 d.ksbEvidence=d.ksbEvidence||[];
 d.scores=d.scores||{};
 return a.ksbs.map(([code,summary])=>{const selected=d.ksbEvidence.includes(code);return `<div class="skill-assessment ${selected?'skill-selected':''}"><button type="button" class="skill-heading skill-evidence-toggle" data-ksb-evidence-toggle="${esc(code)}" aria-pressed="${selected?'true':'false'}" ${readonly?'disabled':''}><span class="tick-box" aria-hidden="true">${selected?'✓':''}</span><span class="skill-heading-copy"><small>${esc(code)} · ${ksbTypeLabel(code)} unit</small><strong>${esc(summary)}</strong></span></button><div class="score-card criterion-row"><div class="criterion-text"><small>Workplace evidence score</small>Rate how consistently the learner demonstrated this KSB during the activity.</div><div class="score-buttons">${[1,2,3,4,5].map(n=>`<button type="button" class="score-button ${+d.scores[code]===n?'active':''}" data-score-code="${esc(code)}" data-score="${n}" ${readonly||!selected?'disabled':''}>${n}</button>`).join('')}</div></div></div>`}).join('')
}
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
function generatedFeedbackHTML(d,practical=false){return `<div class="field"><label>Assessment Summary</label><textarea class="generated-feedback-text" readonly placeholder="Complete the assessment scores to prepare the summary...">${esc(d.feedbackSummary||'')}</textarea></div><div class="field"><label>Areas for Development</label><textarea class="generated-feedback-text" readonly placeholder="Complete the assessment scores to prepare the summary...">${esc(d.feedbackDevelopment||'')}</textarea></div><div class="field"><label>${esc(additionalCommentsHeading(d,practical))}</label><textarea class="autosave" data-field="feedback" placeholder="${esc(additionalCommentsPlaceholder(d,practical))}">${esc(d.feedback||'')}</textarea></div><button type="button" class="btn secondary" id="generateFeedback">Update assessment comments</button>`}
function signatureHTML(d,locked,requiredBy='Apprentice',allowSavedLearner=true){return `<div class="field"><label>${esc(requiredBy)} signature required</label>${d.signature?`<img class="sig-preview" src="${d.signature}" alt="${esc(requiredBy)} signature">`:locked?`<p class="muted">No ${esc(requiredBy.toLowerCase())} signature saved</p>`:`<canvas class="signature-pad" id="signaturePad"></canvas><div class="btn-row"><button type="button" class="btn secondary" id="clearSignature">Clear signature</button>${allowSavedLearner?'<button type="button" class="btn secondary" id="useProfileSignature">Use saved apprentice signature</button>':''}</div>`}<div class="date-line">Date: ${d.date||today()}</div></div>`}
function lockedTop(version,section){return `<div class="locked-banner"><span>🔒 Submitted version ${version}</span><button class="btn secondary retake" id="retake">Create new version</button></div>`}

function renderSection(){const a=assignment(state.assignment),s=state.section,sd=sectionData(a.n,s),d=sd.draft;const locked=d.submitted;let body='';
 if(s==='practical')body=practicalPage(a,d,locked,sd);
 if(s==='photos')body=photosPage(a,d,locked,sd);
 if(s==='statement')body=statementPage(a,d,locked,sd);
 if(s==='witness')body=witnessPage(a,d,locked,sd);
 if(s==='discussion')body=professionalDiscussionPage(a,d,locked,sd);
 if(s==='supporting')body=supportingPage(a,d,locked,sd);
 app.innerHTML=shell(`<button class="back no-print" id="back">← ${COURSE.nvqUnits?`Unit ${a.unit}`:`Assignment ${a.n}`}</button><div class="assignment-title"><div class="number">${COURSE.nvqUnits?`Unit ${a.unit}`:`Assignment ${a.n}`}</div><h2>${sectionTitle(s)}</h2><p class="muted">${esc(a.title)}</p></div>${body}`);
 document.getElementById('back').onclick=()=>{state.view='assignment';render()};bindSection(a,s,sd,d,locked);
}
function sectionTitle(s){const titles={practical:['observation',COURSE.nvqUnits?'Assessor observation':'Practical assessment'],photos:['camera','Photos'],statement:['statement','Learner statement'],discussion:['discussion','Professional discussion'],witness:['witness','Witness testimony'],supporting:['supporting','Supporting evidence']};const [icon,label]=titles[s];return `<span class="section-title-icon">${appIcon(icon)}</span>${label}`}
function versionHistory(sd,s){if(!sd.versions.length)return'';const a=assignment(state.assignment);return `<section class="card panel versions"><h3>Saved attempts</h3>${sd.versions.slice().reverse().map((v,i)=>{const result=(!COURSE.nvqUnits&&(s==='practical'||(s==='supporting'&&v.tab!=='files')))?(()=>{const pct=s==='practical'?practicalPercentageScore(a,v):percentageScore(a,v);return `<div class="muted">${pct}% — ${gradeForPercentage(pct)}</div>`})():'';return `<div class="version-item"><div><strong>Attempt ${sd.versions.length-i}</strong><div class="muted">Submitted ${esc(v.date||'')}</div>${result}</div><button class="btn secondary" data-view-version="${sd.versions.length-1-i}">Open</button></div>`}).join('')}</section>`}
function practicalPage(a,d,locked,sd){if(COURSE.nvqUnits)return nvqObservationPage(a,d,locked,sd);d.photos=d.photos||[];d.ksbEvidence=d.ksbEvidence||[];const slots=[0,1,2].map(i=>{const p=d.photos[i];return `<button type="button" class="practical-photo-slot ${p?'filled':''}" data-practical-slot="${i}" aria-label="${p?'Open practical photo '+(i+1):'Add practical photo '+(i+1)}">${p?`<img src="${p.data}" alt="Practical evidence photo ${i+1}"><span>Photo ${i+1}</span>`:`<span class="camera-mark">${appIcon('camera')}</span><span>Photo ${i+1}</span>`}</button>`}).join('');return `<div class="locked-wrap ${locked?'read-only':''}">${locked?lockedTop(sd.versions.length,'practical'):''}<section class="card panel assessor-only-panel"><span class="submitted-ribbon assessor-ribbon page-ribbon">ASSESSOR ONLY</span><div class="panel-body"><div class="field"><label>Tutor / assessor name</label><input class="input autosave" data-field="tutor" value="${esc(d.tutor)}"></div><div class="field"><label>Activity assessed</label><textarea class="autosave" data-field="activity">${esc(d.activity)}</textarea></div><div class="field"><label>Practical task photographs</label><p class="help">Add at least one clear photograph. Additional photos can be added where available.</p><div class="practical-photo-row">${slots}</div></div><div class="field"><label>Skill units and /5 scoring</label><p class="help">Practical assessments use Skill units only. Tick each Skill demonstrated, then award the relevant /5 scores below it. You can submit evidence without assessing every Skill in the assignment.</p><div class="score-list">${scoreRows(a,d,locked)}</div></div>${generatedFeedbackHTML(d,true)}${signatureHTML(d,locked,'Tutor / assessor',false)}</div>${locked?'':`<div class="btn-row"><button class="btn" id="submitSection" ${!canSubmit(a,'practical',d)?'disabled':''}>Submit this evidence</button></div>`}</section></div>${versionHistory(sd,'practical')}`}
function statementPage(a,d,locked,sd){return `<div class="locked-wrap ${locked?'read-only':''}">${locked?lockedTop(sd.versions.length,'statement'):''}<section class="card panel"><div class="panel-body"><h3>${COURSE.nvqUnits?'Learning outcomes':'KSBs attached to this assignment'}</h3><p class="help">${COURSE.nvqUnits?'Add evidence to at least one learning outcome. Only outcomes with a photograph count toward this learner statement.':'Use the camera icon beside any relevant KSB to attach photographic evidence. The KSB wording does not need to be repeated in your statement.'}</p>${COURSE.nvqUnits?outcomeCards(a,'statement',d,locked):ksbStatementCards(a,d,locked)}<div class="field"><label>Your statement — minimum 100 words</label><textarea class="autosave" id="statementText" data-field="text" placeholder="Explain what you did, how you did it, the checks you completed and what you learned...">${esc(d.text)}</textarea><div class="help"><span id="wordCount">${wordCount(d.text)}</span> / 100 words minimum. You do not need to copy the KSB wording into this box.</div></div>${signatureHTML(d,locked,'Apprentice',true)}</div>${locked?'':`<div class="btn-row"><button class="btn" id="submitSection" ${!statementReady(a,d)?'disabled':''}>Submit and lock statement</button></div>`}</section></div>${versionHistory(sd,'statement')}`}

function professionalDiscussionPage(a,d,locked,sd){
 d.recordings=d.recordings||{};d.notes=d.notes||{};
 const rows=a.ksbs.map(([code,summary])=>{const rec=d.recordings[code],note=d.notes[code]||'';return `<article class="discussion-outcome ${rec?'recorded':''}"><div class="discussion-copy"><strong>${esc(code)} · ${esc(learnerPromptTitle(a.n,code,summary))}</strong><p>${esc(summary)}</p>${rec?`<audio controls preload="metadata" src="${rec.data}"></audio><div class="recording-meta">Recorded ${esc(rec.date||'')} · ${esc(rec.duration||'')}</div>`:'<div class="recording-meta">No recording added</div>'}<label class="discussion-note-label">Discussion notes</label><textarea class="discussion-note autosave-discussion-note" data-discussion-code="${esc(code)}" placeholder="Optional notes for this learning outcome..." ${locked?'disabled':''}>${esc(note)}</textarea></div>${locked?'':`<button type="button" class="mic-button ${rec?'has-recording':''}" data-record-code="${esc(code)}" aria-label="${rec?'Replace':'Record'} discussion for ${esc(code)}">${appIcon('discussion')}<span>${rec?'Replace':'Record'}</span></button>`}${!locked&&rec?`<button type="button" class="delete-recording" data-delete-recording="${esc(code)}">Delete</button>`:''}</article>`}).join('');
 return `<div class="locked-wrap ${locked?'read-only':''}">${locked?lockedTop(sd.versions.length,'discussion'):''}<section class="card panel"><div class="panel-body"><div class="field"><label>Assessor / discussion lead</label><input class="input autosave" data-field="assessor" value="${esc(d.assessor||'')}"></div><div class="field"><label>Activity or subject discussed</label><textarea class="autosave" data-field="activity">${esc(d.activity||'')}</textarea></div><div class="field"><label>Learning outcomes</label><p class="help">Work through the learning outcomes one at a time. Tap the microphone on each outcome to record, stop, replay, replace or delete that recording.</p><div class="discussion-list">${rows}</div></div>${signatureHTML(d,locked,'Assessor / discussion lead',false)}</div>${locked?'':`<div class="btn-row"><button class="btn" id="submitSection" ${!canSubmit(a,'discussion',d)?'disabled':''}>Submit and lock professional discussion</button></div>`}</section></div>${versionHistory(sd,'discussion')}`
}

function witnessPage(a,d,locked,sd){return `<div class="locked-wrap ${locked?'read-only':''}">${locked?lockedTop(sd.versions.length,'witness'):''}<section class="card panel"><div class="panel-body">${supportStatement(a,d,locked)}${signatureHTML(d,locked,'Witness / employer',false)}</div>${locked?'':`<div class="btn-row"><button class="btn" id="submitSection" ${!supportReady(a,d)?'disabled':''}>Submit and lock witness testimony</button></div>`}</section></div>${versionHistory(sd,'witness')}`}
function supportingPage(a,d,locked,sd){if(COURSE.nvqUnits){d.tab='files';return `<div class="locked-wrap ${locked?'read-only':''}">${locked?lockedTop(sd.versions.length,'supporting'):''}<section class="card panel"><div class="panel-body">${supportFiles(d,locked)}</div>${locked?'':`<div class="btn-row"><button class="btn" id="submitSection" ${!supportReady(a,d)?'disabled':''}>Submit and lock supporting evidence</button></div>`}</section></div>${versionHistory(sd,'supporting')}`}const statementTab=d.tab!=='files';const ribbon=statementTab?(d.type==='Employer statement'?'EMPLOYER ONLY':'WITNESS ONLY'):'OPTIONAL EVIDENCE';return `<div class="locked-wrap ${locked?'read-only':''}">${locked?lockedTop(sd.versions.length,'supporting'):''}<section class="card panel assessor-only-panel"><span class="submitted-ribbon assessor-ribbon page-ribbon">${ribbon}</span><div class="panel-body"><div class="tabs"><button class="tab ${statementTab?'active':''}" data-tab="statement">Witness / employer</button><button class="tab ${!statementTab?'active':''}" data-tab="files">Certificates / RAMS / other</button></div>${statementTab?supportStatement(a,d,locked):supportFiles(d,locked)}${statementTab?signatureHTML(d,locked,d.type==='Employer statement'?'Employer':'Witness',false):''}</div>${locked?'':`<div class="btn-row"><button class="btn" id="submitSection" ${!supportReady(a,d)?'disabled':''}>Submit this evidence</button></div>`}</section></div>${versionHistory(sd,'supporting')}` }
function supportStatement(a,d,locked){d.ksbEvidence=d.ksbEvidence||[];return `<div class="field"><label>Statement type</label><select class="autosave" data-field="type"><option ${d.type==='Witness testimony'?'selected':''}>Witness testimony</option><option ${d.type==='Employer statement'?'selected':''}>Employer statement</option></select></div><div class="field"><label>${d.type==='Employer statement'?'Employer':'Witness'} name</label><input class="input autosave" data-field="personName" value="${esc(d.personName)}"></div><div class="field"><label>Job role</label><input class="input autosave" data-field="role" value="${esc(d.role)}"></div><div class="field"><label>Organisation</label><input class="input autosave" data-field="organisation" value="${esc(d.organisation)}"></div><div class="field"><label>Activity observed</label><textarea class="autosave" data-field="activity">${esc(d.activity)}</textarea></div><div class="field"><label>All assignment KSBs and /5 scoring</label><p class="help">Every Knowledge, Skill and Behaviour mapped to this assignment is included. Award a score from 1 to 5 for each KSB based on the workplace evidence observed.</p><div class="score-list">${ksbsScoreRows(a,d,locked)}</div></div>${generatedFeedbackHTML(d,false)}`}

function supportFiles(d,locked){return `<div class="upload-box"><h3>Additional evidence</h3><p class="muted"><strong>Photos:</strong> Certificates, RAMS, drawings, delivery notes and other documents.<br><strong>Videos:</strong> Discussions, demonstrations, behaviours, toolbox talks and manufacturer training.</p>${locked?'':`<div class="btn-row" style="justify-content:center"><label class="btn icon-btn">${appIcon('camera','button-icon')}Camera<input class="hide" id="supportCameraInput" type="file" accept="image/*" capture="environment"></label><label class="btn secondary icon-btn">${appIcon('video','button-icon')}Camcorder<input class="hide" id="supportVideoInput" type="file" accept="video/*"></label><label class="btn secondary icon-btn">${appIcon('gallery','button-icon')}Gallery<input class="hide" id="supportGalleryInput" type="file" accept="image/*,video/*" multiple></label></div>`}</div><div class="file-list">${d.files.map((f,i)=>supportFileCard(f,i,locked)).join('')}</div>`}
function supportFileCard(f,i,locked){const isImage=(f.type||'').startsWith('image/'),isVideo=(f.type||'').startsWith('video/'),displayName=(f.evidenceName||'').trim();let preview='';if(isImage&&f.data)preview=`<img src="${f.data}" alt="${esc(displayName||f.name)}" style="width:100%;max-height:220px;object-fit:contain;border-radius:12px;margin-bottom:10px">`;if(isVideo&&f.data)preview=`<video controls preload="metadata" poster="${f.thumbnail||''}" style="width:100%;max-height:240px;border-radius:12px;margin-bottom:10px"><source src="${f.data}" type="${esc(f.type)}"></video>`;return `<div class="file-card" style="display:block">${preview}${locked?`<div><strong>${esc(displayName||f.name)}</strong><div class="muted">Original file: ${esc(f.name)}</div></div>`:`<div class="field" style="margin-bottom:10px"><label>Evidence name (required)</label><input class="input support-file-name" data-file-index="${i}" value="${esc(f.evidenceName||'')}" placeholder="For example: Site induction certificate"></div><div class="muted" style="margin-bottom:10px">Original file: ${esc(f.name)}</div>`}<div style="display:flex;align-items:center;justify-content:space-between;gap:10px"><span class="file-type-label">${appIcon(isImage?'gallery':isVideo?'video':'file','button-icon')}${isImage?'Image':isVideo?'Video':'File'}</span>${locked&&isVideo?`<button class="btn secondary" data-download-file="${i}">Open / save video</button>`:''}${locked?'':`<button class="btn danger" data-remove-file="${i}">Remove</button>`}</div></div>`}

function bindSection(a,s,sd,d,locked){
 document.querySelectorAll('.autosave').forEach(el=>el.oninput=async()=>{d[el.dataset.field]=el.value;await commit(a.n,s,sd);if(s==='statement')updateStatement(a,d);if(s==='supporting'&&el.dataset.field==='type')return renderSection();updateSectionSubmit(a,s,d)});
 document.querySelectorAll('[data-score-code]').forEach(b=>b.onclick=async()=>{d.scores[b.dataset.scoreCode]=+b.dataset.score;await commit(a.n,s,sd);renderSection()});
 document.querySelectorAll('[data-nvq-toggle]').forEach(b=>b.onclick=async()=>{const code=b.dataset.nvqToggle;d.scores=d.scores||{};d.scores[code]=+d.scores[code]===5?0:5;d.feedback=generateNvqNarrative(a,d,s==='practical'?'assessor':'witness');await commit(a.n,s,sd);renderSection()});
 document.querySelectorAll('[data-ksb-evidence-toggle]').forEach(b=>b.onclick=async()=>{const code=b.dataset.ksbEvidenceToggle;d.ksbEvidence=d.ksbEvidence||[];d.ksbEvidence=d.ksbEvidence.includes(code)?d.ksbEvidence.filter(x=>x!==code):[...d.ksbEvidence,code];await commit(a.n,s,sd);renderSection()});
 document.querySelectorAll('[data-lo-photo]').forEach(b=>b.onclick=()=>showOutcomePhotoModal(a.n,s,sd,d,b.dataset.loPhoto,locked));
 document.querySelectorAll('.autosave-discussion-note').forEach(el=>el.oninput=async()=>{d.notes=d.notes||{};d.notes[el.dataset.discussionCode]=el.value;await commit(a.n,s,sd)});
 document.querySelectorAll('[data-record-code]').forEach(b=>b.onclick=()=>recordDiscussionOutcome(a.n,s,sd,d,b.dataset.recordCode));
 document.querySelectorAll('[data-delete-recording]').forEach(b=>b.onclick=async()=>{delete d.recordings[b.dataset.deleteRecording];await commit(a.n,s,sd);renderSection();toast('Recording deleted')});
 const ng=document.getElementById('generateNvqNarrative');if(ng)ng.onclick=async()=>{d.narrativeRevision=Number(d.narrativeRevision||0)+1;d.feedback=generateNvqNarrative(a,d,s==='practical'?'assessor':'witness');if(!d.feedback)return toast('Select at least one learning outcome');await commit(a.n,s,sd);renderSection()};
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
async function recordDiscussionOutcome(n,s,sd,d,code){
 if(!navigator.mediaDevices?.getUserMedia||typeof MediaRecorder==='undefined')return toast('Voice recording is not supported in this browser');
 let stream;try{stream=await navigator.mediaDevices.getUserMedia({audio:true})}catch{return toast('Microphone permission was not granted')}
 const chunks=[],started=Date.now();let recorder;try{recorder=new MediaRecorder(stream)}catch{stream.getTracks().forEach(t=>t.stop());return toast('Unable to start the microphone')}
 app.insertAdjacentHTML('beforeend',`<div class="modal" id="recordingModal"><div class="modal-card recording-modal"><h2>Recording ${esc(code)}</h2><div class="recording-pulse"></div><p class="muted">Discuss this learning outcome, then press Stop recording.</p><button class="btn danger" id="stopRecording">Stop recording</button><button class="btn secondary" id="cancelRecording">Cancel</button></div></div>`);
 const modal=document.getElementById('recordingModal');let cancelled=false;document.getElementById('cancelRecording').onclick=()=>{cancelled=true;recorder.stop()};document.getElementById('stopRecording').onclick=()=>recorder.stop();recorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data)};recorder.onstop=async()=>{stream.getTracks().forEach(t=>t.stop());modal?.remove();if(cancelled)return;const blob=new Blob(chunks,{type:recorder.mimeType||'audio/webm'}),data=await blobToDataUrl(blob),seconds=Math.max(1,Math.round((Date.now()-started)/1000));d.recordings=d.recordings||{};d.recordings[code]={data,type:blob.type,date:today(),duration:formatDuration(seconds)};await commit(n,s,sd);renderSection();toast(`${code} recording autosaved`)};recorder.start();
}
function blobToDataUrl(blob){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(blob)})}
function formatDuration(seconds){const m=Math.floor(seconds/60),s=seconds%60;return `${m}:${String(s).padStart(2,'0')}`}
function showOutcomePhotoModal(n,s,sd,d,code,locked){d.outcomePhotos=d.outcomePhotos||{};const existing=d.outcomePhotos[code];app.insertAdjacentHTML('beforeend',`<div class="modal" id="outcomePhotoModal"><div class="modal-card"><h2>${existing?`${code} evidence photograph`:`Add photograph for ${code}`}</h2>${existing?`<img class="photo-preview" src="${existing.data}" alt="Evidence photograph for ${code}">`:'<p class="muted">Take a clear photograph that directly supports this learning outcome.</p>'}<div class="btn-row">${locked?'<button class="btn" id="closeOutcomePhoto">Close</button>':`<label class="btn icon-btn">${appIcon('camera','button-icon')}Camera<input class="hide" id="outcomeCameraInput" type="file" accept="image/*" capture="environment"></label><label class="btn secondary icon-btn">${appIcon('gallery','button-icon')}Gallery<input class="hide" id="outcomeGalleryInput" type="file" accept="image/*"></label>${existing?'<button class="btn danger" id="removeOutcomePhoto">Delete</button>':''}<button class="btn secondary" id="closeOutcomePhoto">Cancel</button>`}</div></div></div>`);const modal=document.getElementById('outcomePhotoModal');document.getElementById('closeOutcomePhoto').onclick=()=>modal.remove();if(locked)return;const add=async files=>{const f=[...files][0];if(!f||!f.type.startsWith('image/'))return;const data=await compressLandscapeImage(f);d.outcomePhotos[code]={name:f.name,data};await commit(n,s,sd);modal.remove();renderSection();toast(`${code} photograph autosaved`)};document.getElementById('outcomeCameraInput').onchange=e=>add(e.target.files);document.getElementById('outcomeGalleryInput').onchange=e=>add(e.target.files);const remove=document.getElementById('removeOutcomePhoto');if(remove)remove.onclick=async()=>{delete d.outcomePhotos[code];await commit(n,s,sd);modal.remove();renderSection();toast(`${code} photograph removed`)}}
async function addPhotos(files,n,s,sd,d){d.photos=d.photos||[];const remaining=Math.max(0,6-d.photos.length);let added=0;for(const f of [...files].slice(0,remaining)){if(!f.type.startsWith('image/'))continue;const data=await compressLandscapeImage(f);d.photos.push({name:f.name,data});added++}await commit(n,s,sd);renderSection();toast(added?`${added} landscape photo${added===1?'':'s'} autosaved`:'Six photos are already added')}
function compressLandscapeImage(file){return new Promise((res,rej)=>{const r=new FileReader;r.onload=()=>{const img=new Image();img.onload=()=>{const ratio=16/9,srcRatio=img.width/img.height;let sx=0,sy=0,sw=img.width,sh=img.height;if(srcRatio>ratio){sw=img.height*ratio;sx=(img.width-sw)/2}else{sh=img.width/ratio;sy=(img.height-sh)/2}const width=Math.min(1400,Math.round(sw)),height=Math.round(width/ratio),c=document.createElement('canvas');c.width=width;c.height=height;c.getContext('2d').drawImage(img,sx,sy,sw,sh,0,0,width,height);res(c.toDataURL('image/jpeg',.8))};img.onerror=rej;img.src=r.result};r.onerror=rej;r.readAsDataURL(file)})}
function showPracticalPhotoModal(n,s,sd,d,index,locked){const existing=d.photos?.[index];app.insertAdjacentHTML('beforeend',`<div class="modal" id="practicalPhotoModal"><div class="modal-card"><h2>${existing?'Practical Evidence Photo':'Add Practical Evidence'}</h2>${existing?`<img class="photo-preview" src="${existing.data}" alt="Practical evidence photo ${index+1}">`:'<p class="muted">Add 3 landscape photos of the finished product and important details: an overall view, a key detail and a quality check.</p>'}<div class="btn-row">${locked?'<button class="btn" id="closePracticalPhoto">Close</button>':`<label class="btn icon-btn">${appIcon('camera','button-icon')}Camera<input class="hide" id="practicalCameraInput" type="file" accept="image/*" capture="environment"></label><label class="btn secondary icon-btn">${appIcon('gallery','button-icon')}Gallery<input class="hide" id="practicalGalleryInput" type="file" accept="image/*"></label>${existing?'<button class="btn danger" id="removePracticalPhoto">Remove</button>':''}<button class="btn secondary" id="closePracticalPhoto">Cancel</button>`}</div></div></div>`);const modal=document.getElementById('practicalPhotoModal');document.getElementById('closePracticalPhoto').onclick=()=>modal.remove();if(locked)return;const add=async files=>{const f=[...files][0];if(!f||!f.type.startsWith('image/'))return;const data=await compressLandscapeImage(f);d.photos=d.photos||[];d.photos[index]={name:f.name,data};await commit(n,s,sd);modal.remove();renderSection();toast('Practical photo autosaved')};document.getElementById('practicalCameraInput').onchange=e=>add(e.target.files);document.getElementById('practicalGalleryInput').onchange=e=>add(e.target.files);const remove=document.getElementById('removePracticalPhoto');if(remove)remove.onclick=async()=>{d.photos.splice(index,1);await commit(n,s,sd);modal.remove();renderSection();toast('Practical photo removed')}}
async function addSupportingFiles(files,n,s,sd,d,mode='media'){let added=0;for(const f of [...files]){const isImage=f.type.startsWith('image/'),isVideo=f.type.startsWith('video/');if(mode==='image'&&!isImage)continue;if(mode==='video'&&!isVideo)continue;if(!isImage&&!isVideo)continue;try{const data=isImage?await compressLandscapeImage(f):await fileToData(f),thumbnail=isVideo?await createVideoThumbnail(data):'';d.files.push({name:f.name||`${isVideo?'video':'image'}-${Date.now()}`,evidenceName:'',type:f.type||`${isVideo?'video':'image'}/*`,size:f.size,data,thumbnail});added++}catch(e){console.error('Supporting media could not be added',e)}}await commit(n,s,sd);renderSection();toast(added?`${added} supporting file${added===1?'':'s'} autosaved`:'No supported files selected')}
function fileToData(f){return new Promise((res,rej)=>{const r=new FileReader;r.onload=()=>res(r.result);r.onerror=rej;r.readAsDataURL(f)})}
function createVideoThumbnail(src){return new Promise(resolve=>{const v=document.createElement('video');v.muted=true;v.playsInline=true;v.preload='metadata';const done=()=>{try{const c=document.createElement('canvas'),max=720,scale=Math.min(1,max/Math.max(v.videoWidth||1,v.videoHeight||1));c.width=Math.max(1,Math.round((v.videoWidth||640)*scale));c.height=Math.max(1,Math.round((v.videoHeight||360)*scale));c.getContext('2d').drawImage(v,0,0,c.width,c.height);resolve(c.toDataURL('image/jpeg',.72))}catch{resolve('')}finally{v.removeAttribute('src');v.load()}};v.onloadeddata=()=>{try{v.currentTime=Math.min(.25,Math.max(0,(v.duration||1)/10))}catch{done()}};v.onseeked=done;v.onerror=()=>resolve('');v.src=src})}
function downloadStoredFile(f){if(!f?.data)return toast('Video file unavailable');const a=document.createElement('a');a.href=f.data;a.download=evidenceDownloadName(f);document.body.appendChild(a);a.click();a.remove()}
function evidenceDownloadName(f){const original=String(f?.name||''),dot=original.lastIndexOf('.'),ext=dot>0?original.slice(dot):'',title=String(f?.evidenceName||'Supporting evidence').trim().replace(/[\\/:*?"<>|]/g,'-').replace(/^\.+/,'').replace(/\s+/g,' ').slice(0,120)||'Supporting evidence';return title+ext}
function wordCount(t){return t.trim()?t.trim().split(/\s+/).length:0}
function coverage(a,text){const words=text.toLowerCase();const common=new Set(['and','the','using','use','work','working','to','of','a','an','in','with','from']);const out={};a.ksbs.forEach(([c,s])=>{const keys=s.toLowerCase().split(/[^a-z0-9]+/).filter(w=>w.length>3&&!common.has(w));out[c]=keys.some(w=>words.includes(w))});return out}
function hasOutcomePhotos(codes,d){return codes.every(([code])=>!!d.outcomePhotos?.[code]?.data)}
function statementReady(a,d){return wordCount(d.text)>=100&&Object.values(d.outcomePhotos||{}).some(photo=>!!photo?.data)&&!!d.signature}
function updateStatement(a,d){const wc=document.getElementById('wordCount');if(wc)wc.textContent=wordCount(d.text);const b=document.getElementById('submitSection');if(b)b.disabled=!statementReady(a,d)}
function supportReady(a,d){if(d.tab==='files'||d.type==='Supporting evidence')return d.files.length>0&&d.files.every(f=>(f.evidenceName||'').trim())&&(COURSE.nvqUnits||selectedKsbCodes(a,d).length>0);if(COURSE.nvqUnits){const selected=selectedNvqOutcomes(a,d);return !!(d.personName&&d.activity&&d.feedback?.trim()&&d.signature&&selected.length)}const allCodes=a.ksbs.map(([code])=>code),allSelected=allCodes.length>0&&allCodes.every(code=>(d.ksbEvidence||[]).includes(code)),allScored=allCodes.every(code=>+d.scores?.[code]>=1&&+d.scores?.[code]<=5);return !!(d.personName&&d.role&&d.organisation&&d.activity&&d.signature&&allSelected&&allScored)}
function updateSubmit(a,d){const b=document.getElementById('submitSection');if(b)b.disabled=!supportReady(a,d)}
function updateSectionSubmit(a,s,d){const b=document.getElementById('submitSection');if(b)b.disabled=!canSubmit(a,s,d)}
function observationReady(a,d){const selected=selectedNvqOutcomes(a,d);return !!(d.tutor&&d.activity&&d.feedback?.trim()&&d.signature&&selected.length>=1&&hasOutcomePhotos(selected,d))}
function canSubmit(a,s,d){if(COURSE.nvqUnits&&s==='practical')return observationReady(a,d);if(s==='practical')return !!(d.tutor&&d.activity&&d.signature&&(d.photos||[]).length>=1&&selectedPracticalSkillCodes(a,d).length>0);if(s==='photos')return (d.photos||[]).length===6&&!!d.signature;if(s==='statement')return statementReady(a,d);if(s==='discussion')return !!(d.assessor&&d.activity&&d.signature&&Object.keys(d.recordings||{}).length);return supportReady(a,d)}
async function submitSection(a,s,sd,d){if(!canSubmit(a,s,d)){if(COURSE.nvqUnits&&s==='practical')return toast('Complete the assessor details, signature and at least one selected Learning Outcome with a photograph');return toast('Complete all required fields first')}d.submitted=true;d.date=today();const frozen=structuredClone(d);sd.versions.push(frozen);sd.draft=frozen;await commit(a.n,s,sd);const pack=state.data[packStatusKey(a.n)];if(pack?.uploaded){state.data[packStatusKey(a.n)]={...pack,downloaded:false,uploaded:false,changedAt:new Date().toISOString()};await saveData()}renderSection();const assessed=!COURSE.nvqUnits&&(s==='practical'||(s==='supporting'&&d.tab!=='files'));toast(assessed?`Attempt submitted: ${totalScore(a,d,s==='practical')}`:'Submitted and locked')}

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
 const resetOptional=document.getElementById('resetOptionalUnit');if(resetOptional)resetOptional.onclick=async()=>{const hasEvidence=evidenceSections().some(section=>sectionHasEvidence(9,section));if(hasEvidence)return toast('Remove Evidence Pack 9 evidence before changing the optional unit');if(!window.confirm('Reset the optional unit selection?'))return;delete state.data[optionalSelectionKey()];await saveData();document.getElementById('devModal').remove();state.view='home';render();toast('Optional unit selection reset')};
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
 const sections={};evidenceSections().forEach(s=>sections[s]=sectionData(n,s).versions.map(v=>structuredClone(v)));
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
app.addEventListener('click',e=>{const nav=e.target.closest('[data-nav]');if(!nav)return;const target=nav.dataset.nav;if(target==='academy'){state.view='academy';state.assignment=null;state.section=null}else if(target==='resources'){state.view='resources';state.assignment=null;state.section=null;state.editingNoteId=null}else{state.view='home';state.assignment=null;state.section=null}render();window.scrollTo({top:0,behavior:'smooth'})});

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


/* EPA_INTERVIEW_FRAMEWORK_V140 */
const EPA_INTERVIEW_FRAMEWORK=`You are an experienced End-Point Assessor for construction apprenticeships.`;
const EPA_MCQ_FRAMEWORK=THEORY_MCQ_FRAMEWORK_V140;
