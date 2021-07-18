import styled from '@emotion/styled';
import moment, { Moment } from 'moment';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';
import 'react-dates/initialize';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import Image from 'next/image';
import { RadioGroup, CheckboxGroup } from '../parts';
// import {CheckboxGroup} from '../parts/CheckboxGroup';

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
  const [startedDate, setStartedDate] = useState<Moment>(moment());
  const [endedDate, setEndedDate] = useState<Moment>(moment());
  const [focustedInput, setFocusedInput] = useState('startDate');

  const [filterRate, setFilterRate] = useState<string>('전체');
  const [filterTourType, setFilterTourType] = useState<string>('전체');
  const [requireTime, setRequireTime] = useState<string>('전체');
  const [meetTime, setMeetTime] = useState<string>('전체');
  const [cities, setCities] = useState<string[]>([]);

  const changeRange = (v: number[]) => {
    setMinPrice(v[0]);
    setMaxPrice(v[1]);
  };

  const onDateChange = ({ startDate, endDate }) => {
    // console.log(v, '??');
    console.log(startDate);
    setStartedDate(startDate);
    setEndedDate(endDate);
  };

  const test = v => {
    console.log('test', v);
    setStartedDate(v);
  };

  const handleFocusChange = focus => {
    setFocusedInput(focus || 'startDate');
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
        <hr />
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
        <hr />
        <div>
          평점
          <RadioGroup
            name='rate'
            values={['전체', '4점 이상', '5점만']}
            defaultValue={filterRate}
            onChangeRadio={v => setFilterRate(v)}
          />
        </div>
        <hr />
        <div>
          여행지
          <CheckboxGroup
            values={['서울', '경주', '마드리드', '바르셀로나']}
            checkedList={cities}
            onChangeCheckedList={setCities}
          />
        </div>
        <hr />
        <div>
          투어 형태
          <RadioGroup
            name='tour_type'
            values={['전체', '그룹', '프라이빗']}
            defaultValue={filterTourType}
            onChangeRadio={v => setFilterTourType(v)}
          />
        </div>
        <hr />
        <div>즉시 확정 상품만 보기</div>

        <hr />
        <div>한국어</div>
        <hr />
        <div>
          소요 시간
          <RadioGroup
            name='require_time'
            values={[
              '전체',
              '2시간 이내',
              '2시간~4시간',
              '4시간~6시간',
              '6시간 이상'
            ]}
            defaultValue={requireTime}
            onChangeRadio={v => setRequireTime(v)}
          />
        </div>
        <hr />
        <div>
          만나는 시간
          <RadioGroup
            name='meet_time'
            values={[
              '전체',
              '오전(낮 12시 이전)',
              '오후(낮12시 ~ 오후 6시)',
              '저녁(오후 6시 이후)'
            ]}
            defaultValue={meetTime}
            onChangeRadio={v => setMeetTime(v)}
          />
        </div>
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
          <span onClick={() => setShowCalendar(prev => !prev)}>X</span>
          <DayPickerRangeController
            startDate={startedDate}
            endDate={endedDate}
            onDatesChange={onDateChange}
            focusedInput={focustedInput}
            onFocusChange={handleFocusChange}
            numberOfMonths={1}
            navPrev={
              <div style={{ position: 'absolute', top: 10, left: 30 }}>
                <Image
                  src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjODQ4Qzk0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE1IDZsLTYgNi4wMDNMMTQuOTkzIDE4Ii8+Cjwvc3ZnPgo='
                  alt='다음 달로 이동'
                  width={24}
                  height={24}
                />
              </div>
            }
            navNext={
              <Image
                src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjODQ4Qzk0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTkgNmw2IDYuMDAzTDkuMDA3IDE4Ii8+Cjwvc3ZnPgo='
                alt='다음 달로 이동'
                width={24}
                height={24}
              />
            }
            enableOutsideDays={false}
            initialVisibleMonth={() => moment().add(2, 'M')}
            onOutsideClick={() => setShowCalendar(false)}
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
