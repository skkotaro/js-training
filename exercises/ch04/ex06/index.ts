export function resize(params? :{ maxWidth?: number; maxHeight?: number }) {
    let maxWidth = 600;
    let maxHeight = 480;

    if (params && params.maxWidth) {
        maxWidth = params.maxWidth;
    }

    if (params && params.maxHeight) {
        maxHeight = params.maxHeight;
    }

    console.log({ maxWidth, maxHeight });
}

  export function resize1(params? :{ maxWidth?: number; maxHeight?: number }) {
    let maxWidth = 600;
    let maxHeight = 480;

    //paramsが存在するかつparams.maxWidthが存在する場合params.maxWidthをmaxWidthに代入
    //paramsが存在しない、またはparams.maxWidthが存在しない場合maxWidthは600のまま
    maxWidth = params && params.maxWidth || maxWidth;
    //paramsが存在するかつparams.maxHeightが存在する場合params.maxHeightをmaxHeightに代入
    //paramsが存在しない、またはparams.maxHeightが存在しない場合maxHeightは480のまま
    maxHeight = params && params.maxHeight || maxHeight;

console.log({ maxWidth, maxHeight });
  }

export function resize2(params? :{ maxWidth?: number; maxHeight?: number }) {
    let maxWidth = 600;
    let maxHeight = 480;

    //paramsが存在する場合params.maxWidthをmaxWidthに代入
    //paramsが存在しない場合maxWidthは600のまま
    maxWidth = params?.maxWidth || maxWidth;
    //paramsが存在する場合params.maxHeightをmaxHeightに代入
    //paramsが存在しない場合maxHeightは480のまま
    maxHeight = params?.maxHeight || maxHeight;

    console.log({ maxWidth, maxHeight });
  }