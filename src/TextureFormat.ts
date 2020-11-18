// TODO
enum TextureFormat {
    // 8-bit formats
    R_8_UNORM = "r8unorm",
    R_8_SNORM = "r8snorm",
    R_8_UINT = "r8uint",
    R_8_SINT = "r8sint",

    // 16-bit formats
    R_16_UINT = "r16uint",
    R_16_SINT = "r16sint",
    R_16_FLOAT = "r16float",
    RG_8_UNORM = "rg8unorm",
    RG_8_SNORM = "rg8snorm",
    RG_8_UINT = "rg8uint",
    RG_8_SINT = "rg8sint",

    // 32-bit formats
    R_32_UINT = "r32uint",
    R_32_SINT = "r32sint",
    R_32_FLOAT = "r32float",
    RG_16_UINT = "rg16uint",
    RG_16_SINT = "rg16sint",
    RG_16_FLOAT = "rg16float",
    RGBA_8_UNORM = "rgba8unorm",
    RGBA_8_UNORM_SRGB = "rgba8unorm-srgb",
    RGBA_8_SNORM = "rgba8snorm",
    RGBA_8_UINT = "rgba8uint",
    RGBA_8_SINT = "rgba8sint",
    BGRA_8_UNORM = "bgra8unorm",
    BGRA_8_UNORM_SRGB = "bgra8unorm-srgb",

    // Packed 32-bit formats
    RGB_9E5_UFLOAT = "rgb9e5ufloat",
    RGB_10A2_UNORM = "rgb10a2unorm",
    RG_11B10_UFLOAT = "rg11b10ufloat",

    // 64-bit formats
    RG_32_UINT = "rg32uint",
    RG_32_SINT = "rg32sint",
    RG_32_FLOAT = "rg32float",
    RGBA_16_UINT = "rgba16uint",
    RGBA_16_SINT = "rgba16sint",
    RGBA_16_FLOAT = "rgba16float",

    // 128-bit formats
    RGBA_32_UINT = "rgba32uint",
    RGBA_32_SINT = "rgba32sint",
    RGBA_32_FLOAT = "rgba32float",

    // Depth and stencil formats
    STENCIL_8 = "stencil8",
    DEPTH_16_UNORM = "depth16unorm",
    DEPTH_24_PLUS = "depth24plus",
    DEPTH_24_PLUS_STENCIL_8 = "depth24plus-stencil8",
    DEPTH_32_FLOAT = "depth32float",

    // BC compressed formats usable if "texture-compression-bc" is both
    // supported by the device/user agent and enabled in requestDevice.
    BC1_RGBA_UNORM = "bc1-rgba-unorm",
    BC1_RGBA_UNORM_SRGB = "bc1-rgba-unorm-srgb",
    BC2_RGBA_UNORM = "bc2-rgba-unorm",
    BC2_RGBA_UNORM_SRGB = "bc2-rgba-unorm-srgb",
    BC3_RGBA_UNORM = "bc3-rgba-unorm",
    BC3_RGBA_UNORM_SRGB = "bc3-rgba-unorm-srgb",
    BC4_R_UNORM = "bc4-r-unorm",
    BC4_R_SNORM = "bc4-r-snorm",
    BC5_RG_UNORM = "bc5-rg-unorm",
    BC5_RG_SNORM = "bc5-rg-snorm",
    BC6H_RGB_UFLOAT = "bc6h-rgb-ufloat",
    BC6H_RGB_FLOAT = "bc6h-rgb-float",
    BC7_RGBA_UNORM = "bc7-rgba-unorm",
    BC7_RGBA_UNORM_SRGB = "bc7-rgba-unorm-srgb",

    // "depth24unorm-stencil8" feature
    DEPTH_24_UNORM_STENCIL_8 = "depth24unorm-stencil8",

    // "depth32float-stencil8" feature
    DEPTH_32_FLOAT_STENCIL_8 = "depth32float-stencil8",
}

export default TextureFormat;
