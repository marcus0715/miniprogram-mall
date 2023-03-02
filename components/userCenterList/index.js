
Component({
  data: {
    array: [{
      "id": 1,
      "icon": "location-o",
      "text": "通讯簿"
    }, {
      "id": 2,
      "icon": "underway-o",
      "text": "客户仪表板"
    }]
  },
  onTap: (event) => {
    const id = event.currentTarget.dataset.id;
    console.log('onTap: ' + id);
    switch(id) {
      case 1:
        break;
      case 2:
        break;
      default:
        return;
    }
  }
})