import Typography from "@/components/reuseable/Typography";
import { useRouter } from "next/router";

export default function AtucaraMajlis() {
  const router = useRouter();
  const { lang } = router.query;
  if (lang === "EN") {
    return (
      <table className="w-full">
        <tr className="w-full flex border-b pb-2">
          <td className="w-1/3">
            <Typography variant="body" className="text-white text-left">
              11:00 AM
            </Typography>
          </td>
          <td className="w-2/3">
            <div className="flex">
              <Typography variant="body" className="text-white text-left pr-2">
                -
              </Typography>
              <Typography variant="body" className="text-white text-left">
                Arrival of Guests
              </Typography>
            </div>
            <div className="flex">
              <Typography variant="body" className="text-white text-left pr-2">
                -
              </Typography>
              <Typography variant="body" className="text-white text-left">
                ⁠Lunch
              </Typography>
            </div>
            <div className="flex">
              <Typography variant="body" className="text-white text-left pr-2">
                -
              </Typography>
              <Typography variant="body" className="text-white text-left">
                ⁠Bride & Groom Entrance
              </Typography>
            </div>
          </td>
        </tr>
        <tr className="w-full flex  border-b py-2 ">
          <td className="w-1/3">
            <Typography variant="body" className="text-white text-left">
              12:00 PM
            </Typography>
          </td>
          <td className="w-2/3">
            {/* <div className="flex">
              <Typography variant="body" className="text-white text-left pr-2">
                -
              </Typography>
              <Typography variant="body" className="text-white text-left">
                Keberangkatan Tiba DYTM Tuanku Raja Muda Perlis & DYTM Tuanku
                Raja Muda Perlis
              </Typography>
            </div> */}
            {/* <div className="flex">
              <Typography variant="body" className="text-white text-left pr-2">
                -
              </Typography>
              <Typography variant="body" className="text-white text-left">
                Majlis Santapan
              </Typography>
            </div> */}
            <div className="flex">
              <Typography variant="body" className="text-white text-left pr-2">
                -
              </Typography>
              <Typography variant="body" className="text-white text-left">
                Reception Ceremony Begins
              </Typography>
            </div>
          </td>
        </tr>
        <tr className="w-full flex py-2">
          <td className="w-1/3">
            <Typography variant="body" className="text-white text-left">
              4:00 PM
            </Typography>
          </td>
          <td>
            <Typography
              variant="body"
              className="text-white text-left"
            ></Typography>
          </td>
          <td className="w-2/3">
            <div className="flex">
              <Typography variant="body" className="text-white text-left pr-2">
                -
              </Typography>
              <Typography variant="body" className="text-white text-left">
                End
              </Typography>
            </div>
          </td>
        </tr>
      </table>
    );
  } else {
    return (
      <table className="w-full">
        <tr className="w-full flex border-b pb-2">
          <td className="w-1/3">
            <Typography variant="body" className="text-white text-left">
              11:00 AM
            </Typography>
          </td>
          <td className="w-2/3">
            <div className="flex">
              <Typography variant="body" className="text-white text-left pr-2">
                -
              </Typography>
              <Typography variant="body" className="text-white text-left">
                Ketibaan Para Jemputan
              </Typography>
            </div>
            <div className="flex">
              <Typography variant="body" className="text-white text-left pr-2">
                -
              </Typography>
              <Typography variant="body" className="text-white text-left">
                Jamuan
              </Typography>
            </div>
            <div className="flex">
              <Typography variant="body" className="text-white text-left pr-2">
                -
              </Typography>
              <Typography variant="body" className="text-white text-left">
                Ketibaan Pengantin
              </Typography>
            </div>
          </td>
        </tr>
        <tr className="w-full flex  border-b py-2 ">
          <td className="w-1/3">
            <Typography variant="body" className="text-white text-left">
              12:00 PM
            </Typography>
          </td>
          <td className="w-2/3">
            {/* <div className="flex">
                <Typography variant="body" className="text-white text-left pr-2">
                  -
                </Typography>
                <Typography variant="body" className="text-white text-left">
                  Keberangkatan Tiba DYTM Tuanku Raja Muda Perlis & DYTM Tuanku
                  Raja Muda Perlis
                </Typography>
              </div> */}
            {/* <div className="flex">
                <Typography variant="body" className="text-white text-left pr-2">
                  -
                </Typography>
                <Typography variant="body" className="text-white text-left">
                  Majlis Santapan
                </Typography>
              </div> */}
            <div className="flex">
              <Typography variant="body" className="text-white text-left pr-2">
                -
              </Typography>
              <Typography variant="body" className="text-white text-left">
                Pengantin Bersanding
              </Typography>
            </div>
          </td>
        </tr>
        <tr className="w-full flex py-2">
          <td className="w-1/3">
            <Typography variant="body" className="text-white text-left">
              4:00 PM
            </Typography>
          </td>
          <td>
            <Typography
              variant="body"
              className="text-white text-left"
            ></Typography>
          </td>
          <td className="w-2/3">
            <div className="flex">
              <Typography variant="body" className="text-white text-left pr-2">
                -
              </Typography>
              <Typography variant="body" className="text-white text-left">
                Majlis Tamat
              </Typography>
            </div>
          </td>
        </tr>
      </table>
    );
  }
}
