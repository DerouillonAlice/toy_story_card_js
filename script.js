var text = "";
fetch('datastory.json')
.then( function (reponse) {
    return reponse.json();
})

.then( function (data) {
    console.log(data);

    data.forEach(function (element) {
        text += '<div class="card">';
        text += '<div class="card__inner">';
        text += '<div class="card__front">';
        text += '<div class="toy-card">';
        text += '<div class="toy-card__image"><img src="' + element.photo + '" alt="Logo toy story"></div>';
        text += '<div class="toy-card__name">' + element.nom + '</div>';
        text += '<div class="toy-card__description"> <p>' + element.info + '</p></div>';
        text += '<div class="toy-card__unit-stats">';
        text += '<div class="one-third"><div class="stat">' + element.vie + '</div><div class="stat-value">Vie</div></div>';
        text += '<div class="one-third"><div class="stat">' + element.discretion + '</div><div class="stat-value">Discretion</div></div>';
        text += '<div class="one-third"><div class="stat">' + element.action + '</div><div class="stat-value">Action</div></div>';
        text += '</div></div>';
        text += '</div>';
        text += '<div class="card__back"><img src="images/dos_carte.png" alt="Logo toy story"></div>';
        text += '</div>';
        text += '</div>';
    });
document.getElementById("card-container").innerHTML = text;
    
})
