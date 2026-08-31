// Reads data/content.json and fills the page. Edit that JSON to change the site.
(function () {
  var PAGE_SCRIPTS = {
    home: ['js/theme.js', 'js/sound.js', 'js/main.js'],
    work: ['js/controls.js', 'js/sound.js', 'js/main.js', 'js/theme.js', 'js/work.js'],
    project: ['js/controls.js', 'js/sound.js', 'js/main.js', 'js/theme.js', 'js/progress.js'],
  };

  var VISIT_SVG =
    '<svg viewBox="0 0 16 16" fill="none"><path d="M6 10L10 6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.3335 4L7.64216 3.64266C8.26737 3.01755 9.11529 2.6664 9.9994 2.66646C10.8835 2.66652 11.7314 3.01779 12.3565 3.643C12.9816 4.2682 13.3328 5.11612 13.3327 6.00023C13.3326 6.88434 12.9814 7.73221 12.3562 8.35733L12.0002 8.66666" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.6666 12L8.40193 12.356C7.76943 12.9815 6.91579 13.3322 6.02627 13.3322C5.13674 13.3322 4.2831 12.9815 3.6506 12.356C3.33884 12.0477 3.09133 11.6807 2.92241 11.2761C2.75348 10.8715 2.6665 10.4374 2.6665 9.99899C2.6665 9.56056 2.75348 9.12648 2.92241 8.7219C3.09133 8.31731 3.33884 7.95026 3.6506 7.642L3.99993 7.33333" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var CHEVRON_SVG =
    '<svg class="cs-topbar-chevron" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 2.5L7.5 6L4.5 9.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var BACK_SVG =
    '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.65067 2.66667C8.20133 2.66667 7.83733 3.02867 7.83733 3.47467C7.83733 3.92133 8.20133 4.28267 8.65067 4.28267H10.6013C11.9487 4.28267 13.0407 5.368 13.0407 6.70733C13.0407 8.046 11.9487 9.13133 10.6013 9.13133H4.10933L5.32267 7.92467C5.39809 7.84986 5.45796 7.76086 5.49882 7.6628C5.53967 7.56474 5.56071 7.45956 5.56071 7.35333C5.56071 7.2471 5.53967 7.14192 5.49882 7.04386C5.45796 6.9458 5.39809 6.85681 5.32267 6.782C5.16975 6.63055 4.96322 6.54559 4.748 6.54559C4.53278 6.54559 4.32625 6.63055 4.17333 6.782L1.57133 9.368C1.49591 9.4428 1.43604 9.5318 1.39518 9.62986C1.35433 9.72792 1.33329 9.8331 1.33329 9.93933C1.33329 10.0456 1.35433 10.1507 1.39518 10.2488C1.43604 10.3469 1.49591 10.4359 1.57133 10.5107L4.17333 13.0967C4.32625 13.2481 4.53278 13.3331 4.748 13.3331C4.96322 13.3331 5.16975 13.2481 5.32267 13.0967C5.39809 13.0219 5.45796 12.9329 5.49882 12.8348C5.53967 12.7367 5.56071 12.6316 5.56071 12.5253C5.56071 12.4191 5.53967 12.3139 5.49882 12.2159C5.45796 12.1178 5.39809 12.0288 5.32267 11.954L4.10933 10.7473H10.6013C12.8467 10.7473 14.6667 8.93867 14.6667 6.70733C14.6667 4.47533 12.8467 2.66667 10.6013 2.66667H8.65067Z" fill="currentColor"/></svg>';

  var EXT_SVG =
    '<svg class="link-ico" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 10L10 6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.3335 4L7.64216 3.64266C8.26737 3.01755 9.11529 2.6664 9.9994 2.66646C10.8835 2.66652 11.7314 3.01779 12.3565 3.643C12.9816 4.2682 13.3328 5.11612 13.3327 6.00023C13.3326 6.88434 12.9814 7.73221 12.3562 8.35733L12.0002 8.66666" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.6666 12L8.40193 12.356C7.76943 12.9815 6.91579 13.3322 6.02627 13.3322C5.13674 13.3322 4.2831 12.9815 3.6506 12.356C3.33884 12.0477 3.09133 11.6807 2.92241 11.2761C2.75348 10.8715 2.6665 10.4374 2.6665 9.99899C2.6665 9.56056 2.75348 9.12648 2.92241 8.7219C3.09133 8.31731 3.33884 7.95026 3.6506 7.642L3.99993 7.33333" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function videoTag(v, extraClass) {
    if (!v) return '';
    return (
      '<video class="' +
      (extraClass || 'cs-video') +
      '" loop muted playsinline preload="none" poster="' +
      esc(v.poster) +
      '" aria-label="' +
      esc(v.label || '') +
      '"><source src="' +
      esc(v.webm) +
      '" type="video/webm"><source src="' +
      esc(v.mp4) +
      '" type="video/mp4"></video>'
    );
  }

  function logoStyle(w, h) {
    if (!w || !h) return '';
    return 'width:' + w + 'px;height:' + h + 'px';
  }

  function projectRow(p) {
    return (
      '<a href="' +
      esc(p.page) +
      '" class="project-row">' +
      '<div class="project-icon bg-subtle">' +
      '<span class="project-icon-img" role="img" aria-label="' +
      esc(p.home.name) +
      '" style="--logo:url(\'' +
      esc(p.home.logo) +
      '\');' +
      logoStyle(p.home.logoWidth, p.home.logoHeight) +
      '"></span></div>' +
      '<div class="project-info"><p class="project-name">' +
      esc(p.home.name) +
      '</p><p class="project-desc">' +
      esc(p.home.description) +
      '</p></div></a>'
    );
  }

  function connectRow(c) {
    var extra = c.url.indexOf('http') === 0 ? ' target="_blank" rel="noopener"' : '';
    return (
      '<a href="' +
      esc(c.url) +
      '"' +
      extra +
      ' class="project-row">' +
      '<div class="project-icon bg-subtle">' +
      '<span class="project-icon-img" role="img" aria-label="' +
      esc(c.label) +
      '" style="--logo:url(\'' +
      esc(c.icon) +
      '\');' +
      logoStyle(c.iconWidth, c.iconHeight) +
      '"></span></div>' +
      '<div class="project-info"><p class="project-name">' +
      esc(c.name) +
      '</p><p class="project-desc">' +
      esc(c.description) +
      '</p></div></a>'
    );
  }

  function sectionBlock(label, inner) {
    return (
      '<div class="section"><div class="section-header"><span class="section-label">' +
      esc(label) +
      '</span><div class="divider-line"></div></div><div class="project-list">' +
      inner +
      '</div></div>'
    );
  }

  function applyMeta(site, title, description) {
    document.title = title || site.pageTitle;
    var desc = description || site.tagline;
    function set(sel, attr, val) {
      var el = document.querySelector(sel);
      if (el) el.setAttribute(attr, val);
    }
    set('meta[name="description"]', 'content', desc);
    set('meta[property="og:title"]', 'content', title || site.pageTitle);
    set('meta[property="og:description"]', 'content', desc);
    set('meta[property="og:image"]', 'content', site.ogImage);
    set('meta[name="twitter:title"]', 'content', title || site.pageTitle);
    set('meta[name="twitter:description"]', 'content', desc);
    set('meta[name="twitter:image"]', 'content', site.ogImage);
    set('meta[property="og:site_name"]', 'content', site.name);
  }

  function renderHome(data) {
    var site = data.site;
    var featured = data.projects.filter(function (p) {
      return p.featured;
    });
    var rest = data.projects.filter(function (p) {
      return !p.featured;
    });
    applyMeta(site, site.pageTitle, site.tagline);

    var nameEl = document.querySelector('.identity .name');
    var roleEl = document.querySelector('.identity .role');
    if (nameEl) nameEl.textContent = site.name;
    if (roleEl) roleEl.textContent = site.role;

    var bio = document.querySelector('.bio');
    if (bio) {
      var li = site.linkedIn || {};
      bio.innerHTML =
        '<p>' +
        esc(site.tagline) +
        '</p>' +
        site.bio
          .map(function (p) {
            return '<p>' + esc(p) + '</p>';
          })
          .join('') +
        '<div class="linkedin-connect"><span>' +
        esc(li.before) +
        '</span> <a href="' +
        esc(li.url) +
        '" target="_blank" class="linkedin-inline">' +
        '<span class="li-icon-wrap"><img class="li-light" src="' +
        esc(li.iconLight) +
        '" alt=""><img class="li-dark" src="' +
        esc(li.iconDark) +
        '" alt=""></span><span class="li-text">' +
        esc(li.label) +
        '</span></a><span>.</span></div>';
    }

    var sections = document.querySelector('.sections');
    if (sections) {
      var featuredHtml = sectionBlock(
        site.sectionLabels.featured,
        featured.map(projectRow).join('')
      );
      var projectsHtml = sectionBlock(site.sectionLabels.projects, rest.map(projectRow).join(''));
      var connectHtml = sectionBlock(
        site.sectionLabels.connect,
        site.connect.map(connectRow).join('')
      );
      var bioHtml = sections.querySelector('.bio');
      sections.innerHTML = '';
      if (bioHtml) sections.appendChild(bioHtml);
      sections.insertAdjacentHTML('beforeend', featuredHtml + projectsHtml + connectHtml);
    }

    var footer = document.querySelector('.lp-footer');
    if (footer) {
      footer.innerHTML =
        '<img src="' +
        esc(site.avatar) +
        '" alt="' +
        esc(site.name) +
        '" class="footer-avatar">' +
        '<div class="footer-meta"><span class="footer-text">' +
        esc(site.footerName) +
        ' © ' +
        esc(site.copyrightYear) +
        '</span><span class="footer-dot"></span><span class="footer-text">' +
        esc(site.copyrightLabel) +
        '</span></div>' +
        '<span class="footer-text">' +
        esc(site.location) +
        '</span>';
    }

    var mail = document.querySelector('.lp-icons a[href^="mailto"]');
    if (mail) mail.setAttribute('href', 'mailto:' + site.email);

    var hero = site.homeHero;
    var card = document.querySelector('.view-work-card');
    var vid = document.querySelector('.view-work-video');
    if (!hero) {
      if (card) card.style.display = 'none';
    } else {
      if (card) card.style.display = '';
      if (vid) {
        vid.setAttribute('poster', hero.poster);
        vid.innerHTML =
          '<source src="' + esc(hero.webm) + '" type="video/webm"><source src="' + esc(hero.mp4) + '" type="video/mp4">';
      }
      var btn = document.querySelector('.view-work-btn');
      if (btn) btn.textContent = site.viewWorkLabel;
    }
  }

  function arrowBtn(href, label) {
    return (
      '<a href="' +
      esc(href) +
      '" class="showcase-arrow" aria-label="' +
      esc(label) +
      '"><span class="sa-swap">' +
      '<svg class="sa-ico sa-ico--front" viewBox="0 0 24 24" fill="none"><use href="#ico-arrow-ne"/></svg>' +
      '<svg class="sa-ico sa-ico--back" viewBox="0 0 24 24" fill="none"><use href="#ico-arrow-ne"/></svg>' +
      '</span></a>'
    );
  }

  function renderWork(data) {
    var site = data.site;
    applyMeta(site, site.workPageTitle, site.tagline);
    var author = document.querySelector('.cs-topbar-author-name');
    if (author) author.textContent = site.name;

    var list = document.querySelector('.work-showcase-list');
    if (!list) return;
    var projects = data.projects;
    list.innerHTML = projects
      .map(function (p, i) {
        var w = p.work;
        var next = projects[i + 1];
        var bullets = (w.summary || [])
          .map(function (b) {
            return '<div class="showcase-bullet"><span class="showcase-bullet-dot"></span> ' + esc(b) + '</div>';
          })
          .join('');
        var nextHtml = next
          ? '<a href="#' +
            esc(next.id) +
            '" class="showcase-next">' +
            esc(site.jumpNext) +
            '<svg class="showcase-next-arrow" viewBox="0 0 12 12" fill="none"><use href="#ico-down"/></svg></a>'
          : '<div style="height: 20px;"></div>';
        return (
          '<section class="showcase-row" id="' +
          esc(p.id) +
          '">' +
          '<div class="showcase-mockup-col"><div class="showcase-mockup">' +
          videoTag(w.video, 'showcase-video') +
          arrowBtn(p.page, 'Open ' + (p.home.name || '') + ' case study') +
          '<a href="' +
          esc(p.page) +
          '" class="showcase-breadcrumb">' +
          '<span style="color:#45484b;font-weight:500;">' +
          esc(w.emoji) +
          ' </span><span style="color:#323232;font-weight:500;">' +
          esc(w.crumbName || p.home.name) +
          '</span><span style="color:#b5b5ba;font-weight:500;margin:0 4px;">—</span>' +
          '<span style="color:#85858d;font-weight:500;">' +
          esc(w.crumbTagline || p.home.description) +
          '</span></a></div></div>' +
          '<div class="showcase-info-col">' +
          '<a href="' +
          esc(w.liveUrl) +
          '" class="showcase-ext-link">' +
          esc(w.liveLabel) +
          ' ' +
          EXT_SVG +
          '</a>' +
          '<div class="showcase-card" data-cs="' +
          esc(p.page) +
          '">' +
          '<div class="showcase-card-preview"><img src="' +
          esc(w.preview) +
          '" alt="' +
          esc(p.home.name) +
          ' preview"></div>' +
          '<div class="showcase-card-body">' +
          '<div class="showcase-about"><p class="showcase-about-label">About</p><p class="showcase-about-text">' +
          esc(w.about) +
          '</p></div>' +
          '<div class="showcase-meta-row"><div class="showcase-summary"><p class="showcase-meta-label">Summary</p>' +
          '<div class="showcase-bullet-list">' +
          bullets +
          '</div></div>' +
          '<div class="showcase-view"><p class="showcase-meta-label">View project</p>' +
          '<a href="' +
          esc(p.page) +
          '" class="showcase-view-link">' +
          '<span class="vl-arrow vl-arrow--pre" aria-hidden="true"><svg viewBox="0 0 15 16" fill="none"><use href="#ico-corner"/></svg></span>' +
          '<span class="vl-name">' +
          esc(w.viewName) +
          '</span>' +
          '<span class="vl-arrow vl-arrow--post" aria-hidden="true"><svg viewBox="0 0 15 16" fill="none"><use href="#ico-corner"/></svg></span>' +
          '</a></div></div>' +
          '<div class="showcase-year-row">' +
          '<div class="showcase-year-col"><p class="showcase-meta-label">Year</p><p class="showcase-meta-value">' +
          esc(w.year) +
          '</p></div>' +
          '<div class="showcase-year-col"><p class="showcase-meta-label">With</p><p class="showcase-meta-value">' +
          esc(w.with) +
          '</p></div></div>' +
          '</div></div>' +
          nextHtml +
          '</div></section>'
        );
      })
      .join('');
  }

  function topbar(site, pageName, homeHref) {
    return (
      '<a href="' +
      (homeHref || 'work.html') +
      '" class="mobile-back" aria-label="Back">' +
      BACK_SVG +
      '</a>' +
      '<div class="cs-topbar"><div class="cs-topbar-breadcrumb">' +
      '<a href="index.html" class="cs-topbar-author"><span class="cs-topbar-dot"></span>' +
      '<span class="cs-topbar-author-name">' +
      esc(site.name) +
      '</span></a>' +
      CHEVRON_SVG +
      '<span class="cs-topbar-page">' +
      esc(pageName) +
      '</span></div></div>'
    );
  }

  function visitLink(url, label) {
    return (
      '<a href="' +
      esc(url) +
      '" target="_blank" rel="noopener" class="cs-visit-link" aria-label="' +
      esc(label || 'Copy link') +
      '">' +
      VISIT_SVG +
      '</a>'
    );
  }

  function featuredBlock(block) {
    if (block.type === 'text') {
      return (
        '<div class="cs-content-block"><h2 class="cs-block-title">' +
        esc(block.title) +
        '</h2><p class="cs-block-body">' +
        esc(block.body) +
        '</p></div>'
      );
    }
    if (block.type === 'grid3') {
      return (
        '<div class="cs-grid-3">' +
        block.items
          .map(function (it) {
            return (
              '<div class="cs-grid-3-item"><p class="cs-grid-3-title">' +
              esc(it.title) +
              '</p><p class="cs-grid-3-body">' +
              esc(it.body) +
              '</p></div>'
            );
          })
          .join('') +
        '</div>'
      );
    }
    if (block.type === 'quote') {
      return (
        '<div class="cs-quote"><div class="cs-quote-bar"></div><p class="cs-quote-text">' +
        esc(block.text) +
        '</p></div>'
      );
    }
    if (block.type === 'themedImage') {
      return (
        '<div class="' +
        esc(block.wrapClass) +
        '"><img class="lt" src="' +
        esc(block.light) +
        '" alt="' +
        esc(block.alt) +
        '"><img class="dk" src="' +
        esc(block.dark) +
        '" alt="' +
        esc(block.alt) +
        '"></div>'
      );
    }
    if (block.type === 'photoGrid') {
      return (
        '<div class="vmd-photo-grid"><div class="vmd-photo-stack">' +
        block.stack
          .map(function (img) {
            return '<div class="vmd-photo-half"><img src="' + esc(img.src) + '" alt="' + esc(img.alt) + '"></div>';
          })
          .join('') +
        '</div><div class="vmd-photo-tall"><img src="' +
        esc(block.tall.src) +
        '" alt="' +
        esc(block.tall.alt) +
        '"></div></div>'
      );
    }
    if (block.type === 'competitive') {
      return (
        '<div class="vmd-competitive-mobile"><img src="' +
        esc(block.mobile) +
        '" alt="' +
        esc(block.alt) +
        '"></div>' +
        '<div class="vmd-competitive"><img class="vmd-competitive-img comp-light" src="' +
        esc(block.light) +
        '" alt="' +
        esc(block.alt) +
        '"><img class="vmd-competitive-img comp-dark" src="' +
        esc(block.dark) +
        '" alt="' +
        esc(block.alt) +
        '"></div>'
      );
    }
    if (block.type === 'journeyStack') {
      return (
        '<div class="vmd-jm-stack">' +
        block.images
          .map(function (img) {
            return (
              '<div class="vmd-jm-frame"><img class="lt" src="' +
              esc(img.light) +
              '" alt="' +
              esc(img.alt) +
              '"><img class="dk" src="' +
              esc(img.dark) +
              '" alt="' +
              esc(img.alt) +
              '"></div>'
            );
          })
          .join('') +
        '</div>'
      );
    }
    if (block.type === 'insight') {
      return (
        '<div class="vmd-insight"><h2 class="vmd-insight-title">' +
        esc(block.title) +
        '</h2><p class="vmd-insight-body">' +
        esc(block.body) +
        '</p></div>'
      );
    }
    if (block.type === 'annotatedScreenshot') {
      function note(n, side) {
        var text =
          '<div class="vmd-ann-' +
          side +
          '-item-text"><p class="vmd-ann-text-main">' +
          esc(n.main) +
          '</p><p class="vmd-ann-text-sub">' +
          esc(n.sub) +
          '</p></div>';
        var conn =
          '<div class="vmd-ann-connector"><div class="vmd-ann-connector-' +
          (side === 'left' ? 'line"></div><div class="vmd-ann-connector-dot' : 'dot"></div><div class="vmd-ann-connector-line') +
          '"></div></div>';
        return (
          '<div class="vmd-ann-' +
          side +
          '-item">' +
          (side === 'left' ? text + conn : conn + text) +
          '</div>'
        );
      }
      var mobileNotes = (block.mobileNotes || [])
        .map(function (n) {
          return (
            '<div class="vmd-problem-item"><p class="vmd-problem-item-main">' +
            esc(n.main) +
            '</p><p class="vmd-problem-item-sub">' +
            esc(n.sub) +
            '</p></div>'
          );
        })
        .join('');
      return (
        '<div class="vmd-annotated vmd-prob-img"><div class="vmd-ann-left">' +
        (block.left || []).map(function (n) {
          return note(n, 'left');
        }).join('') +
        '</div><div class="vmd-ann-center"><div class="vmd-screenshot">' +
        '<img class="lt" src="' +
        esc(block.imageLight) +
        '" alt="' +
        esc(block.alt) +
        '"><img class="dk" src="' +
        esc(block.imageDark) +
        '" alt="' +
        esc(block.alt) +
        '"></div></div><div class="vmd-ann-right">' +
        (block.right || []).map(function (n) {
          return note(n, 'right');
        }).join('') +
        '</div></div>' +
        '<div class="cs-breakout vmd-prob-mob"><img src="' +
        esc(block.imageLight) +
        '" alt="' +
        esc(block.alt) +
        '"></div>' +
        '<div class="vmd-problem-list">' +
        mobileNotes +
        '</div>'
      );
    }
    if (block.type === 'vmdFinal') {
      return (
        '<div class="vmd-final"><img class="vmd-browser-bar lt" src="' +
        esc(block.barLight) +
        '" alt=""><img class="vmd-browser-bar dk" src="' +
        esc(block.barDark) +
        '" alt=""><div class="browser-screen">' +
        videoTag(block.video) +
        '</div></div>' +
        '<img class="cs-final-mobile cf-light" src="' +
        esc(block.mobileLight) +
        '" alt="' +
        esc(block.mobileAlt) +
        '"><img class="cs-final-mobile cf-dark" src="' +
        esc(block.mobileDark) +
        '" alt="' +
        esc(block.mobileAlt) +
        '">'
      );
    }
    if (block.type === 'bayutFinal') {
      return (
        '<div class="bayut-final"><div class="cs-iphone"><span class="cs-iphone-island"></span>' +
        videoTag(block.video) +
        '</div></div>'
      );
    }
    return '';
  }

  function renderFeatured(site, project) {
    var cs = project.caseStudy;
    var live = cs.liveUrl || project.work.liveUrl;
    var logo = cs.brandLogo || {};
    var style = logo.width ? ' style="' + logoStyle(logo.width, logo.height) + '"' : '';
    var sections = (cs.sections || [])
      .map(function (sec) {
        return (
          '<section id="' +
          esc(sec.id) +
          '" class="cs-section-block" data-section="' +
          esc(sec.label) +
          '">' +
          '<div class="cs-label-row"><span>' +
          esc(sec.label) +
          '</span><div class="cs-rule"></div></div>' +
          (sec.blocks || []).map(featuredBlock).join('') +
          '</section>'
        );
      })
      .join('');

    return (
      '<main class="cs-page">' +
      topbar(site, project.home.name, 'work.html') +
      '<header class="cs-page-header cs-featured-brand"><div class="cs-brand">' +
      '<img class="cs-brand-logo" src="' +
      esc(logo.src) +
      '" alt="' +
      esc(project.home.name) +
      ' logo"' +
      style +
      '>' +
      '<div class="cs-brand-info"><span class="cs-brand-name">' +
      esc(project.home.name) +
      '</span><span class="cs-brand-tagline">' +
      esc(cs.heroTitle || project.home.description) +
      '</span></div></div>' +
      visitLink(live, 'Visit ' + project.home.name) +
      '</header>' +
      '<div class="cs-featured"><div class="cs-hero"><div class="cs-hero-header">' +
      '<p class="cs-eyebrow">' +
      esc(cs.eyebrow) +
      '</p><div class="cs-hero-title-row"><h1 class="cs-hero-title">' +
      esc(cs.heroTitle) +
      '</h1>' +
      visitLink(live, 'Visit ' + project.home.name) +
      '</div></div>' +
      '<div class="' +
      esc(cs.heroMediaClass) +
      '">' +
      videoTag(cs.heroVideo) +
      '</div>' +
      '<div class="cs-stats-row">' +
      (cs.stats || [])
        .map(function (st) {
          return (
            '<div class="cs-stat"><span class="cs-stat-label">' +
            esc(st.label) +
            '</span> <span class="cs-stat-value">' +
            esc(st.value) +
            '</span></div>'
          );
        })
        .join('') +
      '</div></div>' +
      '<div class="cs-sections">' +
      sections +
      '</div></div></main>'
    );
  }

  function phoneItem(item) {
    var hide = item.hideOnMobile ? ' cs-phone--mhide' : '';
    var inner =
      item.type === 'video'
        ? videoTag(item)
        : '<img src="' + esc(item.src) + '" alt="' + esc(item.alt || '') + '">';
    return '<div class="cs-phone' + hide + '">' + inner + '</div>';
  }

  function renderStandard(site, project) {
    var cs = project.caseStudy;
    var live = cs.liveUrl || project.work.liveUrl;
    var logo = cs.brandLogo || {};
    var style = logo.width ? ' style="' + logoStyle(logo.width, logo.height) + '"' : '';
    var sidebar = (cs.sidebar || [])
      .map(function (row) {
        return (
          '<div class="cs-sidebar-section"><span class="cs-sidebar-label">' +
          esc(row.label) +
          '</span><span class="cs-sidebar-value">' +
          esc(row.value) +
          '</span></div>'
        );
      })
      .join('');
    var main = (cs.sections || [])
      .map(function (sec) {
        var rowClass = 'cs-phone-row';
        if (sec.phones && sec.phones.wide) rowClass += ' cs-phone-row--wide';
        if (sec.phones && sec.phones.m2) rowClass += ' cs-phone-row--m2';
        var phones =
          sec.phones && sec.phones.items && sec.phones.items.length
            ? '<div class="' + rowClass + '">' + sec.phones.items.map(phoneItem).join('') + '</div>'
            : '';
        return (
          '<div id="' +
          esc(sec.id) +
          '" class="cs-text-block" data-section="' +
          esc(sec.label) +
          '">' +
          '<div class="cs-label-row"><span>' +
          esc(sec.heading || sec.label) +
          '</span><div class="cs-rule"></div></div>' +
          '<div class="cs-text-block-body-group"><p class="cs-block-title">' +
          esc(sec.title) +
          '</p>' +
          (sec.paragraphs || [])
            .map(function (p) {
              return '<p class="cs-block-body">' + esc(p) + '</p>';
            })
            .join('') +
          '</div></div>' +
          phones
        );
      })
      .join('');

    return (
      '<main class="cs-page">' +
      topbar(site, project.home.name, 'work.html') +
      '<header class="cs-page-header"><div class="cs-brand">' +
      '<img class="cs-brand-logo" src="' +
      esc(logo.src) +
      '" alt="' +
      esc(project.home.name) +
      ' logo"' +
      style +
      '>' +
      '<div class="cs-brand-info"><span class="cs-brand-name">' +
      esc(project.home.name) +
      '</span><span class="cs-brand-sep" style="background:var(--text-tertiary); border-radius:50%;"></span>' +
      '<span class="cs-brand-tagline">' +
      esc(cs.headerTagline || project.home.description) +
      '</span></div></div>' +
      visitLink(live, 'Visit site') +
      '</header>' +
      '<div class="cs-layout"><aside class="cs-sidebar">' +
      sidebar +
      '</aside><div class="cs-main">' +
      main +
      '</div></div></main>'
    );
  }

  function ensureCss(href) {
    if (!href) return;
    if (document.querySelector('link[href="' + href + '"]')) return;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }

  function renderProject(data, id) {
    var project = data.projects.filter(function (p) {
      return p.id === id;
    })[0];
    if (!project) {
      document.body.innerHTML = '<p style="padding:2rem;font-family:sans-serif">Project not found in content.json</p>';
      return;
    }
    applyMeta(data.site, project.home.name + ' — ' + data.site.name, project.home.description);
    ensureCss(project.caseStudy && project.caseStudy.css);
    var html =
      project.caseStudy && project.caseStudy.layout === 'featured'
        ? renderFeatured(data.site, project)
        : renderStandard(data.site, project);
    document.body.insertAdjacentHTML('afterbegin', html);
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.body.appendChild(s);
    });
  }

  function showError(msg) {
    document.documentElement.classList.add('portfolio-ready');
    var box = document.createElement('p');
    box.style.cssText = 'padding:24px;font-family:sans-serif;max-width:40rem;line-height:1.5';
    box.textContent = msg;
    document.body.prepend(box);
  }

  var page = document.body.getAttribute('data-page') || 'home';
  var projectId = document.body.getAttribute('data-project');

  function start(data) {
    if (!data || !data.site) {
      showError('Portfolio data did not load. Check data/content.js is next to your HTML files.');
      return;
    }
    if (page === 'home') renderHome(data);
    else if (page === 'work') renderWork(data);
    else if (page === 'project') renderProject(data, projectId);
    document.documentElement.classList.add('portfolio-ready');
    var scripts = PAGE_SCRIPTS[page] || PAGE_SCRIPTS.home;
    scripts.reduce(function (q, src) {
      return q.then(function () {
        return loadScript(src);
      });
    }, Promise.resolve());
  }

  if (window.PORTFOLIO_DATA) {
    start(window.PORTFOLIO_DATA);
  } else {
    var tag = document.createElement('script');
    tag.src = 'data/content.js';
    tag.onload = function () {
      start(window.PORTFOLIO_DATA);
    };
    tag.onerror = function () {
      showError('Could not load data/content.js. Keep that file in the data folder, then refresh.');
    };
    document.head.appendChild(tag);
  }
})();
