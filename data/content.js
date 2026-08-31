/* Edit THIS file (data/content.js), save, then refresh the browser.
   Same rules as JSON: keep quotes and commas. Do not delete the first or last line. */
window.PORTFOLIO_DATA = {
  "_howToEdit": [
    "This is the only file you need to edit for words, links, and image paths.",
    "Keep commas between items. Keep quotes around text. Save this file, then refresh the browser.",
    "Do not delete keys (the names on the left). You can change the values on the right.",
    "Image paths start with assets/ — put new images in the assets folder first.",
    "To feature a project on the home page, set featured to true. To hide it from Featured, set featured to false.",
    "To add a project: copy an existing project object in the projects list, then change its id, page, and text."
  ],
  "site": {
    "name": "Muhammad Arslan",
    "role": "UI/UX & Product Designer",
    "pageTitle": "Wardah Shafi — Product Designer",
    "tagline": "Thinking. Tinkering. Thinking.",
    "bio": [
      "Four years in, I've worked alongside bold startups and established companies, learning that the best products are born where empathy shakes hands with good constraints.",
      "Design, for me, lives in the details. The kind most people only notice when they're wrong."
    ],
    "linkedIn": {
      "before": "The rest? It's on",
      "label": "LinkedIn",
      "url": "https://www.linkedin.com/in/wardah-shafi-039305191/",
      "iconLight": "assets/1f71287ab3ddf118a5a64f9d50e4deca1db97a0c.svg",
      "iconDark": "assets/linkedin-inline-dark.svg"
    },
    "email": "hi@wardahshafi.com",
    "location": "🌥️ Lahore, PK",
    "footerName": "Wardazel",
    "copyrightYear": 2026,
    "copyrightLabel": "Copyright",
    "avatar": "assets/c1f2ce87b40942461ef5f58e1e2ac44313d00e10.png",
    "ogImage": "https://www.wardahshafi.com/assets/og-cover.png",
    "favicon": "assets/favicon.png",
    "appleTouchIcon": "assets/apple-touch-icon.png",
    "viewWorkLabel": "View work",
    // "homeHero": {
    //   "poster": "assets/home-hero.jpg",
    //   "webm": "assets/home-hero.webm",
    //   "mp4": "assets/home-hero.mp4"
    // },
    "connect": [
      {
        "url": "mailto:hi@wardahshafi.com",
        "label": "Email",
        "icon": "assets/2ac3777b00583de8a9df279d2df5f080b7227d7d.svg",
        "iconWidth": 20,
        "iconHeight": 20,
        "name": "hi@wardahshafi.com",
        "description": "Email"
      },
      {
        "url": "https://www.linkedin.com/in/wardah-shafi-039305191/",
        "label": "LinkedIn",
        "icon": "assets/44e2ce2692e59f489df085c880b6ec22bcbe0d8d.svg",
        "iconWidth": 20,
        "iconHeight": 20,
        "name": "wardah-shafi",
        "description": "LinkedIn"
      },
      {
        "url": "https://x.com/wardazzled",
        "label": "X.com",
        "icon": "assets/b1bcf95c38acf248c09a0366631bcac57970a4d6.svg",
        "iconWidth": 20,
        "iconHeight": 20,
        "name": "wardazzled",
        "description": "X.com"
      }
    ],
    "sectionLabels": {
      "featured": "Featured",
      "projects": "Projects",
      "connect": "Connect"
    },
    "workPageTitle": "Work — Wardah Shafi",
    "jumpNext": "Jump to next project"
  },
  "projects": [
    {
      "id": "virtualmd",
      "page": "virtualmd.html",
      "featured": true,
      "home": {
        "name": "VirtualMD",
        "description": "Personal AI health assistant",
        "logo": "assets/vmd-logo.svg",
        "logoWidth": 21,
        "logoHeight": 16
      },
      "work": {
        "page": "virtualmd.html",
        "video": {
          "poster": "assets/work-virtualmd.jpg",
          "label": "VirtualMD product demo",
          "webm": "assets/work-virtualmd.webm",
          "mp4": "assets/work-virtualmd.mp4"
        },
        "liveUrl": "https://virtualmd.app/",
        "liveLabel": "VirtualMD.app",
        "preview": "assets/preview-virtualmd.png",
        "about": "VirtualMD is an AI-powered health assistant that helps you understand symptoms, manage your family's health, explore medical topics and get personalized health guidance anytime, anywhere.",
        "summary": [
          "Instant AI health insights",
          "Manage family health",
          "Personalized guidance",
          "Private & secure"
        ],
        "year": "2026",
        "with": "Ron Rubin",
        "viewName": "VirtualMD",
        "emoji": "🩺️",
        "crumbName": "VirtualMD",
        "crumbTagline": "Your personal AI health assistant"
      },
      "caseStudy": {
        "layout": "featured",
        "css": "css/virtualmd.css",
        "heroMediaClass": "vmd-hero-media",
        "brandLogo": {
          "src": "assets/b3d3aa81f2912bcf9bab5dd29be9906182a28042.png",
          "width": 23,
          "height": 17
        },
        "eyebrow": "VirtualMD · 2026 · 0 → 1",
        "heroTitle": "Your personal AI health assistant",
        "heroVideo": {
          "poster": "assets/work-virtualmd.jpg",
          "webm": "assets/work-virtualmd.webm",
          "mp4": "assets/work-virtualmd.mp4",
          "label": "VirtualMD — AI health chat demo"
        },
        "stats": [
          {
            "label": "Role",
            "value": "Sole Product Designer"
          },
          {
            "label": "Timeline",
            "value": "4 months · 0 → 1"
          },
          {
            "label": "Team",
            "value": "2 Engineers, 1 PM"
          },
          {
            "label": "Scope",
            "value": "Web · iOS · Android"
          }
        ],
        "sections": [
          {
            "id": "overview",
            "label": "Overview",
            "blocks": [
              {
                "type": "text",
                "title": "Getting patients to the right specialist faster",
                "body": "VirtualMD is an AI-powered health assistant that helps you understand symptoms, manage your family's health, explore medical topics and get personalized health guidance anytime, anywhere."
              },
              {
                "type": "grid3",
                "items": [
                  {
                    "title": "Product strategy",
                    "body": "Mapping the AI health landscape and defining what VirtualMD should become."
                  },
                  {
                    "title": "Prototyping & testing",
                    "body": "Exploring broadly in the solution space and testing with real users."
                  },
                  {
                    "title": "Iterating with feedback",
                    "body": "Refining every interaction based on usability testing and clinical review."
                  }
                ]
              }
            ]
          },
          {
            "id": "problem",
            "label": "Problem",
            "blocks": [
              {
                "type": "text",
                "title": "Patients are stuck in a slow and misguided care path",
                "body": "76% of patients see a GP first when they actually need a specialist. The average specialist wait is 26 days. This is the space VirtualMD needed to fill and the product we inherited wasn't filling it."
              },
              {
                "type": "annotatedScreenshot",
                "imageLight": "assets/87f791e7044e8bffd8c399b4ce16df341b018db4.png",
                "imageDark": "assets/vmd-prob-screen-dark.png",
                "alt": "Old VirtualMD interface — the consultation screen",
                "left": [
                  {
                    "main": "The primary action, buried at the bottom.",
                    "sub": "Below the fold for most users."
                  }
                ],
                "right": [
                  {
                    "main": "Decorative greeting. No way to type a reply.",
                    "sub": "It looked like a chat but It wasn't."
                  },
                  {
                    "main": "Four cards, same weight. Where do you start?",
                    "sub": "Nobody clicked. Everyone hesitated."
                  }
                ],
                "mobileNotes": [
                  {
                    "main": "Decorative greeting. No way to type a reply.",
                    "sub": "It looked like a chat but It wasn't."
                  },
                  {
                    "main": "Four cards, same weight. Where do you start?",
                    "sub": "Nobody clicked. Everyone hesitated."
                  },
                  {
                    "main": "The primary action, buried at the bottom.",
                    "sub": "Below the fold for most users."
                  }
                ]
              },
              {
                "type": "quote",
                "text": "An experience that buried the core patient journey"
              }
            ]
          },
          {
            "id": "research",
            "label": "Research",
            "blocks": [
              {
                "type": "text",
                "title": "So we talked to the people who live this every day",
                "body": "12 user interviews. Empathy mapping. Journey mapping. The same pattern kept surfacing: people don't need more options, they need the right one."
              },
              {
                "type": "photoGrid",
                "stack": [
                  {
                    "src": "assets/23f69de7a874dee795952e2b6e32204a6aeabe98.png",
                    "alt": "User research session"
                  },
                  {
                    "src": "assets/92ada0f585735ff8e08faef6f4b6b6e924c1f07d.png",
                    "alt": "User research session"
                  }
                ],
                "tall": {
                  "src": "assets/f80ae9a98e89f0064ab16313bb108e687aa8674b.png",
                  "alt": "Research affinity mapping"
                }
              },
              {
                "type": "text",
                "title": "...I don't know if I need a cardiologist or a GP. Why is it asking me to choose?",
                "body": "The research made one design principle obvious: never make the user choose what they don't know."
              }
            ]
          },
          {
            "id": "empathy-map",
            "label": "Empathy map",
            "blocks": [
              {
                "type": "text",
                "title": "What does it feel like to use a product you don't trust?",
                "body": "We mapped what Sarah said, thought, did, and felt during her first session with the old design. The gap between what the product offered and what she needed to feel safe became the redesign brief."
              },
              {
                "type": "themedImage",
                "wrapClass": "vmd-emp",
                "light": "assets/vmd-empathy.png",
                "dark": "assets/vmd-empathy-dark.png",
                "alt": "VirtualMD empathy map — Sarah's Says, Thinks, Does and Feels"
              }
            ]
          },
          {
            "id": "competitive",
            "label": "Competitive analysis",
            "blocks": [
              {
                "type": "text",
                "title": "We audited the AI landscape",
                "body": "Different AI chat tools give single confident responses with no visible logic. That blind spot became our entry point."
              },
              {
                "type": "competitive",
                "mobile": "assets/vmd-competitive-mobile-photos.png",
                "light": "assets/vmd-competitive.png",
                "dark": "assets/vmd-competitive-new-dark.png",
                "alt": "Competitive AI tools moodboard"
              }
            ]
          },
          {
            "id": "ia",
            "label": "Information architecture",
            "blocks": [
              {
                "type": "text",
                "title": "We mapped the product structure before designing the interface",
                "body": "The platform was organized around patient goals, making consultations, specialists, profiles, and medical history easier to navigate."
              },
              {
                "type": "themedImage",
                "wrapClass": "vmd-ia",
                "light": "assets/vmd-ia.png",
                "dark": "assets/vmd-ia-dark.png",
                "alt": "VirtualMD information architecture tree"
              },
              {
                "type": "quote",
                "text": "Flexible entry paths for different user intents"
              }
            ]
          },
          {
            "id": "userflow",
            "label": "Userflow",
            "blocks": [
              {
                "type": "text",
                "title": "We mapped every path from entry to outcome",
                "body": "The golden path runs center — type symptoms, get routed, receive guidance, share with doctor. Five branches handle authentication, family, modes, and error recovery."
              },
              {
                "type": "themedImage",
                "wrapClass": "vmd-uf",
                "light": "assets/vmd-userflow.png",
                "dark": "assets/vmd-userflow-dark.png",
                "alt": "VirtualMD userflow diagram"
              }
            ]
          },
          {
            "id": "persona",
            "label": "Customer journey map",
            "blocks": [
              {
                "type": "text",
                "title": "Sarah's journey — from the first symptom to the doctor's office",
                "body": "38. Marketing manager. Two kids. Elderly parents in another state, she's the one who has to figure out what to do next — usually with little time and no medical background."
              },
              {
                "type": "journeyStack",
                "images": [
                  {
                    "light": "assets/vmd-journey-cards.png",
                    "dark": "assets/vmd-journey-cards-dark.png",
                    "alt": "Sarah's expectations, goals and frustrations as sticky notes"
                  },
                  {
                    "light": "assets/vmd-journey-matrix.png",
                    "dark": "assets/vmd-journey-matrix-dark.png",
                    "alt": "VirtualMD customer journey map matrix"
                  }
                ]
              },
              {
                "type": "insight",
                "title": "...the design didn't make the AI smarter. It made the AI legible.",
                "body": "Each AI response shows three possible causes ranked by likelihood — updating per-message as new symptoms emerge. Trust built through transparency, not confidence."
              }
            ]
          },
          {
            "id": "final-design",
            "label": "Final design",
            "blocks": [
              {
                "type": "text",
                "title": "A consultation that starts with a question not a menu",
                "body": "Chat-first. Describe what you feel. The system figures out who you need. The prototype below walks through all five feature systems from the first symptom to the doctor's email."
              },
              {
                "type": "vmdFinal",
                "barLight": "assets/vmd-browser-bar.png",
                "barDark": "assets/vmd-browser-bar-dark.png",
                "video": {
                  "poster": "assets/cs-vmd-mockup.jpg",
                  "webm": "assets/cs-vmd-mockup.webm",
                  "mp4": "assets/cs-vmd-mockup.mp4",
                  "label": "VirtualMD final design — prototype walkthrough"
                },
                "mobileLight": "assets/vmd-final-mobile.png",
                "mobileDark": "assets/vmd-final-mobile-dark.png",
                "mobileAlt": "VirtualMD final design — initial consultation screen"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "bayut",
      "page": "bayut.html",
      "featured": true,
      "home": {
        "name": "Bayut KSA",
        "description": "Real estate marketplace",
        "logo": "assets/bayut-logo.svg",
        "logoWidth": 24,
        "logoHeight": 19
      },
      "work": {
        "page": "bayut.html",
        "video": {
          "poster": "assets/work-bayut.jpg",
          "label": "Bayut KSA product demo",
          "webm": "assets/work-bayut.webm",
          "mp4": "assets/work-bayut.mp4"
        },
        "liveUrl": "https://apps.apple.com/us/app/bayut-ksa-real-estate/id1504036401",
        "liveLabel": "Bayut.KSA",
        "preview": "assets/preview-bayut.png",
        "about": "TruCheck™ is an advanced authentication solution available on the Profolio platform that enhances the transparency and credibility of real estate listings through real-world verification.",
        "summary": [
          "5km on-site verification",
          "Real-time photo capture",
          "Verified badge on listings",
          "Search ranking boost"
        ],
        "year": "2024",
        "with": "Dubizzle",
        "viewName": "Bayut KSA",
        "emoji": "🏠",
        "crumbName": "Bayut KSA",
        "crumbTagline": "Real estate marketplace"
      },
      "caseStudy": {
        "layout": "featured",
        "css": "css/bayut.css",
        "heroMediaClass": "bayut-hero-media",
        "brandLogo": {
          "src": "assets/bayut-logo.svg",
          "width": 24,
          "height": 19
        },
        "eyebrow": "Bayut KSA · 2024 · 0 → 1",
        "heroTitle": "TruCheck™ — Property authentication on Bayut KSA",
        "heroVideo": {
          "poster": "assets/work-bayut.jpg",
          "webm": "assets/work-bayut.webm",
          "mp4": "assets/work-bayut.mp4",
          "label": "Bayut KSA — TruCheck demo"
        },
        "stats": [
          {
            "label": "Role",
            "value": "Sole Product Designer"
          },
          {
            "label": "Timeline",
            "value": "2 months · 0 → 1"
          },
          {
            "label": "Team",
            "value": "2 Engineers, 1 PM"
          },
          {
            "label": "Scope",
            "value": "iOS · Android"
          }
        ],
        "sections": [
          {
            "id": "overview",
            "label": "Overview",
            "blocks": [
              {
                "type": "text",
                "title": "Building trust in Real Estate listings with TruCheck™",
                "body": "TruCheck™ is an advanced authentication solution available on the Profolio platform that enhances the transparency and credibility of real estate listings. It enables agents to verify the availability and validity of property listings through real-world verification."
              },
              {
                "type": "grid3",
                "items": [
                  {
                    "title": "Product strategy",
                    "body": "Mapping the trust landscape in Saudi real estate and defining what TruCheck™ solves."
                  },
                  {
                    "title": "Prototyping & testing",
                    "body": "Exploring on-site verification flows and testing with real agents in the field."
                  },
                  {
                    "title": "Iterating with feedback",
                    "body": "Refining every interaction based on agent feedback and stakeholder review."
                  }
                ]
              }
            ]
          },
          {
            "id": "problem",
            "label": "Problem",
            "blocks": [
              {
                "type": "text",
                "title": "Outdated listings are breaking trust in Real Estate",
                "body": "The real estate market is often plagued with outdated or inaccurate property listings, leading to a poor user experience and a lack of trust in the platform. Existing checks like REGA in Bayut KSA help validate listing authenticity to some extent. Still, a more robust solution is needed for Bayut KSA to verify the availability of the listings actively."
              },
              {
                "type": "themedImage",
                "wrapClass": "bayut-prd",
                "light": "assets/bayut-prd.png",
                "dark": "assets/bayut-prd-dark.png",
                "alt": "TruCheck Agent PRD with highlighted requirement: System validates that the agent is within a 5km radius"
              }
            ]
          },
          {
            "id": "user-persona",
            "label": "User persona",
            "blocks": [
              {
                "type": "text",
                "title": "Meet Khalid — the agent we designed for",
                "body": "A mid-career real estate agent in Riyadh, manages dozens of active property listings while competing in a crowded market. His success depends on convincing buyers that his listings are current, trustworthy, and worth contacting him about."
              },
              {
                "type": "themedImage",
                "wrapClass": "bayut-persona",
                "light": "assets/bayut-persona.png",
                "dark": "assets/bayut-persona-dark.png",
                "alt": "User persona — Khalid Al-Dossari, real estate agent: demographics, goals, motivations and pain points"
              },
              {
                "type": "text",
                "title": "…My listings are real. Buyers just don't know it",
                "body": "That sentence — said by three out of five agents we spoke to."
              }
            ]
          },
          {
            "id": "empathy-map",
            "label": "Empathy map",
            "blocks": [
              {
                "type": "text",
                "title": "What does it feel like when your effort is invisible?",
                "body": "We mapped what Khalid said, thought, did, and felt during a typical week of managing listings. The pattern kept repeating: the platform rewarded fresh uploads, not listing quality or upkeep."
              },
              {
                "type": "themedImage",
                "wrapClass": "bayut-empathy",
                "light": "assets/bayut-empathy.png",
                "dark": "assets/bayut-empathy-dark.png",
                "alt": "Bayut empathy map for Khalid — Says / Thinks / Does / Feels quadrants"
              }
            ]
          },
          {
            "id": "userflow",
            "label": "Userflow",
            "blocks": [
              {
                "type": "text",
                "title": "We mapped every path from TruCheck™ CTA to verified badge",
                "body": "The happy path was simple but trust would be built (or broken) at the edges. Each side branch became a deliberate UX decision about how much friction was worth it."
              },
              {
                "type": "themedImage",
                "wrapClass": "bayut-userflow",
                "light": "assets/bayut-userflow.png",
                "dark": "assets/bayut-userflow-dark.png",
                "alt": "Bayut TruCheck userflow — from listing detail CTA to verified badge approval/rejection"
              }
            ]
          },
          {
            "id": "final-design",
            "label": "Final design",
            "blocks": [
              {
                "type": "text",
                "title": "One CTA, one radius check, a few photos and you're done",
                "body": "The prototype below walks through the entire TruCheck flow from the listing detail CTA, through location verification and photo capture, to the moment the verified badge appears on the listing."
              },
              {
                "type": "bayutFinal",
                "video": {
                  "poster": "assets/cs-bayut-mockup.jpg",
                  "webm": "assets/cs-bayut-mockup.webm",
                  "mp4": "assets/cs-bayut-mockup.mp4",
                  "label": "Bayut KSA final design — TruCheck flow"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "id": "thb",
      "page": "thb.html",
      "featured": false,
      "home": {
        "name": "The Human Blueprint",
        "description": "Wellness & self-discovery app",
        "logo": "assets/ccdc321baacc4a21164ce3bc91c88fb2ae705ffa.svg",
        "logoWidth": 26,
        "logoHeight": 26
      },
      "work": {
        "page": "thb.html",
        "video": {
          "poster": "assets/work-thb.jpg",
          "label": "The Human Blueprint product demo",
          "webm": "assets/work-thb.webm",
          "mp4": "assets/work-thb.mp4"
        },
        "liveUrl": "https://thehumanblueprintpodcast.com/",
        "liveLabel": "TheHumanBlueprint.app",
        "preview": "assets/preview-thb.png",
        "about": "THB is companion wellness app for Laura Dahl's podcast community. It transforms podcast listening into a guided self-reflection experience through journaling, emotional insights, and community ecosystem.",
        "summary": [
          "Turn listening into reflection",
          "Track emotional growth",
          "Connect with community",
          "Free & premium resources"
        ],
        "year": "2025",
        "with": "Laura Dahl",
        "viewName": "THB",
        "emoji": "🎙️",
        "crumbName": "The Human Blueprint",
        "crumbTagline": "Wellness & self-discovery app"
      },
      "caseStudy": {
        "layout": "standard",
        "brandLogo": {
          "src": "assets/3819ab66d7f2db939cb63a172b62471756784084.svg"
        },
        "headerTagline": "Emotional wellness & self-discovery app",
        "liveUrl": "https://thehumanblueprintpodcast.com/",
        "sidebar": [
          {
            "label": "Project name",
            "value": "The Human Blueprint"
          },
          {
            "label": "Scope of work",
            "value": "UX strategy, Product design, Visual design"
          },
          {
            "label": "Platform",
            "value": "iOS App"
          },
          {
            "label": "Audience",
            "value": "Podcast listeners, Self-discovery seekers, Communities committed to emotional growth."
          },
          {
            "label": "Overview",
            "value": "THB is companion wellness app for Laura Dahl's podcast community. It transforms podcast listening into a guided self-reflection experience through journaling, emotional insights, and community ecosystem."
          },
          {
            "label": "Conclusion",
            "value": "I designed a system that turned inspiration into action, scattered reflections into community, and passive listening into active growth."
          }
        ],
        "sections": [
          {
            "id": "problem",
            "label": "Problem",
            "heading": "Problem",
            "title": "Laura's listeners are Inspired but disconnected after listening",
            "paragraphs": [
              "Laura's podcast had hundreds of thousands of listeners. But the moment they finished an episode, there was nowhere for them to go. No app to reflect in. No place to journal. No community to share with.",
              "Laura couldn't see their transformation or support their growth. The real problem wasn't a feature gap. It was a behavior gap: How do you move people from inspiration to action? How do you turn scattered reflection into community?"
            ],
            "phones": {
              "wide": true,
              "m2": false,
              "items": [
                {
                  "type": "image",
                  "src": "assets/67bdf0e62e5df61cef1fe65e654109e9f80514ef.png",
                  "alt": "THB app screen",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/c855bcdbae1eba7e6e98884bde073ca104cb4e7b.png",
                  "alt": "THB app screen",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/e027cb6e8ab425635ebfc3a2f7d68d4c8bb63fc0.png",
                  "alt": "THB app screen",
                  "hideOnMobile": true
                },
                {
                  "type": "image",
                  "src": "assets/ef2a8b2b9df4d15f718d164a64e471f81c6daf4c.png",
                  "alt": "THB app screen",
                  "hideOnMobile": true
                }
              ]
            }
          },
          {
            "id": "onboarding",
            "label": "Onboarding",
            "heading": "Onboarding",
            "title": "From clinical intake to gentle self-reflection",
            "paragraphs": [
              "I designed a conversational onboarding that feels like a gentle self-reflection exercise, not a clinical intake form. Each step asks one thing at a time, explains why, and uses natural language."
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": [
                {
                  "type": "video",
                  "poster": "assets/cs-thb-onboarding.jpg",
                  "label": "THB onboarding screen",
                  "webm": "assets/cs-thb-onboarding.webm",
                  "mp4": "assets/cs-thb-onboarding.mp4",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/ec657a46d53a9a6f25b169601960e5c4bca41ef1.png",
                  "alt": "Onboarding screen",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/4550d5d162d5114e012cfdf19d46a9034ae27a60.png",
                  "alt": "Onboarding screen",
                  "hideOnMobile": true
                }
              ]
            }
          },
          {
            "id": "podcast",
            "label": "Podcast",
            "heading": "Podcast",
            "title": "Embedding reflection in the podcast experience",
            "paragraphs": [
              "Instead of just hosting episode transcripts, the app guides listeners through practical reflection exercises immediately after each episode—before the emotional momentum fades."
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": [
                {
                  "type": "video",
                  "poster": "assets/cs-thb-home.jpg",
                  "label": "THB home screen",
                  "webm": "assets/cs-thb-home.webm",
                  "mp4": "assets/cs-thb-home.mp4",
                  "hideOnMobile": false
                },
                {
                  "type": "video",
                  "poster": "assets/cs-thb-podcast.jpg",
                  "label": "THB podcast screen",
                  "webm": "assets/cs-thb-podcast.webm",
                  "mp4": "assets/cs-thb-podcast.mp4",
                  "hideOnMobile": false
                }
              ]
            }
          },
          {
            "id": "activity",
            "label": "Activity",
            "heading": "Activity",
            "title": "From scattered reflections to a visible growth story",
            "paragraphs": [
              "Listeners see their complete reflection history as a personal timeline of growth. Each completed reflection becomes a visible marker of commitment, transforming abstract self-improvement into documented, tangible progress that compounds over time."
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": [
                {
                  "type": "video",
                  "poster": "assets/cs-thb-profile.jpg",
                  "label": "THB activity / profile screen",
                  "webm": "assets/cs-thb-profile.webm",
                  "mp4": "assets/cs-thb-profile.mp4",
                  "hideOnMobile": false
                }
              ]
            }
          },
          {
            "id": "community",
            "label": "Community",
            "heading": "Community",
            "title": "From feeling alone to belonging in community",
            "paragraphs": [
              "Instead of one global feed, I created episode-specific discussion spaces where listeners can share their reflections and vulnerabilities without the pressure of being judged or compared."
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": [
                {
                  "type": "image",
                  "src": "assets/d6bf90151462d17c987794dbe09662d0cfdc3a6a.png",
                  "alt": "Community screen",
                  "hideOnMobile": true
                },
                {
                  "type": "video",
                  "poster": "assets/cs-thb-community.jpg",
                  "label": "THB community screen",
                  "webm": "assets/cs-thb-community.webm",
                  "mp4": "assets/cs-thb-community.mp4",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/ce9c74a1be9c47e39728054b3071d5904a984806.png",
                  "alt": "Community screen",
                  "hideOnMobile": false
                }
              ]
            }
          },
          {
            "id": "resource-library",
            "label": "Resource library",
            "heading": "Resource Library",
            "title": "From gatekeeping to strategic access",
            "paragraphs": [
              "THB offers a mix of free and premium resources workbooks, guided exercises, and self-growth tools designed to support reflection beyond the podcast."
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": [
                {
                  "type": "video",
                  "poster": "assets/cs-thb-resource-library.jpg",
                  "label": "THB resource library screen",
                  "webm": "assets/cs-thb-resource-library.webm",
                  "mp4": "assets/cs-thb-resource-library.mp4",
                  "hideOnMobile": false
                },
                {
                  "type": "video",
                  "poster": "assets/cs-thb-cart.jpg",
                  "label": "THB cart screen",
                  "webm": "assets/cs-thb-cart.webm",
                  "mp4": "assets/cs-thb-cart.mp4",
                  "hideOnMobile": false
                }
              ]
            }
          },
          {
            "id": "takeaways",
            "label": "Takeaways",
            "heading": "Takeaways",
            "title": "Principles that made The Human Blueprint work",
            "paragraphs": [
              "Wellness design isn't about engagement—it's about emotional safety. Remove friction from reflection, add intentionality to community, and let growth compound naturally.",
              "Freemium works when you lead with free. Users invest in premium because they experienced value first. Service before monetization builds lasting loyalty."
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": []
            }
          }
        ]
      }
    },
    {
      "id": "swarppay",
      "page": "swarppay.html",
      "featured": false,
      "home": {
        "name": "Swarp Pay",
        "description": "The future of money",
        "logo": "assets/65428f95c8be2852c3a4b113f1ab8bd12a133dcb.svg",
        "logoWidth": 20,
        "logoHeight": 23
      },
      "work": {
        "page": "swarppay.html",
        "video": {
          "poster": "assets/work-swarppay.jpg",
          "label": "SwarpPay product demo",
          "webm": "assets/work-swarppay.webm",
          "mp4": "assets/work-swarppay.mp4"
        },
        "liveUrl": "https://play.google.com/store/apps/details?id=com.swarppay.app&pcampaignid=web_share",
        "liveLabel": "SwarpPay.app",
        "preview": "assets/preview-swarppay.png",
        "about": "SwarpPay is a next-generation fintech platform enabling seamless hybrid payments between fiat and cryptocurrency with live conversion, fast transaction processing, and an intuitive interface.",
        "summary": [
          "Instant hybrid payments",
          "Real-time conversion rates",
          "Get paid in seconds via QR",
          "Earn referral rewards"
        ],
        "year": "2025",
        "with": "Eddine",
        "viewName": "Swarp Pay",
        "emoji": "💸",
        "crumbName": "Swarp Pay",
        "crumbTagline": "The future of money"
      },
      "caseStudy": {
        "layout": "standard",
        "brandLogo": {
          "src": "assets/6503e1ef60ac1403ea7ec0a88ce7016fc061d948.svg",
          "width": 21,
          "height": 24
        },
        "headerTagline": "The future of money",
        "liveUrl": "https://play.google.com/store/apps/details?id=com.swarppay.app&pcampaignid=web_share",
        "sidebar": [
          {
            "label": "Project name",
            "value": "SwarpPay"
          },
          {
            "label": "Scope of work",
            "value": "UX strategy, Product design, Visual design"
          },
          {
            "label": "Platform",
            "value": "iOS App"
          },
          {
            "label": "Audience",
            "value": "Digital-first users wanting seamless bridge between traditional banking and crypto assets."
          },
          {
            "label": "Overview",
            "value": "SwarpPay is a next-generation fintech platform enabling seamless hybrid payments between fiat and cryptocurrency with live conversion, fast transaction processing, and an intuitive interface."
          },
          {
            "label": "Conclusion",
            "value": "I designed a system that bridges two financial worlds without sacrificing security or simplicity. By transparently handling complexity, users gain confidence, not anxiety in managing hybrid assets."
          }
        ],
        "sections": [
          {
            "id": "problem",
            "label": "Problem",
            "heading": "Problem",
            "title": "The fiat–crypto divide creates friction in everyday finance",
            "paragraphs": [
              "Users want access to cryptocurrency but face a fragmented experience: separate wallets for different assets, complex conversion processes, high fees, and security anxiety. Traditional banking feels secure but slow. Crypto feels fast but risky.",
              "The challenge wasn't choosing between traditional banking or crypto. It was eliminating the need to choose."
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": [
                {
                  "type": "video",
                  "poster": "assets/cs-swarppay-splash.jpg",
                  "label": "SwarpPay splash screen",
                  "webm": "assets/cs-swarppay-splash.webm",
                  "mp4": "assets/cs-swarppay-splash.mp4",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/48b3c12b79afd985d6b20dbd15b81753a1e7d225.png",
                  "alt": "SwarpPay welcome screen",
                  "hideOnMobile": false
                }
              ]
            }
          },
          {
            "id": "dashboard",
            "label": "Dashboard",
            "heading": "Dashboard",
            "title": "From multiple wallets to one view",
            "paragraphs": [
              "A unified dashboard showing all assets in one place—fiat balances, crypto holdings, and live conversion rates. Users see their total wealth exposure without switching apps. This single source of truth reduces cognitive load and builds confidence."
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": [
                {
                  "type": "video",
                  "poster": "assets/cs-swarppay-home.jpg",
                  "label": "SwarpPay dashboard / home screen",
                  "webm": "assets/cs-swarppay-home.webm",
                  "mp4": "assets/cs-swarppay-home.mp4",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/dde2c8f8fab50b47e5737d29d071757c8b088971.png",
                  "alt": "Dashboard assets",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/1c8f258694a4b90f2dcf49fb7774836cc39a03cf.png",
                  "alt": "Dashboard crypto",
                  "hideOnMobile": true
                }
              ]
            }
          },
          {
            "id": "conversion",
            "label": "Conversion",
            "heading": "Conversion",
            "title": "From asset selection to instant swap",
            "paragraphs": [
              "Stop guessing what your conversion will actually cost. Enter an amount and instantly see the exact rate, fee, slippage, and delivery time before you confirm. Choose your provider and tap Swap—complete transparency, zero surprises."
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": [
                {
                  "type": "image",
                  "src": "assets/26817b4a01e4ca6d262e351690380326b1666c32.png",
                  "alt": "Conversion select asset",
                  "hideOnMobile": false
                },
                {
                  "type": "video",
                  "poster": "assets/cs-swarppay-swapping.jpg",
                  "label": "SwarpPay swapping screen",
                  "webm": "assets/cs-swarppay-swapping.webm",
                  "mp4": "assets/cs-swarppay-swapping.mp4",
                  "hideOnMobile": false
                }
              ]
            }
          },
          {
            "id": "smart-send",
            "label": "Smart send",
            "heading": "Smart send",
            "title": "From amount selection to smart routing",
            "paragraphs": [
              "Enter an amount. Confirm the total with fees displayed. Send completes with instant confirmation. Whether paying in fiat or crypto, smart routing handles all conversions invisibly."
            ],
            "phones": {
              "wide": true,
              "m2": false,
              "items": [
                {
                  "type": "image",
                  "src": "assets/d388a8d1b86e7e8e562e79b7eb4a4bb3204704eb.png",
                  "alt": "Send enter amount",
                  "hideOnMobile": true
                },
                {
                  "type": "video",
                  "poster": "assets/cs-swarppay-send-enter-amount.jpg",
                  "label": "SwarpPay send — enter amount screen",
                  "webm": "assets/cs-swarppay-send-enter-amount.webm",
                  "mp4": "assets/cs-swarppay-send-enter-amount.mp4",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/cbf7fe4579f947820cbc5b2ecd482b02a9e5f1c6.png",
                  "alt": "Send routing",
                  "hideOnMobile": true
                },
                {
                  "type": "image",
                  "src": "assets/3e61370d3225d18d2b97d106149742c8632c4e26.png",
                  "alt": "Send complete",
                  "hideOnMobile": false
                }
              ]
            }
          },
          {
            "id": "get-paid",
            "label": "Get paid",
            "heading": "Get paid instantly",
            "title": "From QR scan to verified receipt",
            "paragraphs": [
              "Senders scan QR code in seconds. Once payment arrives, a confirmation screen displays the exact amount received, transaction details, and sender information. Receiving money has never been simpler or faster."
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": [
                {
                  "type": "video",
                  "poster": "assets/cs-swarppay-receive.jpg",
                  "label": "SwarpPay receive / QR screen",
                  "webm": "assets/cs-swarppay-receive.webm",
                  "mp4": "assets/cs-swarppay-receive.mp4",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/91ffbea993ce0934d61d2141862a7b2e7fdd9b2e.png",
                  "alt": "Payment confirmed",
                  "hideOnMobile": false
                }
              ]
            }
          },
          {
            "id": "refer-earn",
            "label": "Refer & earn",
            "heading": "Refer & earn",
            "title": "From one referral code to unlimited rewards",
            "paragraphs": [
              "Share your unique referral code with friends. Each sign-up unlocks milestone rewards. View all available rewards in the Rewards catalog and track your earnings, claim rewards with one tap, and reach Pro Tier for exclusive benefits."
            ],
            "phones": {
              "wide": true,
              "m2": false,
              "items": [
                {
                  "type": "video",
                  "poster": "assets/cs-swarppay-refer-and-earn.jpg",
                  "label": "SwarpPay refer & earn screen",
                  "webm": "assets/cs-swarppay-refer-and-earn.webm",
                  "mp4": "assets/cs-swarppay-refer-and-earn.mp4",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/2914cc3b2d20ba89ae68d31b8d68ebf34785dc92.png",
                  "alt": "Referral milestones",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/ba0c366b326c296af174d7f3de03e327242cb2cc.png",
                  "alt": "Rewards catalog",
                  "hideOnMobile": true
                },
                {
                  "type": "image",
                  "src": "assets/fe108a69da3b441fff84ec4fae2c2150f25ae69d.png",
                  "alt": "Pro tier rewards",
                  "hideOnMobile": true
                }
              ]
            }
          },
          {
            "id": "takeaways",
            "label": "Takeaways",
            "heading": "Takeaways",
            "title": "Principles that made SwarpPay work",
            "paragraphs": [
              "Bridging two financial systems is complex. Users shouldn't see that complexity, but they should feel it was handled correctly.",
              "Users are skeptical of crypto platforms. Transparent fees, non-custodial options, and clear security aren't optional—they're foundational."
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": []
            }
          }
        ]
      }
    },
    {
      "id": "holos",
      "page": "holos.html",
      "featured": false,
      "home": {
        "name": "Holos",
        "description": "Pickleball club management",
        "logo": "assets/holos-logo.svg",
        "logoWidth": 11,
        "logoHeight": 20
      },
      "work": {
        "page": "holos.html",
        "video": {
          "poster": "assets/work-holos.jpg",
          "label": "Holos product demo",
          "webm": "assets/work-holos.webm",
          "mp4": "assets/work-holos.mp4"
        },
        "liveUrl": "https://apps.apple.com/us/app/holos-pickleball-tennis/id6763506501",
        "liveLabel": "Holos.app",
        "preview": "assets/preview-holos.png",
        "about": "Holos is a unified admin platform built to simplify pickleball operations. Manage open play sessions, leagues, tournaments, and multi-venue activities from one centralized interface.",
        "summary": [
          "Manage open play & leagues",
          "Multi-venue activities",
          "Member roster & skill tracking",
          "Private & secure"
        ],
        "year": "2026",
        "with": "Ron Rubin",
        "viewName": "Holos",
        "emoji": "🎾",
        "crumbName": "Holos",
        "crumbTagline": "Pickleball club management"
      },
      "caseStudy": {
        "layout": "standard",
        "brandLogo": {
          "src": "assets/80ad4984b400f28fdc74cb85beb8731977c62cac.svg",
          "width": 10,
          "height": 18
        },
        "headerTagline": "Pickleball club management",
        "liveUrl": "https://apps.apple.com/us/app/holos-pickleball-tennis/id6763506501",
        "sidebar": [
          {
            "label": "Project name",
            "value": "Holos"
          },
          {
            "label": "Scope of work",
            "value": "UX strategy, Product design, Visual design"
          },
          {
            "label": "Platform",
            "value": "iOS App"
          },
          {
            "label": "Audience",
            "value": "Pickleball club owners, Tournament organizers, Facility managers."
          },
          {
            "label": "Overview",
            "value": "Holos is a unified admin platform built to simplify pickleball operations. Manage open play sessions, leagues, tournaments, and multi-venue activities from one centralized interface."
          },
          {
            "label": "Conclusion",
            "value": "I designed a system that turned scattered spreadsheets into instant visibility, manual bracket creation into intelligent automation, and reactive management into proactive control."
          }
        ],
        "sections": [
          {
            "id": "problem",
            "label": "Problem",
            "heading": "Problem",
            "title": "Nothing Is unified, So admins juggle everything manually",
            "paragraphs": [
              "Tournaments live in spreadsheets. League schedules in emails. Player ratings scattered. Court bookings conflict. No central visibility across events.",
              "How do you manage everything from one place? How do you prevent conflicts across event types? How do you grow community when operations are fragmented?"
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": [
                {
                  "type": "video",
                  "poster": "assets/cs-holos-splash.jpg",
                  "label": "Holos splash screen",
                  "webm": "assets/cs-holos-splash.webm",
                  "mp4": "assets/cs-holos-splash.mp4",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/efc559d8d18b3ac23021d74576e73b754047c5f2.png",
                  "alt": "Holos app screen",
                  "hideOnMobile": false
                }
              ]
            }
          },
          {
            "id": "onboarding",
            "label": "Onboarding",
            "heading": "Onboarding",
            "title": "From setup to ready",
            "paragraphs": [
              "Set club details, configure admin roles, customize venue settings. Get started instantly and begin managing operations."
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": [
                {
                  "type": "image",
                  "src": "assets/6e78fd133a5165c0909b4d04ba9fa5498b7a5e8d.png",
                  "alt": "Onboarding screen",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/9f8d702d89bf74104cac63f9a75ad28bd3f264b7.png",
                  "alt": "Onboarding screen",
                  "hideOnMobile": true
                },
                {
                  "type": "video",
                  "poster": "assets/cs-holos-lets-go.jpg",
                  "label": "Holos let's go / onboarding screen",
                  "webm": "assets/cs-holos-lets-go.webm",
                  "mp4": "assets/cs-holos-lets-go.mp4",
                  "hideOnMobile": false
                }
              ]
            }
          },
          {
            "id": "home",
            "label": "Home",
            "heading": "Home",
            "title": "From manual planning to automated coordination",
            "paragraphs": [
              "Create tournaments, leagues, open play, events in one place. Set rules, capacity, skill levels—the system handles registration and validation."
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": [
                {
                  "type": "video",
                  "poster": "assets/cs-holos-home.jpg",
                  "label": "Holos home screen",
                  "webm": "assets/cs-holos-home.webm",
                  "mp4": "assets/cs-holos-home.mp4",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/7ec42f9e06aa20d0259ce06a41a3a9fcbca8240a.png",
                  "alt": "Home screen",
                  "hideOnMobile": false
                }
              ]
            }
          },
          {
            "id": "fixtures",
            "label": "Fixtures",
            "heading": "Fixtures",
            "title": "From hours of bracket work to seconds",
            "paragraphs": [
              "Auto-generate fair brackets based on skill ratings. Override when needed. Transparent, no favoritism."
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": [
                {
                  "type": "image",
                  "src": "assets/36b60625143500b8bc284d3d22c1dd113fd80e27.png",
                  "alt": "Fixtures screen",
                  "hideOnMobile": true
                },
                {
                  "type": "image",
                  "src": "assets/4ef4b501a1ecdb66516b0defdf6db8541ea3522d.png",
                  "alt": "Fixtures screen",
                  "hideOnMobile": false
                },
                {
                  "type": "video",
                  "poster": "assets/cs-holos-fixtures.jpg",
                  "label": "Holos fixtures screen",
                  "webm": "assets/cs-holos-fixtures.webm",
                  "mp4": "assets/cs-holos-fixtures.mp4",
                  "hideOnMobile": false
                }
              ]
            }
          },
          {
            "id": "courts",
            "label": "Courts",
            "heading": "Courts",
            "title": "From double-bookings to optimized courts",
            "paragraphs": [
              "Manage all courts and events at once. Prevent conflicts. Auto-assign based on demand. Full visibility."
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": [
                {
                  "type": "image",
                  "src": "assets/5f58aeec416df28fd26385ecb39abbea79eddad1.png",
                  "alt": "Courts screen",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/6b2da4af9d78a7218da27e8c590f198ac029194f.png",
                  "alt": "Courts screen",
                  "hideOnMobile": false
                }
              ]
            }
          },
          {
            "id": "score-conflicts",
            "label": "Score conflicts",
            "heading": "Score conflicts",
            "title": "From manual updates to real-time sync",
            "paragraphs": [
              "Update scores courtside. System auto-advances players, cascades changes, notifies instantly."
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": [
                {
                  "type": "image",
                  "src": "assets/1c3ce3246c905e090dcce54c674ede5da8f4ddaa.png",
                  "alt": "Score conflicts screen",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/0c20c48ad65adcf539085cca9b90f109bd620ff4.png",
                  "alt": "Score conflicts screen",
                  "hideOnMobile": false
                }
              ]
            }
          },
          {
            "id": "settings",
            "label": "Settings",
            "heading": "Settings",
            "title": "From scattered controls to one hub",
            "paragraphs": [
              "Manage hours, members, subscriptions, payments, security—everything your club needs in one place."
            ],
            "phones": {
              "wide": true,
              "m2": true,
              "items": [
                {
                  "type": "image",
                  "src": "assets/a644a600ad3627801df39d8942981e11ffb09b72.png",
                  "alt": "Settings screen",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/0492d7f26916050fb5c3874c18172227415916a5.png",
                  "alt": "Settings screen",
                  "hideOnMobile": true
                },
                {
                  "type": "video",
                  "poster": "assets/cs-holos-settings.jpg",
                  "label": "Holos settings screen",
                  "webm": "assets/cs-holos-settings.webm",
                  "mp4": "assets/cs-holos-settings.mp4",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/fb1558ea6649fc0be1ceb18cc5c33ef2611bc3d8.png",
                  "alt": "Settings screen",
                  "hideOnMobile": true
                }
              ]
            }
          },
          {
            "id": "takeaways",
            "label": "Takeaways",
            "heading": "Takeaways",
            "title": "Principles that made Holos work",
            "paragraphs": [
              "Automated bracket generation and scheduling reduce admin burden. But override controls preserve judgment. Trust builds when power stays with the expert.",
              "When scores update instantly and changes cascade through the system, admins manage proactively instead of reactively. Friction disappears."
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": []
            }
          }
        ]
      }
    },
    {
      "id": "vybstk",
      "page": "vybstk.html",
      "featured": false,
      "home": {
        "name": "VYBSTK",
        "description": "Creator owned social platform",
        "logo": "assets/vybstk-logo.svg",
        "logoWidth": 22,
        "logoHeight": 22
      },
      "work": {
        "page": "vybstk.html",
        "video": {
          "poster": "assets/work-vybstk.jpg",
          "label": "VYBSTK product demo",
          "webm": "assets/work-vybstk.webm",
          "mp4": "assets/work-vybstk.mp4"
        },
        "liveUrl": "https://apps.apple.com/us/app/vybstak/id6754565040",
        "liveLabel": "VYBSTK.com",
        "preview": "assets/preview-vybstk.png",
        "about": "VYBSTK is a creator-owned social platform where authentic expression wins. Post freely, get honest feedback from real people, and discover creators who genuinely match your energy.",
        "summary": [
          "Post freely without anxiety",
          "Get honest reactions",
          "Unlock archetypes",
          "Discover authentic creators"
        ],
        "year": "2026",
        "with": "Seb",
        "viewName": "VYBSTK",
        "emoji": "🎨",
        "crumbName": "VYBSTK",
        "crumbTagline": "Creator owned social platform"
      },
      "caseStudy": {
        "layout": "standard",
        "brandLogo": {
          "src": "assets/a270c957668e5564235d33ccb7a160837f686ae8.png",
          "width": 21,
          "height": 20
        },
        "headerTagline": "Creator owned social platform",
        "liveUrl": "https://apps.apple.com/us/app/vybstak/id6754565040",
        "sidebar": [
          {
            "label": "Project name",
            "value": "VYBSTK"
          },
          {
            "label": "Scope of work",
            "value": "UX strategy, Product design, Visual design"
          },
          {
            "label": "Platform",
            "value": "iOS App"
          },
          {
            "label": "Audience",
            "value": "Content creators & Conscious consumers."
          },
          {
            "label": "Overview",
            "value": "VYBSTK puts creators first. No follower pressure. No algorithm anxiety. Creators post freely, express authentically, and get rewarded for originality. Users discover content that genuinely resonates with them and earn archetypes that reflect their true taste."
          },
          {
            "label": "Conclusion",
            "value": "I designed a system that removed performance anxiety from creation, transformed passive consumption into intentional discovery, and built a community where creators feel genuinely rewarded for being themselves."
          }
        ],
        "sections": [
          {
            "id": "problem",
            "label": "Problem",
            "heading": "Problem",
            "title": "Creators are trapped in performance-driven expression",
            "paragraphs": [
              "Social media promised creators a voice. Instead, it gave them anxiety. Every post felt like a performance. Creators obsessed over follower counts, algorithm changes, and engagement metrics.",
              "The real problem wasn't a feature gap. It was a behavior gap: How do you shift creators from performing for metrics to expressing for themselves?"
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": [
                {
                  "type": "image",
                  "src": "assets/9f42e842697deac294e48d018e0dcc6440926704.png",
                  "alt": "Problem screen 1",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/0e0415fa1b3a09df433df4e509bdadd2a7565f71.png",
                  "alt": "Problem screen 2",
                  "hideOnMobile": false
                }
              ]
            }
          },
          {
            "id": "onboarding",
            "label": "Onboarding",
            "heading": "Onboarding",
            "title": "From blank profile to authentic identity",
            "paragraphs": [
              "A conversational onboarding that feels like self-discovery. One question at a time. By the time you're done, your profile is set, your taste is mapped, and you're ready to discover creators who genuinely match your energy."
            ],
            "phones": {
              "wide": true,
              "m2": false,
              "items": [
                {
                  "type": "image",
                  "src": "assets/a8bb8c6b9178f57c8c9c2a57e3a1d62f065a294b.png",
                  "alt": "Onboarding screen 1",
                  "hideOnMobile": true
                },
                {
                  "type": "image",
                  "src": "assets/5ea5021213e754d11035b28b488ca646fca5afe5.png",
                  "alt": "Onboarding screen 2",
                  "hideOnMobile": true
                },
                {
                  "type": "image",
                  "src": "assets/863d1f63825d1540ca5e88dfd19f235575804f04.png",
                  "alt": "Onboarding screen 3",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/9861bdca8b3fbafe0f3b780cd0483cea40885192.png",
                  "alt": "Onboarding screen 4",
                  "hideOnMobile": false
                }
              ]
            }
          },
          {
            "id": "vibe-system",
            "label": "Vibe system",
            "heading": "The vibe system",
            "title": "From passive scrolling to intentional discovery",
            "paragraphs": [
              "Instead of hearts and comments, users express their genuine reaction: Vibe (love it), Meh (neutral), or Nope (not for me). No algorithm gaming. Just authentic response."
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": [
                {
                  "type": "video",
                  "poster": "assets/cs-vybstk-home.jpg",
                  "label": "VYBSTK home / vibe feed screen",
                  "webm": "assets/cs-vybstk-home.webm",
                  "mp4": "assets/cs-vybstk-home.mp4",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/2451f2297362b5fcec57351f742b96d991338feb.png",
                  "alt": "Vibe system screen 2",
                  "hideOnMobile": false
                }
              ]
            }
          },
          {
            "id": "archetypes",
            "label": "Archetypes",
            "heading": "Archetypes",
            "title": "From vanity metrics to meaningful identity",
            "paragraphs": [
              "As you vibe content, you unlock archetypes that reflect your authentic identity. Love inspirational content? Become The Visionary. Into creative posts? Meet The Creator. These aren't badges to chase—celebrations of who you actually are."
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": [
                {
                  "type": "image",
                  "src": "assets/99710f5cb807a087aebcf14d16c073da3c50499c.png",
                  "alt": "Archetypes screen",
                  "hideOnMobile": false
                }
              ]
            }
          },
          {
            "id": "posting",
            "label": "Posting",
            "heading": "Posting",
            "title": "From inspiration to authentic post",
            "paragraphs": [
              "A creation flow that removes friction from posting. Capture your moment. Add context or music if you want. Share with creators and users who will genuinely vibe with it."
            ],
            "phones": {
              "wide": true,
              "m2": false,
              "items": [
                {
                  "type": "video",
                  "poster": "assets/cs-vybstk-create-post.jpg",
                  "label": "VYBSTK create post screen",
                  "webm": "assets/cs-vybstk-create-post.webm",
                  "mp4": "assets/cs-vybstk-create-post.mp4",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/6cc19eaf2b91be38766ab668d2cc566c73cec0ea.png",
                  "alt": "Posting screen 2",
                  "hideOnMobile": true
                },
                {
                  "type": "image",
                  "src": "assets/56bb655bd97773cc150692f0ca7c75e68a5a41a3.png",
                  "alt": "Posting screen 3",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/1a9e4f2087b754cd846a9cc5fe45ba0d17a0c87d.png",
                  "alt": "Posting screen 4",
                  "hideOnMobile": true
                }
              ]
            }
          },
          {
            "id": "vybscore",
            "label": "VYBScore",
            "heading": "VYBScore",
            "title": "From follower anxiety to authentic progress tracking",
            "paragraphs": [
              "As you create on VYBSTK, you'll see your VYBScore—how your posts are resonating with real people. No follower count. No algorithm black box. Just honest feedback from genuine humans who engaged with your work."
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": [
                {
                  "type": "video",
                  "poster": "assets/cs-vybstk-profile.jpg",
                  "label": "VYBSTK profile screen",
                  "webm": "assets/cs-vybstk-profile.webm",
                  "mp4": "assets/cs-vybstk-profile.mp4",
                  "hideOnMobile": false
                },
                {
                  "type": "image",
                  "src": "assets/245df4267ffde9263cb3500e710bd39e1ebb37e8.png",
                  "alt": "VYBScore screen 2",
                  "hideOnMobile": false
                }
              ]
            }
          },
          {
            "id": "takeaways",
            "label": "Takeaways",
            "heading": "Takeaways",
            "title": "Principles that made VYBSTK work",
            "paragraphs": [
              "When creators stop optimizing for algorithms, they start creating from a real place. Authenticity thrives when the system doesn't game behavior.",
              "Give creators control over their narrative. Remove follower pressure. Let them post freely and celebrate originality through genuine connection, not algorithmic favor."
            ],
            "phones": {
              "wide": false,
              "m2": false,
              "items": []
            }
          }
        ]
      }
    }
  ]
};
