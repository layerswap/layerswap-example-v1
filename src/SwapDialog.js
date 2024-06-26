import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function SwapDialog({ open, toggleOpen, address, swapData }) {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={toggleOpen}>
                <Transition.Child
                    as={Fragment}
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
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-slate-900 px-4 pb-4 text-left shadow-xl transition-all sm:w-full sm:max-w-sm">
                                <div className="mt-1 text-left">
                                    <Dialog.Title as="h3" className="font-semibold leading-6 text-white">
                                        Deposit USDC
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-xs text-gray-500 pb-0.5">
                                            TEMPORARY DEPOSIT ADDRESS
                                        </p>
                                        <div className="min-h-12 text-left cursor-pointer space-x-2 border border-secondary-500 bg-secondary-700/70  flex text-sm rounded-md items-center w-full transform transition duration-200 px-2 py-1.5 hover:border-secondary-500 hover:bg-secondary-700 hover:shadow-xl">
                                            <div className="flex flex-col">
                                                {swapData?.to_address ?
                                                    <div className="text-white">{swapData?.to_address}</div>
                                                    :
                                                    <div className="w-32 h-6 rounded-md animate-pulse bg-gray-500" />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-xs text-gray-500 pb-0.5">
                                            AMOUNT
                                        </p>
                                        <div className="min-h-12 text-left cursor-pointer space-x-2 border border-secondary-500 bg-secondary-700/70  flex text-sm rounded-md items-center w-full transform transition duration-200 px-2 py-1.5 hover:border-secondary-500 hover:bg-secondary-700 hover:shadow-xl">
                                            <div className="flex flex-col">
                                                {swapData?.value ?
                                                    <div className="text-white">{swapData?.value} USDC</div>
                                                    :
                                                    <div className="w-32 h-6 rounded-md animate-pulse bg-gray-500" />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}