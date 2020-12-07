$( document ).ready(function() {
  // Submenus.
  var nav_primary = document.querySelector('#nav-primary ul');
  var nav_secondary = document.querySelector("#nav-secondary");
  for (let i = 0; i < nav_primary.children.length; i++) {
    // Only named main nav items have associated submenu.
    if (nav_primary.children[i].getAttribute('name')) {
      nav_primary.children[i].addEventListener('mouseenter', function(e) {
        nav_secondary.classList.remove('hidden');
        for (let j = 0; j < nav_secondary.children.length; j++) {
          if (nav_secondary.children[j].getAttribute('name') == nav_primary.children[i].getAttribute('name')) {
            // If a submenu shares a name attribute with a main nav item, remove the hidden class.
            nav_secondary.children[j].classList.remove('hidden');
          } else {
            // Submenus not sharing a name with the current main nav item are hidden.
            nav_secondary.children[j].classList.add('hidden');
          }
        }
      });
    } else {
      // Unnamed main nav items should hide all submenus upon mouseenter.
      nav_primary.children[i].addEventListener('mouseenter', function(e) {
        nav_secondary.classList.add('hidden');
      });
    }
  }
  // Close submenu when mouse enters any area but nav.
  var header = document.getElementsByTagName('header')[0];
  header.addEventListener('mouseenter', function(e) {
    nav_secondary.classList.add('hidden');
  });
  var main = document.getElementsByTagName('main')[0];
  main.addEventListener('mouseenter', function(e) {
    nav_secondary.classList.add('hidden');
  });
  var hero = document.querySelector('#hero');
  if (typeof(hero) != 'undefined' && hero != null) {
    hero.addEventListener('mouseenter', function(e) {
      nav_secondary.classList.add('hidden');
    });
  }

  // User-provided text samples.
  var textfield = document.querySelector("#test-sample");
  if (typeof(textfield) != 'undefined' && textfield != null) {
    var samples = document.getElementsByClassName("sample");
    var default_samples = new Array();
    for (let sample of samples) {
      default_samples.push(sample.innerHTML);
    }
    textfield.addEventListener('keyup', function(e) {
      i = 0;
      for (let sample of samples) {
        if (textfield.value) {
          if (sample.textContent == default_samples[i]) {
            sample.textContent = '';
          }
          if (e.key != 'Meta') {
            sample.textContent = textfield.value;
          }
        } else {
          sample.textContent = default_samples[i];
        }
        i = i + 1;
      }
    });
  }
});