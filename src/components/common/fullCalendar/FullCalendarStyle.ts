import styled from '@emotion/styled';

const FullCalendarLayout = styled.div<{ size: string; currentView: string }>`
	position: relative;

	box-sizing: border-box;
	width: ${({ size }) => (size === 'big' ? '132rem' : '88.8rem')};
	height: 106.4rem;
	padding: 0 10px 8px;
	overflow: hidden;

	background-color: ${({ theme }) => theme.color.Grey.White};
	border: 1px solid ${({ theme }) => theme.colorToken.Outline.neutralNormal};
	border-radius: 20px;

	.fc .fc-toolbar.fc-header-toolbar {
		display: flex;
		align-items: flex-start;
		margin: 2.4rem 0 0;
	}

	.fc-toolbar {
		position: relative;
	}

	/* Custom button styles */
	.fc-toolbar-chunk .fc-button {
		display: flex;
		align-items: center;
		justify-content: center;
		${({ theme }) => theme.font.label04}
		height: 3.2rem;
		padding: 0 1.6rem;

		background: ${({ theme }) => theme.color.Grey.White};
		border: none;
	}

	.fc-toolbar-chunk .fc-button:hover,
	.fc-toolbar-chunk .fc-button:active {
		background: none;
	}

	/** .fc-button-group: 주/월 토글 */
	.fc .fc-button-group {
		position: absolute;
		top: 0;
		left: 50%;
		overflow: hidden;

		background: ${({ theme }) => theme.color.Grey.White};
		transform: translateX(-50%);
		border: 1px solid ${({ theme }) => theme.colorToken.Outline.neutralNormal};
		border-radius: 8px;
	}

	.fc-button-group > button {
		width: 8rem;

		border-radius: 0;
	}

	/** .fc-button-primary: .fc-button-group 중 선택된 버튼 */
	.fc .fc-button-primary:focus {
		box-shadow: none;
	}

	.fc .fc-button-primary:not(:disabled).fc-button-active {
		background: ${({ theme }) => theme.colorToken.Neutral.heavy};
		border: none;
		border-radius: 0 7px 7px 0;
	}

	.fc-button-group > button:last-of-type.fc-button-primary:not(:disabled).fc-button-active {
		border-radius: 7px 0 0 7px;
	}

	/* Override the button group border-radius styles */
	.fc-direction-ltr .fc-button-group > .fc-button {
		display: flex;
		align-items: center;

		color: ${({ theme }) => theme.colorToken.Icon.strong};
	}

	.fc-button-active:focus {
		box-shadow: none;
	}

	.fc-toolbar-chunk {
		display: flex;
		gap: 8px;
		align-items: center;
		margin-right: 7.2rem;
	}

	/* 오늘 버튼 */
	.fc-toolbar-chunk .fc-today-button {
		display: flex;
		gap: 8px;
		align-items: center;
		justify-content: center;
		margin: 3.4rem 0 0;

		color: ${({ theme }) => theme.color.Grey.Grey5};

		background-color: ${({ theme }) => theme.colorToken.Neutral.normal};
		opacity: 1;
		border: 1px solid ${({ theme }) => theme.colorToken.Outline.neutralNormal};
		${({ theme }) => theme.font.label04}
		border-radius: 8px;
	}

	.fc-toolbar-chunk .fc-today-button:active {
		color: ${({ theme }) => theme.color.Grey.Grey5};

		background-color: ${({ theme }) => theme.colorToken.Neutral.heavy};
		border: 1px solid ${({ theme }) => theme.colorToken.Outline.neutralStrong};
	}

	/* 좌우 버튼 스타일 */
	.fc-toolbar-chunk .fc-prev-button,
	.fc-toolbar-chunk .fc-next-button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 3.2rem;
		margin: 3.4rem 0 0;

		color: ${({ theme }) => theme.color.Grey.Grey5};

		background-color: ${({ theme }) => theme.color.Grey.White};
		border: 1px solid ${({ theme }) => theme.colorToken.Outline.neutralNormal};
		border-radius: 8px;
	}

	.fc-toolbar-chunk .fc-prev-button:active,
	.fc-toolbar-chunk .fc-next-button:active {
		color: ${({ theme }) => theme.color.Grey.Grey5};

		background-color: ${({ theme }) => theme.colorToken.Neutral.heavy};
		border: 1px solid ${({ theme }) => theme.colorToken.Outline.neutralStrong};
	}

	/* ---- 여기까지 toolbar (캘린더 헤더) */

	.fc-daygrid-body {
		width: 100% !important;
	}

	.fc-event-allday {
		height: 2rem;
	}

	.fc .fc-col-header-cell {
		height: 2.4rem;
		padding: 2.4rem 0.8rem 0.5rem;

		border-right: none;
		border-left: none;
	}

	/* 종일  - 타임그리드 셀 크기 고정 */
	.fc-scrollgrid-sync-table > colgroup > col {
		width: 3rem !important;
	}

	.fc-timegrid-axis .fc-scrollgrid-shrink {
		width: fit-content;
	}

	.fc-timegrid-body .fc-timegrid-slots > colgroup > col {
		width: 3rem;
	}

	/* 전체 캘린더(주간) */
	.fc-scrollgrid.fc-scrollgrid-liquid {
		/* padding: 0 8px 0 0; */
	}

	/* fc-daygrid-day-events: 종일 행(개별) */
	.fc-daygrid-day-frame .fc-scrollgrid-sync-inner,
	.fc-daygrid-day-events {
		width: ${({ size }) => (size === 'big' ? '17.6rem' : '16.8rem')};
		height: 4.4rem;
	}

	.fc-timegrid-slot .fc-timegrid-slot-label .fc-scrollgrid-shrink {
		width: 4rem;
	}

	.fc-timegrid-allday {
		display: flex;
		align-items: center;
		height: 4.4rem;
		overflow: hidden;
	}

	.fc-timegrid-allday-bg {
		height: 4.4rem;

		border-bottom: 1px solid ${({ theme }) => theme.colorToken.Outline.neutralNormal};
	}

	/* 타임그리드 테두리 */
	.fc .fc-scrollgrid-section-body table,
	.fc .fc-scrollgrid-section-footer table {
		border-right: 1px solid ${({ theme }) => theme.colorToken.Outline.neutralStrong};
		border-bottom-style: hidden;
	}

	/* 주간캘린더 */

	/* 이벤트 박스 */
	.fc-event-main {
		display: inline-block;
		align-items: center;
		width: 100%;
		height: 100%;
		padding: 0.4rem 0.6rem;

		color: ${(color) => color.theme.palette.Grey.Grey8};

		background-color: ${({ theme }) => theme.palette.Blue.Blue2};
		border: none;
		border-radius: 4px;
		${({ theme }) => theme.fontTheme.CAPTION_03};
	}

	/** 넘어가는 텍스트 처리 */
	.fc-event-title {
		flex-shrink: 1;
		overflow: hidden;

		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.fc-event-main .tasks {
		background-color: ${({ theme }) => theme.palette.Blue.Blue2};
	}

	.schedule .fc-event-main {
		background-color: ${({ theme }) => theme.palette.Grey.Grey2};
	}

	/* 종일 텍스트 */
	.fc-scrollgrid-shrink-frame .fc-scrollgrid-sync-inner {
		${({ theme }) => theme.font.caption02}
		color: ${({ theme }) => theme.colorToken.Text.disable};
	}

	/* 종일 이벤트 테두리 */
	.fc .fc-daygrid-day-frame .fc-event-main {
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		height: 2.1rem;
		padding: 0.3rem 1.2rem;

		color: ${({ theme }) => theme.palette.Grey.White};

		background-color: ${({ theme }) => theme.palette.Primary};
		border: none;
	}

	/* fc-timegrid-col-events : 주간 이벤트 , fc-daygrid-day-frame: 월간 이벤트 */
	.fc .fc-timegrid-col-events .fc-event-main:hover {
		background-color: ${({ theme }) => theme.palette.Blue.Blue3};
	}

	.fc .fc-daygrid-day-frame .schedule .fc-event-main {
		background-color: ${({ theme }) => theme.palette.Grey.Grey6};
	}

	.fc .fc-timegrid-col-events .schedule .fc-event-main {
		background-color: ${({ theme }) => theme.palette.Grey.Grey2};
		box-shadow: 2px 0 0 0 ${({ theme }) => theme.palette.Grey.Grey6} inset;
	}

	.fc .fc-daygrid-day-frame .fc-event-main:hover {
		background-color: ${({ theme }) => theme.palette.Blue.Blue8};
	}

	.fc .fc-timegrid-col-events .schedule .fc-event-main:hover {
		background-color: ${({ theme }) => theme.palette.Grey.Grey3};
	}

	.fc .fc-daygrid-day-frame .schedule .fc-event-main:hover {
		background-color: ${({ theme }) => theme.palette.Grey.Grey7};
	}

	/* user-select: none 상태에서의 스타일 */
	.schedule[style*='user-select: none'] {
		background-color: ${({ theme }) => theme.palette.Grey.Grey4} !important;
	}

	.tasks[style*='user-select: none'] {
		background-color: ${({ theme }) => theme.palette.Blue.Blue4} !important;
	}

	.fc-v-event .fc-event-main-frame {
		height: auto;
	}

	.fc-daygrid-day-top {
		height: 0;
	}

	/* 요일 행 TEXT 중간 정렬 */
	.fc td,
	.fc th {
		vertical-align: middle;
		${({ theme }) => theme.fontTheme.CAPTION_01};
	}

	.fc .fc-col-header-cell-cushion {
		padding: 6px 4px;
	}

	/** .fc-timegrid-slot-label: 시간 라벨 */

	/* 타임 그리드 15분당 일정 */
	.fc .fc-timegrid-slot-label {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		box-sizing: border-box;
		width: 4rem;

		color: ${(color) => color.theme.palette.Grey.Grey5};
		text-transform: lowercase;

		${({ theme }) => theme.font.caption01}
		border-bottom: none;
	}

	.fc-theme-standard td,
	.fc-theme-standard th {
		border-right: 1px solid ${({ theme }) => theme.colorToken.Outline.neutralStrong};
		border-bottom: none;
		border-left: 1px solid ${({ theme }) => theme.colorToken.Outline.neutralStrong};
	}

	/* 요일 행 첫번째 border 없애기 */
	.fc-theme-standard td:first-of-type,
	.fc-theme-standard th:first-of-type {
		border: none;
	}

	/* 타임 그리드 종일 마진 없애기 */
	.fc .fc-daygrid-body-natural .fc-daygrid-day-events {
		margin: 0;
	}

	/* 월간뷰 border 위아래 짤림 커버용 */
	.month-view .fc-scroller.fc-scroller-liquid-absolute {
		border-top: 1px solid ${({ theme }) => theme.colorToken.Outline.neutralStrong} !important;
		border-bottom: 1px solid ${({ theme }) => theme.colorToken.Outline.neutralStrong} !important;
		border-radius: 12px;
	}

	/* 월간뷰 스크롤 제거 */
	.month-view .fc-scroller {
		overflow: hidden !important;
	}

	.fc-daygrid-body {
		padding-right: 1rem;
		overflow: hidden;

		border: 1px solid ${({ theme }) => theme.colorToken.Outline.neutralStrong};
		border-radius: 12px;

		${({ currentView }) =>
			currentView === 'timeGridWeekCustom' &&
			`
    border-left: none;
		border-radius: 0
  `}
	}

	/* 15분 줄선 테두리 */
	.fc .fc-timegrid-slot-minor {
		border: 1px solid ${({ theme }) => theme.colorToken.Outline.neutralNormal};
		border-right: 1px solid ${({ theme }) => theme.colorToken.Outline.neutralStrong};
		border-left: 1px solid ${({ theme }) => theme.colorToken.Outline.neutralStrong};
	}

	tr td.fc-timegrid-slot-minor[data-time$=':45:00']:nth-of-type(2) {
		border-bottom: 1px solid ${({ theme }) => theme.colorToken.Outline.neutralStrong};
	}

	.fc-scrollgrid .fc-scrollgrid-liquid {
		height: 100%;
	}

	/* 요일 헤더 높이 조정 */

	/** .fc-daygrid-day: 각 날짜 별 박스 */
	.fc-daygrid-day {
		width: ${({ size }) => (size === 'big' ? '13.2rem' : '12.4rem')};
		height: ${({ currentView }) => (currentView === 'timeGridWeekCustom' ? '0' : '15.2rem')};
	}

	.fc-daygrid-day-number {
		${({ theme }) => theme.font.label03}
		color: ${({ theme }) => theme.colorToken.Text.neutralLight};
	}

	/* 오늘 배경색 없애기 */
	.fc .fc-day-today {
		background: none;
	}

	/* 스타일링 현재 시간 표시 */
	.fc .fc-timegrid-now-indicator-line {
		height: 0.2rem;

		background-color: ${({ theme }) => theme.palette.Primary};
		border: none;
	}

	/* 시간 세로줄 테두리 없애기 */
	.fc-timegrid-axis {
		border: 100px solid ${({ theme }) => theme.colorToken.Outline.neutralStrong};
	}

	.fc-timegrid-event {
		border-radius: 4px;
	}

	/* event에 있는 기본 스타일 지우기  */
	.fc-timegrid-event-harness-inset .fc-timegrid-event {
		box-shadow: none;
		border: none;
	}

	/* event inset 적용 */
	.fc-timegrid-event-harness > .fc-timegrid-event {
		inset: 0.1rem;
	}

	.fc .fc-daygrid-event-harness {
		margin: 0;
	}

	.fc .fc-daygrid-event {
		margin: 0;
	}

	.fc .fc-cell-shaded {
		display: none;
	}

	/* 현재시간 화살표 지우기 */
	.fc-timegrid-now-indicator-arrow {
		display: none;
	}

	.fc-direction-ltr .fc-daygrid-event {
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		height: 2.1rem;
		margin: 0.1rem;

		border-radius: 4px;
	}

	.fc .fc-daygrid-dot-event {
		padding: 0.4rem 0.6rem;

		border-radius: 4px;
	}

	.fc .fc-daygrid-dot-event.schedule {
		background-color: ${({ theme }) => theme.palette.Grey.Grey2};
		box-shadow: 2px 0 0 0 ${({ theme }) => theme.palette.Grey.Grey6} inset;
	}

	.fc .fc-daygrid-dot-event.tasks {
		background-color: ${({ theme }) => theme.palette.Blue.Blue2};
	}

	/* 월간 이벤트 호버 효과 */
	.fc .fc-daygrid-dot-event.schedule:hover {
		background-color: ${({ theme }) => theme.palette.Grey.Grey3};
	}

	.fc .fc-daygrid-dot-event.tasks:hover {
		background-color: ${({ theme }) => theme.palette.Blue.Blue3};
	}

	.fc .fc-h-event {
		border: none;
	}

	.fc-daygrid-event-dot {
		display: none;
	}

	.fc .fc-timegrid-axis-frame {
		justify-content: center;
		width: 4rem;
	}

	/* 시간 왼쪽에 붙이기 */
	.fc-direction-ltr .fc-timegrid-slot-label-frame {
		text-align: left;
	}

	/* 이벤트 꽉차게 */
	.fc-direction-ltr .fc-timegrid-col-events {
		margin: 0;
	}

	/* 버튼 focus 그림자 없애기 */
	.fc .fc-button-primary:not(:disabled).fc-button-active:focus,
	.fc .fc-button-primary:not(:disabled):active:focus {
		box-shadow: none;
	}

	/* 바깥 테두리 없애기 */
	.fc .fc-scrollgrid-liquid {
		height: 100%;
		overflow: auto;

		border: none;

		scrollbar-width: thin;
		scrollbar-color: ${({ theme }) => theme.palette.Grey.Grey6} transparent;
	}

	/* 스크롤 커스텀 */

	.fc-scrollgrid-liquid::-webkit-scrollbar {
		width: 0.6rem;
	}

	.fc-scrollgrid-liquid::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.palette.Grey.Grey6};
		visibility: hidden;
		border-radius: 3px;
	}

	.fc-scrollgrid-liquid:hover::-webkit-scrollbar-thumb {
		visibility: visible;
	}

	/* stylelint-disable selector-class-pattern */

	/* 일간에는 주말표시 안하기 */
	.fc .fc-timeGridDay-view .fc-day-sun,
	.fc .fc-timeGridDay-view .fc-day-sat {
		background: none;
	}

	/* 일요일 border 조정 */
	.fc-dayGridMonth-view .fc-day-sun .fc-daygrid-day-frame {
		border-bottom: 1px solid ${({ theme }) => theme.colorToken.Outline.neutralStrong};
	}

	.fc-dayGridMonth-view .fc-daygrid-body tr:last-child .fc-day-sun .fc-daygrid-day-frame {
		border-bottom: none;
	}

	.fc .fc-timeGridDay-view .fc-col-header-cell-cushion {
		float: left;
	}

	/* stylelint-enable selector-class-pattern */
`;

export default FullCalendarLayout;
