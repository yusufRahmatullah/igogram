const wikiHost = 'https://wikipedigolang.herokuapp.com';

function checkWikipedigolang(igId) {
    fetch(wikiHost+'/api/igprofile/'+igId)
        .then(res => res.json())
        .then(json => {
            var n = document.querySelector('h1')
            if (json.data) {
                n.innerHTML += ' (added)';
            } else {
                n.innerHTML += ` <a href="`+wikiHost+`/jobs?ig_id=`+igId+`" target="_blank">(not added)</a>`;
            }
        })
        .catch(err => console.error(err));
}

document.body.style.border = "1px solid red";
var url = window.location.href;
var re = /<script.+>\s?window._sharedData\s?=\s?([^<>]*);<\/script>/g;
fetch(url)
    .then(res => res.text())
    .then(text => {
        m = re.exec(text);
        if (m) {
            var data = JSON.parse(m[1]);
            var ed = data.entry_data;
            if (ed.ProfilePage) {
                u = ed.ProfilePage[0].graphql.user;
                var igId = u.username;
                checkWikipedigolang(igId);
            }
        }
    })
    .catch(err => console.log(err));