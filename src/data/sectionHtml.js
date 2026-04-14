import {
  achievements,
  capabilityGroups,
  certifications,
  education,
  experience,
  heroStats,
  interests,
  profile,
  projects,
} from './resumeData';

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const projectLinks = projects
  .filter((project) => project.url)
  .map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'CreativeWork',
      name: project.title,
      url: project.url,
      description: project.summary,
    },
  }));

export const structuredData = [
  JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      jobTitle: profile.title,
      description: profile.summary,
      email: profile.email,
      telephone: profile.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Prayagraj',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'IN',
      },
      sameAs: [profile.linkedinUrl],
      knowsAbout: [
        'Frontend Development',
        'WordPress Development',
        'WooCommerce',
        'Elementor Pro',
        'Advanced Custom Fields',
        'Responsive Web Design',
      ],
    },
    null,
    2
  ),
  JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Selected Projects by Ankit Yadav',
      itemListElement: projectLinks,
    },
    null,
    2
  ),
  JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: `${profile.name} Portfolio`,
      description: profile.summary,
      inLanguage: 'en-IN',
      mainEntity: {
        '@type': 'Person',
        name: profile.name,
      },
    },
    null,
    2
  ),
];

export const preloaderHtml = `<div id="preloader">
         <div class="preloader-content">
            <div class="preloader-name">${escapeHtml(profile.name)}</div>
            <div class="flip-wrapper">
               <div class="flip-text">
                  <div class="flip-item">Frontend Developer</div>
                  <div class="flip-item">WordPress Developer</div>
                  <div class="flip-item">WooCommerce Builds</div>
                  <div class="flip-item">Responsive UI</div>
                  <div class="flip-item">Live Client Work</div>
                  <div class="flip-item">Frontend Developer</div>
               </div></div></div></div>`;

export const progressHtml = `<div id="progress-container">
         <div id="progress-bar"></div>
      </div>`;

export const navHtml = `<nav class="navbar navbar-expand-lg fixed-top" role="navigation" aria-label="Main navigation">
         <div class="container">
            <a class="navbar-brand" href="#" aria-label="${escapeHtml(profile.name)} home">${escapeHtml(profile.name.toUpperCase())}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <i class="ph ph-list"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
               <ul class="navbar-nav ms-auto gap-2">
                  <li class="nav-item"><a class="nav-link" href="#hero">Portfolio</a></li>
                  <li class="nav-item"><a class="nav-link" href="#experience">Experience</a></li>
                  <li class="nav-item"><a class="nav-link" href="#courses-attended">Education</a></li>
                  <li class="nav-item"><a class="nav-link" href="#research">Skills</a></li>
                  <li class="nav-item"><a class="nav-link" href="#references">Work</a></li>
                  <li class="nav-item"><a class="nav-link" href="#books">Projects</a></li>
                  <li class="nav-item"><a class="nav-link" href="#awards">Credentials</a></li>
                  <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
               </ul>
            </div>
         </div>
      </nav>`;

export const heroHtml = `<section id="hero" aria-labelledby="hero-heading">
         <div class="container">
            <span class="mono-label">Overview</span>
            <div class="row align-items-start mt-3">
               <div class="col-lg-8 col-md-8">
                  <h1 id="hero-heading" class="hero-title">${escapeHtml(profile.name)} - ${escapeHtml(profile.title)}</h1>
                  <p class="hero-subtitle">
                     HTML5 · CSS3 · Bootstrap · JavaScript · WordPress · WooCommerce
                  </p>
                  <p class="hero-desc">
                     ${escapeHtml(profile.heroPitch)}
                  </p>
                  <div class="row g-3">
                     ${heroStats
                       .map(
                         (stat) => `<div class="col-6 col-md-3">
                        <div class="stat-box">
                           <span class="stat-number">${escapeHtml(stat.value)}</span>
                           <span class="stat-label">${escapeHtml(stat.label)}</span>
                        </div>
                     </div>`
                       )
                       .join('')}
                  </div>
               </div>
               <div class="col-lg-4 col-md-4 mt-5 mt-md-0">
                  <div class="academic-card bg-dark text-white border-0 d-flex flex-column h-100">
                     <span class="mono-label" style="color:#d7d7d7;border-bottom-color:rgba(255,255,255,0.2);">Quick Profile</span>
                     <h2 class="text-white border-bottom border-light pb-2">Available For</h2>
                     <p class="small flex-grow-1">
                        Frontend website builds, WordPress development, WooCommerce implementation, responsive redesigns, and ongoing content-driven website improvements.
                     </p>
                     <div class="small">
                        <p class="mb-3"><strong>Location:</strong><br>${escapeHtml(profile.location)}</p>
                        <p class="mb-3"><strong>Email:</strong><br><a href="mailto:${escapeHtml(profile.email)}" class="text-white">${escapeHtml(profile.email)}</a></p>
                        <p class="mb-3"><strong>Phone:</strong><br><a href="tel:${escapeHtml(profile.phone)}" class="text-white">${escapeHtml(profile.phone)}</a></p>
                        <p class="mb-0"><strong>LinkedIn:</strong><br><a href="${escapeHtml(profile.linkedinUrl)}" target="_blank" rel="noopener noreferrer" class="text-white">${escapeHtml(profile.linkedinLabel)}</a></p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="row mt-5">
               <div class="col-md-4">
                  <div class="p-3 border border-dark bg-light h-100">
                     <span class="mono-label">Current Role</span>
                     <p class="mb-0">Frontend &amp; WordPress Developer at Westonik, working on production business websites and WooCommerce builds.</p>
                  </div>
               </div>
               <div class="col-md-4 mt-3 mt-md-0">
                  <div class="p-3 border border-dark bg-light h-100">
                     <span class="mono-label">Core Stack</span>
                     <p class="mb-0">HTML5, CSS3, JavaScript (ES6), Bootstrap, WordPress, WooCommerce, Elementor Pro, ACF, Git.</p>
                  </div>
               </div>
               <div class="col-md-4 mt-3 mt-md-0">
                  <div class="p-3 border border-dark bg-light h-100">
                     <span class="mono-label">Career Focus</span>
                     <p class="mb-0">Clean frontend execution, CMS-driven delivery, and practical e-commerce experiences that are easy to manage after launch.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>`;

const renderExperienceItems = experience
  .map(
    (item, index) => `<li class="${index < experience.length - 1 ? 'mb-4 pb-3 border-bottom' : ''}">
                           <strong>${escapeHtml(item.role)}</strong>
                           <span class="text-muted">${escapeHtml(item.company)} · ${escapeHtml(item.period)}</span>
                           <ul class="list-group list-group-flush mt-3">
                              ${item.bullets
                                .map((bullet) => `<li class="list-group-item">${escapeHtml(bullet)}</li>`)
                                .join('')}
                           </ul>
                        </li>`
  )
  .join('');

export const experienceHtml = `<section id="experience" aria-labelledby="experience-heading">
         <div class="container">
            <span class="mono-label">Professional Record</span>
            <h2 id="experience-heading" class="mb-5">Experience</h2>
            <div class="row">
               <div class="col-md-9">
                  <div class="academic-card">
                     <ul class="list-unstyled">
                        ${renderExperienceItems}
                     </ul>
                  </div>
               </div>
               <div class="col-md-3">
                  <div class="academic-card bg-dark text-white border-0 d-flex flex-column h-100">
                     <h3 class="text-white border-bottom border-light pb-2">Delivery Snapshot</h3>
                     <p class="small flex-grow-1">
                        Worked across design-to-code execution, WordPress implementation, and e-commerce delivery for live business websites.
                     </p>
                     <ul class="list-unstyled small mb-0">
                        <li class="mb-3">Frontend builds from Figma and PSD references</li>
                        <li class="mb-3">Static to WordPress migrations</li>
                        <li class="mb-3">WooCommerce setup for product-led businesses</li>
                        <li class="mb-0">Collaboration with backend teams for integrated features</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>`;

export const courses_attendedHtml = `<section id="courses-attended" aria-labelledby="courses-heading">
         <div class="container">
            <span class="mono-label">Academic Background</span>
            <h2 id="courses-heading" class="mb-4">Education</h2>
            <div class="row">
               <div class="col-12">
                  <div class="academic-card">
                     <ul class="list-group list-group-flush">
                        ${education
                          .map(
                            (item) => `<li class="list-group-item">
                           <strong>${escapeHtml(item.title)}</strong><br>
                           ${escapeHtml(item.institution)}<br>
                           <span class="text-muted">${escapeHtml(item.period)}</span>
                        </li>`
                          )
                          .join('')}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>`;

export const researchHtml = `<section id="research" aria-labelledby="research-heading">
         <div class="container">
            <span class="mono-label">Technical Skills</span>
            <h2 id="research-heading" class="mb-4">Frontend, CMS &amp; Workflow</h2>
            <div class="row">
               ${capabilityGroups
                 .map(
                   (group) => `<div class="col-md-6">
                  <div class="academic-card h-100">
                     <h3 class="border-bottom pb-2 mb-3">${escapeHtml(group.title)}</h3>
                     <ul class="list-group list-group-flush">
                        ${group.items.map((item) => `<li class="list-group-item">${escapeHtml(item)}</li>`).join('')}
                     </ul>
                  </div>
               </div>`
                 )
                 .join('')}
            </div>
         </div>
      </section>`;

export const research_totalHtml = `<section id="research-total">
         <div class="container">
            <div class="concluding-box">
               Frontend and WordPress developer delivering responsive interfaces, WooCommerce implementations, and maintainable website experiences for real client work.
            </div>
         </div>
      </section>`;

export const referencesHtml = `<section id="references" aria-labelledby="references-heading">
         <div class="container">
            <span class="mono-label">Selected Work</span>
            <h2 id="references-heading">Project Highlights</h2>
            <div class="mt-4">
               ${projects
                 .map(
                   (project, index) => `<div class="ref-item">
                  <span class="ref-id">[${String(index + 1).padStart(2, '0')}]</span>
                  <div class="ref-text"><strong>${escapeHtml(project.title)}</strong> · ${escapeHtml(project.type)}. ${escapeHtml(project.summary)}${
                     project.url
                       ? ` <a href="${escapeHtml(project.url)}" target="_blank" rel="noopener noreferrer">[Visit]</a>`
                       : ''
                   }</div>
               </div>`
                 )
                 .join('')}
            </div>
         </div>
      </section>`;

export const conclusionHtml = `<section id="conclusion">
         <div class="container">
            <div class="concluding-box">
               I enjoy building practical, business-focused websites that balance clean UI, easy content management, and dependable frontend implementation.
            </div>
         </div>
      </section>`;

export const booksHtml = `<section id="books" aria-labelledby="books-heading">
         <div class="container">
            <span class="mono-label">Featured Projects</span>
            <h2 id="books-heading">Client &amp; Product Work</h2>
            <div class="swiper mySwiper">
               <div class="swiper-wrapper">
                  ${projects
                    .map(
                      (project) => `<div class="swiper-slide">
                     ${
                       project.url
                         ? `<a href="${escapeHtml(project.url)}" target="_blank" rel="noopener noreferrer" class="book-wrapper">`
                         : '<div class="book-wrapper">'
                     }
                        <div class="book-item-3d project-card">
                           <span class="mono-label project-type">${escapeHtml(project.type)}</span>
                           <strong class="project-title">${escapeHtml(project.title)}</strong>
                           <p class="project-copy">${escapeHtml(project.summary)}</p>
                           <span class="project-stack">${escapeHtml(project.stack)}</span>
                        </div>
                     ${project.url ? '</a>' : '</div>'}
                  </div>`
                    )
                    .join('')}
               </div>
               <div class="swiper-pagination"></div>
               <div class="swiper-button-next" style="color: black;"></div>
               <div class="swiper-button-prev" style="color: black;"></div>
            </div>
            <ul aria-label="Featured projects by ${escapeHtml(profile.name)}" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;">
               ${projects
                 .map(
                   (project) =>
                     `<li>${project.url ? `<a href="${escapeHtml(project.url)}" rel="noopener noreferrer">` : ''}${escapeHtml(project.title)} - ${escapeHtml(project.summary)}${project.url ? '</a>' : ''}</li>`
                 )
                 .join('')}
            </ul>
         </div>
      </section>`;

export const awardsHtml = `<section id="awards" aria-labelledby="awards-heading">
         <div class="container">
            <div class="row g-5">
               <div class="col-md-6">
                  <span class="mono-label">Credentials</span>
                  <h2 id="awards-heading">Certifications</h2>
                  <div class="academic-card" style="height: fit-content;">
                     <ul class="custom-list">
                        ${certifications.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
                     </ul>
                  </div>
               </div>
               <div class="col-md-6">
                  <span class="mono-label">Professional Notes</span>
                  <h2>Achievements &amp; Interests</h2>
                  <div class="academic-card" style="background-color: #fcfcfc; height: fit-content;">
                     <ul class="list-unstyled">
                        ${achievements
                          .map(
                            (item) => `<li class="d-flex mb-3">
                           <i class="ph ph-seal-check fs-4 me-3" aria-hidden="true"></i>
                           <span>${escapeHtml(item)}</span>
                        </li>`
                          )
                          .join('')}
                        <li class="d-flex">
                           <i class="ph ph-seal-check fs-4 me-3" aria-hidden="true"></i>
                           <span><strong>Interests:</strong> ${escapeHtml(interests.join(', '))}</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>`;

export const contactHtml = `<section id="contact" aria-labelledby="contact-heading">
         <div class="container">
            <span class="mono-label">Get in Touch</span>
            <h2 id="contact-heading" class="mb-4">Contact Us</h2>
            <div class="row justify-content-center">
               <div class="col-lg-12">
                  <div class="academic-card">
                     <p class="mb-4">Feel free to reach out for frontend development, WordPress work, WooCommerce implementation, or collaboration on responsive business websites.</p>
                     <form id="contact-form" novalidate>
                        <div class="mb-3">
                           <label for="name" class="form-label mono-label">Full Name</label>
                           <input type="text" class="form-control" id="name" name="name" required placeholder="Your Name" autocomplete="name">
                        </div>
                        <div class="mb-3">
                           <label for="email" class="form-label mono-label">Email Address</label>
                           <input type="email" class="form-control" id="email" name="email" required placeholder="your.email@example.com" autocomplete="email">
                        </div>
                        <div class="mb-3">
                           <label for="subject" class="form-label mono-label">Subject</label>
                           <input type="text" class="form-control" id="subject" name="subject" required placeholder="Frontend / WordPress / WooCommerce Inquiry">
                        </div>
                        <div class="mb-4">
                           <label for="message" class="form-label mono-label">Message</label>
                           <textarea class="form-control" id="message" name="message" rows="5" required placeholder="Tell me a bit about your project or requirement."></textarea>
                        </div>
                        <input type="text" name="honeypot_url" value="" style="display: none;" autocomplete="off" tabindex="-1" aria-hidden="true">
                        <div class="mb-4">
                          <label class="form-label mono-label" for="captcha-answer">Security Check</label>
                          <div class="d-flex flex-wrap align-items-center gap-2">
                            <span id="captcha-question" class="me-2" style="font-family: var(--font-mono);" aria-live="polite"></span>
                            <input
                              type="text"
                              class="form-control"
                              id="captcha-answer"
                              name="captcha_answer"
                              required
                              placeholder="Answer"
                              style="max-width: 180px;"
                              inputmode="numeric"
                              autocomplete="off"
                            >
                            <button type="button" class="btn btn-outline-dark" id="captcha-refresh" aria-label="Refresh captcha">
                              &#x21BB;
                            </button>
                          </div>
                          <input type="hidden" id="captcha-token" name="captcha_token" value="">
                        </div>
                        <div class="text-center">
                           <button type="submit" class="btn btn-dark btn-lg px-5 py-3" style="border: 2px solid var(--border-ink); background: var(--text-ink); color: #fff; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 1px;">
                           Send Message
                           </button>
                        </div>
                     </form>
                     <div id="form-response" class="mt-4 text-center" style="display: none;" role="alert" aria-live="polite"></div>
                  </div>
               </div>
            </div>
         </div>
      </section>`;
