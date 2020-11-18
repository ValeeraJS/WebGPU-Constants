var AddressMode;
(function (AddressMode) {
    AddressMode["CLAMP_TO_EDGE"] = "clamp-to-edge";
    AddressMode["REPEAT"] = "repeat";
    AddressMode["MIRROR_REPEAT"] = "mirror-repeat";
})(AddressMode || (AddressMode = {}));
var AddressMode$1 = AddressMode;

var FilterMode;
(function (FilterMode) {
    FilterMode["UNIFORM_BUFFER"] = "uniform-buffer";
    FilterMode["STORAGE_BUFFER"] = "storage-buffer";
    FilterMode["READONLY_STORAGE_BUFFER"] = "readonly-storage-buffer";
    FilterMode["SAMPLER"] = "sampler";
    FilterMode["COMPARISON_SAMPLER"] = "comparison-sampler";
    FilterMode["SAMPLED_TEXTURE"] = "sampled-texture";
    FilterMode["MULTISAMPLED_TEXTURE"] = "multisampled-texture";
    FilterMode["READONLY_STORAGE_TEXTURE"] = "readonly-storage-texture";
    FilterMode["WRITEONLY_STORAGE_TEXTURE"] = "writeonly-storage-texture";
})(FilterMode || (FilterMode = {}));
var FilterMode$1 = FilterMode;

var BlendFactor;
(function (BlendFactor) {
    BlendFactor["ZERO"] = "zero";
    BlendFactor["ONE"] = "one";
    BlendFactor["SRC_COLOR"] = "src-color";
    BlendFactor["ONE_MINUS_SRC_COLOR"] = "one-minus-src-color";
    BlendFactor["SRC_ALPHA"] = "src-alpha";
    BlendFactor["ONE_MINUS_SRC_ALPHA"] = "one-minus-src-alpha";
    BlendFactor["DST_COLOR"] = "dst-color";
    BlendFactor["ONE_MISUS_DST_COLOR"] = "one-minus-dst-color";
    BlendFactor["DST_ALPHA"] = "dst-alpha";
    BlendFactor["ONE_MINUS_DST_ALPHA"] = "one-minus-dst-alpha";
    BlendFactor["SRC_ALPHA_SATURATED"] = "src-alpha-saturated";
    BlendFactor["BLEND_COLOR"] = "blend-color";
    BlendFactor["ONE_MINUS_BLEND_COLOR"] = "one-minus-blend-color";
})(BlendFactor || (BlendFactor = {}));
var BlendFactor$1 = BlendFactor;

var BlendOperation;
(function (BlendOperation) {
    BlendOperation["ADD"] = "add";
    BlendOperation["SUBTRACT"] = "subtract";
    BlendOperation["REVERSE_SUBTRACT"] = "reverse-subtract";
    BlendOperation["MIN"] = "min";
    BlendOperation["MAX"] = "max";
})(BlendOperation || (BlendOperation = {}));
var BlendOperation$1 = BlendOperation;

var CompareFunction;
(function (CompareFunction) {
    CompareFunction["NEVER"] = "never";
    CompareFunction["LESS"] = "less";
    CompareFunction["EQUAL"] = "equal";
    CompareFunction["LESS_EQUAL"] = "less-equal";
    CompareFunction["GREATER"] = "greatgreater";
    CompareFunction["NOT_EQUAL"] = "not-equal";
    CompareFunction["GREATER_EQUAL"] = "greater-equal";
    CompareFunction["ALWAYS"] = "always";
})(CompareFunction || (CompareFunction = {}));
var CompareFunction$1 = CompareFunction;

var CompilationMessageType;
(function (CompilationMessageType) {
    CompilationMessageType["ERROR"] = "error";
    CompilationMessageType["INFO"] = "info";
    CompilationMessageType["WARNING"] = "warning";
})(CompilationMessageType || (CompilationMessageType = {}));
var CompilationMessageType$1 = CompilationMessageType;

var CullMode;
(function (CullMode) {
    CullMode["NONE"] = "none";
    CullMode["FRONT"] = "front";
    CullMode["BACK"] = "back";
})(CullMode || (CullMode = {}));
var CullMode$1 = CullMode;

var ErrorFilter;
(function (ErrorFilter) {
    ErrorFilter["OUT_OF_MEMORY"] = "out-of-memory";
    ErrorFilter["VALIDATION"] = "validation";
})(ErrorFilter || (ErrorFilter = {}));
var ErrorFilter$1 = ErrorFilter;

var FilterMode$2;
(function (FilterMode) {
    FilterMode["DEPTH_CLAMPING"] = "depth-clamping";
    FilterMode["DEPTH_24_UNORM_STENCIL_8"] = "depth24unorm-stencil8";
    FilterMode["DEPTH_32_FLOAT_STENCIL_8"] = "depth32float-stencil8";
    FilterMode["PIPELINE_STATISTICS_QUERY"] = "pipeline-statistics-query";
    FilterMode["TEXTURE_COMPRESSION_BC"] = "texture-compression-bc";
    FilterMode["TIMESTAMP_QUERY"] = "timestamp-query";
})(FilterMode$2 || (FilterMode$2 = {}));
var FilterMode$3 = FilterMode$2;

var FilterMode$4;
(function (FilterMode) {
    FilterMode["NEAREST"] = "nearest";
    FilterMode["LINEAR"] = "linear";
})(FilterMode$4 || (FilterMode$4 = {}));
var FilterMode$5 = FilterMode$4;

var FrontFace;
(function (FrontFace) {
    FrontFace["COUNTER_CLOCKWISE"] = "ccw";
    FrontFace["CLOCKWISE"] = "cw";
})(FrontFace || (FrontFace = {}));
var FrontFace$1 = FrontFace;

var IndexFormat;
(function (IndexFormat) {
    IndexFormat["UINT_16"] = "uint16";
    IndexFormat["UINT_32"] = "uint32";
})(IndexFormat || (IndexFormat = {}));
var IndexFormat$1 = IndexFormat;

var InputStepMode;
(function (InputStepMode) {
    InputStepMode["VERTEX"] = "vertex";
    InputStepMode["INSTANCE"] = "instance";
})(InputStepMode || (InputStepMode = {}));
var InputStepMode$1 = InputStepMode;

var LoadOp;
(function (LoadOp) {
    LoadOp["LOAD"] = "load";
})(LoadOp || (LoadOp = {}));
var LoadOp$1 = LoadOp;

var PipelineStatisticName;
(function (PipelineStatisticName) {
    PipelineStatisticName["VERTEX_SHADER_INVOCATIONS"] = "vertex-shader-invocations";
    PipelineStatisticName["CLIPPER_INVOCATIONS"] = "clipper-invocations";
    PipelineStatisticName["CLIPPER_PRIMITIVES_OUT"] = "clipper-primitives-out";
    PipelineStatisticName["FRAGMENT_SHADER_INVOCATIONS"] = "fragment-shader-invocations";
    PipelineStatisticName["COMPUTE_SHADER_INVOCATIONS"] = "compute-shader-invocations";
})(PipelineStatisticName || (PipelineStatisticName = {}));
var PipelineStatisticName$1 = PipelineStatisticName;

var PowerPreference;
(function (PowerPreference) {
    PowerPreference["LOW_POWER"] = "low-power";
    PowerPreference["HIGH_PERFORMANCE"] = "high-performance";
})(PowerPreference || (PowerPreference = {}));
var PowerPreference$1 = PowerPreference;

var PrimitiveTopology;
(function (PrimitiveTopology) {
    PrimitiveTopology["POINT_LIST"] = "point-list";
    PrimitiveTopology["LINE_LIST"] = "line-list";
    PrimitiveTopology["LINE_STRIP"] = "line-strip";
    PrimitiveTopology["TRIANGLE_LIST"] = "triangle-list";
    PrimitiveTopology["TRIANGLE_STRIP"] = "triangle-strip";
})(PrimitiveTopology || (PrimitiveTopology = {}));
var PrimitiveTopology$1 = PrimitiveTopology;

var QueryType;
(function (QueryType) {
    QueryType["OCCLUSION"] = "occlusion";
    QueryType["PIPELINE_STATISTICS"] = "pipeline-statistics";
    QueryType["TIMESTAMP"] = "timestamp";
})(QueryType || (QueryType = {}));
var QueryType$1 = QueryType;

var StencilOperation;
(function (StencilOperation) {
    StencilOperation["KEEP"] = "keep";
    StencilOperation["ZERO"] = "zero";
    StencilOperation["REPLACE"] = "replace";
    StencilOperation["INVERT"] = "invert";
    StencilOperation["INCREMENT_CLAMP"] = "increment-clamp";
    StencilOperation["DECREMENT_CLAMP"] = "decrement-clamp";
    StencilOperation["INCREMENT_WRAP"] = "increment-wrap";
    StencilOperation["DECREMENT_WRAP"] = "decrement-wrap";
})(StencilOperation || (StencilOperation = {}));
var StencilOperation$1 = StencilOperation;

var StoreOp;
(function (StoreOp) {
    StoreOp["STORE"] = "store";
    StoreOp["CLEAR"] = "clear";
})(StoreOp || (StoreOp = {}));
var StoreOp$1 = StoreOp;

var TextureComponentType;
(function (TextureComponentType) {
    TextureComponentType["FLOAT"] = "float";
    TextureComponentType["SINT"] = "sint";
    TextureComponentType["UINT"] = "uint";
    // Texture is used with comparison sampling only.
    TextureComponentType["DEPTH_COMPARISON"] = "depth-comparison";
})(TextureComponentType || (TextureComponentType = {}));
var TextureComponentType$1 = TextureComponentType;

var TextureDimension;
(function (TextureDimension) {
    TextureDimension["ONE"] = "1d";
    TextureDimension["TWO"] = "2d";
    TextureDimension["THREE"] = "3d";
})(TextureDimension || (TextureDimension = {}));
var TextureDimension$1 = TextureDimension;

// TODO
var TextureFormat;
(function (TextureFormat) {
    // 8-bit formats
    TextureFormat["R_8_UNORM"] = "r8unorm";
    TextureFormat["R_8_SNORM"] = "r8snorm";
    TextureFormat["R_8_UINT"] = "r8uint";
    TextureFormat["R_8_SINT"] = "r8sint";
    // 16-bit formats
    TextureFormat["R_16_UINT"] = "r16uint";
    TextureFormat["R_16_SINT"] = "r16sint";
    TextureFormat["R_16_FLOAT"] = "r16float";
    TextureFormat["RG_8_UNORM"] = "rg8unorm";
    TextureFormat["RG_8_SNORM"] = "rg8snorm";
    TextureFormat["RG_8_UINT"] = "rg8uint";
    TextureFormat["RG_8_SINT"] = "rg8sint";
    // 32-bit formats
    TextureFormat["R_32_UINT"] = "r32uint";
    TextureFormat["R_32_SINT"] = "r32sint";
    TextureFormat["R_32_FLOAT"] = "r32float";
    TextureFormat["RG_16_UINT"] = "rg16uint";
    TextureFormat["RG_16_SINT"] = "rg16sint";
    TextureFormat["RG_16_FLOAT"] = "rg16float";
    TextureFormat["RGBA_8_UNORM"] = "rgba8unorm";
    TextureFormat["RGBA_8_UNORM_SRGB"] = "rgba8unorm-srgb";
    TextureFormat["RGBA_8_SNORM"] = "rgba8snorm";
    TextureFormat["RGBA_8_UINT"] = "rgba8uint";
    TextureFormat["RGBA_8_SINT"] = "rgba8sint";
    TextureFormat["BGRA_8_UNORM"] = "bgra8unorm";
    TextureFormat["BGRA_8_UNORM_SRGB"] = "bgra8unorm-srgb";
    // Packed 32-bit formats
    TextureFormat["RGB_9E5_UFLOAT"] = "rgb9e5ufloat";
    TextureFormat["RGB_10A2_UNORM"] = "rgb10a2unorm";
    TextureFormat["RG_11B10_UFLOAT"] = "rg11b10ufloat";
    // 64-bit formats
    TextureFormat["RG_32_UINT"] = "rg32uint";
    TextureFormat["RG_32_SINT"] = "rg32sint";
    TextureFormat["RG_32_FLOAT"] = "rg32float";
    TextureFormat["RGBA_16_UINT"] = "rgba16uint";
    TextureFormat["RGBA_16_SINT"] = "rgba16sint";
    TextureFormat["RGBA_16_FLOAT"] = "rgba16float";
    // 128-bit formats
    TextureFormat["RGBA_32_UINT"] = "rgba32uint";
    TextureFormat["RGBA_32_SINT"] = "rgba32sint";
    TextureFormat["RGBA_32_FLOAT"] = "rgba32float";
    // Depth and stencil formats
    TextureFormat["STENCIL_8"] = "stencil8";
    TextureFormat["DEPTH_16_UNORM"] = "depth16unorm";
    TextureFormat["DEPTH_24_PLUS"] = "depth24plus";
    TextureFormat["DEPTH_24_PLUS_STENCIL_8"] = "depth24plus-stencil8";
    TextureFormat["DEPTH_32_FLOAT"] = "depth32float";
    // BC compressed formats usable if "texture-compression-bc" is both
    // supported by the device/user agent and enabled in requestDevice.
    TextureFormat["BC1_RGBA_UNORM"] = "bc1-rgba-unorm";
    TextureFormat["BC1_RGBA_UNORM_SRGB"] = "bc1-rgba-unorm-srgb";
    TextureFormat["BC2_RGBA_UNORM"] = "bc2-rgba-unorm";
    TextureFormat["BC2_RGBA_UNORM_SRGB"] = "bc2-rgba-unorm-srgb";
    TextureFormat["BC3_RGBA_UNORM"] = "bc3-rgba-unorm";
    TextureFormat["BC3_RGBA_UNORM_SRGB"] = "bc3-rgba-unorm-srgb";
    TextureFormat["BC4_R_UNORM"] = "bc4-r-unorm";
    TextureFormat["BC4_R_SNORM"] = "bc4-r-snorm";
    TextureFormat["BC5_RG_UNORM"] = "bc5-rg-unorm";
    TextureFormat["BC5_RG_SNORM"] = "bc5-rg-snorm";
    TextureFormat["BC6H_RGB_UFLOAT"] = "bc6h-rgb-ufloat";
    TextureFormat["BC6H_RGB_FLOAT"] = "bc6h-rgb-float";
    TextureFormat["BC7_RGBA_UNORM"] = "bc7-rgba-unorm";
    TextureFormat["BC7_RGBA_UNORM_SRGB"] = "bc7-rgba-unorm-srgb";
    // "depth24unorm-stencil8" feature
    TextureFormat["DEPTH_24_UNORM_STENCIL_8"] = "depth24unorm-stencil8";
    // "depth32float-stencil8" feature
    TextureFormat["DEPTH_32_FLOAT_STENCIL_8"] = "depth32float-stencil8";
})(TextureFormat || (TextureFormat = {}));
var TextureFormat$1 = TextureFormat;

var TextureViewDimension;
(function (TextureViewDimension) {
    TextureViewDimension["ONE"] = "1d";
    TextureViewDimension["TWO"] = "2d";
    TextureViewDimension["TWO_ARRAY"] = "2d-array";
    TextureViewDimension["CUBE"] = "cube";
    TextureViewDimension["CUBE_ARRAY"] = "cube-array";
    TextureViewDimension["THREE"] = "3d";
})(TextureViewDimension || (TextureViewDimension = {}));
var TextureViewDimension$1 = TextureViewDimension;

var TextureViewDimension$2;
(function (TextureViewDimension) {
    TextureViewDimension["UCHAR_2"] = "uchar2";
    TextureViewDimension["UCHAR_4"] = "uchar4";
    TextureViewDimension["CHAR_2"] = "char2";
    TextureViewDimension["CHAR_4"] = "char4";
    TextureViewDimension["UCHAR_2_NORM"] = "uchar2norm";
    TextureViewDimension["UCHAR_4_NORM"] = "uchar4norm";
    TextureViewDimension["CHAR_2_NORM"] = "char2norm";
    TextureViewDimension["CHAR_4_NORM"] = "char4norm";
    TextureViewDimension["USHORT_2"] = "ushort2";
    TextureViewDimension["USHORT_4"] = "ushort4";
    TextureViewDimension["SHORT_2"] = "short2";
    TextureViewDimension["SHORT_4"] = "short4";
    TextureViewDimension["USHORT_2_NORM"] = "ushort2norm";
    TextureViewDimension["USHORT_4_NORM"] = "ushort4norm";
    TextureViewDimension["SHORT_2_NORM"] = "short2norm";
    TextureViewDimension["SHORT_4_NORM"] = "short4norm";
    TextureViewDimension["HALF_2"] = "half2";
    TextureViewDimension["HALF_4"] = "half4";
    TextureViewDimension["FLOAT"] = "float";
    TextureViewDimension["FLOAT_2"] = "float2";
    TextureViewDimension["FLOAT_3"] = "float3";
    TextureViewDimension["FLOAT_4"] = "float4";
    TextureViewDimension["UINT"] = "uint";
    TextureViewDimension["UINT_2"] = "uint2";
    TextureViewDimension["UINT_3"] = "uint3";
    TextureViewDimension["UINT_4"] = "uint4";
    TextureViewDimension["INT"] = "int";
    TextureViewDimension["INT_2"] = "int2";
    TextureViewDimension["INT_3"] = "int3";
    TextureViewDimension["INT_4"] = "int4";
})(TextureViewDimension$2 || (TextureViewDimension$2 = {}));
var TextureViewDimension$3 = TextureViewDimension$2;

export { AddressMode$1 as AddressMode, FilterMode$1 as BindingType, BlendFactor$1 as BlendFactor, BlendOperation$1 as BlendOperation, CompareFunction$1 as CompareFunction, CompilationMessageType$1 as CompilationMessageType, CullMode$1 as CullMode, ErrorFilter$1 as ErrorFilter, FilterMode$3 as FeatureName, FilterMode$5 as FilterMode, FrontFace$1 as FrontFace, IndexFormat$1 as IndexFormat, InputStepMode$1 as InputStepMode, LoadOp$1 as LoadOp, PipelineStatisticName$1 as PipelineStatisticName, PowerPreference$1 as PowerPreference, PrimitiveTopology$1 as PrimitiveTopology, QueryType$1 as QueryType, StencilOperation$1 as StencilOperation, StoreOp$1 as StoreOp, TextureComponentType$1 as TextureComponentType, TextureDimension$1 as TextureDimension, TextureFormat$1 as TextureFormat, TextureViewDimension$1 as TextureViewDimension, TextureViewDimension$3 as VertexFormat };
