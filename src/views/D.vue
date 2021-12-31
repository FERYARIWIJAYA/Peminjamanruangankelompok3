<template>
  <div>
    <h2>Detail ruangan D</h2>
    <template>
      <v-container row>
        <v-img max-height="200" max-width="170" src="/1.jpg"></v-img>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  <h3>Barang</h3>
                </th>
                <th class="text-left">
                  <h3>Unit</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in Barang" :key="item.name">
                <td>{{ item.Barang }}</td>
                <td>{{ item.Unit }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-container>
      <h2>Riwayat Peminjaman</h2>
      <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-0"></v-data-table>
    </template>

    <div class="d-flex flex-column-reverse"><v-btn block color="info" dark>Pinjam</v-btn></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Barang: [
        {
          Barang: "Meja",
          Unit: 20,
        },
        {
          Barang: "Kursi",
          Unit: 20,
        },
        {
          Barang: "Pendingin",
          Unit: "AC",
        },
      ],
      headers: [
        {
          text: "Name Ruangan",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Waktu Pinjam", value: "pinjam" },
        { text: "Waktu Kembali", value: "kembali" },
        { text: "Keterangan", value: "keterangan" },
        { text: "Status", value: "status" },
      ],
      desserts: [
        {
          name: "fery",
          pinjam: "13 / 12 / 2021",
          kembali: "13 / 12 / 2021",
          keterangan: "untuk kegiatan UKM Esprime",
          status: "diproses",
        },
      ],
    };
  },
};
</script>

<style></style>
