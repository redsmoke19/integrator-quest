(function () {
  'use strict';
  const getFilesUpload = () => {
    FilePond.registerPlugin(FilePondPluginFileValidateType);
    FilePond.setOptions({
      server: 'http://httpbin.org/anything',
      credits: false,
      allowDrop: false,
      allowMultiple: true,
      maxParallelUploads: 2,
      itemInsertLocation: 'after',
      labelIdle: '<span class="filepond--label-action"> + Добавить изображение </span>',
      labelInvalidField: 'Поле содержит недопустимые файлы',
      labelFileWaitingForSize: 'Укажите размер',
      labelFileSizeNotAvailable: 'Размер не поддерживается',
      labelFileLoading: 'Ожидание',
      labelFileLoadError: 'Ошибка при ожидании',
      labelFileProcessing: 'Загрузка',
      labelFileProcessingComplete: 'Загружено',
      labelFileProcessingAborted: 'Загрузка отменена',
      labelFileProcessingError: 'Ошибка при загрузке',
      labelFileProcessingRevertError: 'Ошибка при возврате',
      labelFileRemoveError: 'Ошибка при удалении',
      labelTapToCancel: 'нажмите для отмены',
      labelTapToRetry: 'нажмите, чтобы повторить попытку',
      labelTapToUndo: 'нажмите для отмены последнего действия',
      labelButtonRemoveItem: 'Удалить',
      labelButtonAbortItemLoad: 'Прекращено',
      labelButtonRetryItemLoad: 'Повторите попытку',
      labelButtonAbortItemProcessing: 'Отмена',
      labelButtonUndoItemProcessing: 'Отмена последнего действия',
      labelButtonRetryItemProcessing: 'Повторите попытку',
      labelButtonProcessItem: 'Загрузка',
      labelMaxFileSizeExceeded: 'Файл слишком большой',
      labelMaxFileSize: 'Максимальный размер файла: {filesize}',
      labelMaxTotalFileSizeExceeded: 'Превышен максимальный размер',
      labelMaxTotalFileSize: 'Максимальный размер файла: {filesize}',
      labelFileTypeNotAllowed: 'Файл неверного типа',
      fileValidateTypeLabelExpectedTypes: 'Ожидается {allButLastType} или {lastType}',
      imageValidateSizeLabelFormatError: 'Тип изображения не поддерживается',
      imageValidateSizeLabelImageSizeTooSmall: 'Изображение слишком маленькое',
      imageValidateSizeLabelImageSizeTooBig: 'Изображение слишком большое',
      imageValidateSizeLabelExpectedMinSize: 'Минимальный размер: {minWidth} × {minHeight}',
      imageValidateSizeLabelExpectedMaxSize: 'Максимальный размер: {maxWidth} × {maxHeight}',
      imageValidateSizeLabelImageResolutionTooLow: 'Разрешение слишком низкое',
      imageValidateSizeLabelImageResolutionTooHigh: 'Разрешение слишком высокое',
      imageValidateSizeLabelExpectedMinResolution: 'Минимальное разрешение: {minResolution}',
      imageValidateSizeLabelExpectedMaxResolution: 'Максимальное разрешение: {maxResolution}',
    });
    const inputElement = document.querySelector('.quset-create__files');
    const pond = FilePond.create(inputElement, {
      acceptedFileTypes: ['image/*'],
      InstantUpload: false,
      styleButtonRemoveItemPosition: 'right',
      iconRemove:
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 4V6H15V4H9Z" fill="#E33E3E"/></svg>',
      iconProcess:
        '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="#2d2d2d" fill-rule="evenodd"/></svg>',
    });
    const element = document.querySelector('.filepond--list-scroller');
    // element.forEach(item => {
    element.parentElement.insertBefore(element, element.previousSibling);
    // });
  };

  const setUploadElements = item => {
    const inputAuduoElements = item.querySelector('.create-list__files--audio');
    FilePond.create(inputAuduoElements, {
      acceptedFileTypes: ['audio/*'],
      labelIdle: '<span class="filepond--label-action"> + Добавить аудиофайл </span>',
      InstantUpload: false,
      styleButtonRemoveItemPosition: 'right',
      iconRemove:
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 4V6H15V4H9Z" fill="#E33E3E"/></svg>',
      iconProcess:
        '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="#2d2d2d" fill-rule="evenodd"/></svg>',
    });
    const inputImageElements = item.querySelector('.create-list__files--image');
    FilePond.create(inputImageElements, {
      acceptedFileTypes: ['image/*'],
      labelIdle: '<span class="filepond--label-action"> + Добавить изображение </span>',
      InstantUpload: false,
      styleButtonRemoveItemPosition: 'right',
      iconRemove:
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 4V6H15V4H9Z" fill="#E33E3E"/></svg>',
      iconProcess:
        '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="#2d2d2d" fill-rule="evenodd"/></svg>',
    });
    const element = item.querySelectorAll('.filepond--list-scroller');
    element.forEach(i => {
      i.parentElement.insertBefore(i, i.previousSibling);
    });
  };
  const getMap = () => {
    const map = document.querySelector('#map');

    if (map) {
      ymaps.ready(function () {
        const map = new ymaps.Map('map', {
          center: [55.76, 37.64],
          zoom: 10,
          controls: [],
        });
        const myPlacemark = new ymaps.Placemark(
          map.getCenter(),
          {
            hintContent: 'Офис Intergator.Digital',
          },
          {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './static/images/common/pin-active.svg',
            // Размеры метки.
            iconImageSize: [27, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [13, 42],
          }
        );
        map.geoObjects.add(myPlacemark);
      });
    }
  };
  const getQuestItem = () => {
    const addButton = document.querySelector('.create-list__add-task');
    const elementsList = document.querySelector('.create-list');
    const template = document.querySelector('template').content.querySelector('li');

    function getCurrentValueQuestItems(item, index) {
      item.querySelector('.create-list__title').textContent = `Задание ${index + 1}`;
      item.querySelector('.create-list__drop').setAttribute('data-bs-target', `#createQuestItem${index + 1}`);
      item.querySelector('.create-list__drop').setAttribute('aria-controls', `createQuestItem${index + 1}`);
      item.querySelector('.collapse').setAttribute('id', `createQuestItem${index + 1}`);
      item.querySelector('._js-create-name-label').setAttribute('for', `createQuestItemName${index + 1}`);
      item.querySelector('._js-create-name-input').setAttribute('name', `createQuestItemName${index + 1}`);
      item.querySelector('._js-create-name-input').setAttribute('id', `createQuestItemName${index + 1}`);
      item.querySelector('._js-create-desk-label').setAttribute('for', `createQuestItemDesk${index + 1}`);
      item.querySelector('._js-create-desk-textarea').setAttribute('name', `createQuestItemDesk${index + 1}`);
      item.querySelector('._js-create-desk-textarea').setAttribute('id', `createQuestItemDesk${index + 1}`);
      item.querySelector('._js-create-answer-label').setAttribute('for', `createQuestItemAnswer${index + 1}`);
      item.querySelector('._js-create-answer-input').setAttribute('name', `createQuestItemAnswer${index + 1}`);
      item.querySelector('._js-create-answer-input').setAttribute('id', `createQuestItemAnswer${index + 1}`);
      item.querySelector('._js-create-map-first-label').setAttribute('for', `createQuestMapFirst${index + 1}`);
      item.querySelector('._js-create-map-first-input').setAttribute('name', `createQuestMapFirst${index + 1}`);
      item.querySelector('._js-create-map-first-input').setAttribute('id', `createQuestMapFirst${index + 1}`);
      item.querySelector('._js-create-map-second-label').setAttribute('for', `createQuestMapSecond${index + 1}`);
      item.querySelector('._js-create-map-second-input').setAttribute('name', `createQuestMapSecond${index + 1}`);
      item.querySelector('._js-create-map-second-input').setAttribute('id', `createQuestMapSecond${index + 1}`);
      item.querySelector('.create-list__files--audio').setAttribute('name', `createQuestAudio${index + 1}`);
      item.querySelector('.create-list__files--image').setAttribute('name', `createQuestImage${index + 1}`);
    }

    function getPointMap(item) {
      const addPointButton = item.querySelector('.create-list__add-point');
      const addPointText = addPointButton.querySelector('span');
      const addPointFields = item.querySelector('.create-list__point-fields');
      addPointButton.addEventListener('click', () => {
        if (addPointFields.classList.contains('_active')) {
          addPointFields.classList.remove('_active');
          addPointButton.classList.remove('_delete');
          addPointText.textContent = '+ Добавить точку на карту';
          const inputs = addPointFields.querySelectorAll('input');
          inputs.forEach(item => {
            item.value = '';
          });
        } else {
          addPointFields.classList.add('_active');
          addPointText.textContent = 'Удалить точку на карте';
          addPointButton.classList.add('_delete');
        }
      });
    }

    function getVisibleItems() {
      const questItems = document.querySelectorAll('.create-list__item');
      if (questItems.length < 0) return;
      document.addEventListener('DOMContentLoaded', () => {
        questItems.forEach((item, i) => {
          const deleteButton = item.querySelector('.create-list__delete');
          deleteButton.addEventListener('click', function () {
            getDeleteItem(item);
          });
          getCurrentValueQuestItems(item, i);
          setUploadElements(item);
          getPointMap(item);
        });
      });
    }
    getVisibleItems();

    function getDeleteItem(questElement) {
      questElement.remove();
      const questItems = document.querySelectorAll('.create-list__item');
      if (questItems.length < 0) return;
      questItems.forEach((item, i) => {
        getCurrentValueQuestItems(item, i);
      });
    }

    function getItem() {
      const questElement = template.cloneNode(true);
      const deleteButton = questElement.querySelector('.create-list__delete');
      const questLenght = document.querySelectorAll('.create-list__item').length;
      deleteButton.addEventListener('click', function () {
        getDeleteItem(questElement);
      });
      getCurrentValueQuestItems(questElement, questLenght);
      setUploadElements(questElement);
      getPointMap(questElement);
      return questElement;
    }
    const fragment = document.createDocumentFragment();
    addButton.addEventListener('click', function () {
      fragment.append(getItem());
      elementsList.append(fragment);
    });
  };
  getFilesUpload();
  getMap();
  getQuestItem();
})();
