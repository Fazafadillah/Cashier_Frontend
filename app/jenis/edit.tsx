"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Jenis = {
  id: number;
  name: string;
  kategori_id: string;
};
const API_URL = "http://127.0.0.1:8000/api";
const EditJenis = (jenis: Jenis) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState(jenis.name);
  const [kategori_id, setKategori_id] = useState(jenis.kategori_id);
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsMutating(true);
    let endpoint = `${API_URL}/jenis/${jenis.id}`;
    const data = {
      name: name,
      kategori_id: kategori_id,
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
          <h3 className="font-bold text-lg">Edit Jenis</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Name Jenis"
              />
              <label className="label font-bold">Kategori</label>
              <input
                type="ttext"
                value={kategori_id}
                onChange={(e) => setKategori_id(e.target.value)}
                className="input w-full input-bordered"
                placeholder="kategori_id Jenis"
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

export default EditJenis;
