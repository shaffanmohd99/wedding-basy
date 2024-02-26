import Card from "@/components/reuseable/Card";
import Typography from "@/components/reuseable/Typography";
import { BsCalendarEventFill, BsPinMapFill, BsClockFill } from "react-icons/bs";
import { BiMaleFemale } from "react-icons/bi";
import CountdownTimer from "@/components/ui/CountdownTimer";
import { useState } from "react";
import AttendanceDialog from "./component/AttendanceDialog";
import Button from "@/components/reuseable/Button";
import Snackbar from "@/components/reuseable/Snackbar";
import { motion } from "framer-motion";
import Intenerary from "./component/Itenerary";
import { Great_Vibes } from "next/font/google";

import AtucaraMajlis from "./component/AtucaraMajlis";
const giftList = [
  "Cookware Set",
  "Smart Home Devices",
  "Adventure Experiences",
  "Subscription Boxes",
  "Food/Restaurant Vouchers",
  "Spa Day",
  "Exercise equipment",
];
const great_vibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

export default function HomePage() {
  const targetDate = new Date("2023-12-22T00:00:00");
  const [open, setOpen] = useState(false);

  // state for snackbar
  const [show, setShow] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  return (
    // h-screen max-h-screen for if one it to be the length of a single page
    <div className="relative  overflow-x-hidden  bg-[#faf7f2]">
      {/* first page */}
      {/* add h-screen for single page  */}
      <div className="w-full  ">
        <div className="p-4">
          <div className="pt-8">
            <div className="flex justify-center items-center">
              <Card>
                <div className="w-full  h-[300px] ">
                  <img
                    src="/assets/papa_mummy.jpeg"
                    // src="/assets/gambar.jpg"
                    className="h-full w-full select-none object-cover rounded-lg"
                    alt="gambar"
                  />
                </div>
              </Card>
            </div>
            <div className="flex flex-col mt-5">
              <Typography
                variant="body"
                className="text-[#332117] mt-2 text-center"
              >
                Bismillahirrahmanirrahim Assalamualaikum WBT
              </Typography>
              <Typography
                variant="body"
                className="text-[#332117] font-bold text-center"
              >
                Haji Roslan Bin Mohamad{" "}
                <span className="text-[10px] italic">S.M.K.</span>
              </Typography>
              <Typography
                variant="body"
                className="text-[#332117] font-bold text-center "
              >
                &
              </Typography>
              <Typography
                variant="body"
                className="text-[#332117] font-bold text-center "
              >
                Hajjah Siti Badarny Shamsai&apos;fah Binti Hassan
              </Typography>
              <Typography
                variant="body"
                className="text-[#332117] text-center mt-2 "
              >
                Dengan penuh rasa kesyukuran, sukacita menjemput Tun | Tan Sri |
                Tengku | Raja | Dato Seri | Dato | Datin | Tuan | Puan ke Majlis
                Perkahwinan puteri kami bersama pasangannya
              </Typography>
              <div className={`${great_vibes.className}`}>
                <Typography
                  variant="h1"
                  className="text-[#172733]  text-center mt-2 font-bold"
                >
                  Nur Basyirah Binti Roslan
                </Typography>
                <Typography
                  variant="h3"
                  className="text-[#172733]  text-center mt-2 font-bold"
                >
                  &
                </Typography>
                <Typography
                  variant="h1"
                  className="text-[#172733] text-center  font-bold"
                >
                  Norshaffan Bin Mohd
                </Typography>
              </div>
            </div>
            <div className="mt-20">
              {/* <Typography
                variant="body"
                className="text-[#332117] pt-8 font-semibold pb-4 "
              >
                Let us know if you are coming
              </Typography> */}
              <div onClick={() => setOpen(true)}>
                <Button variant="outlined">Klik disini untuk RSVP</Button>
              </div>
            </div>

            {/* <div>
              <Typography
                variant="body"
                className="text-[#332117] pt-8 font-semibold pb-4"
              >
                Countdown To Our Big Day
              </Typography>
              <motion.div
                initial={{ x: 300 }}
                whileInView={{
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1.3,
                  },
                }}
                viewport={{ once: true }}
              >
                <CountdownTimer targetDate={targetDate} />
              </motion.div>
            </div> */}
          </div>
          <div className="flex flex-col gap-8 mt-8">
            <div className="w-full flex gap-4">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1.3,
                  },
                }}
                viewport={{ once: true }}
                className="w-1/2"
              >
                <Card
                  maxWidth="w-full h-full"
                  padding="px-2 py-6 flex items-center justify-center"
                >
                  <div className="flex gap-4 items-center justify-center flex-col">
                    <BsCalendarEventFill
                      className="text-[#f4eee0] "
                      size={32}
                    />
                    <div className="flex flex-col items-center">
                      <Typography variant="h5" className=" text-white">
                        Sabtu,
                      </Typography>
                      <Typography variant="h5" className="text-white">
                        27 Apr 2024
                      </Typography>
                    </div>
                  </div>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1.3,
                  },
                }}
                viewport={{ once: true }}
                className="w-1/2"
              >
                <Card maxWidth="w-full h-full" padding="px-2 py-6">
                  <div className="flex gap-4 items-center justify-center flex-col">
                    <BsClockFill className="text-[#f4eee0] " size={32} />
                    <div className="flex flex-col items-center">
                      <Typography variant="h5" className=" text-white">
                        11:00 AM -
                      </Typography>
                      <Typography variant="h5" className=" text-white">
                        4:00 PM
                      </Typography>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
            <div className="w-full h-full flex gap-4 justify-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1.3,
                  },
                }}
                viewport={{ once: true }}
                className="w-full"
              >
                <Card
                  maxWidth="w-full h-full"
                  padding="px-2 py-6 flex items-center justify-center"
                >
                  <a href="https://waze.com/ul/hw282kz0t2" target="_blank">
                    <div className="flex gap-4 items-center justify-center">
                      <BsPinMapFill className="text-[#f4eee0] " size={32} />
                      <div className="flex flex-col items-center">
                        <Typography variant="h5" className=" text-white">
                          Rinching Terrace,
                        </Typography>
                        <Typography variant="h5" className="text-white">
                          Kajang
                        </Typography>
                        <Typography
                          variant="sub"
                          className="text-white text-center"
                        >
                          (Klik disini untuk lokasi)
                        </Typography>
                      </div>
                    </div>
                  </a>
                </Card>
              </motion.div>
            </div>
          </div>
          <Typography
            variant="body"
            className="text-[#332117] pt-8 font-semibold"
          >
            Aturcara Majlis
          </Typography>

          <div className="mt-[20px]">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 1.3,
                },
              }}
              viewport={{ once: true }}
            >
              <Card>
                <AtucaraMajlis />
              </Card>
            </motion.div>
          </div>
        </div>

        <AttendanceDialog
          open={open}
          setOpen={setOpen}
          setSnackbarOpen={() => setShow(true)}
          setFailed={setIsFailed}
        />
      </div>

      <Snackbar
        failed={isFailed}
        show={show}
        close={() => setShow(false)}
        message={isFailed ? "Sila cuba lagi" : "Terima kasih kerana sudi hadir"}
      />
    </div>
  );
}
