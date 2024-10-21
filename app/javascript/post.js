// 投稿ページ

const mainMovie = () => {
  const form = document.getElementById('movie_main_form')
  if (!form) return null;
  form.addEventListener('blur', () => {

    const slicewatch = form.value.indexOf('watch?v=');
    const sliceshorts = form.value.indexOf('/shorts/');
    let sliceplace = 0;
    if(slicewatch > 0) {
      sliceplace = slicewatch;
    } else if(sliceshorts > 0) {
      sliceplace = sliceshorts;
    }
    if(sliceplace > 0) {
      const movieid = form.value.substr( sliceplace + 8, 11 );
      const movieMainEmbeddedForm  = document.getElementById('movie_main_embedded_form');
      movieMainEmbeddedForm.value = movieId;
      const movieMainThumbnailForm  = document.getElementById('movie_main_thumbnail_form');
      movieMainThumbnailForm.value = 'https://img.youtube.com/vi/' + movieId + '/hqdefault.jpg'
    } else {
      document.getElementById('movie_main_embedded_form').value = '';
      document.getElementById('movie_main_thumbnail_form').value = '';
    }
  });
 };
 
window.addEventListener('turbo:load', mainMovie);
window.addEventListener('turbo:render', mainMovie);


const leftMovie = () => {
const form = document.getElementById('movie_left_form')
if (!form) return null;
form.addEventListener('blur', () => {
  const slicewatch = form.value.indexOf('watch?v=');
  const sliceshorts = form.value.indexOf('/shorts/');
  let sliceplace = 0;
  if(slicewatch > 0) {
    sliceplace = slicewatch;
  } else if(sliceshorts > 0) {
    sliceplace = sliceshorts;
  }
  if(sliceplace > 0) {
    const movieId = form.value.substr( sliceplace + 8, 11 );
    const movieLeftEmbeddedForm  = document.getElementById('movie_left_embedded_form');
    movieLeftEmbeddedForm.value = movieId;
  } else {
    document.getElementById('movie_left_embedded_form').value = '';
  }
});
}

window.addEventListener('turbo:load', leftMovie);
window.addEventListener('turbo:render', leftMovie);


const rightMovie = () => {
const form = document.getElementById('movie_right_form')
if (!form) return null;
form.addEventListener('blur', () => {
  const slicewatch = form.value.indexOf('watch?v=');
  const sliceshorts = form.value.indexOf('/shorts/');
  let sliceplace = 0;
  if(slicewatch > 0) {
    sliceplace = slicewatch;
  } else if(sliceshorts > 0) {
    sliceplace = sliceshorts;
  }
  if(sliceplace > 0) {
    const movieId = form.value.substr( sliceplace + 8, 11 );
    const movieRightEmbeddedForm  = document.getElementById('movie_right_embedded_form');
    movieRightEmbeddedForm.value = movieId;
  } else {
    document.getElementById('movie_right_embedded_form').value = '';
  }
});
}

window.addEventListener('turbo:load', rightMovie);
window.addEventListener('turbo:render', rightMovie);


const talentImage = () => {
  const form = document.querySelectorAll('new_post');
  if (!form) return null;
  const fileField = document.querySelector('input[type="file"][name="post_form[talent_image]"]');
  fileField.addEventListener('change', function(e){
    const file = e.target.files[0];
    const alreadyPreview = document.querySelector('.preview');
    if (alreadyPreview) {
      alreadyPreview.remove();
    };
    const blob = window.URL.createObjectURL(file);

    const previewWrapper = document.createElement('div');
    previewWrapper.setAttribute('class', 'preview');

    const previewImage = document.createElement('img');
    previewImage.setAttribute('class', 'talent-image');
    previewImage.setAttribute('src', blob);

    const previewList = document.getElementById('talent-previews');
    previewWrapper.appendChild(previewImage);
    previewList.appendChild(previewWrapper);
  });
};

window.addEventListener('turbo:load', talentImage);
window.addEventListener('turbo:render', talentImage);


const movieTag = () => {
  const textFields = document.querySelectorAll('.movie-main-tag');
  if (!textFields) return null;
  textFields.forEach(textField => {
    textField.addEventListener('blur', (event) => {
      const movieFirstTag  = document.getElementById('movie_firsttag');
      const movieSecondTag  = document.getElementById('movie_secondtag');
      const movieThirdTag  = document.getElementById('movie_thirdtag');
      const movieMainTagsMerged  = document.getElementById('movie_main_tags_merged');
      movieMainTagsMerged.value = movieFirstTag.value + '`/$' + movieSecondTag.value + '`/$' + movieThirdTag.value
    });
  });
};

window.addEventListener('turbo:load', movieTag);
window.addEventListener('turbo:render', movieTag);


const talentTag = () => {
  const textFields = document.querySelectorAll('.talent-tag');
  if (!textFields) return null;
  textFields.forEach(textField => {
    textField.addEventListener('blur', (event) => {
      const talentFirstTag  = document.getElementById('talent_firsttag');
      const talentSecondTag  = document.getElementById('talent_secondtag');
      const talentThirdTag  = document.getElementById('talent_thirdtag');
      const talentTagsMerged  = document.getElementById('talent_tags_merged');
      talentTagsMerged.value = talentFirstTag.value + '`/$' + talentSecondTag.value + '`/$' + talentThirdTag.value
    });
  });
};

window.addEventListener('turbo:load', talentTag);
window.addEventListener('turbo:render', talentTag);

  // 詳細ページ

const menubtn = () => {
  const pullDownButton = document.getElementById('menu-btn');
  const pullDownParents = document.getElementById('menu_lists');

  if (!pullDownButton) return null;
  if (!pullDownParents) return null;

  pullDownButton.addEventListener('mouseover', () => {
  pullDownParents.setAttribute("style", "display:block;");

  pullDownButton.addEventListener('mouseout', () => {
  pullDownParents.setAttribute("style", "display: none;");
    })
  });
};

window.addEventListener('turbo:load', menubtn);
window.addEventListener('turbo:render', menubtn);

  // 編集ページ

const edit_tag = () => {

  const movieTagsMerged  = document.getElementById('movie_main_tags_merged').value;
  const movie_tag_split = movieTagsMerged.split('`/$');
  document.getElementById('movie_firsttag').value = movie_tag_split[0];
  document.getElementById('movie_secondtag').value = movie_tag_split[1];
  document.getElementById('movie_thirdtag').value = movie_tag_split[2];

  const talentTagsMerged  = document.getElementById('talent_tags_merged').value;
  const talent_tag_split = talentTagsMerged.split('`/$');
  document.getElementById('talent_firsttag').value = talent_tag_split[0];
  document.getElementById('talent_secondtag').value = talent_tag_split[1];
  document.getElementById('talent_thirdtag').value = talent_tag_split[2];
};

window.addEventListener('turbo:load', edit_tag);
window.addEventListener('turbo:render', edit_tag);

  // ユーザーページ

const userImage = () => {
  const form = document.getElementById('user-image-edit')
  if (!form) return null;
  form.addEventListener('change', () => {
    const btn = document.getElementById('user-image-btn');
    btn.click();
  });
  }

window.addEventListener('turbo:load', userImage);
window.addEventListener('turbo:render', userImage);
