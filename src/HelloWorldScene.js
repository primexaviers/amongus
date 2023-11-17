import Phaser from "phaser";

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    super("hello-world");
    //menginisialisasikan Scene yang dibuat, sehingga dapat dipanggil kembali saat dibutuhkan.
  }
  init() {
    //menginisialisasikan properti yang dibutuhkan dalam game
  }

  preload() {
    //memuat semua game assets yang dibutuhkan pada game.
  }

  create() {
    //Membuat  semua game objek dan rule yang dibutuhkan.
  }

  update() {
    //Merekam semua perubahan yang terjadi pada Scene selama game berlangsung, jadi method ini dijalankan terus menerus.
  }
}
