import React, { useCallback, useReducer, useState } from 'react';
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Button } from '../Button';
import { Marginer } from '../Marginer';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { SCREENS } from '../Responsive';

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`flex items-center justify-center pt-1 pb-1 pl-2 pr-2 bg-white rounded-md md:pt-2 md:pb-2 md:pl-9 md:pr-9`};
`;

const ItemContainer = styled.div`
  ${tw`relative flex`};
`;

const Icon = styled.span`
  ${tw`mr-1 text-xs text-red-500 fill-current md:text-base md:mr-3`};
`;

const SmallIcon = styled.span`
  ${tw`ml-1 text-xs text-gray-500 fill-current md:text-base`};
`;

const Name = styled.span`
  ${tw`text-xs text-gray-600 cursor-pointer select-none md:text-sm`};
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`ml-2 mr-2 bg-gray-300 md:mr-5 md:ml-5`};
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 2em;
  left: 0;

  ${({ offset }: any) =>
    offset &&
    css`
      left: -6em;
    `};

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
` as any;

interface InitialState {
  startDate: Date;
  isStartCalendarOpen: boolean;
  returnDate: Date;
  isReturnCalendarOpen: boolean;
}

const initialState: InitialState = {
  startDate: new Date(),
  isStartCalendarOpen: false,
  returnDate: new Date(),
  isReturnCalendarOpen: false,
};

enum ACTION_TYPE {
  SET_START_DATE,
  SET_IS_START_CALENDAR_OPEN,
  SET_RETURN_DATE,
  SET_IS_RETURN_CALENDAR_OPEN,
}

type ACTION =
  | { type: ACTION_TYPE.SET_START_DATE; startDate: Date }
  | {
      type: ACTION_TYPE.SET_IS_START_CALENDAR_OPEN;
      isStartCalendarOpen: boolean;
    }
  | { type: ACTION_TYPE.SET_RETURN_DATE; returnDate: Date }
  | {
      type: ACTION_TYPE.SET_IS_RETURN_CALENDAR_OPEN;
      isReturnCalendarOpen: boolean;
    };

const reducer = (state: InitialState, action: ACTION) => {
  switch (action.type) {
    case ACTION_TYPE.SET_START_DATE:
      return {
        ...state,
        startDate: action.startDate,
      };
    case ACTION_TYPE.SET_IS_START_CALENDAR_OPEN:
      return {
        ...state,
        isStartCalendarOpen: action.isStartCalendarOpen,
      };
    case ACTION_TYPE.SET_RETURN_DATE:
      return {
        ...state,
        returnDate: action.returnDate,
      };
    case ACTION_TYPE.SET_IS_RETURN_CALENDAR_OPEN:
      return {
        ...state,
        isReturnCalendarOpen: action.isReturnCalendarOpen,
      };

    default:
      return state;
  }
};

export const BookCard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { startDate, returnDate, isStartCalendarOpen, isReturnCalendarOpen } =
    state;

  const setStartDate = useCallback((date: Date) => {
    dispatch({
      type: ACTION_TYPE.SET_START_DATE,
      startDate: date,
    });
  }, []);

  const setReturnDate = useCallback((date: Date) => {
    dispatch({
      type: ACTION_TYPE.SET_RETURN_DATE,
      returnDate: date,
    });
  }, []);

  const setStartCalendarOpen = useCallback((condition: boolean) => {
    dispatch({
      type: ACTION_TYPE.SET_IS_START_CALENDAR_OPEN,
      isStartCalendarOpen: condition,
    });
  }, []);

  const setReturnCalendarOpen = useCallback((condition: boolean) => {
    dispatch({
      type: ACTION_TYPE.SET_IS_RETURN_CALENDAR_OPEN,
      isReturnCalendarOpen: condition,
    });
  }, []);

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
    if (isReturnCalendarOpen) setReturnCalendarOpen(false);
  };

  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    if (isStartCalendarOpen) setStartCalendarOpen(false);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>Pick Up Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate} />
        )}
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnDateCalendar}>Return Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendar offset value={returnDate} onChange={setReturnDate} />
        )}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book Your Ride" />
    </CardContainer>
  );
};
