export default function formatRupiah(harga: number | string | undefined) {
    return `Rp. ${harga?.toLocaleString("id-ID")}`;
}