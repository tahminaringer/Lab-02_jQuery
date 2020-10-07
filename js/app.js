'use strict';

const animalArray = [];

function Photo(photo){
  this.image_url = photo.image_url;
  this.title = photo.title;
  this.description = photo.description;
  this.keyword = photo.keyword;
  this.horns = photo.horns;
  animalArray.push(this);
}

Photo.prototype.render = function() {
  let $photoClone = $('.photo-template').clone();
  $('main').append($photoClone);
  $photoClone.find('h2').text(this.title);
  $photoClone.find('img').text(this.image_url);
  $photoClone.find('p').text(this.description);
  $photoClone.removeClass('photo-template');
  $photoClone.attr('class', this.title);
};

Photo.readJson =() => {
  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  }

  $.ajax('data.json', ajaxSettings)
    .then(data => {
      data.forEach(item => {
        let photo = new Photo(item);
        photo.render();
      })
    })
}

$(() => Photo.readJson());

// $('select').on('change', function() {

// })
