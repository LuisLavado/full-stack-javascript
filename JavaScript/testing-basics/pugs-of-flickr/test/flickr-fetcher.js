var FlickrFetcher = {
    // photoObjToURL: function () {
    //     return 'https://farm2.staticflickr.com/1669/25373736106_146731fcb7_b.jpg';
    // }

    // photoObjToURL: function (photoObj) {
    //     if (photoObj.id === '25373736106') {
    //         return 'https://farm2.staticflickr.com/1669/25373736106_146731fcb7_b.jpg';
    //     }
    //     return 'https://farm2.staticflickr.com/1514/24765033584_3c190c104e_b.jpg';
    // }

    // photoObjToURL: function (photoObj) {
    //     if (photoObj.id === '25373736106') {
    //         return 'https://farm2.staticflickr.com/1669/25373736106_146731fcb7_b.jpg';
    //     }
    //     if (photoObj.id === '24765033584') {
    //         return 'https://farm2.staticflickr.com/1514/24765033584_3c190c104e_b.jpg';
    //     }
    //     return 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg';
    // }

    // Vamos a refactorizar
    photoObjToURL: function (photoObj) {
        return ['https://farm',
            photoObj.farm, '.staticflickr.com/',
            photoObj.server, '/',
            photoObj.id, '_',
            photoObj.secret, '_b.jpg'
        ].join('');
    }
};

module.exports = FlickrFetcher;