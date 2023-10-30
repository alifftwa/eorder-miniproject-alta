import React from "react";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { numberWithCommas } from "../Utils/Utils";

const Modal = ({
  showModal,
  handleClose,
  keranjangDetail,
  jumlah,
  keterangan,
  tambah,
  kurang,
  changeHandler,
  handlerSubmit,
  totalHarga,
}) => {
  if (keranjangDetail) {
    return (
      <Transition.Root show={showModal}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <Transition.Child
            // as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <form onSubmit={handlerSubmit}>
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-base font-semibold leading-6 text-gray-900"
                          >
                            {/* Detail */}
                            <div className="flex gap-2">
                              <div>{keranjangDetail.product.nama} </div>
                              <div>
                                <p>
                                  (IDR
                                  {numberWithCommas(
                                    keranjangDetail.product.harga
                                  )}
                                  )
                                </p>
                              </div>
                            </div>
                          </Dialog.Title>

                          {/* Total */}
                          <div className="mt-2">
                            <div>
                              <label
                                htmlFor="price"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Total
                              </label>
                              <div className="relative mt-2 rounded-md shadow-sm">
                                <p
                                  type="text"
                                  name="Note"
                                  id="price"
                                  className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  placeholder="note"
                                >
                                  {numberWithCommas(totalHarga)}
                                </p>
                                <div className="absolute inset-y-0 right-0 flex items-center"></div>
                              </div>
                            </div>

                            {/* Jumlah */}
                            <div className="mt-3">
                              <label
                                htmlFor="price"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Jumlah
                              </label>
                              <div className="button">
                                <div className="flex relative mt-2 rounded-md shadow-sm">
                                  <button onClick={() => kurang()}>
                                    <div className="block w-5 rounded-md border-0 py-1.5 pl-3 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                      <p>-</p>
                                    </div>
                                  </button>

                                  <div className="block w-2/3 rounded-md border-0 py-1.5 mx-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 flex justify-center focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <p
                                      type="text"
                                      name="Note"
                                      id="price"
                                      className=""
                                      placeholder="note"
                                    >
                                      {jumlah}
                                    </p>
                                  </div>

                                  <button onClick={() => tambah()}>
                                    <div className="block w-5 rounded-md border-0 py-1.5 pl-3 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                      <p className="">+</p>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>

                            {/* Note */}
                            <div className="mt-3">
                              <label
                                htmlFor="price"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Note
                              </label>
                              <div className="relative mt-2 rounded-md shadow-sm">
                                <input
                                  type="text"
                                  name="Note"
                                  id="price"
                                  className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  placeholder="note"
                                  value={keterangan}
                                  onChange={(event) => changeHandler(event)}
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 sm:ml-3 sm:w-auto"
                      >
                        Save Change
                      </button>

                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-600  sm:mt-0 sm:w-auto"
                        onClick={handleClose}
                      >
                        Delete
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
  } else {
    return <div></div>;
  }
};

export default Modal;
