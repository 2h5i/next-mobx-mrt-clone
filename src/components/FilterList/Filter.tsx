import styled from '@emotion/styled';
import { Moment } from 'moment';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import Image from 'next/image';

const StyledFilter = styled.div`
  width: 100%;
`;

const SelectFilter = styled.div`
  border: 1px solid lightgray;
  padding: 10px;
`;

export const Filter = () => {
  const [minPrice, setMinPrice] = useState<number>(2000);
  const [maxPrice, setMaxPrice] = useState<number>(89000);
  const [showCalendar, setShowCalendar] = useState(false);
  const [startedDate, setStartedDate] = useState<Moment>();
  const [endedDate, setEndedDate] = useState<Moment>();
  const [focustedInput, setFocusedInput] = useState();

  const changeRange = (v: number[]) => {
    setMinPrice(v[0]);
    setMaxPrice(v[1]);
  };

  const onDateChange = ({ startDate, endDate }) => {
    setStartedDate(startDate);
    setEndedDate(endDate);
  };

  return (
    <StyledFilter>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div>
          <p style={{ fontSize: 18, fontWeight: 600 }}>필터</p>
        </div>
        <div>
          <p style={{ fontSize: 15, color: 'lightgray' }}> 초기화</p>
        </div>
      </div>
      <SelectFilter>
        <div>
          일정{' '}
          <span onClick={() => setShowCalendar(prev => !prev)}>날짜 선택</span>
        </div>
        <div>
          가격대
          <br />
          {minPrice}원 - {maxPrice}원
          <div>
            <Range
              min={2000}
              max={89000}
              value={[minPrice, maxPrice]}
              onChange={changeRange}
              step={1000}
              allowCross={false}
            />
          </div>
        </div>
        <div>평점</div>
        <div>여행지</div>
        <div>투어 형태</div>
        <div>즉시 확정 상품만 보기</div>
        <div>한국어</div>
        <div>소요 시간</div>
        <div>만나는 시간</div>
      </SelectFilter>
      {showCalendar && (
        <div
          style={{
            position: 'absolute',
            left: 30,
            top: 100,
            zIndex: 100,
            width: 800
          }}
        >
          날짜
          <DateRangePicker
            startDate={startedDate}
            endDate={endedDate}
            startDateId='start_date_id'
            endDateId='end_date_id'
            onDatesChange={onDateChange}
            focusedInput={focustedInput}
            onFocusChange={focused => setFocusedInput(focused)}
            small={true}
            numberOfMonths={1}
            customArrowIcon={
              <Image
                src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjODQ4Qzk0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTkgNmw2IDYuMDAzTDkuMDA3IDE4Ii8+Cjwvc3ZnPgo='
                alt='다음 달로 이동'
                width={24}
                height={24}
              />
            }
            showDefaultInputIcon={false}
          />
        </div>
      )}
    </StyledFilter>
  );
};

{
  /* <DateRangePicker
  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
/> */
}
