let words_container = document.querySelector("#words");
let words_current_pos = 120
let input = document.querySelector("input")
let reset_button = document.querySelector("button")
let timer = document.querySelector('#word_timer');
let typing_timer = document.querySelector("#typing_timer");
let typing_is_start = false
let nexthighlight_is_clicked = true
let time = 2000
let typing_time = 60000
let settimer
let set_typing_timer
let current_highlight
let current_typing


// daftar semua kata yang di munculin
let words_list = [
    "kompas", "senandung", "magang", "anggota", "kelihatan", "model", "pantang", "tanpa", "partikel", "sampah", "naskah", "berkemah", "beruntung", "seminar", "pengertian", "ramah", "pejabat", "presiden", "paku", "belajar", "kelas", "arah", "pesona", "bijaksana", "tendangan", "topi", "ciptaan", "berpotensi", "gelas", "kandungan", "hadir", "tulis", "mandiri", "dahulu", "kebencian", "berhasil", "santap", "rangkap", "sekarang", "berkekuatan", "terlalu", "memilih", "peluncur", "pustaka", "ketiga", "menangis", "acara", "yang", "bantuan", "kantor", "supaya", "prinsip", "bunga", "baja", "ekor", "untai", "pipi", "simbol", "terjadi", "menyala", "gerakan", "pilihanmu", "tertolong", "gangguan", "dada", "penipuan", "pedih", "lengkungan", "paman", "bayangan", "lempar", "penarikan", "sajak", "mahakuasa", "yakin", "sebelum", "terjemah", "juara", "sumur", "sarang", "diri", "pergi", "merampas", "kusam", "penciuman", "getah", "sesuatu", "kehebatan", "daftar", "kekar", "tombak", "pembawaan", "daging", "sehingga", "sombong", "bibi", "pendapatan", "terbenam", "ayah", "setiap", "mantan", "silang", "gandum", "pagar", "atasan", "atap", "dokumentasi", "nafkah", "bangun", "akademis", "tamat", "pulau", "wajah", "kudis", "ramai", "kesadaran", "cuaca", "persis", "duri", "kelap", "gembira", "rusak", "lebar", "buta", "kesatuan", "pikir", "tidur", "keamanan", "depan", "petang", "menetas", "titik", "mengapa", "sudah", "pembebasan", "tercabut", "sukacita", "menetap", "sambut", "layang", "pesanan", "pemanas", "gema", "kacamata", "bermaksud", "dekat", "lelang", "rusuh", "wakil", "dengan", "pantau", "ucapan", "sasaran", "sukses", "wujud", "perasaan", "baik", "norma", "pedang", "cek", "lekas", "ejaan", "melebihi", "beres", "kemudian", "jabatan", "tua", "kenal", "selamat", "gigit", "minimal", "jenuh", "cerai", "kerugian", "profesional", "tercinta", "garap", "nafas", "atraksi", "unggul", "halus", "romantis", "mendadak", "rapat", "suka", "memulai", "garing", "gusur", "harapan", "yaitu", "halaman", "bertugas", "basah", "sapi", "putih", "hantam", "desakan", "tangkas", "dana", "menyelamatkan", "posisi", "gendong", "ibu", "obral", "musuh", "papan", "letih", "jam", "kedua", "gundul", "cerah", "wanita", "kelima", "ekspresi", "harga", "tunjangan", "kamu", "leluasa", "berlaku", "sebelas", "karir", "berlanjut", "tertentu", "mempunyai", "rebah", "pecahan", "kotoran", "berkarir", "sebutan", "alami", "bangku", "besi", "bendungan", "mulut", "tamu", "tumpul", "cepat", "internet", "tertata", "siasat", "panjat", "umur", "muluk", "terpanjang", "sepintas", "mengetik", "mencari", "tema", "telinga", "unggulan", "keharusan", "sandal", "landa", "menyalin", "persatuan", "alasan", "rancang", "menanti", "ceria", "toko", "kebal", "mengakui", "sesuai", "serang", "rintihan", "perjuangan", "pantai", "baru", "pemeras", "kurung", "panas", "melambung", "kecil", "bunuh", "sibuk", "rumput", "kesempatan", "standar", "siang", "timah", "jaringan", "gerak", "asumsi", "terpikat", "penghapusan", "terpadu", "hukum", "unggas", "bahaya", "beranda", "sindikat", "transit", "kritik", "menggambar", "sembarang", "taman", "gunting", "kacau", "permanen", "jelek", "beras", "perkenalan", "menyebutkan", "infeksi", "jauhnya", "keping", "ganti", "penari", "saudara", "gadis", "berolahraga", "kejadian", "adrenalin", "bersama", "bertengger", "impian", "menyenangkan", "telah", "fokus", "rintangan", "tiket", "pembuat", "kapal", "binatang", "ladang", "masalah", "utang", "pasukan", "bekal", "walaupun", "tengah", "segar", "lagu", "berdaya", "berjatuhan", "mencuci", "gajah", "memindahkan", "terletak", "rumah", "bergantung", "kurang", "tinjau", "ikut", "sepeda", "pola", "beliau", "bungsu", "pemecahan", "menit", "pabrik", "berkomentar", "kas", "curam", "perbuatan", "bawaan", "jati", "pubertas", "keputusan", "tangga", "lengan", "kecuali", "kerabat", "indah", "persembahan", "teknik", "menonton", "percakapan", "bagaimana", "penjumlahan", "mertua", "karena", "sumber", "kendaraan", "kanji", "gunakan", "emosional", "bahan", "kembali", "bangga", "nama", "tanda", "kasih", "masuk", "materi", "koran", "demikian", "berlubang", "seseorang", "perampas", "sekedar", "bersepeda", "kepada", "senang", "rekan", "ternama", "pengarah", "tapal", "bangsa", "begini", "cemburu", "catatan", "cucu", "piutang", "kakek", "coklat", "film", "radang", "mungkin", "ingin", "edisi", "berbincang", "hadiah", "kuda", "sulung", "kerah", "kolam", "karisma", "kekacauan", "terkunci", "kekebalan", "mobil", "celana", "selangkah", "teropong", "lipat", "duda", "berkabung", "liga", "mimpi", "berbagai", "bersanding", "beristirahat", "malang", "jauh", "lautan", "kunci", "kelembutan", "terpisah", "resesi", "cadang", "resmi", "dorong", "curi", "kawanan", "berlibur", "kawah", "ribuan", "pindah", "peluru", "rusuk", "seluruh", "ruang", "lelucon", "kakak", "jaket", "undi", "tercipta", "total", "selamanya", "kejar", "pasir", "pekerjaan", "menghalau", "buku", "tingkatan", "nasi", "berita", "penghancuran", "sesudah", "tinggi", "terlipat", "bahas", "bawah", "kebenaran", "bukti", "panggang", "sentuh", "badai", "kecepatan", "kebaikan", "kasus", "denda", "keji", "tegang", "terdampar", "kepangkatan", "kain", "aktor", "adalah", "penerangan", "pahit", "majelis", "tercapai", "kepala", "yayasan", "berkorban", "pesaing", "pandangan", "segi", "lepaskan", "dendam", "benturan", "ingat", "adidaya", "bagian", "guru", "hapus", "menawan", "kekerasan", "teringat", "martabat", "cocok", "berkaitan", "bambu", "sundul", "bajak", "fakta", "penikmat", "selain", "bilik", "sorotan", "radiasi", "tengok", "dibandingkan", "hasilnya", "alamat", "ekonomi", "hambatan", "jejak", "fatal", "negosiasi", "timbang", "kedutaan", "dekorasi", "nuansa", "kutub", "termasuk", "lekuk", "mereka", "raba", "durian", "imunisasi", "ikan", "petunjuk", "ban", "tidak", "tambah", "tolak", "perahu", "perjalanan", "penghasil", "curang", "menagih", "hamparan", "tubuh", "nenek", "negara", "renang", "tukar", "pengunjung", "kesimpulan", "datang", "tampilan", "tekan", "ongkos", "tergerak", "tenis", "menduduki", "kilat", "bintang", "raja", "legal", "lembur", "saran", "telapak", "kulit", "layak", "taat", "panjang", "harum", "pisau", "kasir", "bugar", "terbuat", "berisik", "rombongan", "kebahagiaan", "sandaran", "kita", "planet", "kebiasaan", "kacang", "tangkis", "kekuatan", "kelahiran", "fisik", "saham", "dunia", "tanggap", "anda", "janggut", "berasap", "identitas", "apapun", "bank", "darah", "bakar", "belalang", "pendingin", "bayaran", "isi", "boleh", "seratus", "ilmuan", "paham", "saring", "makan", "goyang", "rumus", "laju", "berliku", "pengemudi", "kedalaman", "separuh", "campuran", "tanaman", "kehilangan", "kamar", "disambut", "rahang", "laci", "kemarin", "sudut", "bulan", "sana", "rambut", "menempuh", "jarang", "paruh", "aliran", "pengacara", "buah", "merusak", "hangus", "agen", "bekerja", "mulus", "berpacu", "renovasi", "gulat", "tulang", "gugat", "hadang", "percayai", "terbang", "percaya", "bermain", "pilihan", "besar", "pemerintah", "teknisi", "dukung", "padahal", "alam", "sejak", "sembilan", "transparan", "pelajar", "air", "artis", "dasar", "kuat", "tercermin", "salam", "sore", "gratis", "bertukar", "bergurau", "tampar", "bertemu", "terkenal", "penjualan", "langka", "bertipe", "kecantikan", "kemeja", "serbuk", "semacam", "kaki", "tembok", "langit", "tarik", "membeli", "pertama", "kucing", "matahari", "pemikiran", "proses", "terpotong", "tahunan", "dingin", "berkabut", "apakah", "makam", "pertemuan", "tikungan", "melonjak", "sambutan", "bangkai", "loket", "selusin", "kota", "buruh", "berangkat", "sehelai", "bencana", "berkarat", "juga", "rantai", "logat", "pelumas", "senjata", "aturan", "pundak", "beberapa", "ginjal", "tempat", "diam", "tawanan", "bejana", "pertapa", "cadangan", "perlombaan", "lompat", "bisa", "pinggang", "inti", "status", "pemain", "berseru", "metode", "bepergian", "cendana", "malam", "kekeringan", "terhebat", "berbaris", "tuang", "peras", "katakan", "ternyata", "layangan", "dasi", "terima", "acak", "tertindas", "menyalahkan", "sakit", "hidung", "buaya", "belasan", "padat", "angkatan", "terlatih", "tambang", "tujuan", "lain", "semangat", "silakan", "aspirasi", "tenang", "betapa", "kejahatan", "cukai", "konfirmasi", "pria", "duduk", "lintas", "lempeng", "kawasan", "perilaku", "taruna", "humor", "sekali", "upacara", "besok", "pada", "gempa", "berlipat", "lalat", "merdeka", "pengunci", "tempel", "memecat", "mata", "perempuan", "rampas", "kumparan", "badan", "setitik", "radikal", "buronan", "apartemen", "manis", "kostum", "ajang", "berlumpur", "berusia", "adik", "lawan", "buram",
    "ayam", "buruk", "kata", "daya", "level", "merepotkan", "orang", "peringatan", "biasanya", "arang", "dusun", "menikah", "musik", "kedatangan", "kiranya", "lusuh", "malu", "asa", "paksa", "sabar", "capai", "tinta", "propinsi", "cahaya", "pokok", "lunak", "merawat", "berikan", "menunda", "organ", "tindak", "tenaga", "jasa", "pakaian", "alis", "latihan", "uang", "sarapan", "biaya", "kelak", "bengal", "detik", "pembelian", "lezat", "lebah", "kemah", "selisih", "kanan", "berunding", "tulisan", "tercantum", "maaf", "pemasaran", "upah", "tikus", "kode", "lamar", "punggung", "madu", "penolong", "lahir", "tiada", "betis", "perpaduan", "bersambung", "hampir", "hiburan", "cermin", "nona", "listrik", "pelayanan", "bagan", "berminat", "ketika", "keaslian", "gagasan", "sepatu", "galaksi", "angkat", "berjasa", "dahi", "berlari", "berjauhan", "kecerdasan", "tombol", "heran", "partisipasi", "lihat", "ipar", "rawi", "kenalan", "halangi", "menulis", "bulanan", "menarik", "rebus", "biru", "tradisional", "istana", "temukan", "berbusana", "bimbang", "sepadan", "hormat", "dalamnya", "kejauhan", "bertamu", "penutup", "sistem", "warna", "lilin", "saya", "dorongan", "kecapi", "sampai", "program", "kecemaran", "murid", "suruh", "identik", "tendang", "kepulauan", "membuka", "jalan", "dia", "konferensi", "hewan", "merah", "formula", "gusi", "adat", "goreng", "menceritakan", "tanggung", "santai", "selat", "keluarga",
    "persahabatan", "ingatan", "membayar", "lurus", "membuat", "terhalang", "lama", "kondisi", "penyesalan", "kadar", "sejarah", "supir", "tangan", "tersandung", "mengirim", "pintu", "katak", "dijelaskan", "berperan", "keteguhan", "perangkat", "anting", "ide", "ujung", "sempurna", "tewas", "tingkat", "anak", "pangkas", "penyakit", "kerajaan", "bupati", "gabung", "betah", "buka", "lemari", "sulut", "buatan", "putar", "raksasa", "bicara", "bukankah", "baterai", "itu", "dapur", "kumat", "geng"
]

let typed = [

]

// untuk me render satu element yang menampung satu kata
function createWordElement(word) {
    let node = document.createElement("H2")
    let textnode = document.createTextNode(word)
    node.appendChild(textnode)
    if (words_container.childElementCount < 1) {
        node.setAttribute('class', 'highlight');
    }
    words_container.appendChild(node)
}

// untuk merender semua kata secara random
function renderWords() {
    words_container.innerHTML = ''
    for (let a = 0; a <= 200; a++) {
        let rand = Math.floor(Math.random() * words_list.length)
        createWordElement(words_list[rand])
    }

}

// untuk mengupdate posisi words container keatas
// membuat ilusi kata yang sudah di ketik pergi keatas
function update_words_position() {
    words_current_pos -= 50
    words_container.style.top = words_current_pos + "px"
}


function nextHighLight(timesUp) {
    // setiap user mengetik spasi bar timer otomatis berjalan
    start_timer_animation(timer, time)

    // untuk mengubah higihlight kata yang sudah selesai di ketika
    // dan meng highlight kata yang baru di ketik
    current_highlight = document.querySelector(".highlight")
    current_highlight.classList.remove("highlight");
    current_highlight.nextElementSibling.classList.add("highlight")

    // check kata yang udah selesai diketik dan tertekan spasi
    checkWord()

    // update posisi words container supaya pergi keatas
    update_words_position()

    // ubah value input form jadi kosong untuk 
    input.value = ""

    // timer untuk setiap kata yang mau diketik
    // kalau waktu timer habis otomatis ganti ke kata selanjutnya
    settimer = setTimeout(() => {
        console.log("times up")
        nextHighLight(true)
    }, time)
    if (!timesUp) {
        clearTimeout(timer)
    }

}

// untuk mengecek kata perkata
function checkWord() {
    let condition = null;
    current_typing = input.value.trim()
    current_highlight_text = current_highlight.innerText



    if (current_highlight_text !== current_typing) {
        current_highlight.classList.add("wrong")
        condition = false
    } else {
        current_highlight.classList.add("correct")
        condition = true
    }
    typed.push({ typed: current_typing, correct: current_highlight_text, condition })
}


// untuk mereset proses pengetikan
function reset_words() {
    words_current_pos = 120
    words_container.style.top = words_current_pos + "px"
    renderWords()
    clearTimeout(settimer)
    stop_timer_animation(timer)
}

// untuk memulai animasi bar timer
function start_timer_animation(el, time) {
    el.firstElementChild.style.animationDuration = time + "ms"
    el.firstElementChild.classList.remove("bar-animation");
    void el.offsetWidth;
    el.firstElementChild.classList.add("bar-animation")
}

function stop_timer_animation(el) {
    console.log("animation stop")
    el.firstElementChild.classList.remove("bar-animation");
    void timer.offsetWidth;
    typing_is_start = false
}

// untuk mengecek perhuruf sudah sesuai dengan yang diketik
function checkLetters() {
    current_highlight = document.querySelector(".highlight")
    current_highlight_text = current_highlight.innerText
    current_typing = input.value.trim()
    let expression = `^${current_typing}`;
    let regex = new RegExp(expression, 'g')


    if (current_highlight_text.match(regex)) {
        current_highlight.classList.remove("wrong")
    } else {
        current_highlight.classList.add("wrong")
    }
}

// kumpulan function untuk event yang terjadi di keyboard
function onKeyClick() {
    input.addEventListener("keypress", function (event) {
        if (event.key === " ") {
            current_typing = input.value.trim()
            if (current_typing !== "") {
                clearTimeout(settimer)
                nextHighLight(false)
            }

        }

    })
    input.addEventListener("keyup", () => {
        console.log("keyup")
        if (!typing_is_start) {
            start_typing_timer(60000)
            start_timer_animation(timer, time)
            typing_is_start = true
            settimer = setTimeout(() => {
                nextHighLight(true)
            }, time)
        }
        checkLetters()
    })

    reset_button.addEventListener("click", () => {
        reset_words()
    })


}

function check_scores(data) {
    let words_combination = ''
    let wrong_count = 0
    console.log(data)
    data.forEach(d => {
        words_combination += ' ' + d.typed
        if (!d.condition) {
            wrong_count++
        }
    })
    console.log(((words_combination.length / 5) - wrong_count) + "WPM")

}

function start_typing_timer(time) {
    start_timer_animation(typing_timer, typing_time)
    set_typing_timer = setTimeout(() => {
        stop_timer_animation(typing_timer)
        reset_words()
        check_scores(typed)
        typed = []
    }, time)
}

function Main() {
    words_container.style.top = words_current_pos + "px";
    renderWords()
    onKeyClick()

}

Main()