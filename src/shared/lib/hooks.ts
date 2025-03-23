import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/app/provider/store/store";
import { RootState } from "@/app/provider/store/store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()