// Database Card Materi Pokok
let DataMateriPk = [
    {
        pageMateriPk: '',
        imgMateriPk: '../../img/bkbb5.jpg',
        txtJdlMateriPk: 'Indonesia Menggugat Tahun 1930',
        txtParagrapMateriPk: 'Pidato Pembelaan Bung Karno di Muka Hakim Kolonial'
    },
    {
        pageMateriPk: '',
        imgMateriPk: '../../img/bkbb6.jpg',
        txtJdlMateriPk: 'Kapitalisme Bangsa Sendiri 1932',
        txtParagrapMateriPk: 'Lorem ipsum dolor sit amet, consectetur adipicising elit'
    },
    {
        pageMateriPk: '',
        imgMateriPk: '../../img/bkbb7.jpg',
        txtJdlMateriPk: 'MENCAPAI INDONESIA MERDEKA TAHUN 1933',
        txtParagrapMateriPk: 'Lorem ipsum dolor sit amet, consectetur adipicising elit'
    },
]
// END Database Card Materi Pokok

const state = {
    'querySet': DataMateriPk
}

buildData()

buildData(() => {
    const data = $('data')
})
