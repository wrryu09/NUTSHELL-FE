import Check1Btn from '@/components/common/button/Check1Btn';
import DeleteBtn from '@/components/common/button/DeleteBtn';
import DeleteCancelBtn from '@/components/common/button/DeleteCancelBtn';
import EnterBtn from '@/components/common/button/EnterBtn';
import OkayCancelBtn from '@/components/common/button/OkayCancelBtn';
import ProgressBtn from '@/components/common/button/ProgressBtn';
import RefreshBtn from '@/components/common/button/RefreshBtn';
import SettingCheck2 from '@/components/common/button/settingBtn/SettingCheck2Btn';
import SettingDeleteBtn from '@/components/common/button/settingBtn/SettingDeleteBtn';
import SortBtn from '@/components/common/button/SortBtn';
import StatusDoneBtn from '@/components/common/button/statusBtn/StatusDoneBtn';
import StatusInProgressBtn from '@/components/common/button/statusBtn/StatusInProgressBtn';
import StatusStagingBtn from '@/components/common/button/statusBtn/StatusStagingBtn';
import StatusTodoBtn from '@/components/common/button/statusBtn/StatusTodoBtn';
import TextBtn from '@/components/common/button/textBtn/TextBtn';
import TimelineDeleteBtn from '@/components/common/button/TimelineDeleteBtn';
import TodayPlusBtn from '@/components/common/button/TodayPlusBtn';
import Modal from '@/components/common/modal/Modal';
import NavBar from '@/components/common/NavBar';

function Setting() {
	return (
		<div>
			<NavBar />
			<TextBtn size="big" text="전체" color="BLUE" mode="LIGHT" isHover isPressed />
			<TextBtn size="big" text="전체" color="BLUE" mode="DEFAULT" isHover isPressed />
			<SortBtn text="최신 등록순" />
			<Check1Btn type="setting" isHover isPressed />
			<DeleteBtn />
			<DeleteCancelBtn status="delete" />
			<EnterBtn isDisabled={false} />
			<OkayCancelBtn type="okay" />
			<ProgressBtn type="defaultProgress" />
			<RefreshBtn isDisabled={false} />

			<SettingDeleteBtn isHover isPressed />
			<StatusDoneBtn />
			<StatusInProgressBtn />
			<StatusStagingBtn />
			<StatusTodoBtn />
			<TimelineDeleteBtn />
			<TodayPlusBtn />
			<SettingCheck2 size="big" type="complete" />
			<SettingCheck2 size="big" type="check" />
			<SettingCheck2 size="big" type="done" />
			<SettingCheck2 size="big" type="progress" />
			<SettingCheck2 size="big" type="xBtn" />
			<Modal isOpen sizeType={{ type: 'long' }} />
			<Modal isOpen sizeType={{ type: 'short' }} />
		</div>
	);
}

export default Setting;
