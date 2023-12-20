"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Pelanggan = {
  id: number;
  name: string;
  email: string;
  nomor_telepon: string;
  alamat: string;
};
const API_URL = "http://127.0.0.1:8000/api";
const EditPelanggan = (pelanggan: Pelanggan) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState(pelanggan.name);
  const [email, setEmail] = useState(pelanggan.email);
  const [nomor_telepon, setNomor_telepon] = useState(pelanggan.nomor_telepon);
  const [alamat, setAlamat] = useState(pelanggan.alamat);
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsMutating(true);
    let endpoint = `${API_URL}/pelanggan/${pelanggan.id}`;
    const data = {
      name: name,
      email: email,
      nomor_telepon: nomor_telepon,
      alamat: alamat,
    };
    await axios.patch(endpoint, data);

    try {
      await axios.patch(endpoint, data);
      setIsMutating(false);
      router.refresh();
      setModal(false);
    } catch (error) {
      // Tambahkan penanganan pesan kesalahan jika diperlukan
      setIsMutating(false);
      console.error("Error updating data:", error);
    }
  };
  return (
    <div>
      <button className="btn btn-info btn-sm" onClick={handleChange}>
        Edit
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Pelanggan</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">Nama</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Name  "
              />
              <label className="label font-bold">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input w-full input-bordered"
                placeholder="email  "
              />
              <label className="label font-bold">Nomor Telpon</label>
              <input
                type="text"
                value={nomor_telepon}
                onChange={(e) => setNomor_telepon(e.target.value)}
                className="input w-full input-bordered"
                placeholder="nomor_telepon  "
              />
              <label className="label font-bold">Alamat</label>
              <input
                type="text"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                className="input w-full input-bordered"
                placeholder="alamat  "
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              {!isMutating ? (
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Submit loading ...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPelanggan;
