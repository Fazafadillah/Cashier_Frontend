"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Menu = {
  id: number;
  jenis_id: string;
  name: string;
  harga: string;
  deskripsi: string;
  image: string;
};
const API_URL = "http://127.0.0.1:8000/api";
const EditMenu = (menu: Menu) => {
  const [modal, setModal] = useState(false);
  const [jenis_id, setJenis_id] = useState(menu.jenis_id);
  const [name, setName] = useState(menu.name);
  const [harga, setHarga] = useState(menu.harga);
  const [deskripsi, setDeskripsi] = useState(menu.deskripsi);
  const [image, setImage] = useState(menu.image);
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsMutating(true);
    let endpoint = `${API_URL}/menu/${menu.id}`;
    // const data = { kategori_id: kategori_id };
    const data = {
      jenis_id: jenis_id,
      name: name,
      harga: harga,
      deskripsi: deskripsi,
      image: image,
    };
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
          <h3 className="font-bold text-lg">Edit Menu</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">jenis</label>
              <input
                type="text"
                value={jenis_id}
                onChange={(e) => setJenis_id(e.target.value)}
                className="input w-full input-bordered"
                placeholder="jenis id"
              />
              <label className="label font-bold">Nama</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Name Menu"
              />
              <label className="label font-bold">Harga</label>
              <input
                type="text"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
                className="input w-full input-bordered"
                placeholder="harga Menu"
              />
              <label className="label font-bold">Deskripsi</label>
              <input
                type="text"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                className="input w-full input-bordered"
                placeholder="deskripsi"
              />
              <label className="label font-bold">Deskripsi</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="input w-full input-bordered"
                placeholder="deskripsi"
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

export default EditMenu;
