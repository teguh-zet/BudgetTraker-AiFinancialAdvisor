export default function formatRupiah(harga : number) {
   return `rp. ${harga.toLocaleString("id-ID", {
       style: "currency",
         currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
    })}`;

}