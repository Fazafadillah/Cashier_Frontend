export const metadata = {
  title: "Pelanggan",
};
import axios from "axios";
import Link from "next/link";
import AddPelanggan from "./add";
import DeletePelanggan from "./delete";
import EditPelanggan from "./edit";

type Pelanggan = {
  id: number;
  name: string;
  email: string;
  nomor_telepon: string;
  alamat: string;
};
const getPelanggan = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/pelanggan");

  return res.data.data;
};
const PelangganList = async () => {
  const pelanggan: Pelanggan[] = await getPelanggan();
  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <AddPelanggan />
      </div>
      <table className="table table-zebra">
        <thead>
          <tr className="bg-base-200">
            <th>No.</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Nomor telp</th>
            <th>Alamat</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pelanggan.map((pelanggan, index) => (
            <tr key={pelanggan.id}>
              <td>{index + 1}</td>
              <td>{pelanggan.name}</td>
              <td>{pelanggan.email}</td>
              <td>{pelanggan.nomor_telepon}</td>
              <td>{pelanggan.alamat}</td>
              <td className="flex">
                <div className="mr-1">
                  <EditPelanggan {...pelanggan} />
                </div>

                <DeletePelanggan {...pelanggan} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PelangganList;
