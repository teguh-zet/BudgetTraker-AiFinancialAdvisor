'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Gaji',
        description: 'Penghasilan dari pekerjaan tetap',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Makanan & Minuman',
        description: 'Belanja makan harian dan jajan',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Transportasi',
        description: 'Ongkos transportasi dan bahan bakar',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Tempat Tinggal',
        description: 'Sewa, listrik, dan air',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Hiburan',
        description: 'Streaming, game, atau liburan',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Belanja',
        description: 'Belanja pakaian dan kebutuhan pribadi',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Freelance',
        description: 'Penghasilan dari pekerjaan lepas',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Pendidikan',
        description: 'Buku dan biaya kursus',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Investasi',
        description: 'Dana untuk saham atau reksadana',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Donasi',
        description: 'Zakat dan sumbangan sosial',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Lainnya',
        description: 'Kategori tidak terdefinisi',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
