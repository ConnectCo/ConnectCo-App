import { useState } from "react";

import MainScreen from "@/src/components/common/main";
import { FILTER } from "@/src/constants/common";
import { SCREEN } from "@/src/constants/screen";
import { useGetEventList } from "@/src/lib/tanstack/quries/event";
import { EventListDTO } from "@/src/models/event";

export default function EventScreen() {
  const [filter, setFilter] = useState<FILTER>(FILTER.DEADLINE);

  const { data, fetchNextPage, isFetchingNextPage } = useGetEventList<EventListDTO>(filter);

  const onLoadMore = () => {
    !isFetchingNextPage && fetchNextPage();
  };

  return (
    <MainScreen
      items={data?.result || []}
      type={SCREEN.EVENT}
      onLoadMore={onLoadMore}
      filter={filter}
      onChangeFilter={setFilter}
    />
  );
}
