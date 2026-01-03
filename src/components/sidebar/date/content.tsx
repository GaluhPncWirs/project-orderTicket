import { useEffect, useRef, useState } from "react";
import Button from "../../button/content";
import "./style.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DatePicker() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const datePicker = useRef<any>(null);

  useEffect(() => {
    function handleClickOutsideComponent(event: any) {
      if (datePicker.current && !datePicker.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutsideComponent);

    return () => {
      document.removeEventListener("click", handleClickOutsideComponent);
    };
  }, []);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();

  const days = Array.from({ length: firstDay + lastDay });

  return (
    <div ref={datePicker}>
      <button onClick={() => setIsOpen(!isOpen)} className="btnTrigger">
        <div className="btnTrigger__textContent">
          <img src="/images/concertPage/date.png" alt="Kota" />
          <h4>Tanggal</h4>
        </div>
        <div className={`arrow ${isOpen && `turnBottom`}`}>
          <div />
          <div />
        </div>
      </button>
      <div className={`containerDatePicker ${isOpen && `showContent`}`}>
        <h4>Pilih Tanggal</h4>
        <span className="horizontalLine" />
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
        <span className="horizontalLine" />
        <Button
          btnTitle="Terapkan"
          btnType="button"
          handleClick={() => false}
        />
      </div>
    </div>
  );
}
