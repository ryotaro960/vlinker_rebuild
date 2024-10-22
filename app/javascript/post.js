// ユーザー新規登録ページ

const userPostImage = () => {
  const userPostForm = document.querySelectorAll('new_user');
  if (!userPostForm) return null;
  const fileField = document.querySelector('input[type="file"][name="user[user_image]"]');
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
    previewImage.setAttribute('class', 'user-image');
    previewImage.setAttribute('src', blob);

    const previewList = document.getElementById('user-previews');
    previewWrapper.appendChild(previewImage);
    previewList.appendChild(previewWrapper);
  });
};

window.addEventListener('turbo:load', userPostImage);
window.addEventListener('turbo:render', userPostImage);

// 投稿ページ

const mainMovie = () => {
  const form = document.getElementById('movie_main_form')
  if (!form) return null;
  form.addEventListener('input', () => {

    const slicewatch = form.value.indexOf('watch?v=');
    const sliceshorts = form.value.indexOf('/shorts/');
    let sliceplace = 0;
    if(slicewatch > 0) {
      sliceplace = slicewatch;
    } else if(sliceshorts > 0) {
      sliceplace = sliceshorts;
    }

    const alreadyPreview = document.querySelector('.main-movie-preview');
    if (alreadyPreview) {
      alreadyPreview.remove();
    };

    if(sliceplace > 0) {
      const movieId = form.value.substr( sliceplace + 8, 11 );
      const movieMainEmbeddedForm  = document.getElementById('movie_main_embedded_form');
      movieMainEmbeddedForm.value = movieId;
      const movieMainThumbnailForm  = document.getElementById('movie_main_thumbnail_form');
      const mainMovieThumbnail = 'https://img.youtube.com/vi/' + movieId + '/hqdefault.jpg';
      movieMainThumbnailForm.value = mainMovieThumbnail

      const previewWrapper = document.createElement('div');
      previewWrapper.setAttribute('class', 'main-movie-preview');
  
      const previewImage = document.createElement('img');
      previewImage.setAttribute('class', 'index-thumbnail');
      previewImage.src = mainMovieThumbnail;
  
      const previewList = document.getElementById('main-movie-previews');
      previewWrapper.appendChild(previewImage);
      previewList.appendChild(previewWrapper);
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
form.addEventListener('input', () => {
  const slicewatch = form.value.indexOf('watch?v=');
  const sliceshorts = form.value.indexOf('/shorts/');
  let sliceplace = 0;
  if(slicewatch > 0) {
    sliceplace = slicewatch;
  } else if(sliceshorts > 0) {
    sliceplace = sliceshorts;
  }

  const alreadyPreview = document.querySelector('.left-movie-preview');
  if (alreadyPreview) {
    alreadyPreview.remove();
  };

  if(sliceplace > 0) {
    const movieId = form.value.substr( sliceplace + 8, 11 );
    const movieLeftEmbeddedForm  = document.getElementById('movie_left_embedded_form');
    movieLeftEmbeddedForm.value = movieId;

    const leftMovieThumbnail = 'https://img.youtube.com/vi/' + movieId + '/hqdefault.jpg';

    const previewWrapper = document.createElement('div');
    previewWrapper.setAttribute('class', 'left-movie-preview');

    const previewImage = document.createElement('img');
    previewImage.setAttribute('class', 'index-thumbnail');
    previewImage.src = leftMovieThumbnail;

    const previewList = document.getElementById('left-movie-previews');
    previewWrapper.appendChild(previewImage);
    previewList.appendChild(previewWrapper);
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
form.addEventListener('input', () => {
  const slicewatch = form.value.indexOf('watch?v=');
  const sliceshorts = form.value.indexOf('/shorts/');
  let sliceplace = 0;
  if(slicewatch > 0) {
    sliceplace = slicewatch;
  } else if(sliceshorts > 0) {
    sliceplace = sliceshorts;
  }

  const alreadyPreview = document.querySelector('.right-movie-preview');
  if (alreadyPreview) {
    alreadyPreview.remove();
  };

  if(sliceplace > 0) {
    const movieId = form.value.substr( sliceplace + 8, 11 );
    const movieRightEmbeddedForm  = document.getElementById('movie_right_embedded_form');
    movieRightEmbeddedForm.value = movieId;

    const rightMovieThumbnail = 'https://img.youtube.com/vi/' + movieId + '/hqdefault.jpg';

    const previewWrapper = document.createElement('div');
    previewWrapper.setAttribute('class', 'right-movie-preview');

    const previewImage = document.createElement('img');
    previewImage.setAttribute('class', 'index-thumbnail');
    previewImage.src = rightMovieThumbnail;

    const previewList = document.getElementById('right-movie-previews');
    previewWrapper.appendChild(previewImage);
    previewList.appendChild(previewWrapper);

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
    const alreadyPreview = document.querySelector('.talent-preview');
    if (alreadyPreview) {
      alreadyPreview.remove();
    };
    const blob = window.URL.createObjectURL(file);

    const previewWrapper = document.createElement('div');
    previewWrapper.setAttribute('class', 'talent-preview');

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
    textField.addEventListener('input', (event) => {
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


let movieTagHandler = true
const renderMovieTagInput = () => {
  const tagFields = document.querySelectorAll('.movie-tag-contents');
  if (!tagFields) return null;
  tagFields.forEach(element => {
    element.addEventListener("click", function(e){
    if (document.getElementById('search-movie-tag')){
      // 検索ページでの処理
      document.getElementById('search-movie-tag').value = e.target.textContent;
    } else {
      // 投稿、編集ページでの処理
      const movieFirstTag  = document.getElementById('movie_firsttag');
      const movieSecondTag  = document.getElementById('movie_secondtag');
      const movieThirdTag  = document.getElementById('movie_thirdtag');
      if (!movieFirstTag.value){
        movieFirstTag.value = e.target.textContent;
      } else if (!movieSecondTag.value){
        movieSecondTag.value = e.target.textContent;
      } else {
        movieThirdTag.value = e.target.textContent;
      }
      const movieMainTagsMerged  = document.getElementById('movie_main_tags_merged');
      movieMainTagsMerged.value = movieFirstTag.value + '`/$' + movieSecondTag.value + '`/$' + movieThirdTag.value;
      movieTagHandler = false
    };
    });
  });
};

window.addEventListener('turbo:render', renderMovieTagInput);

const loadMovieTagInput = () => {
  const tagFields = document.querySelectorAll('.movie-tag-contents');
  if (!tagFields) return null;
  tagFields.forEach(element => {
    element.addEventListener("click", function(e){
      if (movieTagHandler){
        if (document.getElementById('search-movie-tag')){
          // 検索ページでの処理
          document.getElementById('search-movie-tag').value = e.target.textContent;
        } else {
          // 投稿、編集ページでの処理
          const movieFirstTag  = document.getElementById('movie_firsttag');
          const movieSecondTag  = document.getElementById('movie_secondtag');
          const movieThirdTag  = document.getElementById('movie_thirdtag');
          if (!movieFirstTag.value){
            movieFirstTag.value = e.target.textContent;
          } else if (!movieSecondTag.value){
            movieSecondTag.value = e.target.textContent;
          } else {
            movieThirdTag.value = e.target.textContent;
          };
          const movieMainTagsMerged  = document.getElementById('movie_main_tags_merged');
          movieMainTagsMerged.value = movieFirstTag.value + '`/$' + movieSecondTag.value + '`/$' + movieThirdTag.value;
        };
      };
    });
  });
};

window.addEventListener('turbo:load', loadMovieTagInput);


const talentTag = () => {
  const textFields = document.querySelectorAll('.talent-tag');
  if (!textFields) return null;
  textFields.forEach(textField => {
    textField.addEventListener('input', (event) => {
      const talentFirstTag  = document.getElementById('talent_firsttag');
      const talentSecondTag  = document.getElementById('talent_secondtag');
      const talentThirdTag  = document.getElementById('talent_thirdtag');
      const talentTagsMerged  = document.getElementById('talent_tags_merged');
      talentTagsMerged.value = talentFirstTag.value + '`/$' + talentSecondTag.value + '`/$' + talentThirdTag.value;
    });
  });
};

window.addEventListener('turbo:load', talentTag);
window.addEventListener('turbo:render', talentTag);


let talentTagHandler = true
const renderTalentTagInput = () => {
  const tagFields = document.querySelectorAll('.talent-tag-contents');
  if (!tagFields) return null;
  tagFields.forEach(element => {
    element.addEventListener("click", function(e){
      if (document.getElementById('search-talent-tag')){
        // 検索ページでの処理
        document.getElementById('search-talent-tag').value = e.target.textContent;
      } else {
        // 投稿、編集ページでの処理
      const talentFirstTag  = document.getElementById('talent_firsttag');
      const talentSecondTag  = document.getElementById('talent_secondtag');
      const talentThirdTag  = document.getElementById('talent_thirdtag');
      if (!talentFirstTag.value){
        talentFirstTag.value = e.target.textContent;
      } else if (!talentSecondTag.value){
        talentSecondTag.value = e.target.textContent;
      } else {
        talentThirdTag.value = e.target.textContent;
      };
      const talentTagsMerged  = document.getElementById('talent_tags_merged');
      talentTagsMerged.value = talentFirstTag.value + '`/$' + talentSecondTag.value + '`/$' + talentThirdTag.value;
      talentTagHandler = false ;
    }});
  });
};

window.addEventListener('turbo:render', renderTalentTagInput);

const loadTalentTagInput = () => {
  const tagFields = document.querySelectorAll('.talent-tag-contents');
  if (!tagFields) return null;
  tagFields.forEach(element => {
    element.addEventListener("click", function(e){
      if (talentTagHandler){
        if (document.getElementById('search-talent-tag')){
          // 検索ページでの処理
          document.getElementById('search-talent-tag').value = e.target.textContent;
        } else {
          // 投稿、編集ページでの処理
        const talentFirstTag  = document.getElementById('talent_firsttag');
        const talentSecondTag  = document.getElementById('talent_secondtag');
        const talentThirdTag  = document.getElementById('talent_thirdtag');
        if (!talentFirstTag.value){
          talentFirstTag.value = e.target.textContent;
        } else if (!talentSecondTag.value){
          talentSecondTag.value = e.target.textContent;
        } else {
          talentThirdTag.value = e.target.textContent;
        };
        const talentTagsMerged  = document.getElementById('talent_tags_merged');
        talentTagsMerged.value = talentFirstTag.value + '`/$' + talentSecondTag.value + '`/$' + talentThirdTag.value;
        };
      };
    });
  });
};

window.addEventListener('turbo:load', loadTalentTagInput);
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

const editTag = () => {

  if (!document.getElementById('movie_main_tags_merged')) return null;
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

window.addEventListener('turbo:load', editTag);
window.addEventListener('turbo:render', editTag);

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
