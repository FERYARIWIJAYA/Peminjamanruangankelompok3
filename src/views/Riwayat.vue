<template>
  <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1"></v-data-table>
</template>

<script>
export default {
  data() {
    return {
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
