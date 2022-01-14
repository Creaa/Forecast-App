const moveIndex = (array: Array<Object>, index: number, direction: String) => {
  const newIndex = direction === "forward" ? index + 1 : index - 1;

  if (!array[newIndex]) {
    return newIndex === -1 ? array.length - 1 : 0;
  } else return newIndex;
};

const onArrowTimeClick = (setDate: Function, timeOptions: Array<Object>) => (
  event: any
) => {
  event.stopPropagation();
  event.preventDefault();

  const direction = event.currentTarget.getAttribute("data-direction");

  setDate((prevState: { timeIndex: number; dateIndex: number }) => {
    return {
      ...prevState,
      timeIndex: moveIndex(timeOptions, prevState.timeIndex, direction)
    };
  });
};

const onArrowDateClick = (
  setDate: Function,
  dateOptionsKeys: Array<String>
) => (event: any) => {
  const direction = event.currentTarget.getAttribute("data-direction");

  setDate((prevState: { timeIndex: number; dateIndex: number }) => {
    return {
      timeIndex: 0,
      dateIndex: moveIndex(dateOptionsKeys, prevState.dateIndex, direction)
    };
  });
};

const parseTimestampToHours = (timestamp: number): String => {
  return new Date(timestamp * 1000).toTimeString().split(" ")[0];
};

export { moveIndex, onArrowTimeClick, onArrowDateClick, parseTimestampToHours };
