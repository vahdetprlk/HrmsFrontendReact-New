export const APPLY_TO_JOB_ADVERT = "APPLY_TO_JOB_ADVERT";
export const CANCEL_APPLICATION = "CANCEL_APPLICATION";
export function applyToJobAdvert(jobAdvert) {
  return {
    type: APPLY_TO_JOB_ADVERT,
    payload: jobAdvert,
  };
}

export function cancelApplication(jobAdvert) {
    return {
      type: CANCEL_APPLICATION,
      payload: jobAdvert,
    };
  }