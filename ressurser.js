
const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

function clickable(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  /*Kilde: https://www.w3schools.com/howto/howto_js_tabs.asp*/

console.log(resources);
console.log(resources[0].category);

function iterateSources(resources, value){
    const srcArr = resources[i].sources;
        var ctr = 1;

        for ( j = 0; j < srcArr.length; j++)
        {
            console.log("A " +value + " - " + ctr);
            document.getElementById('' + value + ctr + '').innerHTML = '<a href="' + srcArr[j].url + '">' + srcArr[j].title + '  </a>';
            ctr ++;
        }
    
}

for (i = 0; i < resources.length; i++){
    console.log(resources[i].category);
    
    if(i == 0){
        document.getElementById('htmlCat').innerHTML = '<h3="htmlCat">' + resources[i].category  + '</h3>';
        document.getElementById('htmlText').innerHTML = '<p="htmlText">' + resources[i].text  + '</p>';

        iterateSources(resources, "htmlurl")
    }
    else if( i == 1){

        document.getElementById('cssCat').innerHTML = '<h3="cssCat">' + resources[i].category  + '</h3>';
        document.getElementById('cssText').innerHTML = '<p="cssText">' + resources[i].text  + '</p>';

        iterateSources(resources, "cascade");

      /* const srcArr = resources[i].sources;
        var ctr = 1;

        for ( j = 0; j < srcArr.length; j++)
        {
            console.log(srcArr[j].url);
            document.getElementById("cascade" + ctr ).innerHTML = '<a id="cascade' + ctr + '" href="' + srcArr[j].url + '">' + srcArr[j].title + '  </a>';
            ctr ++;
        }*/

    }
    else if (i == 2){
        document.getElementById('jvsCat').innerHTML = '<h3="jvsCat">' + resources[i].category  + '</h3>';
        document.getElementById('jvsText').innerHTML = '<p="jvsText">' + resources[i].text  + '</p>';
        iterateSources(resources, 'jvs');

    }
    else if( i == 3){
        document.getElementById('reactCat').innerHTML = '<h3="reactCat">' + resources[i].category  + '</h3>';
        document.getElementById('reactText').innerHTML = '<p="reactText">' + resources[i].text  + '</p>';
        iterateSources(resources, 'react');

    }
    else if (i == 4){
        document.getElementById('sanityCat').innerHTML = '<h3="sanityCat">' + resources[i].category  + '</h3>';
        document.getElementById('sanityText').innerHTML = '<p="sanityText">' + resources[i].text  + '</p>';
        iterateSources(resources, 'sanity');
        
    }
}

