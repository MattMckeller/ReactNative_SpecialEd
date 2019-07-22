import { DISPLAYED_TOAST } from './types';

export const displayedToast = toastId => ({ type: DISPLAYED_TOAST, payload: toastId });
