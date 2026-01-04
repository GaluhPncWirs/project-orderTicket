import { useState } from "react";
import "./style.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TextSidebarClick from "../../../layout/textSidebar/content";

export default function DatePicker() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<any>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();

  const days = Array.from({ length: firstDay + lastDay });

  return (
    <TextSidebarClick
      imgSrc="/images/concertPage/date.png"
      imgAlt="Tanggal"
      textContent="Tanggal"
      subTextContent="Pilih Tanggal"
    >
      <div className="calendar">
        <div className="calendar__header">
          <button onClick={() => setCurrentDate(new Date(year, month - 1))}>
            <ChevronLeft />
          </button>
          <span>
            {currentDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </span>
          <button onClick={() => setCurrentDate(new Date(year, month + 1))}>
            <ChevronRight />
          </button>
        </div>
        <div className="calendar__days">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>

        <div className="calendar__dates">
          {days.map((_: any, i: number) => {
            const day = i - firstDay + 1;
            if (day < 1) return <div key={i} />;

            const isActive =
              selectedDate &&
              selectedDate.getDate() === day &&
              selectedDate.getMonth() === month &&
              selectedDate.getFullYear() === year;

            return (
              <button
                key={i}
                className={isActive ? "active" : ""}
                onClick={() => setSelectedDate(new Date(year, month, day))}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    </TextSidebarClick>
  );
}
