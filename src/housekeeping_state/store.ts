import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { loadState, saveState } from './localStorage';
import { middleware } from './middleware';
import loginReducer, { LoginState } from './reducers/loginSlice';

const persistedState = loadState<{ login: LoginState }>();
export const store = configureStore({
    reducer: {
        login: loginReducer,
    },
    preloadedState: persistedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

store.subscribe(() => {
    const { token } = store.getState().login;
    saveState<{ login: LoginState }>({
        login: {
            errorMessage: "",
            status: "idle",
            token,
        },
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
