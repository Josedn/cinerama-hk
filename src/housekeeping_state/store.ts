import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { loadState, saveState } from './localStorage';
import loginReducer, { LoginState } from './reducers/loginSlice';

const persistedState = loadState<{ login: LoginState }>();
export const store = configureStore({
    reducer: {
        login: loginReducer,
    },
    preloadedState: persistedState
});

store.subscribe(() => {
    saveState({
        login: store.getState().login,
    });
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
