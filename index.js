console.log("Js Connected");



const stateDesc = [
    {
        foodImage:
            'https://madhurasrecipe.com/wp-content/uploads/2020/10/Puneri-Misal-Marathi-Recipe-feature.jpg',
        foodName: 'Misal Pav',
        foodDescription:
            'Misal pav is a popular street food in Maharashtra. A great breakfast recipe that includes a curry made of sprouts, topped',
        foodInfo: 'https://en.wikipedia.org/wiki/Misal_pav',
    },
    {
        foodImage:
            'https://shwetainthekitchen.com/wp-content/uploads/2021/01/Sarson-ka-Saag.jpg',
        foodName: 'Makki Di Roti & Sarson Da Saag',
        foodDescription: "Makki di Roti is a corn meal Indian bread that tastes fabulous with ‘Sarson saag’ – mustard green and a glass of lassi.",
         foodInfo:'https://en.wikipedia.org/wiki/Sarson_ka_saag',
    },
    {
        foodImage:
            'https://static.toiimg.com/thumb/54422265.cms?imgsize=134276&width=800&height=800',
        foodName: 'Kosha Mangsho',
        foodDescription:
            ' This Spicy Bengali Mutton Curry aka Kosha Mangsho is a perfect lunch recipe that would be loved by all.',
        foodInfo: 'hhttps://en.wikipedia.org/wiki/Mutton_curry',
    },
    {
        foodImage:
            'https://assets.traveltriangle.com/blog/wp-content/uploads/2018/01/shutterstock_326657696.jpg',
        foodName: 'Idli',
        foodDescription:
            'The most important dish in Chennai cuisine is the Idli Sambar. In a way, this dish represents all the cultures of south india where idli, dosa, and vada, and sambar are staple dishes.',
        foodInfo: 'https://en.wikipedia.org/wiki/Idli',
    },

    {
        foodImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hyderabadi_Chicken_Biryani.jpg/800px-Hyderabadi_Chicken_Biryani.jpg',
        foodName: 'Rogan Josh',
        foodDescription:
            "Biryani more famously the Hyderabadi version, is prepared in the  form of kachay gosht ki Biryani and dum ki Biryani.",
        foodInfo: 'https://en.wikipedia.org/wiki/Biryani',
    },

    {
        foodImage:
            'https://vegveganmeat.com/wp-content/uploads/2021/01/ven-pongal-recipe-khara-pongal-in-pressure-cooker-735x735.jpg',
        foodName: 'Pongal',
        foodDescription:
            'Vegetarian Pongal is a rice lentil dish that is often prepared in south Indian homes as an offering to the goddess.',
        foodInfo: 'https://en.wikipedia.org/wiki/Pongal_(dish)',
    },

    {
        foodImage: 'https://www.outlookindia.com/outlooktraveller/public/uploads/filemanager/images/fish-curry.jpg',
        foodName: 'Fish Curry',
        foodDescription:
            'Xit Codi meaning curry rice is the deliciously tangy fish curry made with special spices, served with steamed rice or roti.',
        foodInfo: 'https://en.wikipedia.org/wiki/Goan_cuisine',
    },
];

const imageBlock = document.getElementById('center');

const showFood = (data) => {
    data.forEach((item) => {
        imageBlock.innerHTML += `<div class="stateBlock">
        <img src="${item.foodImage}" />
        <h4 class="state_name">${item.foodName}</h4>
        <div class="description">
          <h4>${item.foodName}</h4>
          <p>${item.foodDescription}</p>
          <a href="${item.foodInfo}" target="_blank">Explore more</a>
        </div>
      </div>`;
    });
};

showFood(stateDesc);

const stateCard = imageBlock.querySelectorAll('.stateBlock');
for (let i = 0; i < stateCard.length; i++) {
    stateCard[i].addEventListener('mouseover', () => {
        const image = stateCard[i].querySelector('img');
        const stateTitle = stateCard[i].querySelector('.state_name');
        const description = stateCard[i].querySelector('.description');
        stateCard[i].style.transition = 'display .3s';
        image.style.display = 'none';
        stateTitle.style.display = 'none';
        stateCard[i].style.height = '336.797px';
        description.style.display = 'block';
        description.style.margin = '5px';
    });
    stateCard[i].addEventListener('mouseout', () => {
        const image = stateCard[i].querySelector('img');
        const stateTitle = stateCard[i].querySelector('.state_name');
        const description = stateCard[i].querySelector('.description');
        stateCard[i].style.transition = 'display .3s';
        description.style.display = 'none';
        stateCard[i].style.height = '336.797px';
        stateTitle.style.display = 'block';
        stateCard[i].style.transitionDelay = '34s';
        image.style.transitionDelay = '34s';
        image.style.display = 'block';
    });
}
