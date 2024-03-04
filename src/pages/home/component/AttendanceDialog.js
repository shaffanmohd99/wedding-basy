/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsX } from "react-icons/bs";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Typography from "@/components/reuseable/Typography";
import Button from "@/components/reuseable/Button";
import * as yup from "yup";
import LoadingButton from "@/components/reuseable/LoadingButton";
import { sendEmail } from "@/pages/api/sendEmail";
import { useRouter } from "next/router";
import { sendEnglishEmail } from "@/pages/api/sendEnglishEmail";

export default function AttendanceDialog({
  open,
  setOpen,
  setFailed,
  setSnackbarOpen,
}) {
  //set loading state for api cal
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { lang } = router.query;

  // fucntion to post to mongodb
  const SendAttendance = async (data) => {
    setIsLoading(true);
    if (typeof window !== "undefined") {
      try {
        const response = await fetch("/api/wedding", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data,
          }),
        });

        if (response.ok) {
          setIsLoading(false);
          setFailed(false);
          if (data.email) {
            if (lang === "EN") {
              await sendEnglishEmail(data.name, data.email);
            } else {
              await sendEmail(data.name, data.email);
            }
          }

          console.log("Data saved successfully!");
        } else {
          setIsLoading(false);
          setFailed(true);

          console.log("Something went wrong!");
        }
      } catch (error) {
        setIsLoading(false);
        setFailed(true);

        console.error("Error making API call:", error);
      }
    }
  };
  const schemaBM = yup.object().shape({
    name: yup.string().required("Nama diperlukan"),
    email: yup.string().email("Formal emel salah"),
    phoneNumber: yup.string(),
    numberOfPax: yup.string().required("Jumlah kehadiran diperlukan"),
  });
  const schemaEN = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Email is required"),
    phoneNumber: yup.string(),
    numberOfPax: yup.string().required("Number of pax is required"),
  });

  const defaultValues = {
    name: "",
    email: "",
    phoneNumber: "",
    numberOfPax: "",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(lang === "EN" ? schemaEN : schemaBM),
    defaultValues, // Set default values for the form fields
  });

  const onSubmit = async (data) => {
    // Convert "attendance" to boolean if it's a string representation of true

    try {
      // Assuming sendAttendance returns a Promise
      await SendAttendance(data);

      // Only if sendAttendance is successful
      setOpen(false);
      reset({ name: "", email: "", phoneNumber: "", numberOfPax: "" });
      setSnackbarOpen();
    } catch (error) {
      // Handle error if sendAttendance fails
      console.error("Error sending attendance:", error);
      setSnackbarOpen();
    }
  };

  const fakeHandleClose = () => {
    return null;
  };
  const handleClose = () => {
    setOpen(false); // Close the dialog
    reset({ name: "", email: "", phoneNumber: "", numberOfPax: "" });
  };

  return (
    <Transition.Root show={Boolean(open)} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={fakeHandleClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:Typography-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            {lang === "EN" ? (
              <div className="relative inline-block  bg-[#faf7f2] rounded-lg  text-left overflow-hidden shadow-xl align-middle transform transition-all w-full sm:w-[50%]">
                <div className="w-full ">
                  <div className="border-grayLine border-b">
                    <div className="w-full flex justify-between items-center py-4 px-8  ">
                      <Typography
                        variant="body"
                        className="text-[#332117] font-bold "
                      >
                        Tell us if you are coming!
                      </Typography>
                      <BsX
                        onClick={handleClose}
                        className="text-darkText hover:text-redPrimary"
                        size={24}
                      />
                    </div>
                  </div>
                  <div className="px-8 w-full">
                    <div className="w-full">
                      <div className="w-full flex flex-col gap-4">
                        <div>
                          <Typography variant="body" className="font-semibold">
                            Name
                          </Typography>
                          <input
                            {...register("name")}
                            //   placeholder="E.g The date of making Will/Wasiat is not stated"
                            className="px-2 py-1  border border-[#bc8c53] w-full rounded  appearance-none outline-none "
                          />
                          <Typography className="text-[#FF0000]" variant="sub">
                            {errors.name?.message}
                          </Typography>
                        </div>
                        <div>
                          <Typography variant="body" className="font-semibold">
                            Email
                          </Typography>
                          <input
                            {...register("email")}
                            //   placeholder="E.g The date of making Will/Wasiat is not stated"
                            className="px-2 py-1  border border-[#bc8c53] w-full rounded  appearance-none outline-none "
                          />
                          <Typography className="text-[#FF0000]" variant="sub">
                            {errors.email?.message}
                          </Typography>
                        </div>
                        <div>
                          <Typography variant="body" className="font-semibold">
                            Phone number
                          </Typography>
                          <input
                            {...register("phoneNumber")}
                            //   placeholder="E.g The date of making Will/Wasiat is not stated"
                            className="px-2 py-1  border border-[#bc8c53] w-full rounded  appearance-none outline-none "
                          />
                          <Typography className="text-[#FF0000]" variant="sub">
                            {errors.phoneNumber?.message}
                          </Typography>
                        </div>
                        <div>
                          <Typography variant="body" className="font-semibold">
                            Number of pax
                          </Typography>
                          <input
                            min="1"
                            type="number"
                            {...register("numberOfPax")}
                            className="px-2 py-1 border border-[#bc8c53] w-full rounded appearance-none outline-none "
                          />

                          <Typography className="text-[#FF0000]" variant="sub">
                            {errors.numberOfPax?.message}
                          </Typography>
                        </div>
                      </div>

                      <div className="flex w-full justify-end py-[30px]">
                        <div className="flex w-full gap-2 justify-end">
                          <Button
                            width=""
                            onClick={handleClose}
                            variant="outlined"
                            styles=" flex justify-center items-center"
                          >
                            Cancel
                          </Button>
                          <Button
                            onClick={handleSubmit(onSubmit)}
                            variant="contained"
                            width="w-2/4"
                            styles=" flex justify-center items-center"
                          >
                            {isLoading ? <LoadingButton /> : "Submit"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative inline-block  bg-[#faf7f2] rounded-lg  text-left overflow-hidden shadow-xl align-middle transform transition-all w-full sm:w-[50%]">
                <div className="w-full ">
                  <div className="border-grayLine border-b">
                    <div className="w-full flex justify-between items-center py-4 px-8  ">
                      <Typography
                        variant="body"
                        className="text-[#332117] font-bold "
                      >
                        Nyatakan kehadiran anda
                      </Typography>
                      <BsX
                        onClick={handleClose}
                        className="text-darkText hover:text-redPrimary"
                        size={24}
                      />
                    </div>
                  </div>
                  <div className="px-8 w-full">
                    <div className="w-full">
                      <div className="w-full flex flex-col gap-4">
                        <div>
                          <Typography variant="body" className="font-semibold">
                            Nama
                          </Typography>
                          <input
                            {...register("name")}
                            //   placeholder="E.g The date of making Will/Wasiat is not stated"
                            className="px-2 py-1  border border-[#bc8c53] w-full rounded  appearance-none outline-none "
                          />
                          <Typography className="text-[#FF0000]" variant="sub">
                            {errors.name?.message}
                          </Typography>
                        </div>
                        <div>
                          <Typography variant="body" className="font-semibold">
                            Emel
                          </Typography>
                          <input
                            {...register("email")}
                            //   placeholder="E.g The date of making Will/Wasiat is not stated"
                            className="px-2 py-1  border border-[#bc8c53] w-full rounded  appearance-none outline-none "
                          />
                          <Typography className="text-[#FF0000]" variant="sub">
                            {errors.email?.message}
                          </Typography>
                        </div>
                        <div>
                          <Typography variant="body" className="font-semibold">
                            Nombor Telefon
                          </Typography>
                          <input
                            {...register("phoneNumber")}
                            //   placeholder="E.g The date of making Will/Wasiat is not stated"
                            className="px-2 py-1  border border-[#bc8c53] w-full rounded  appearance-none outline-none "
                          />
                          <Typography className="text-[#FF0000]" variant="sub">
                            {errors.phoneNumber?.message}
                          </Typography>
                        </div>
                        <div>
                          <Typography variant="body" className="font-semibold">
                            Jumlah Kehadiran
                          </Typography>
                          <input
                            min="1"
                            type="number"
                            {...register("numberOfPax")}
                            className="px-2 py-1 border border-[#bc8c53] w-full rounded appearance-none outline-none "
                          />

                          <Typography className="text-[#FF0000]" variant="sub">
                            {errors.numberOfPax?.message}
                          </Typography>
                        </div>
                      </div>

                      <div className="flex w-full justify-end py-[30px]">
                        <div className="flex w-full gap-2 justify-end">
                          <Button
                            width=""
                            onClick={handleClose}
                            variant="outlined"
                            styles=" flex justify-center items-center"
                          >
                            Batal
                          </Button>
                          <Button
                            onClick={handleSubmit(onSubmit)}
                            variant="contained"
                            width="w-2/4"
                            styles=" flex justify-center items-center"
                          >
                            {isLoading ? <LoadingButton /> : "Hantar"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
